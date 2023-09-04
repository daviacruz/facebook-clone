import React, { useContext } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { AuthContext } from "../../contexts/auth";
import { db } from "../../firebase";
import Post from "../Post";

const Posts = () => {
  const { user } = useContext(AuthContext);

  const [realtimePosts, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  return (
    <>
      {!error &&
        realtimePosts.docs.map((post) => (
          <Post
            key={post.id}
            name={user.name}
            desc={post.data().desc}
            timestamp={post.data().timestamp}
            image={user.avatarUrl}
            filePost={post.data().filePost}
          />
        ))}
    </>
  );
};

export default Posts;
