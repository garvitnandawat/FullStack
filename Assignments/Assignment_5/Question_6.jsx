import React, { useState, useEffect } from 'react';

const Timer = ({ start }) => {
  const [time, setTime] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => setTime((prevTime) => prevTime - 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Time: {time} seconds</p>;
};

export default Timer;

// Example of usage:
// <Timer start={30} />
