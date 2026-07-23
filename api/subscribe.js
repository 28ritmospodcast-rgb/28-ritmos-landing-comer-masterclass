const crypto = require("crypto");

const AUDIENCE_ID = "edabba6402";
const ALLOWED_ARCHETYPES = new Set([
  "La Ritualista Lunar",
  "La Ejecutiva Imparable",
  "La Desconectada Amorosa",
  "La Sensible Cambiante",
  "La Sabia Silenciosa",
  "La Rebelde de la Sangre",
  "La Alquimista Hormonal"
]);

function respond(response, status, body) {
  response.status(status).json(body);
}

module.exports = async function subscribe(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return respond(response, 405, { message: "Método no permitido." });
  }

  const { email, archetype, consent, website } = request.body || {};
  if (website) return respond(response, 200, { ok: true });

  const normalizedEmail = String(email || "").trim().toLowerCase();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);
  if (!validEmail || !consent || !ALLOWED_ARCHETYPES.has(archetype)) {
    return respond(response, 400, {
      message: "Revisá el correo y el consentimiento antes de continuar."
    });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const server = apiKey && apiKey.includes("-") ? apiKey.split("-").pop() : "";
  if (!apiKey || !/^us\d+$/.test(server)) {
    console.error("Mailchimp environment is not configured.");
    return respond(response, 503, {
      message: "La conexión con Mailchimp todavía no está disponible."
    });
  }

  const subscriberHash = crypto
    .createHash("md5")
    .update(normalizedEmail)
    .digest("hex");
  const baseUrl = `https://${server}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`;
  const authorization = `Basic ${Buffer.from(`key:${apiKey}`).toString("base64")}`;

  try {
    const memberResponse = await fetch(baseUrl, {
      method: "PUT",
      headers: {
        Authorization: authorization,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email_address: normalizedEmail,
        status_if_new: "subscribed",
        merge_fields: { ARQUETIPO: archetype }
      })
    });

    const member = await memberResponse.json();
    if (!memberResponse.ok) {
      console.error("Mailchimp member error", memberResponse.status, member.title);
      return respond(response, 502, {
        message: "Mailchimp no pudo guardar el correo. Revisalo y probá otra vez."
      });
    }

    const tagsResponse = await fetch(`${baseUrl}/tags`, {
      method: "POST",
      headers: {
        Authorization: authorization,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tags: [
          { name: "Quiz 28 Ritmos", status: "active" },
          { name: archetype, status: "active" }
        ]
      })
    });

    if (!tagsResponse.ok) {
      console.error("Mailchimp tag error", tagsResponse.status);
    }

    return respond(response, 200, {
      ok: true,
      status: member.status
    });
  } catch (error) {
    console.error("Mailchimp connection error", error.message);
    return respond(response, 502, {
      message: "No pudimos conectar con Mailchimp. Probá nuevamente en un momento."
    });
  }
};
