import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    align-self: center;
    align-items: center;
    button {
      border: 0;
      background: none;
    }
    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const User = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  opacity: 1;
  strong {
    display: block;
    color: #7159c1;
    font-size: 20px;
    font-weight: normal;
  }
  span {
    display: block;
    color: #666;
    margin-top: 3px;
  }
`;