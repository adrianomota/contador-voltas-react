import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 230px;
    flex-direction: row;
    margin: 8px;
  }

  span {
    margin: 35px 0 0;
    font-size: 3rem;
    color: #fff;
  }
`;
