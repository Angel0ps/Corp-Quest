import { telaEntrarSala } from "./telaEntrarSala.js";

function mostrarSalaEspera(pin, username) {
    const app = document.getElementById("app");
    const salas = JSON.parse(localStorage.getItem("corpquest-room-state") || "{}");
    const participantes = salas[pin] || [];

    app.innerHTML = `
        <div class="waiting-room">
            <h1>SALA DE ESPERA</h1>
            <p class="waiting-meta">PIN: <strong>${pin}</strong></p>
            <p class="waiting-user">${username}</p>
            <p class="status">Aguardando o admin iniciar a sala...</p>

            <div class="participants-box">
                <h2>Participantes</h2>
                <ul>
                    ${participantes.map((usuario) => `<li>${usuario.username}</li>`).join("")}
                </ul>
            </div>

            <button id="btnSairSala" type="button">SAIR DA SALA</button>
        </div>
    `;

    document.getElementById("btnSairSala").addEventListener("click", () => {
        const current = JSON.parse(localStorage.getItem("corpquest-current-user") || "null");

        if (current && current.pin === pin && current.username === username) {
            const salasAtuais = JSON.parse(localStorage.getItem("corpquest-room-state") || "{}");
            const lista = (salasAtuais[pin] || []).filter(
                (usuario) => usuario.username.toLowerCase() !== username.toLowerCase()
            );

            if (lista.length > 0) {
                salasAtuais[pin] = lista;
            } else {
                delete salasAtuais[pin];
            }

            localStorage.setItem("corpquest-room-state", JSON.stringify(salasAtuais));
            localStorage.removeItem("corpquest-current-user");
        }

        telaEntrarSala((dados) => mostrarSalaEspera(dados.pin, dados.username));
    });
}

telaEntrarSala((dados) => {
    mostrarSalaEspera(dados.pin, dados.username);
});