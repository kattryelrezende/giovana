document.addEventListener("DOMContentLoaded", () => {
    const countdown = document.querySelector('.timer-container');

    function showCountdown() {
      countdown.classList.add('active');
    }
  
    setTimeout(showCountdown, 30000); // Countdown aparece após 30 segundos
  });

// Defina a data inicial (exemplo: 1 de janeiro de 2020)
const startDate = new Date('2024-04-04T00:00:00');

function updateCountdown() {
    const now = new Date();
    const diff = now - startDate; // Diferença em milissegundos

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Atualize o cronômetro a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Atualização inicial