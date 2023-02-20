import Post from "./Post";
import classes from "./PostList.module.css";

function PostList(props) {
  return (
    <ul className={classes.posts}>
      <Post author={props.newAuthor} body={props.newBody} />
    </ul>
  );
}

export default PostList;
