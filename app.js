const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTlOEavVhRxXsJWYrbZA5SufRcoDcyqJIv6-AieJJIXqljHnD4l5SPdofT5VWcffMapiXUPv_hkto67/pub?gid=0&single=true&output=csv";

async function cargarPartidos() {

  const respuesta = await fetch(CSV_URL);
  const texto = await respuesta.text();

  console.log(texto);

  const filas = texto.trim().split("\n").slice(1);

  let html = "";

  filas.forEach(fila => {

    const columnas = fila.split(",");

    html += `
      <div class="partido">
        <h2>Cultural Maipú vs ${columnas[3]}</h2>

        <p>📅 ${columnas[1]}</p>
        <p>⏰ ${columnas[2]}</p>
        <p>🏟️ ${columnas[5]}</p>
        <p>📌 ${columnas[6]}</p>
      </div>
    `;
  });

  document.getElementById("fixture").innerHTML = html;
}

cargarPartidos();
