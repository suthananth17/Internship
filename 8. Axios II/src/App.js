import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "./api/Axios";
import Header from "./Components/navBar/Header";
import CreateNewPost from "./Pages/CreateNewPost";
import ViewPost from "./Pages/ViewPost";
import "../src/index.css";
import "./App.css";

function App() {
  //axios interceptors
  api.interceptors.request.use((request) => {
    console.log(request);
    request.headers.author = "Suthananth K";
    return request;
  });

  api.interceptors.response.use((response) => {
    console.log(response);
    return response;
  });

  const [posts, setPosts] = useState([""]);

  //Fetch Pots
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

  //Post Posts

  //getting data from new post
  const onSavePostDataHandler = async (enteredPostData) => {
    const postData = {
      ...enteredPostData,
      id: Math.random().toString(),
    };
    const newPost = postData;

    const getPosts = async () => {
      try {
        const response = await api.post("/posts", newPost);
        const allPosts = [...posts, response.data];
        setPosts(allPosts);
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
    getPosts();
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
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

  return (
    <div>
      <Header/>
      <CreateNewPost onSavePostData={onSavePostDataHandler} />{" "}
      <Route path="/viewposts">
        <div className="container">
          {posts.map((post) => {
            return (
              <ViewPost
                key={`${post.title} ${post.id}`}
                id={post.id}
                title={post.title}
                body={post.body}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </Route>
    </div>
  );
}

export default App;
