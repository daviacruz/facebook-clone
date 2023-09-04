import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0 25px;
  cursor: pointer;
  display: ${(props) => (props.display === "mobile" ? "none" : "flex")};

  &:hover {
    background-color: #f0f2f5;
  }

  svg {
    width: 22px;
    height: 22px;
    color: #65676b;

    &.active {
      color: #1b74e4;
    }

    @media (max-width: 350px) {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 825px) {
    display: ${(props) => (props.display !== "web" ? "flex" : "none")};
  }

  @media (max-width: 530px) {
    padding: 0 10px;
  }

  &.section3 {
    border-radius: 100%;
    height: auto;
    padding: 8px 8px;
    background-color: #ebecee;
    width: auto;

    svg {
      width: 16px;
      height: 16px;
      color: black;
    }

    @media (max-width: 885px) {
      display: none;
    }
  }
`;
