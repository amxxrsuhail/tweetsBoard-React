import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="ameer" body="this is a brushup of react" />

      <Post author="Suhail" body="I love react" />

      <Post author="unknown" body="studying react" />
    </ul>
  );
}

export default PostList;
