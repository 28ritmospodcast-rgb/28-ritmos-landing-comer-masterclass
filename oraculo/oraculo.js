const skoolUrl = "https://www.skool.com/28-ritmos-entende-tu-ciclo-4920/about";

const ctas = {
  come: {
    text: "Si querés aprender a reconocer cómo cambian tu hambre, energía y necesidades durante el ciclo, Comé con tu Ciclo puede ayudarte a alimentarte con más flexibilidad y menos culpa.",
    label: "Quiero comer con mi ciclo",
    href: "/"
  },
  lee: {
    text: "Si querés dejar de depender solamente de fechas y aprender a reconocer las señales de tu cuerpo, conocé Lee tu Ciclo.",
    label: "Quiero aprender a leer mi ciclo",
    href: "/lee-tu-ciclo"
  },
  comunidad: {
    text: "No tenés que aprender a escucharte sola. Sumate a la comunidad gratuita de 28 Ritmos.",
    label: "Entrar a la comunidad",
    href: skoolUrl
  }
};

const cards = [
  {
    name: "Mujer Radiante",
    image: "oraculo/assets/humana-radiante.webp",
    alt: "Dos figuras humanas bajo un ojo radiante",
    essential: "Hay algo en vos que hoy no quiere esconderse.",
    message: "Tal vez hoy tengas presencia, seguridad o ganas de ocupar más espacio. No necesitás reducir esa energía para resultar cómoda. La invitación es usarla con intención, sin prometerte a todo el mundo solamente porque hoy podés.",
    question: "¿Dónde querés permitirte ser vista?",
    action: "Elegí una idea, conversación o gesto que quieras mostrar hoy y dale diez minutos de atención completa.",
    communicate: "Hoy tengo ganas de compartir algo importante para mí. ¿Me das tu atención?",
    cta: "lee"
  },
  {
    name: "Mujer Creadora",
    image: "oraculo/assets/humana-creadora.webp",
    alt: "Figura humana sentada con ramas y ojos naciendo de la cabeza",
    essential: "No necesitás terminarlo hoy. Necesitás darle una primera forma.",
    message: "Una idea parece estar pidiendo espacio. Antes de convertirla en una obligación, dejala jugar, equivocarse y aparecer. La creación también necesita alimento, tiempo y límites.",
    question: "¿Qué quiere nacer sin que todavía sepas exactamente qué será?",
    action: "Hacé un boceto, escribí cinco líneas o grabá una nota de voz. No edites.",
    communicate: "Tengo una idea dando vueltas. No necesito resolverla todavía; quiero contártela.",
    cta: "comunidad"
  },
  {
    name: "Mujer Magnética",
    image: "oraculo/assets/humana-magnetica.webp",
    alt: "Dos figuras humanas frente a un portal ceremonial",
    essential: "El placer también puede ser información.",
    message: "Quizá hoy estés más receptiva al contacto, la belleza, el juego o la conexión. No todo deseo tiene que convertirse en una decisión, pero tampoco tiene que ser ignorado. Podés escucharlo y elegir.",
    question: "¿Qué deseo estás minimizando porque no parece productivo?",
    action: "Elegí un gesto de placer consciente: música, movimiento, comida, contacto, ropa o belleza para vos.",
    communicate: "Hoy tengo ganas de más cercanía y juego. ¿Vos cómo te sentís?",
    cta: "comunidad"
  },
  {
    name: "Mujer Visionaria",
    image: "oraculo/assets/cristal-1.webp",
    alt: "Mano sosteniendo un cristal dentro de formas geométricas",
    essential: "Tener claridad no significa tener que hacerlo todo.",
    message: "Hoy puede haber perspectiva para ver qué importa y qué sobra. Usá esa claridad para elegir, no para llenar cada espacio disponible con una nueva obligación.",
    question: "Si solamente pudieras mover una cosa, ¿cuál cambiaría más?",
    action: "Escribí una prioridad y una cosa que decidís no hacer hoy.",
    communicate: "Hoy veo con claridad que necesito priorizar esto y dejar aquello para después.",
    cta: "comunidad"
  },
  {
    name: "Mujer Voz",
    image: "oraculo/assets/botanica-2.webp",
    alt: "Flores y triángulo invertido en una carta oracular",
    essential: "Lo que podés nombrar también puede ser acompañado.",
    message: "Algo necesita palabras: una necesidad, un límite, una idea o una verdad. No esperes que los demás adivinen. Podés hablar sin tener un discurso perfecto.",
    question: "¿Qué cambiaría si lo dijeras claramente?",
    action: "Completá: “Hoy noto… Necesito… Me ayudaría que…”.",
    communicate: "Hoy noto que ____. Necesito ____. Me ayudaría que ____.",
    cta: "lee"
  },
  {
    name: "Mujer Exploradora",
    image: "oraculo/assets/botanica-4.webp",
    alt: "Hoja grande sobre formas geométricas y estrellas",
    essential: "No toda energía necesita convertirse en productividad.",
    message: "Puede que hoy tengas ganas de moverte, aprender, salir o probar algo diferente. La exploración también es una forma de escuchar tu vitalidad.",
    question: "¿Qué te da curiosidad antes de que aparezca la obligación de ser buena?",
    action: "Cambiá una ruta, probá una combinación, leé algo nuevo o mové el cuerpo durante diez minutos.",
    communicate: "Hoy tengo ganas de salir de la rutina. ¿Querés acompañarme?",
    cta: "comunidad"
  },
  {
    name: "Mujer Raíz",
    image: "oraculo/assets/humana-enraizada.webp",
    alt: "Figura humana recogida con ramas y ojos naciendo de la cabeza",
    essential: "Alimentarte antes de agotarte también es cuidado.",
    message: "Tal vez venís intentando sostenerte solamente con voluntad. Tu cuerpo puede estar pidiendo algo concreto: comida, agua, estabilidad o una tarea menos.",
    question: "¿Qué necesidad básica estás intentando reemplazar con esfuerzo?",
    action: "Tomá agua y elegí una comida o snack que incluya una fuente de proteína y energía.",
    communicate: "Necesito comer antes de seguir. Después voy a poder estar más presente.",
    cta: "come"
  },
  {
    name: "Mujer Guardiana del Espacio",
    image: "oraculo/assets/cristal-2.webp",
    alt: "Mano levantando un grupo de cristales",
    essential: "Proteger tu espacio no es rechazar a los demás.",
    message: "Hoy quizá necesites menos demandas, menos conversación o más intimidad con vos misma. Un límite puede ser una forma de conservar energía para lo que sí importa.",
    question: "¿Qué estás aceptando para evitar incomodar a alguien?",
    action: "Decí un no pequeño, silenciá una notificación o mové un compromiso no esencial.",
    communicate: "Hoy necesito un poco de espacio. No es personal; quiero volver cuando pueda estar realmente presente.",
    cta: "lee"
  },
  {
    name: "Mujer que Baja el Ruido",
    image: "oraculo/assets/botanica-3.webp",
    alt: "Ramas rodeando un círculo oscuro en una carta oracular",
    essential: "No todo necesita una respuesta ahora.",
    message: "Puede que no falte disciplina ni una solución. Tal vez hay demasiado ruido para escuchar lo que sentís. Antes de interpretar, bajemos el volumen.",
    question: "¿Qué podrías escuchar si durante cinco minutos nada te pidiera atención?",
    action: "Alejá la pantalla, cerrá los ojos y sentí tres puntos de contacto del cuerpo.",
    communicate: "Ahora mismo estoy saturada. Necesito silencio antes de poder responder.",
    cta: "comunidad"
  },
  {
    name: "Mujer que Vuelve al Cuerpo",
    image: "oraculo/assets/cristal-4.webp",
    alt: "Mano tocando un cristal ovalado dentro de un círculo",
    essential: "Tu cuerpo no es una interrupción de tu vida. Es el lugar donde sucede.",
    message: "Quizá pasaste demasiado tiempo en la cabeza, resolviendo, anticipando o produciendo. Volver al cuerpo puede empezar con algo muy simple y concreto.",
    question: "¿Qué sensación está presente antes de ponerle una historia?",
    action: "Caminá, estirá, comé algo con atención o apoyá los pies firmemente en el piso.",
    communicate: "Necesito unos minutos para volver a mí antes de continuar.",
    cta: "come"
  },
  {
    name: "Mujer Receptiva",
    image: "oraculo/assets/cristal-3.webp",
    alt: "Mano sosteniendo un cristal facetado con estrellas",
    essential: "No todo lo tenés que sostener sola.",
    message: "Reconocer una necesidad no alcanza si siempre te obligás a resolverla sin apoyo. Hoy la práctica puede ser recibir sin justificar cuánto hiciste para merecerlo.",
    question: "¿Qué ayuda aceptarías si no tuvieras que demostrar que realmente la necesitás?",
    action: "Pedí una ayuda específica y pequeña.",
    communicate: "Hoy necesito apoyo con ____. ¿Podés hacerte cargo de eso?",
    cta: "comunidad"
  },
  {
    name: "Mujer que Descansa",
    image: "oraculo/assets/botanica-1.webp",
    alt: "Flor dentro de un círculo en una carta oracular",
    essential: "No necesitás llegar al colapso para merecer descanso.",
    message: "Puede que tu cuerpo esté pidiendo menos exigencia. Descansar no borra tu constancia ni significa que estás retrocediendo. También forma parte de sostener lo que querés construir.",
    question: "¿Qué estás esperando terminar para darte permiso?",
    action: "Elegí una tarea que pueda esperar y regalate diez minutos sin intentar aprovecharlos.",
    communicate: "Hoy tengo menos capacidad. Necesito bajar el ritmo y retomar esto después.",
    cta: "come"
  }
];

