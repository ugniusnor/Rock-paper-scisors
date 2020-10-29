
import {playerTurn} from "./playerTurn.js"
function startGame () {
const startBtn = document.querySelector(".start-button")
startBtn.addEventListener('click',()=>{
    let gamePage=document.querySelector("main")
    gamePage.innerHTML=
        `
        <div class="game-area">
        <div class="score-table">
            <div class="logo">
                <img src="/images/logo.svg" alt="gmae-logo">
            </div>
            <div class="score-count">
                <span>Score:</span>${localStorage.getItem("winCount")}
            </div>
        </div>
        <div class="triangle-area">
            <div class="top-row">
                <div class="player paper"></div>
                <div class="player scisors"></div>
                <div class="player rock"></div>
            </div>
        </div>
        </div>`
        playerTurn()
       
      
})


}


export {startGame}



