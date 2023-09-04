import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  position: relative;
  height: calc(100vh - 50px);

  @media (max-width: 600px) {
    gap: 0;
  }
`;
