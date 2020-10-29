import {startGame} from "./gmaeStarter.js"
class Player {
    constructor(params) {
        this.symbol=params.symbol
        this.img=params.img
        this.value=params.value
        this.randomNumber= Math.floor(Math.random() * Math.floor(3));
        this.winCount=localStorage.getItem("winCount");
    }
    matchMaker() {
        this.choise=document.querySelector(`.${this.symbol}`)
        this.DOM=document.querySelector("main")
        this.DOM.innerHTML=` <div class="game-area">
        <div class="score-table">
            <div class="logo">
                <img src="/images/logo.svg" alt="gmae-logo">
            </div>
            <div class="score-count">
                <span>Score:</span>${this.winCount}
            </div>
        </div> 
        <div class="arena-container">
        <div class="start-button reset-button"><span></span>
</div>
<div class="player-area">
    <span>You chose:</span>
    <div class="${this.symbol} player-chose"></div>
</div>
<div class="npc-area">
    <span>Computer chose:</span>
    <div class="enemy-preChose enemy-chose"></div>
</div>

</div> 
        </div>`
    }
    generateNPC (){
     
      switch (this.randomNumber) {
            case 0:
                this.npcChoice=document.querySelector(".enemy-preChose")
                this.npcChoice.classList.remove("enemy-preChose")
                this.npcChoice.classList.add("rock")
                break;
             case 1:
                 this.npcChoice=document.querySelector(".enemy-preChose")
                 this.npcChoice.classList.remove("enemy-preChose")
                 this.npcChoice.classList.add("paper")
                break;
             case 2:
                this.npcChoice=document.querySelector(".enemy-preChose")
                this.npcChoice.classList.remove("enemy-preChose")
                this.npcChoice.classList.add("scisors")
                break;
      }
    }
    decideWinner () {
        const pointsBox=document.querySelector(".score-count")
        const resetBtn=document.querySelector(".reset-button")
        resetBtn.style.display="block";
        if ( this.value==this.randomNumber ) {
            resetBtn.innerHTML="DRAW! <br> Play Again"
        }
        else if ((this.value+1)%3==this.randomNumber) {
            resetBtn.innerHTML="LOST! <br> Play Again"
            if ( this.winCount!=0) {
                this.winCount--;
                localStorage.setItem("winCount",this.winCount)
            }
        }
        else {
            resetBtn.innerHTML="WIN! <br> Play Again"
            this.winCount++;
            localStorage.setItem("winCount",this.winCount)
        }
        resetBtn.addEventListener('click',()=>{

            startGame();
        })
    }
}
export {Player}

