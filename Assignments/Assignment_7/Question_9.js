function repeatAction(action, interval, duration) {
    return new Promise((resolve) => {
      const intervalId = setInterval(action, interval);  
      setTimeout(() => {
        clearInterval(intervalId);  
        resolve();  
      }, duration);
    });
  }
  
  repeatAction(() => console.log("Repeated action"), 1000, 5000).then(() => console.log("Action stopped after 5 seconds"));
  