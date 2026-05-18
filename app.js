const CSV_URL = https://docs.google.com/spreadsheets/d/e/2PACX-1vTlOEavVhRxXsJWYrbZA5SufRcoDcyqJIv6-AieJJIXqljHnD4l5SPdofT5VWcffMapiXUPv_hkto67/pub?gid=0&single=true&output=csv;

async function cargarPartidos() {

  const respuesta = await fetch(CSV_URL);
  const texto = await respuesta.text();

  const filas = texto.split("\n").slice(1);

  let html = "";

  filas.forEach(fila => {

    const columnas = fila.split(",");

    const fecha = columnas[1];
    const hora = columnas[2];
    const rival = columnas[3];
    const local = columnas[4];
    const estadio = columnas[5];
    const estado = columnas[6];

    html += `
      <div class="partido">
        <h2>Cultural Maipú vs ${rival}</h2>

        <p>📅 ${fecha}</p>
        <p>⏰ ${hora}</p>
        <p>🏟️ ${estadio}</p>
        <p>⚽ ${local}</p>
        <p>📌 ${estado}</p>
      </div>
    `;
  });

  document.getElementById("fixture").innerHTML = html;
}

cargarPartidos();
