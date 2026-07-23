const archetypes = {
  ritualista: {
    index: "01 / 07",
    title: "La Ritualista Lunar",
    affirmation: "“Hoy honro cada fase como un acto sagrado.”",
    description: "Sos intuitiva y encontrás sentido en los gestos que convierten lo cotidiano en ritual. Tu ciclo puede ser un espacio de conexión interna, pausa y escucha de eso que no siempre se explica con palabras.",
    giftTitle: "Tu Altar Cíclico",
    giftDescription: "Una guía para crear un espacio propio de registro, presencia y conexión con cada fase.",
    giftUrl: "/quiz/Recursos gratuitos para cada arquetipo/1. Tu Altar Cíclico.pdf"
  },
  ejecutiva: {
    index: "02 / 07",
    title: "La Ejecutiva Imparable",
    affirmation: "“Puedo vivir mi ciclo sin perder mi ritmo.”",
    description: "Sos enfocada, resolutiva y tenés una gran capacidad para llevar ideas a la acción. Tu aprendizaje no está en apagar esa potencia, sino en usarla con inteligencia: avanzar cuando hay energía y aflojar sin sentir que valés menos.",
    giftTitle: "Cómo sostener tu visión",
    giftDescription: "Una guía para cuidar tu energía y sostener lo importante sin colapsar en el intento.",
    giftUrl: "/quiz/Recursos gratuitos para cada arquetipo/2. Cómo sostener tu vision sin colapsar en el intento .pdf"
  },
  desconectada: {
    index: "03 / 07",
    title: "La Desconectada Amorosa",
    affirmation: "“Estoy a tiempo de reconectar conmigo.”",
    description: "Querés entenderte, aunque a veces no sepas por dónde empezar. Tal vez tu ciclo aparece como sorpresa o como un idioma ajeno. No llegaste tarde: la conexión se construye con preguntas pequeñas y una observación a la vez.",
    giftTitle: "Tu Primer Diccionario Menstrual",
    giftDescription: "Un punto de partida simple para empezar a nombrar las señales que ya están en tu cuerpo.",
    giftUrl: "/quiz/Recursos gratuitos para cada arquetipo/3. Tu Primer Diccionario Menstrual.pdf"
  },
  sensible: {
    index: "04 / 07",
    title: "La Sensible Cambiante",
    affirmation: "“Mis emociones son maestras, no errores.”",
    description: "Sentís con intensidad y profundidad. Tus emociones no son un ruido que hay que silenciar: pueden ser información sobre tus ritmos, tus límites y lo que necesitás. El camino es escucharlas sin convertirlas en una culpa más.",
    giftTitle: "No estoy rota, estoy sintiendo",
    giftDescription: "Una compañía amorosa para atravesar la intensidad emocional con más contexto y menos juicio.",
    giftUrl: "/quiz/Recursos gratuitos para cada arquetipo/4. No estoy rota, estoy sintiendo.pdf"
  },
  sabia: {
    index: "05 / 07",
    title: "La Sabia Silenciosa",
    affirmation: "“Mi cuerpo me habla. Estoy aprendiendo a escuchar.”",
    description: "Sos introspectiva y sabés que debajo de cada señal puede haber algo para observar. Buscás comprender tu biología sin separarla de tu experiencia. Tu silencio no es ausencia: es un lugar fértil para reconocer patrones.",
    giftTitle: "Ritual de luna menguante",
    giftDescription: "Una práctica de pausa, escucha y cierre para volver a lo esencial.",
    giftUrl: "/quiz/Recursos gratuitos para cada arquetipo/5. Ritual de luna menguante.pdf"
  },
  rebelde: {
    index: "06 / 07",
    title: "La Rebelde de la Sangre",
    affirmation: "“Mi cuerpo no es tabú. Es revolución.”",
    description: "Sos auténtica, directa y no querés seguir escondiendo lo que durante tanto tiempo se trató como incómodo. Tu voz abre conversaciones. El desafío es hacer espacio para esa fuerza sin perder la escucha íntima de tu propio cuerpo.",
    giftTitle: "Mi Cuerpo es Revolución",
    giftDescription: "Un manifiesto para nombrar, visibilizar y habitar el ciclo sin vergüenza.",
    giftUrl: "/quiz/Recursos gratuitos para cada arquetipo/6. Mi Cuerpo es Revolución.pdf"
  },
  alquimista: {
    index: "07 / 07",
    title: "La Alquimista Hormonal",
    affirmation: "“Mi ciclo es un mapa que puedo aprender a leer.”",
    description: "Sos curiosa y te entusiasma unir datos, biología y experiencia. Querés entender patrones para tomar decisiones con más contexto. Tu brújula está en usar la información para acompañarte, no para exigirle perfección a tu cuerpo.",
    giftTitle: "Empezá a trackear tu ciclo",
    giftDescription: "Una guía práctica para transformar datos sueltos en observaciones que tengan sentido para vos.",
    giftUrl: "/quiz/Recursos gratuitos para cada arquetipo/7. Empezá a trackear tu ciclo.pdf"
  }
};

