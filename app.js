const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTlOEavVhRxXsJWYrbZA5SufRcoDcyqJIv6-AieJJIXqljHnD4l5SPdofT5VWcffMapiXUPv_hkto67/pub?gid=0&single=true&output=csv";

async function cargarPartidos() {

  const respuesta = await fetch(CSV_URL);
  const texto = await respuesta.text();

  const filas = texto.trim().split("\n").slice(1);

  let html = "";

  filas.forEach(fila => {

    const columnas = fila.split(",");

    // Evita filas vacías
    if(columnas.length < 4) return;

    const fecha = columnas[1]?.trim();
    const hora = columnas[2]?.trim();
    const rival = columnas[3]?.trim();
    const estadio = columnas[5]?.trim();
    const estado = columnas[6]?.trim();

    // Evita encabezados
    if(rival === "Rival") return;

    html += `
      <div class="partido">
        <h2>Cultural Maipú vs ${rival}</h2>

        <p>📅 ${fecha}</p>
        <p>⏰ ${hora}</p>
        <p>🏟️ ${estadio}</p>
        <p>📌 ${estado}</p>
      </div>
    `;
  });

  document.getElementById("fixture").innerHTML = html;
}

cargarPartidos();
cargarPartidos();
