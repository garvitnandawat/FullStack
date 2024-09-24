async function delayedLogSequence(messages) {
    for (const [message, delay] of messages) {
      await wait(delay);  
      console.log(message);
    }
  }
  
  delayedLogSequence([
    ["First message", 1000],
    ["Second message", 2000],
    ["Third message", 1000]
  ]);
  