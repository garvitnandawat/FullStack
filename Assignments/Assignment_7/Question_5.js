function countdown(num) {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        console.log(num);
        if (num === 0) {
          clearInterval(intervalId);
          resolve(); 
        }
        num--;
      }, 1000);
    });
  }
  
  countdown(5).then(() => console.log("Countdown completed!"));
  