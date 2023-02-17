import { useState } from "react";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";
import Modal from "./components/Modal";

function App() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    // its important to return all components inside one html tag
    <main>
      <Modal >
        <NewPost onBodyChange={bodyHandler} onAuthorChange={authorHandler} />
      </Modal>
      <PostList newBody={enteredBody} newAuthor={enteredAuthor} />
    </main>
  );
}

export default App;
