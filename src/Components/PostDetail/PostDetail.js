import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comments from "../Comments/Comments";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);
  return (
    <div>
      <h2>This is Post Detail of: {id}</h2>
      <h3>User Id: {post.userId}</h3>
      <h4>Title: {post.title}</h4>
      <p>Post Body: {post.body}</p>
      <h5>No..of Comments: {comments.length}</h5>
      {comments.map((comment) => (
        <Comments comment={comment}></Comments>
      ))}
    </div>
  );
};

export default PostDetail;
