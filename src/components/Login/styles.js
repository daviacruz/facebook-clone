import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  gap: 30px;

  svg {
    width: 100px;
    height: 100px;
    color: #046ee5;
  }
`;

export const ButtonLogin = styled.button`
  background-color: #046ee5;
  color: white;
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
`;
