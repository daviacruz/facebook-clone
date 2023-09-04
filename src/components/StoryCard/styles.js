import styled from "styled-components";

export const Constainer = styled.div`
  width: 90px;
  height: 150px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  @media (max-width: 600px) {
    &:last-child {
      display: none;
    }
  }

  @media (max-width: 470px) {
    width: 60px;
    height: 130px;
    &:last-child {
      display: none;
    }
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  transition: transform 0.5s ease;
  position: absolute;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageProfile = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid #1876f2;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Label = styled.label`
  z-index: 1;
  color: white;
  font-weight: 500;
  word-break: break-word;
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
