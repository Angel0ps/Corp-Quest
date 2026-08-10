
const components = Array.from(document.getElementById("components").children);

const startMenu = components[0].cloneNode(true);
// const videoPlayer = components[1].cloneNode(true);
const image = components[1].cloneNode(true);
const questionMenu = components[2].cloneNode(true);
const modalCorrect = components[3].cloneNode(true);
const finishMenu = components[4].cloneNode(true);

const correctVideoPlayer = document.getElementById("video-correct");

const app = document.querySelector(".app");

const imagesP = [
    "./img/PBG01.jpeg",
    "./img/PBG01.jpeg",
    "./img/PBG02.jpeg",
    "./img/PBG03.jpeg",
    "./img/PBG03.jpeg",
    "./img/PBG03.jpeg",
    // "./img/PBG04.jpeg", 7
    "./img/PBG04.jpeg",
    "./img/PBG05.jpeg",
    "./img/PBG05.jpeg",
    // "./img/PBG06.jpeg", 11
    "./img/PBG06.jpeg",
    "./img/PBG07.jpeg",
    // "./img/PBG07.jpeg", 14
    // "./img/PBG08.jpeg", 15
    // "./img/PBG08.jpeg", 16
    "./img/PBG09.jpeg",
    // "./img/PBG09.jpeg", 18
    
]
var currentQuestion = 0;
var correctAnswers = 0;
var currentCorrect = "";


function clearApp(){
    questionMenu.classList.remove("appear");
    app.innerHTML = "";
}


function setQuestion(index){
    // videoPlayer.src = videos[index];
    image.src = imagesP[index];
    // console.log(document.querySelector(".question article header h1"));
    
    questionMenu.querySelector(".question article header h1").innerHTML = `Pergunta ${index+1}`;
    questionMenu.querySelector(".question article header p").innerHTML = data.perguntas[index].pergunta;
    const buttons = questionMenu.querySelectorAll(".alternatives button p");
    buttons[0].innerHTML = data.perguntas[index].alternativas["A"];
    buttons[1].innerHTML = data.perguntas[index].alternativas["B"];
    buttons[2].innerHTML = data.perguntas[index].alternativas["C"];
    buttons[3].innerHTML = data.perguntas[index].alternativas["D"];
    
    currentCorrect = data.perguntas[index].resposta_correta;
    
    app.appendChild(image);
    app.appendChild(questionMenu);

    // videoPlayer.addEventListener("ended", () => {
    //     questionMenu.classList.add("appear");
    // });

    setTimeout(() => {
        questionMenu.classList.add("appear");
    }, 3000);

    currentQuestion ++;
}


function play(){
    clearApp();

    setQuestion(0);
}


function answer(option){
    if (currentQuestion >= imagesP.length){
        
        if (option == currentCorrect){
            correctAnswers ++;
        }

        if (correctAnswers > Math.floor(imagesP.length / 2 )){
            isWinner();
            return;
        } else {
            app.appendChild(finishMenu);        
            app.querySelector("#modalGameOver article h1").innerHTML = `❌❌❌ Game over ( ${correctAnswers} / ${imagesP.length} ) ❌❌❌`;
            app.querySelector("#modalGameOver article header img").src = "./img/initial-menu.jpeg";
            return;
        }
        
    }

    if (option == currentCorrect){
        isCorrect();
    } else{
        isWrong();
    }
}

function isCorrect(){
    app.appendChild(modalCorrect);
    app.querySelector(".modal-correct article h1").innerHTML = "⭐⭐⭐ Acertou! ⭐⭐⭐";
    app.querySelector(".modal-correct article header video").src = "./img/transition.mp4";

    correctAnswers ++;
}

function isWrong(){
    app.appendChild(modalCorrect);
    app.querySelector(".modal-correct article h1").innerHTML = "❌❌❌ Errou... ❌❌❌";
    app.querySelector(".modal-correct article header video").src = "./img/transition.mp4";
}

function isWinner(){
    app.appendChild(finishMenu);
    app.querySelector("#modalGameOver article h1").innerHTML = `⭐⭐⭐ Parabéns ( ${correctAnswers} / ${imagesP.length} ) ⭐⭐⭐`;
}

function nextQuestion(){
    clearApp();
    setQuestion(currentQuestion);
}

function reStart(){
    window.location.reload();
}