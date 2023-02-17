import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost() {
  // all this is done so that the react runs the fucntion again after the use inputs and chamges the value
  const [enteredBody, setEnteredBody] = useState("");

  function inputHandler(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        {/* htmlfor is used instead of for which is used in html  */}
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={inputHandler}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <textarea type="text" id="name"></textarea>
        <p>{enteredBody}</p>
      </p>
    </form>
  );
}

export default NewPost;
