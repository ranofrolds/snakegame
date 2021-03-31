import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from "./grid.js"
import {draw as drawScore} from "./score.js"

let lastRender = 0
const gameBoard = document.getElementById('game-board')
let gameOver = false


function main(currentTime){
    if(gameOver){
        if(confirm('VOCE PERDEU! APERTE OK PARA REINICIAR O JOGO')){
            window.location ='/'
        }
        return    
    }

    window.requestAnimationFrame(main)
    let secondsSinceLastRender = (currentTime - lastRender)/1000
    if(secondsSinceLastRender<1/SNAKE_SPEED){
        return
    }

    lastRender=currentTime

    update()
    draw()
}
window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
    drawFood(gameBoard)
    drawScore(gameBoard)
}

function checkDeath(){
    gameOver = (outsideGrid(getSnakeHead()) || snakeIntersection())
}