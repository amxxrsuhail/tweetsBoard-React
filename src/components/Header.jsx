import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './Header.module.css';

function Header(props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Tweet Board
      </h1>
      <p>
        <button className={classes.button} onClick={props.toshow}>
          <MdPostAdd size={18} />
          New Tweet
        </button>
      </p>
    </header>
  );
}

export default Header;