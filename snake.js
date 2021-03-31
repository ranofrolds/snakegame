import {getInputDirection} from "./input.js"


export const SNAKE_SPEED = 5
const snakeBody=[{x:11,y:11}]
let newSegments =0;
let aux=1
let anterior=1
let head=0
export let score=0;

export function update(){
    addSegments()
    const inputDirection = getInputDirection()
    for(let i=snakeBody.length -2; i>=0; i--){
        snakeBody[i+1] = {...snakeBody[i]}
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard){
    const inputDirection = getInputDirection()
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart=segment.y
        snakeElement.style.gridColumnStart=segment.x
        snakeElement.classList.add('snake')
        if(head==0){
            
            if(inputDirection.x==1){
                snakeElement.classList.add('head-right')
            }
            else if(inputDirection.x==-1){
                snakeElement.classList.add('head-left')
            }
            else if(inputDirection.y==1){
                snakeElement.classList.add('head-down')
            }
            else if(inputDirection.y==-1){
                snakeElement.classList.add('head-up')
            }
            else if(inputDirection.y == 0 && inputDirection.x==0){
                snakeElement.classList.add('head-stopped')
            }
            head++ 
        }
        if(aux==1){
            snakeElement.style.backgroundColor ="black"
            aux+=2
        }
        else if(aux==3){
            snakeElement.style.backgroundColor="white"
            if(anterior%2!=0){
                aux+=2
                anterior++
            }
            else if(anterior%2==0){
                aux-=2
                anterior--
            }
        }
        else if(aux==5){
            snakeElement.style.backgroundColor="red"
            aux-=2
        }
        gameBoard.appendChild(snakeElement)
    })
    aux=1;
    anterior=1;
    head=0;
}

export function getSnakeHead(){
    return snakeBody[0];
}


export function expandSnake(amount){
    newSegments += amount
    score+=amount;
}

export function onSnake(position, {ignoreHead=false}={}){
    return snakeBody.some((segment,index) =>{
        if(ignoreHead && index ===0) return false
        return equalPositions(segment, position)
    })
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}


function addSegments(){
    for(let i=0; i<newSegments; i++){
        snakeBody[snakeBody.length]={...snakeBody.length-1}

    }
    newSegments=0
}