const questions = [
  {
    title: "¿Qué frase te representa más cuando pensás en tu ciclo menstrual?",
    answers: [
      ["Es mi momento de descanso y conexión interna.", "ritualista"],
      ["Es un obstáculo en mi rutina, pero lo ignoro y sigo.", "ejecutiva"],
      ["La verdad… ni sé cuándo me baja.", "desconectada"],
      ["Sé que tiene un mensaje, pero todavía no lo entiendo.", "sabia"],
      ["Estoy harta de esconderlo. Quiero hablarlo.", "rebelde"],
      ["Lo uso para planificar mi alimentación y productividad.", "alquimista"],
      ["Lloro, río, me enojo… soy un mar de emociones.", "sensible"]
    ]
  },
  {
    title: "¿Qué hacés cuando te sentís emocionalmente abrumada durante el mes?",
    answers: [
      ["Me hago un baño con sal, enciendo velas y escribo en mi diario.", "ritualista"],
      ["Me enfoco en mis tareas y no me detengo a pensar.", "ejecutiva"],
      ["Me distraigo o me frustro porque no entiendo por qué me siento así.", "desconectada"],
      ["Lloro, como chocolate y busco contención emocional.", "sensible"],
      ["Me encierro y trato de escucharlo en silencio.", "sabia"],
      ["Lo comparto sin filtro en redes o con mis amigas.", "rebelde"],
      ["Me pregunto si tiene que ver con mi glucosa, mis hormonas o mi fase.", "alquimista"]
    ]
  },
  {
    title: "¿Cómo llevás el registro de tu ciclo?",
    answers: [
      ["Con mi diario lunar o una app alineada a la luna.", "ritualista"],
      ["Apenas lo registro. Solo noto si interrumpe algo.", "ejecutiva"],
      ["No lo registro, pero me gustaría empezar.", "desconectada"],
      ["Sé cuándo me baja, pero me cuesta identificar las fases.", "sensible"],
      ["A veces registro síntomas, pero no entiendo del todo qué significan.", "sabia"],
      ["Hago capturas de mis síntomas y los comparto con el mundo.", "rebelde"],
      ["Uso apps específicas, anoto síntomas y hago ajustes en mi alimentación.", "alquimista"]
    ]
  },
  {
    title: "¿Cómo es tu alimentación según tu ciclo?",
    answers: [
      ["Me gusta honrarlo con caldos, cacao o sopas en fase menstrual.", "ritualista"],
      ["Como lo que me mantiene con energía y me da resultados.", "ejecutiva"],
      ["No tengo idea de si mi hambre tiene que ver con el ciclo.", "desconectada"],
      ["Tengo muchos antojos, sobre todo antes de menstruar.", "sensible"],
      ["Sé que hay momentos en los que necesito más hierro o descanso, pero todavía no lo aplico.", "sabia"],
      ["Me parece injusto que no podamos comer igual todo el mes, pero lo estoy explorando.", "rebelde"],
      ["Planifico mis comidas según mi fase y busco balance hormonal.", "alquimista"]
    ]
  },
  {
    title: "¿Qué sentís cuando te llega la menstruación?",
    answers: [
      ["Es un momento de retiro y conexión espiritual.", "ritualista"],
      ["Justo ahora no: tengo mil cosas.", "ejecutiva"],
      ["¿Ya me vino? No lo esperaba.", "desconectada"],
      ["Me bajoneo, me duele y quiero estar sola.", "sensible"],
      ["Es como si mi cuerpo me pidiera que lo escuche en profundidad.", "sabia"],
      ["Me dan ganas de gritarle al mundo: estoy sangrando y está bien.", "rebelde"],
      ["Es mi señal para revisar mi alimentación y mi calendario.", "alquimista"]
    ]
  },
  {
    title: "¿Qué te gustaría lograr en tu relación con el ciclo?",
    answers: [
      ["Profundizar mis rituales y vivir cada fase con sentido.", "ritualista"],
      ["Que no interfiera con mi rutina. Quiero mantener mi ritmo.", "ejecutiva"],
      ["Entenderlo sin sentirme ignorante o perdida.", "desconectada"],
      ["Aprender a no juzgarme por sentir tanto.", "sensible"],
      ["Aprender a escucharlo y leer sus mensajes.", "sabia"],
      ["Hablarlo con libertad, sin tabú ni culpa.", "rebelde"],
      ["Usar lo que observo para cuidar mejor mi bienestar.", "alquimista"]
    ]
  }
];

const screens = {
  intro: document.querySelector("#intro"),
  quiz: document.querySelector("#quiz"),
  result: document.querySelector("#result")
};

const state = {
  current: 0,
  answers: Array(questions.length).fill(null),
  resultKey: null
};

const answerLetters = ["A", "B", "C", "D", "E", "F", "G"];
const questionTitle = document.querySelector("#question-title");
const questionCount = document.querySelector("#question-count");
const questionNumber = document.querySelector("#question-number");
const progressBar = document.querySelector("#progress-bar");
const answersContainer = document.querySelector("#answers");
const backButton = document.querySelector("#back-button");

