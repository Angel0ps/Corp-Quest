
const components = Array.from(document.getElementById("components").children);

const startMenu = components[0].cloneNode(true);
const videoPlayer = components[1].cloneNode(true);
const questionMenu = components[2].cloneNode(true);

const app = document.querySelector(".app");

const videos = [
    "./img/example.mp4",
    "./img/example.mp4",
    "./img/example.mp4",
    "./img/example.mp4",
    "./img/example.mp4",
    "./img/example.mp4",
]
var currentQuestion = 0;
var currentCorrect = "";


function clearApp(){
    questionMenu.classList.remove("appear");
    app.innerHTML = "";
}


function setQuestion(index){
    videoPlayer.src = videos[index];
    // console.log(document.querySelector(".question article header h1"));
    
    questionMenu.querySelector(".question article header h1").innerHTML = `Pergunta ${index+1}`;
    questionMenu.querySelector(".question article header p").innerHTML = data.perguntas[index].pergunta;
    const buttons = questionMenu.querySelectorAll(".alternatives button p");
    buttons[0].innerHTML = data.perguntas[index].alternativas["A"];
    buttons[1].innerHTML = data.perguntas[index].alternativas["B"];
    buttons[2].innerHTML = data.perguntas[index].alternativas["C"];
    buttons[3].innerHTML = data.perguntas[index].alternativas["D"];
    
    currentCorrect = data.perguntas[index].resposta_correta;
    
    app.appendChild(videoPlayer);
    app.appendChild(questionMenu);

    videoPlayer.addEventListener("ended", () => {
        questionMenu.classList.add("appear");
    });

    currentQuestion ++;
}


function play(){
    clearApp();

    setQuestion(0);
}


function answer(option){
    if (option == currentCorrect){
        clearApp();
        setQuestion(currentQuestion);
    } else{
        clearApp();
        alert("Resposta errada");
        // Essa função vai fazer aparecer o vídeo de erro, ainda não está completa.

        setQuestion(currentQuestion);
    }
}
