import React from "react";
import NewPost from "../NewPost";
import Stories from "../Stories";
import Posts from "../Posts";
import * as C from "./styles";

const Feed = () => {
  return (
    <C.Container>
      <Stories />
      <NewPost />
      <Posts />
    </C.Container>
  );
};

export default Feed;
