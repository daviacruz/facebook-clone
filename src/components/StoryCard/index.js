import React from "react";
import * as C from "./styles";

const StoryCard = ({ src, name, profile }) => {
  return (
    <C.Constainer>
      <C.Image src={src} />
      <C.ImageProfile src={profile} />
      <C.Label>{name}</C.Label>
    </C.Constainer>
  );
};

export default StoryCard;
