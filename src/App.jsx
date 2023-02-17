import { useState } from "react";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";

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
      <NewPost onBodyChange={bodyHandler} onAuthorChange={authorHandler} />
      <PostList newBody={enteredBody} newAuthor={enteredAuthor} />
    </main>
  );
}

export default App;
