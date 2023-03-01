const gameArea = document.getElementById("game");
ctx = gameArea.getContext("2d");
const score = document.querySelector(".score");
const highScore = document.querySelector(".HighScore");
const resetBtn = document.querySelector(".reset");


let 
speed , 
highScoreCount, 
tileSize, 
tileCount, 
headX, 
headY,
snakeBody,
tailLength,
foodX,
foodY,
gameInPlay,
dx,
dy,
scoreCount;


const init = () => {
    resetBtn.style.display = "none";
    headX =10;
    headY = 10;
    snakeBody =[];
    tailLength =1;
    tailLength = 1;
    tileSize = 10;
    tileCount = 40;
    foodX =5;
    foodY =5;
    gameInPlay = true;
    dx = 0;
    dy = 0;
    scoreCount =0;
    speed= 200;
    highScoreCount =0;

    drawGame();
}


const drawGame = () => {
    setTimeout( () => {
            console.log(1)
        drawGame();

    },speed )
}

init();