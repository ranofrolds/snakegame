export function randomGridPosition(){
    return{
        x:Math.floor(Math.random()*20) +1,
        y:Math.floor(Math.random()*20) +1
    }
}

export function outsideGrid(position){
    return(
        position.x<1 || position.x > 20 ||
        position.y <1 || position.y >20
    )
}