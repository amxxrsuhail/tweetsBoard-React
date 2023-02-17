import classes from "./Modal.module.css";

function Modal(props) {
  return (
    // below empty tags is a feature of react so that we can wrap and return all as one
    <>
      <div className={classes.backdrop} onClick={props.toClose} />
      {/* children is used to print watever is between the wrap */}
      {/* open attribute is provided to keep the dialogue box open  */}
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
