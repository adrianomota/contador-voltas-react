import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function ShowTime({ time }) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <Container>
      <span>{`${minutesStr} : ${secondsStr}`}</span>
      <br />
      <span>Tempo médio por volta</span>
    </Container>
  );
}

ShowTime.propTypes = {
  time: PropTypes.string.isRequired,
};
