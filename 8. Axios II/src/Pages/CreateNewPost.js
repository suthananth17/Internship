import React, { useState } from "react";
import "./CreateNewPost.css";

function CreateNewPost(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBody, setenteredBody] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const bodyChageHandler = (event) => {
    setenteredBody(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const postData = {
      title: enteredTitle,
      body: enteredBody,
    };

    props.onSavePostData(postData);

    setEnteredTitle("");
    setenteredBody("");
  };

  return (props.trigger) ? (
    <div>
      <div className="containerPost">
        <div className="expenseContainer">
          
          <form onSubmit={submitHandler}>
          <div className="popupInner">
            <button onClick={() => props.setTrigger(false)}> close</button>
            {props.children}
          </div>
            <div className="expenseControl">
              <div className="expenseControl">
                <label>Title</label>
                <input
                  type="text"
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                />
              </div>
              <div className="expenseControl">
                <label>Body</label>
                <input
                  type="text"
                  value={enteredBody}
                  onChange={bodyChageHandler}
                />
              </div>
            </div>
            <div className="expenseActions">
              <button  type="submit">Add Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : "";
}

export default CreateNewPost;
