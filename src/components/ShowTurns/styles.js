import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 480px;
  flex-direction: column;

  span {
    font-size: 15rem;
    font-weight: bold;
  }
  span + span {
    font-size: 4.8rem;
    font-weight: normal;
  }
`;
