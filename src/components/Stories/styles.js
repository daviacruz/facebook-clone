import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  justify-content: center;

  @media (max-width: 350px) {
    gap: 4px;
  }
`;
