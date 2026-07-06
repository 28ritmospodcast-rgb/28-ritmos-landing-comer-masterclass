#!/usr/bin/env bash
set -euo pipefail

echo "== Deploy setup for 28 Ritmos landing =="
echo
ROOT_DIR="$(pwd)"
echo "Working directory: $ROOT_DIR"

read -rp "Confirm you want to run in this folder (y/n) [y]: " CONFIRM
CONFIRM=${CONFIRM:-y}
if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
  echo "Aborted by user."; exit 1
fi

# Ask for local git identity (local to this repo)
DEFAULT_NAME="$(git config --get user.name || echo "28 Ritmos — Flavia")"
DEFAULT_EMAIL="$(git config --get user.email || echo "tu@28ritmos.com")"
read -rp "Git user.name [$DEFAULT_NAME]: " GIT_NAME
GIT_NAME=${GIT_NAME:-$DEFAULT_NAME}
read -rp "Git user.email [$DEFAULT_EMAIL]: " GIT_EMAIL
GIT_EMAIL=${GIT_EMAIL:-$DEFAULT_EMAIL}

git init 2>/dev/null || true
git checkout -B main 2>/dev/null || true
git config user.name "$GIT_NAME"
git config user.email "$GIT_EMAIL"

echo "\n== SSH key setup =="
KEY_PATH="$HOME/.ssh/28ritmos_ed25519"
if [[ -f "$KEY_PATH.pub" ]]; then
  echo "Found existing key: $KEY_PATH.pub"
  echo "Public key (first 120 chars):"
  head -c 120 "$KEY_PATH.pub" || true
  echo "..."
  read -rp "Use this existing key and copy it to GitHub now? (y/n) [y]: " USE_EXIST
  USE_EXIST=${USE_EXIST:-y}
  if [[ "$USE_EXIST" != "y" && "$USE_EXIST" != "Y" ]]; then
    echo "Generating a new SSH key..."
    ssh-keygen -t ed25519 -f "$KEY_PATH" -C "$GIT_EMAIL" -N "" || true
  fi
else
  echo "No existing key found. Generating: $KEY_PATH"
  ssh-keygen -t ed25519 -f "$KEY_PATH" -C "$GIT_EMAIL" -N "" || true
fi

echo "\nYour public key is:\n"
cat "$KEY_PATH.pub" || true

if command -v pbcopy >/dev/null 2>&1; then
  echo "(Also copied to clipboard)"
  pbcopy < "$KEY_PATH.pub" || true
fi

echo
echo "PLEASE: Add this public key to GitHub → Settings → SSH and GPG keys → New SSH key."
read -rp "Press Enter after you've added the key to GitHub..." DUMMY

echo "\n== .gitignore & README =="
if [[ ! -f .gitignore ]]; then
  cat > .gitignore <<'EOF'
.DS_Store
node_modules/
dist/
.vscode/
.env
.codex/
EOF
  echo "Created .gitignore"
else
  echo ".gitignore already exists"
fi

if [[ ! -f README.md ]]; then
  cat > README.md <<EOF
# 28 Ritmos — Landing

Landing page and assets for the masterclass "Comer con tu ciclo".
EOF
  echo "Created README.md"
else
  echo "README.md already exists"
fi

echo "\n== Git commit =="
git add .
if git rev-parse --verify HEAD >/dev/null 2>&1; then
  git commit -m "chore: update landing files" || echo "No changes to commit"
else
  git commit -m "Initial: landing y estilos según guía visual" || true
fi

read -rp "GitHub username (for remote) [TU_USUARIO]: " GH_USER
GH_USER=${GH_USER:-TU_USUARIO}
read -rp "Repo name on GitHub [28-ritmos-landing]: " GH_REPO
GH_REPO=${GH_REPO:-28-ritmos-landing}

REMOTE_URL="git@github.com:${GH_USER}/${GH_REPO}.git"
echo "Adding remote: $REMOTE_URL"
git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE_URL"

echo "Attempting to push to origin main..."
if git push -u origin main; then
  echo "Pushed to GitHub successfully."
else
  echo "Push failed. Common causes: repo doesn't exist on GitHub yet, SSH key not added, or permission issues."
  echo "If the repo doesn't exist, you can create it on GitHub web, or use the GitHub CLI (gh)."
  if command -v gh >/dev/null 2>&1; then
    read -rp "Create remote repo via 'gh repo create' now? (y/n) [y]: " CREATE_REPO
    CREATE_REPO=${CREATE_REPO:-y}
    if [[ "$CREATE_REPO" = "y" || "$CREATE_REPO" = "Y" ]]; then
      gh repo create "$GH_USER/$GH_REPO" --public --source=. --remote=origin --push || true
    fi
  fi
fi

echo "\n== Vercel (optional) =="
read -rp "Do you want to deploy to Vercel now? (y/n) [n]: " DO_VERCEL
DO_VERCEL=${DO_VERCEL:-n}
if [[ "$DO_VERCEL" = "y" || "$DO_VERCEL" = "Y" ]]; then
  if ! command -v vercel >/dev/null 2>&1; then
    echo "Vercel CLI not found. Installing globally (requires npm)..."
    if command -v npm >/dev/null 2>&1; then
      npm i -g vercel
    else
      echo "npm not found. Please install Node/npm and rerun."
      exit 1
    fi
  fi
  echo "You will be asked to log in to Vercel in the browser. Make sure you use the 28 Ritmos account."
  vercel login || true
  vercel --prod || true
fi

echo "\n== Done =="
echo "If push failed earlier, create the repo on GitHub and re-run the push command:" 
echo "  git remote add origin $REMOTE_URL  # (replace if needed)"
echo "  git push -u origin main"

echo "Summary:
 - Public key shown above and copied to clipboard (if supported).
 - .gitignore and README created if missing.
 - Local git configured and commit created.
 - Remote set to: $REMOTE_URL (ensure repo exists and key is added).
 - Optional: Vercel deploy executed if requested."

exit 0
