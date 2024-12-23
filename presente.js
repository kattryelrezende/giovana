const click = document.querySelector('.click');
const giftBox = document.querySelector('.gift-box');
const shadow = document.querySelector('.shadow');
const giftContainer = document.querySelector('.gift-container');
const text = document.querySelector('.text');

document.addEventListener("DOMContentLoaded", () => {
    const gift = document.querySelector('.gift');
    const giftTitle = document.querySelector('.gift-title')

    function showGift() {
        gift.classList.add('active');
        giftTitle.classList.add('active');
    }
  
    setTimeout(showGift, 30000); // Countdown aparece após 30 segundos
  });

click.addEventListener('click', ()=>{
    if(click.className==="click"){
        click.classList.add('active')
        giftBox.classList.add('active')
        shadow.classList.add('active')
        giftContainer.classList.add('active')
        text.classList.add('active')
        text.classList.remove('active2')
    }
    else{
        click.classList.remove('active')
        giftBox.classList.remove('active')
        shadow.classList.remove('active')
        giftContainer.classList.remove('active')
        text.classList.remove('active')
        text.classList.add('active2')

    }
})