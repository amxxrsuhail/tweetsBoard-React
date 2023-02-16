import Post from "./components/Post";

function App() {
  return (
    // its important to return all components inside one html tag
    <main>
      <Post author="ameer" body="this is a brushup of react" />
      <Post author="Suhail" body="I love react" />
      <Post author="unknown" body="studying react" />
    </main>
  );
}

export default App;
