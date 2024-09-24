function delayedMessage(message, delay) {
    setTimeout(() => {
      console.log(message);
    }, delay);
  }
  
  delayedMessage("Hello after 2 seconds", 2000);
  