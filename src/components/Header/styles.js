import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  background-color: #fff;
  box-shadow: 0 0 3px 1px #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  gap: 5px;
`;

export const Section = styled.section`
  display: flex;
  gap: 10px;
  width: 100%;

  @media (max-width: 550px) {
    gap: 3px;
  }

  > svg,
  img {
    width: 32px;
    height: 32px;

    @media (max-width: 350px) {
      width: 25px;
      height: 25px;
    }
  }

  &.section2 {
    max-width: 470px;
  }

  &.section3 {
    justify-content: flex-end;
  }
`;

export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 5px 8px;
  background-color: #f0f2f5;

  svg {
    width: 16px;
    height: 16px;
    color: #65676b;
  }

  @media (max-width: 350px) {
    display: none;
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  width: 140px;
  margin: 0 10px;
  font-size: 11px;

  @media (max-width: 825px) {
    display: none;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;
