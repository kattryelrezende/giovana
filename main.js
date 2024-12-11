onload = () => {
  const messages = [
    "Feliz Natal, Minha Princesa!",
    "O final do ano chegou",
    "E meu amor por você só aumenta",
    "Estou morrendo de saudades",
    "Espero que goste do presente",
    "Eu amo você <3",
  ];

  const messageContainer = document.querySelector('.message-container');
  const messageText = document.getElementById('message-text');
  const flowers = document.querySelector('.flowers');

  let currentMessageIndex = 0;

  function showNextMessage() {
    if (currentMessageIndex < messages.length) {
      messageText.textContent = messages[currentMessageIndex];
      messageContainer.classList.add('active');
      setTimeout(() => {
        messageContainer.classList.remove('active');
        setTimeout(() => {
          currentMessageIndex++;
          showNextMessage();
        }, 1000); // Tempo entre mensagens
      }, 3000); // Tempo de exibição de cada mensagem
    } else {
      // Após a última mensagem, aguarde 2 segundos antes de iniciar as flores
      setTimeout(() => {
        flowers.classList.remove("not-loaded"); // Remove a classe para iniciar a animação das flores
      }, 500);
    }
  }

  // Inicia a exibição das mensagens
  showNextMessage();
};