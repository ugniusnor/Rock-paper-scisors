function generateHome () {
    let DOM=document.querySelector("main")
    DOM.innerHTML=  
    `<div class="home-container">
    <div class="logo">
        <img src="./images/logo.svg" alt="game-logo">
    </div>
    <div class="home-text">
        <p>Play the greatest game on earth</p>
        <div class="start-button"><span>Click to start</span>
        </div>
    </div>
</div>
<div class="rules">Rules</div>
<div class="rulesBox">
    <span>Rules</span>
    <img src="./images/icon-close.svg" alt="">
</div>`
localStorage.setItem("winCount",0)
}
export {generateHome}