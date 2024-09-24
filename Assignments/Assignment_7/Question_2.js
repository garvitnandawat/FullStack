function countdown(num) {
    const intervalId = setInterval(() => {
      console.log(num);
      if (num === 0) {
        clearInterval(intervalId);  
      }
      num--;
    }, 1000);
  }
  
  countdown(5);  
  