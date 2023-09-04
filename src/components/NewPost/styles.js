import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 1px 2px #0003;
  max-width: 470px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5px;
  justify-content: center;

  .Btns {
    border-radius: 5px;
    padding: 5px 0;
    &:hover {
      background-color: #0000000d;
    }
  }

  svg {
    width: 25px;
    height: 25px;
    cursor: pointer;

    color: ${(props) => (props.color ? props.color : "inherit")};
  }

  @media (max-width: 600px) {
    display: ${(props) => (props.display === "web" ? "none" : "flex")};
  }
`;

export const Divider = styled.div`
  margin: 10px 0;
  border-top: solid 1px lightgray;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const DivPreview = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  position: relative;

  svg {
    position: absolute;
    display: none;
    opacity: 0.9;
    left: 8px;
  }

  &:hover {
    svg {
      display: flex;
    }
  }
`;

export const ImagePreview = styled.img`
  width: 40px;
  height: 40px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  min-height: 10px;
  height: auto;
  border-radius: 20px;
  background-color: #f0f2f5;
  border: none;
  outline: none;
  width: 100%;
`;

export const Label = styled.label`
  color: #65676b;
  word-break: break-word;
  font-weight: 600;
  font-size: 11px;
  cursor: pointer;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Button = styled.button``;
