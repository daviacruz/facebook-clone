import React from "react";
import * as C from "./styles";

const ContactItem = ({ src, name }) => {
  return (
    <C.Container>
      <C.Image src={src} />
      {name}
    </C.Container>
  );
};

export default ContactItem;
