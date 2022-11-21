import React, { useState, useEffect } from "react";
import api from "./api/Posts";
import "../src/index.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/Posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <article className="post">
            <h2>{post.id}</h2>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>

            <p className="postBody">{post.body}</p>
          </article>
        );
      })}
    </div>
  );
}

export default App;
