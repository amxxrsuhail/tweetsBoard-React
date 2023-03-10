import classes from "./NewPost.module.css";

// the props can be also given as below so that u dont have to use props. for calling the function
// function NewPost({onBodyChange,onAuthorChange,onCancel,onSubmit})
function NewPost(props) {
  // all this is done so that the react runs the fucntion again after the use inputs and chamges the value
  return (
    <form className={classes.form}>
      <p>
        {/* htmlfor is used instead of for which is used in html  */}
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={props.onBodyChange}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <textarea
          type="text"
          id="name"
          onChange={props.onAuthorChange}
        ></textarea>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button onClick={props.onSubmit}>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
