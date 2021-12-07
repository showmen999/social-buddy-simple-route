import React from "react";

const Comments = (props) => {
  const { name, email } = props.comment;
  return (
    <div>
      <h5>User: {name}</h5>
      <h5>Email: {email}</h5>
    </div>
  );
};

export default Comments;
