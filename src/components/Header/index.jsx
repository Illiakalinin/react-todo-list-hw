import React from 'react';
import styles from './Header.module.sass';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Todo List</h1>
    </div>
  );
};

export default Header;