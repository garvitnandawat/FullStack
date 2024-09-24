function countdown(num, callback) {
    const intervalId = setInterval(() => {
      console.log(num);
      if (num === 0) {
        clearInterval(intervalId);
        if (callback) {
          callback();  
        }
      }
      num--;
    }, 1000);
  }
  
  countdown(5, () => console.log("Countdown finished!"));
  