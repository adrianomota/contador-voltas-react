import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import ShowTurns from '../../components/ShowTurns';
import ShowTime from '../../components/ShowTime';
import Button from '../../components/Button';

export default function Main() {
  const [numberOfTurns, setNumberOfTurns] = useState(0);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setTime(old => old + 1);
      }, 100);
      return () => {
        if (timer) {
          clearInterval(timer);
        }
      };
    }
  }, [running]);

  const toggleRunning = () => {
    setRunning(!running);
  };
  const increment = () => {
    setNumberOfTurns(numberOfTurns + 1);
  };

  const decrement = () => {
    setNumberOfTurns(numberOfTurns === 0 ? 0 : numberOfTurns - 1);
  };

  const reset = () => {
    setNumberOfTurns(0);
    setTime(0);
  };

  return (
    <Container>
      <ShowTurns turns={numberOfTurns} />
      <Button type="button" text="+" onClick={increment} />
      <Button type="button" text="-" onClick={decrement} />
      {numberOfTurns > 0 && (
        <ShowTime time={Math.round(time / numberOfTurns)} />
      )}
      <Button type="button" text="Iniciar" onClick={toggleRunning} />
      <Button type="button" text="Reiniciar" onClick={reset} />
    </Container>
  );
}
