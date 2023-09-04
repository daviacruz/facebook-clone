import React from "react";
import * as C from "./styles";

const HeaderIcon = ({
  Icon,
  section = "section2",
  active = false,
  display = "default",
}) => {
  return (
    <C.Container className={section} display={display}>
      <Icon className={active ? "active" : ""} />
    </C.Container>
  );
};

export default HeaderIcon;
