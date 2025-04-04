/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';

const Count = ({ data, inView }) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { number, duration } = data;

  const [count, setCount] = useState('0');
  const timer = useRef();
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(number.substring(0, 3));
      if (start === end) return;
      let totalMilSecDur = parseInt(duration);
      let incrementTime = (totalMilSecDur / end) * 1000;
      timer.current = setInterval(() => {
        start += 1;
        setCount(String(start) + number.substring(3));
        if (start === end) clearInterval(timer.current);
      }, incrementTime);
    }
    () => clearInterval(timer.current);
  }, [number, duration, inView]);

  return <>{count}</>;
};

export default Count;
