import { useState } from "react";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";
import Modal from "./components/Modal";
import Header from "./components/Header";
// import classes from "./index.css"

function App() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [posts, setPosts] = useState([]);

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
  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    addPostHandler(postData);
    hideModalHandler();
  }

  return (
    // its important to return all components inside one html tag
    <>
      <Header toShow={showModalHandler} />
      <main>
        {/* here latest form of conditional operator is applied to exit dialog box upon click on the backdrop  */}
        {modalIsVisible ? (
          <Modal toClose={hideModalHandler}>
            <NewPost
              onBodyChange={bodyHandler}
              onAuthorChange={authorHandler}
              onCancel={hideModalHandler}
              onSubmit={submitHandler}
            />
          </Modal>
        ) : null}
        <ul>
          {posts.map((post) => (
            <PostList
              key={post.body}
              newBody={post.body}
              newAuthor={post.author}
            />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
