export function telaUsername(onConfirmar, pin) {
    const app = document.getElementById("app");

    app.innerHTML = `
        <div class="username-screen">
            <h1>COMO VOCÊ QUER SER CHAMADO?</h1>
            <p class="subtitle">Digite seu nome e confirme para entrar na sala.</p>

            <input
                id="usernameInput"
                type="text"
                maxlength="30"
                placeholder="Seu nome"
            >

            <button id="btnConfirmar" type="button">
                CONFIRMAR
            </button>

            <p id="erroUsername" class="erro"></p>
        </div>
    `;

    const input = document.getElementById("usernameInput");
    const erro = document.getElementById("erroUsername");
    const botao = document.getElementById("btnConfirmar");

    function validarNome(nome) {
        const nomeLimpo = nome.trim().replace(/\s+/g, " ");

        if (!nomeLimpo) {
            return "Digite seu nome antes de confirmar.";
        }

        if (nomeLimpo.length < 2 || nomeLimpo.length > 30) {
            return "O nome deve ter entre 2 e 30 caracteres.";
        }

        const regex = /^[a-zA-ZÀ-ÿ0-9 ]+$/;
        if (!regex.test(nomeLimpo)) {
            return "Use apenas letras, números e espaços.";
        }

        return null;
    }

    function confirmar() {
        const nome = input.value.trim().replace(/\s+/g, " ");
        const mensagem = validarNome(nome);

        if (mensagem) {
            erro.textContent = mensagem;
            input.focus();
            return;
        }

        erro.textContent = "";

        if (onConfirmar) {
            onConfirmar(nome, pin);
        }
    }

    botao.addEventListener("click", confirmar);
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            confirmar();
        }
    });

    input.focus();
}
