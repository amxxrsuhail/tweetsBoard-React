import { useState } from "react";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";
import Modal from "./components/Modal";

function App() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalVisiblity, setModalVisibility] = useState(true);

  function bodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  function modalHandler() {
    setModalVisibility(false);
  }

  return (
    // its important to return all components inside one html tag
    <main>
      {/* here latest form of conditional operator is applied to exit dialog box upon click on the backdrop  */}
      {modalVisiblity ? (
        <Modal toClose={modalHandler}>
          <NewPost onBodyChange={bodyHandler} onAuthorChange={authorHandler} />
        </Modal>
      ) : null}
      <PostList newBody={enteredBody} newAuthor={enteredAuthor} />
    </main>
  );
}

export default App;
