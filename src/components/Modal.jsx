import classes from "./Modal.module.css";

function Modal(props) {
  return (
    // below empty tags is a feature of react so that we can wrap and return all as one 
    <>
      <div className={classes.backdrop}/>
      {/* children is used to print watever is between the wrap */}
      <dialog open className={classes.modal}>{props.children}</dialog>
    </>
  );
}

export default Modal;