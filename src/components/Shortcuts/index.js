import React, { useContext } from "react";
import ShortcutItem from "../ShortcutItem";
import { FaUserFriends, FaStore } from "react-icons/fa";
import { MdGroups, MdOndemandVideo } from "react-icons/md";
import { GiBackwardTime } from "react-icons/gi";
import { BsChevronDown } from "react-icons/bs";
import * as C from "./styles";
import { AuthContext } from "../../contexts/auth";

const Shortcuts = () => {
  const { user } = useContext(AuthContext);

  return (
    <C.Container>
      <ShortcutItem Profile={user.avatarUrl} Title={user.name} />
      <ShortcutItem Icon={FaUserFriends} Title="Amigos" />
      <ShortcutItem Icon={MdGroups} Title="Grupos" />
      <ShortcutItem Icon={FaStore} Title="Marketplace" />
      <ShortcutItem Icon={MdOndemandVideo} Title="Watch" />
      <ShortcutItem Icon={GiBackwardTime} Title="Lembranças" />
      <ShortcutItem Icon={BsChevronDown} Title="Ver mais" colorIcon="gray" />
    </C.Container>
  );
};

export default Shortcuts;
