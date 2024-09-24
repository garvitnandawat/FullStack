function delayedLogSequence(messages) {
    let promiseChain = Promise.resolve();  
  
    messages.forEach(([message, delay]) => {
      promiseChain = promiseChain.then(() => wait(delay).then(() => console.log(message)));
    });
  
    return promiseChain;  
  }
  
  delayedLogSequence([
    ["First message", 1000],
    ["Second message", 2000],
    ["Third message", 1000]
  ]);
  