import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function ShowTurns({ turns }) {
  return (
    <Container>
      <span>{turns}</span>
      <span>turns</span>
    </Container>
  );
}

ShowTurns.propTypes = {
  turns: PropTypes.string.isRequired,
};
