import {gameData} from "./gameData.js"
import {Player} from "./Player.js"

function playerTurn () {
    const choiseOption=document.querySelectorAll(".player")
    const choiseArr=Array.from(choiseOption)
    for (let i in choiseArr) {
        choiseArr[i].addEventListener('click', ()=>{
            let newPlayer = new Player (gameData[i])
            newPlayer.matchMaker();
            setTimeout(()=>{
                newPlayer.generateNPC()
                newPlayer.decideWinner ()
            } ,800)
        })
    }
    
}
export {playerTurn}