const spreadPositions = [
  ["3%", "8%", "-12deg"],
  ["35%", "2%", "8deg"],
  ["65%", "8%", "-6deg"],
  ["16%", "28%", "10deg"],
  ["47%", "25%", "-13deg"],
  ["68%", "34%", "12deg"],
  ["2%", "50%", "7deg"],
  ["30%", "50%", "-4deg"],
  ["58%", "56%", "9deg"],
  ["12%", "72%", "-9deg"],
  ["40%", "75%", "11deg"],
  ["66%", "71%", "-11deg"]
];

const screens = [...document.querySelectorAll(".oracle-screen")];
const spread = document.querySelector("#cardSpread");
let selectedCard = null;

function track(eventName, data = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...data });
}

function showScreen(name) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSpread() {
  const order = [7, 1, 10, 4, 0, 8, 3, 11, 5, 2, 9, 6];
  spread.innerHTML = "";
  order.forEach((cardIndex, visualIndex) => {
    const card = cards[cardIndex];
    const button = document.createElement("button");
    const [x, y, r] = spreadPositions[visualIndex];
    button.className = "spread-card";
    button.type = "button";
    button.style.setProperty("--x", x);
    button.style.setProperty("--y", y);
    button.style.setProperty("--r", r);
    button.setAttribute("aria-label", `Elegir carta ${visualIndex + 1}`);
    button.innerHTML = '<img src="oraculo/assets/card-back-jaguares.webp" alt="" loading="eager">';
    button.addEventListener("click", () => revealCard(card));
    spread.appendChild(button);
  });
}

