import NewPost from "./components/NewPost";
import PostList from "./components/PostList";

function App() {
  return (
    // its important to return all components inside one html tag
    <main>
      <NewPost />
      <PostList />
    </main>
  );
}

export default App;
