import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  width: 17%;

  @media (max-width: 680px) {
    width: auto;
    position: absolute;
    left: 10px;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ProfileName = styled.span`
  font-size: 12px;
  font-weight: 600;
`;
