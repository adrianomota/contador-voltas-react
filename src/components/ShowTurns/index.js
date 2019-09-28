import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function ShowTurns({ turns }) {
  return (
    <Container>
      <span>{turns}</span>
      <span>Voltas</span>
    </Container>
  );
}

ShowTurns.propTypes = {
  turns: PropTypes.string.isRequired,
};
