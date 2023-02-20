import { useState } from "react";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";
import Modal from "./components/Modal";
import Header from "./components/Header";

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
        {posts.length > 0 && (
          <ul>
            {posts.map((post) => (
              <PostList
                key={post.body}
                newBody={post.body}
                newAuthor={post.author}
              />
            ))}
          </ul>
        )}

        {posts.length === 0 && (
          <div style={{ textAlign: "center", color: "white" }}>
            <h3>There are no tweets yet.</h3>
            <p>Start adding some!</p>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
