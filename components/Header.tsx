import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">MyFancySite</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
