import styled from "styled-components";

export const Container = styled.div`
  margin: 0 10px;
  max-width: 500px;
  position: relative;
  overflow-x: auto;
  height: inherit;

  &::-webkit-scrollbar {
    display: none;
  }
`;
