import { useEffect, useState } from "react";
import Post from "../Posts/Post";
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>This is Home Components</h1>
      <h3>I have got: {posts.length}</h3>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
};

export default Home;
