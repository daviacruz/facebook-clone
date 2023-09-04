import React, { useContext, useRef, useState } from "react";
import * as C from "./styles";
import { MdVideoCall, MdCameraAlt } from "react-icons/md";
import { BiHappyAlt } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { db, storage } from "../../firebase";
import { AuthContext } from "../../contexts/auth";
import firebase from "firebase/compat/app";

const NewPost = () => {
  const { user } = useContext(AuthContext);
  const [desc, setDesc] = useState("");
  const fileRef = useRef(null);
  const [filePost, setFilePost] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();

    console.log(123);

    if (!desc) return;

    await db
      .collection("posts")
      .add({
        desc: desc,
        name: user.name,
        email: user.email,
        image: user.avatarUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (filePost) {
          const upload = storage
            .ref(`posts/${doc.id}`)
            .putString(filePost, "data_url");

          removeFile();

          upload.on(
            "state_change",
            null,
            (err) => console.log(err),
            () => {
              storage
                .ref(`posts`)
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      filePost: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    setDesc("");
  };

  const handleImage = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setFilePost(readerEvent.target.result);
    };
  };

  const removeFile = () => setFilePost(null);

  return (
    <C.Container>
      <C.Div>
        <C.Image src={user.avatarUrl} />
        <C.Form>
          <C.Input
            value={desc}
            placeholder={`No que você está pensando, ${
              user.name.split(" ")[0]
            }?`}
            onChange={(e) => setDesc(e.target.value)}
          />
          <C.Button type="submit" onClick={handlePost} hidden />
        </C.Form>
        {filePost && (
          <C.DivPreview>
            <C.ImagePreview src={filePost} />
            <FaTrash color="red" onClick={removeFile} />
          </C.DivPreview>
        )}
      </C.Div>
      <C.Divider />
      <C.Div>
        <C.Div className="Btns">
          <MdVideoCall color="red" />
          <C.Label>Vídeo ao vivo</C.Label>
        </C.Div>
        <C.Div className="Btns" onClick={() => fileRef.current.click()}>
          <MdCameraAlt color="green" />
          <C.Label>Foto/Vídeo</C.Label>
          <C.Input ref={fileRef} type="file" onChange={handleImage} hidden />
        </C.Div>
        <C.Div className="Btns" display="web">
          <BiHappyAlt color="#ccc438" />
          <C.Label>Sentimento/Atividade</C.Label>
        </C.Div>
      </C.Div>
    </C.Container>
  );
};

export default NewPost;
