import {score} from "./snake.js"


export function draw(gameBoard){
        const scoreElement = document.createElement('div')
        scoreElement.style.gridRowStart=2
        scoreElement.style.gridColumnStart=2
        scoreElement.classList.add('score')
        scoreElement.innerHTML = `${score}`
        gameBoard.appendChild(scoreElement)

}