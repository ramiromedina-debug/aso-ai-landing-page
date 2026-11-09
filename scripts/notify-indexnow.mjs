// Script para notificar instantáneamente a Bing, Copilot y motores IndexNow (GEO 2026)
const key = "42fa5e8841d14945a80d463b27670732";
const host = "asoaisolutions.com";
const keyLocation = `https://${host}/${key}.txt`;

const urlList = [
  `https://${host}/`,
  `https://${host}/inteligencia-artificial-para-talleres-mecanicos-medellin`,
  `https://${host}/privacidad`,
  `https://${host}/terminos`,
  `https://${host}/soporte`,
];

async function sendIndexNow() {
  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  };

  console.log("Enviando URLs de ASO AI Solutions (Talleres Mecánicos) a IndexNow...");
  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    console.log(`Respuesta IndexNow: HTTP ${res.status} (${res.statusText})`);
    if (res.status === 200 || res.status === 202) {
      console.log("URLs enviadas con éxito para indexación inmediata en Bing y Copilot.");
    } else {
      const text = await res.text();
      console.log("Detalles de respuesta:", text);
    }
  } catch (err) {
    console.error("Error al conectar con IndexNow:", err.message);
  }
}

sendIndexNow();
