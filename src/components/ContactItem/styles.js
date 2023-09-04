import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  font-size: 12px;
  cursor: pointer;
  font-weight: 500;
  border-radius: 8px;
  width: 98%;

  &:hover {
    background-color: #0000000d;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
