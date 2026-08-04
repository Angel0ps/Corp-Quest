# 🏢 De Olho na Vaga: O Jogo da Sala de Aula Invertida

Um jogo interativo web desenvolvido para metodologias ativas de aprendizagem (*Flipped Classroom*), combinando elementos de gamificação, tomada de decisões e resolução de problemas corporativos no modelo *Point & Click*.

---

## 📖 Sobre o Jogo

Um candidato a uma vaga de emprego decide tentar chegar ao setor de RH para entregar seu currículo pessoalmente. No entanto, ele acaba se perdendo nos corredores de uma corretora de imóveis. 

Para não causar uma má impressão antes mesmo da entrevista, ele decide encontrar o caminho sozinho. O objetivo do jogador é guiar o candidato até o setor de RH por conta própria, tomando as decisões certas e evitando ser descoberto pela equipe da empresa.

---

## 🎯 Mecânicas e Gameplay

* **Formato:** Jogo Web interativo (*Point & Click*).
* **Navegação por Portas:** Em cada etapa, o jogador deve escolher uma entre **três portas**:
  * 🟢 **Porta 1:** Avança no caminho principal.
  * 🟡 **Porta 2:** Leva a um caminho alternativo.
  * 🔴 **Porta 3:** Risco/Pegadinha (pode fazer voltar salas ou ser descoberto).
* **Desafios nas Salas:** O jogador precisa passar por **5 a 6 salas** até a vitória. Ao entrar em uma sala, pode encontrar:
  * Reuniões em andamento sobre problemas do conteúdo.
  * NPCs trabalhando que precisam de ajuda/ferramentas.
  * Grupos de funcionários conversando.
* **Resolução de Problemas:** Todas as perguntas são de múltipla escolha. O jogador utiliza seus próprios conhecimentos e documentos coletados durante a jornada para responder.
* **Dinâmica Visual e Vídeos:** As cenas e animações são exibidas via vídeo. Ao término da animação, o menu interativo surge na tela, e a próxima cena é carregada com base na resposta do jogador.

---

## 🛠️ Tecnologias e Arquitetura

* **Frontend:** HTML5, CSS3, JavaScript (Componentes dinâmicos e gerenciamento de estados das telas).
* **Backend:** Node.js / API para gerenciamento e armazenamento de votos em memória.
* **Mídia & Design:** Vídeos de animação para transições e elementos gráficos interativos.

---

## 👥 Divisão do Time e Tarefas

### 📊 Sistema de Votação
- **Backend (Gerenciamento e Memória):** Alisson *(Concluído)*
- **Frontend (Interface do Usuário):** Gabriel
- **Autenticação / Cadastro de Usuário:** *(Em desenvolvimento)*

### 🎮 Desenvolvimento do Jogo
- **Design Inicial & Prototipação:** Caio e Wanderson *(Figma, esboços e referências)*
- **Interface HTML/CSS:** Gabriel e Wanderson *(Componentes dinâmicos, menus e telas de Game Over)*
- **Lógica e Gerenciamento de Telas (JS):** Alisson *(Lógica de transição, manipulação de vídeos, perguntas e alternativas)*
- **Artes e Elementos Visuais:** Davi Henrique *(Criação de vídeos de animação e documentos interativos)*

---

## 🚀 Como Executar o Projeto

*(Instruções para clonar e rodar o projeto localmente)*

```bash
# Clone o repositório
git clone https://github.com/Angel0ps/Corp-Quest.git

# Siga os passos de execução (ex: abrir o index.html ou rodar o servidor backend)