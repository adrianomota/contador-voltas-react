import React from 'react';
import PropTypes from 'prop-types';

import { CustomButton } from './styles';

export default function Button({ text, onClick }) {
  return <CustomButton onClick={onClick}>{text}</CustomButton>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
