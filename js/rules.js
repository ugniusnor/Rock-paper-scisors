function showRules () {
    const rulesBtn = document.querySelector(".rules")
    const rulesBox = document.querySelector(".rulesBox")
    const closeBtn=document.querySelector(".rulesBox >img")
    let clickCount=0;

        rulesBtn.addEventListener('click', ()=>{
            if(clickCount==0) {
                rulesBox.style.display="block"
                clickCount++;
            }
          else if (clickCount===1){
           
            rulesBox.style.display="none"
            clickCount--;
          }
    })
    closeBtn.addEventListener('click', ()=>{
        rulesBox.style.display="none"
        clickCount--;
    })
}
export {showRules}