function showScreen(name) {
  Object.entries(screens).forEach(([key, screen]) => {
    screen.classList.toggle("is-active", key === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = questions[state.current];
  questionTitle.textContent = question.title;
  questionCount.textContent = `Pregunta ${state.current + 1} de ${questions.length}`;
  questionNumber.textContent = String(state.current + 1).padStart(2, "0");
  progressBar.style.width = `${((state.current + 1) / questions.length) * 100}%`;
  backButton.hidden = state.current === 0;
  answersContainer.replaceChildren();

  question.answers.forEach(([text, archetype], index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.classList.toggle("is-selected", state.answers[state.current] === archetype);
    button.innerHTML = `
      <span class="answer-letter">${answerLetters[index]}</span>
      <span class="answer-text">${text}</span>
      <span class="answer-arrow" aria-hidden="true">→</span>
    `;
    button.addEventListener("click", () => selectAnswer(archetype, button));
    answersContainer.append(button);
  });
}

function selectAnswer(archetype, selectedButton) {
  state.answers[state.current] = archetype;
  answersContainer.querySelectorAll(".answer").forEach((answer) => {
    answer.classList.remove("is-selected");
  });
  selectedButton.classList.add("is-selected");

  window.setTimeout(() => {
    if (state.current < questions.length - 1) {
      state.current += 1;
      renderQuestion();
      questionTitle.focus?.();
    } else {
      renderResult();
    }
  }, 180);
}

function getResult() {
  const scores = Object.keys(archetypes).reduce((all, key) => ({ ...all, [key]: 0 }), {});
  state.answers.forEach((answer) => {
    if (answer) scores[answer] += 1;
  });

  return Object.keys(archetypes).reduce((winner, key) => {
    if (scores[key] > scores[winner]) return key;
    if (scores[key] === scores[winner]) {
      const latestWinner = state.answers.lastIndexOf(winner);
      const latestKey = state.answers.lastIndexOf(key);
      return latestKey > latestWinner ? key : winner;
    }
    return winner;
  });
}

function renderResult() {
  state.resultKey = getResult();
  const result = archetypes[state.resultKey];
  document.querySelector("#result-title").textContent = result.title;
  document.querySelector("#result-affirmation").textContent = result.affirmation;
  document.querySelector("#result-description").textContent = result.description;
  document.querySelector("#gift-title").textContent = result.giftTitle;
  document.querySelector("#gift-description").textContent = result.giftDescription;
  document.querySelector("#gift-link").href = result.giftUrl;
  resetSignupForm();
  showScreen("result");
}

function restart() {
  state.current = 0;
  state.answers.fill(null);
  state.resultKey = null;
  showScreen("intro");
}

function resetSignupForm() {
  const form = document.querySelector("#signup-form");
  form.reset();
  form.hidden = false;
  form.classList.remove("is-loading");
  document.querySelector("#signup-button").disabled = false;
  document.querySelector("#form-status").textContent = "";
  document.querySelector("#subscriber-email").removeAttribute("aria-invalid");
  document.querySelector("#download-ready").hidden = true;
}

async function handleSignup(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const emailField = document.querySelector("#subscriber-email");
  const consentField = document.querySelector("#subscriber-consent");
  const status = document.querySelector("#form-status");
  const button = document.querySelector("#signup-button");

  if (document.querySelector("#subscriber-company").value) return;
  if (!emailField.validity.valid) {
    emailField.setAttribute("aria-invalid", "true");
    status.textContent = "Escribí un correo válido para continuar.";
    emailField.focus();
    return;
  }
  if (!consentField.checked) {
    status.textContent = "Necesitamos tu consentimiento para guardar el correo y enviarte el recurso.";
    consentField.focus();
    return;
  }

  emailField.removeAttribute("aria-invalid");
  form.classList.add("is-loading");
  button.disabled = true;
  status.textContent = "Guardando tu correo…";

  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailField.value.trim().toLowerCase(),
        archetype: archetypes[state.resultKey].title,
        consent: true,
        website: document.querySelector("#subscriber-company").value
      })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.message || "No pudimos guardar tu correo. Probá nuevamente.");
    }
    form.hidden = true;
    document.querySelector("#download-ready").hidden = false;
    document.querySelector("#download-ready").focus?.();
  } catch (error) {
    form.classList.remove("is-loading");
    button.disabled = false;
    status.textContent = error instanceof TypeError
      ? "No pudimos conectar con Mailchimp. Revisá tu conexión y probá otra vez."
      : error.message;
  }
}

document.querySelector("#start-button").addEventListener("click", () => {
  renderQuestion();
  showScreen("quiz");
});

backButton.addEventListener("click", () => {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
});

document.querySelector("#restart-top").addEventListener("click", restart);
document.querySelector("#restart-button").addEventListener("click", restart);
document.querySelector("#signup-form").addEventListener("submit", handleSignup);
