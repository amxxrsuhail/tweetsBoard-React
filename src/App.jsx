import { useState } from "react";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";
import Modal from "./components/Modal";
import Header from "./components/Header";

function App() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function bodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    // its important to return all components inside one html tag
    <>
      <Header toShow={showModalHandler}/>
      <main>
        {/* here latest form of conditional operator is applied to exit dialog box upon click on the backdrop  */}
        {modalIsVisible ? (
          <Modal toClose={hideModalHandler}>
            <NewPost
              onBodyChange={bodyHandler}
              onAuthorChange={authorHandler}
              onCancel={hideModalHandler}
            />
          </Modal>
        ) : null}
        <PostList newBody={enteredBody} newAuthor={enteredAuthor} />
      </main>
    </>
  );
}

export default App;
