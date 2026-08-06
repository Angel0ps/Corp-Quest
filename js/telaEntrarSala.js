import { telaUsername } from "./telaUsername.js";

export function telaEntrarSala(onEntrarNaSala) {
    const app = document.getElementById("app");

    app.innerHTML = `
        <div class="pin-screen">
            <h1>ENTRAR NA SALA</h1>
            <p class="subtitle">Digite o PIN da sala para continuar.</p>

            <input
                id="pinInput"
                type="text"
                maxlength="6"
                inputmode="numeric"
                placeholder="******"
            >

            <button id="btnPin" type="button">
                CONFIRMAR
            </button>

            <p id="erroPin" class="erro"></p>
        </div>
    `;

    const input = document.getElementById("pinInput");
    const erro = document.getElementById("erroPin");
    const botao = document.getElementById("btnPin");

    function validarPin(pin) {
        if (!pin) {
            return "Digite o PIN da sala.";
        }

        if (!/^\d{4,6}$/.test(pin)) {
            return "O PIN deve ter entre 4 e 6 números.";
        }

        return null;
    }

    function confirmar() {
        const pin = input.value.trim();
        const mensagem = validarPin(pin);

        if (mensagem) {
            erro.textContent = mensagem;
            input.focus();
            return;
        }

        erro.textContent = "";
        telaUsername((username) => {
            const dados = { pin, username };

            const salas = JSON.parse(localStorage.getItem("corpquest-room-state") || "{}");
            const participantes = salas[pin] || [];
            const jaExiste = participantes.some(
                (usuario) => usuario.username.toLowerCase() === username.toLowerCase()
            );

            if (jaExiste) {
                alert("Esse nome já está na sala.");
                return;
            }

            participantes.push({ username, status: "waiting", joinedAt: new Date().toISOString() });
            salas[pin] = participantes;
            localStorage.setItem("corpquest-room-state", JSON.stringify(salas));
            localStorage.setItem("corpquest-current-user", JSON.stringify({ pin, username }));

            if (onEntrarNaSala) {
                onEntrarNaSala(dados);
            }
        }, pin);
    }

    botao.addEventListener("click", confirmar);
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            confirmar();
        }
    });

    input.focus();
}
