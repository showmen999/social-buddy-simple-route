import React from "react";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const { id, title, body } = props.post;
  const postStyle = {
    border: "2px solid cyan",
    margin: "30px",
    padding: "20px",
    borderRadius: "8px",
  };

  const history = useHistory();

  const showComments = (id) => {
    const url = `postDetail/${id}`;
    history.push(url);
  };
  return (
    <div style={postStyle}>
      <h3>ID: {id}</h3>
      <h2>Tittle: {title}</h2>
      <p>Body: {body}</p>
      <button onClick={() => showComments(id)}>Show Comments</button>
    </div>
  );
};

export default Post;
