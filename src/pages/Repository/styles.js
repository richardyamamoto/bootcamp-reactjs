import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  h1 {
    font-size: 20px;
    margin-top: 10px;
  }

  p {
    font-size: 14px;
    margin-top: 5px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 5px;
  margin-top: 5px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;
      font-size: 16px;
    }

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }
      span {
        background-color: #eee;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

  button {
    min-width: 35px;
    min-height: 20px;
    padding: 5px 20px;
    margin-right: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    color: #eee;
    background-color: #7159c7;
    font-size: 14px;
    font-weight: bold;
  }

  button:hover {
    background-color: #a9a9;
    color: #333;
  }
`;

export const PageActions = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  justify-content: center;

  button {
    min-width: 35px;
    min-height: 20px;
    padding: 5px 20px;
    border: 1px solid #eee;
    border-radius: 4px;
    color: #eee;
    background-color: #7159c7;
    font-size: 14px;
    font-weight: bold;

    &[disabled]{
      cursor: not-allowed;
      opacity: 0.2;
    }

  button:hover {
    background-color: #a9a9;
    color: #333;
  }

  + span {
    display: flex;
    padding: 0 10px;
    margin: 0 10px;
    align-content: center;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
  }
`;
