import Post from "./Post";
import classes from "./PostList.module.css";

function PostList(props) {
  return (
    <ul className={classes.posts}>
      <Post author={props.newAuthor} body={props.newBody} />
      <Post author="Ameer" body="I love React" />
    </ul>
  );
}

export default PostList;