function revealCard(card) {
  selectedCard = card;
  const cta = ctas[card.cta];
  document.querySelector("#resultImage").src = card.image;
  document.querySelector("#resultImage").alt = card.alt;
  document.querySelector("#resultTitle").textContent = card.name;
  document.querySelector("#resultEssential").textContent = card.essential;
  document.querySelector("#resultMessage").textContent = card.message;
  document.querySelector("#resultQuestion").textContent = card.question;
  document.querySelector("#resultAction").textContent = card.action;
  document.querySelector("#resultCommunicate").textContent = `“${card.communicate}”`;
  document.querySelector("#contextCta").innerHTML = `
    <p>${cta.text}</p>
    <a href="${cta.href}" data-oracle-cta="${card.cta}">${cta.label}</a>
  `;
  document.querySelector("[data-oracle-cta]").addEventListener("click", () => {
    track("oracle_cta_clicked", { oracle_card: card.name, oracle_cta: card.cta });
  });
  track("oracle_card_revealed", { oracle_card: card.name, oracle_cta: card.cta });
  showScreen("result");
}

function restart() {
  selectedCard = null;
  renderSpread();
  track("oracle_restarted");
  showScreen("threshold");
}

async function shareOrDownload() {
  if (!selectedCard) return;
  const shareFile = await createStoryImage(selectedCard);
  const shareText = `Hoy el Oráculo de mi Ritmo me mostró ${selectedCard.name}. @28ritmos`;

  if (navigator.share && navigator.canShare?.({ files: [shareFile] })) {
    try {
      await navigator.share({
        title: "El Oráculo de tu Ritmo",
        text: shareText,
        files: [shareFile]
      });
      track("oracle_card_shared", { oracle_card: selectedCard.name });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  downloadFile(shareFile, `${slugify(selectedCard.name)}-historia-28-ritmos.png`);
  track("oracle_card_downloaded", { oracle_card: selectedCard.name });
}

async function createStoryImage(card) {
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.src = card.image;
  try {
    await image.decode();
  } catch (error) {
    alert("El oráculo necesita un momento más. Tus respuestas siguen acá.");
    throw error;
  }

  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#310910";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#4A0F16";
  ctx.fillRect(56, 56, canvas.width - 112, canvas.height - 112);
  ctx.strokeStyle = "rgba(213, 173, 93, 0.52)";
  ctx.lineWidth = 3;
  roundRect(ctx, 86, 86, canvas.width - 172, canvas.height - 172, 46);
  ctx.stroke();

  ctx.fillStyle = "#D5AD5D";
  ctx.textAlign = "center";
  ctx.font = "600 34px Poppins, Arial";
  ctx.fillText("El Oráculo de tu Ritmo", 540, 186);

  drawContainedImage(ctx, image, 230, 266, 620, 868);

  ctx.fillStyle = "#F8E8DC";
  ctx.font = "700 86px Georgia";
  wrapCanvasText(ctx, card.name, 540, 1275, 860, 88);
  ctx.font = "400 42px Georgia";
  wrapCanvasText(ctx, card.essential, 540, 1436, 830, 58);

  ctx.fillStyle = "#D5AD5D";
  ctx.font = "700 40px Poppins, Arial";
  ctx.fillText("@28ritmos", 540, 1730);
  ctx.fillStyle = "rgba(248, 232, 220, 0.72)";
  ctx.font = "400 26px Poppins, Arial";
  ctx.fillText("Compartí tu carta y etiquetanos", 540, 1782);

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png", 0.95));
  if (!blob) {
    throw new Error("No se pudo crear la imagen para compartir.");
  }
  return new File([blob], `${slugify(card.name)}-historia-28-ritmos.png`, { type: "image/png" });
}

function drawContainedImage(ctx, image, x, y, width, height) {
  const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight);
  const drawWidth = image.naturalWidth * scale;
  const drawHeight = image.naturalHeight * scale;
  const drawX = x + (width - drawWidth) / 2;
  const drawY = y + (height - drawHeight) / 2;
  ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
}

function downloadFile(file, filename) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = URL.createObjectURL(file);
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  words.forEach((word, index) => {
    const testLine = `${line}${word} `;
    if (ctx.measureText(testLine).width > maxWidth && index > 0) {
      ctx.fillText(line.trim(), x, y);
      line = `${word} `;
      y += lineHeight;
    } else {
      line = testLine;
    }
  });
  ctx.fillText(line.trim(), x, y);
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
}

function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => {
    const next = button.dataset.next;
    if (next === "prepare") track("oracle_started");
    showScreen(next);
  });
});

document.querySelector("#shareCard").addEventListener("click", shareOrDownload);
document.querySelector("#restartOracle").addEventListener("click", restart);

renderSpread();
