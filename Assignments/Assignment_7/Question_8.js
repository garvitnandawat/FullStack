function randomDelayMessage(message) {
    const randomDelay = Math.floor(Math.random() * 5000) + 1000;  
    return wait(randomDelay).then(() => console.log(message));
  }
  
  randomDelayMessage("Random delay message");
  