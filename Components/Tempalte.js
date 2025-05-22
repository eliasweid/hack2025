'use client';
import Link from 'next/link';
import styles from './Template.module.css';

export default function Teamplate( { title, text, link = "" }) {
    return (
        <Link href={link}>
        <div className={styles.wrapper}>
        <div className={styles.box}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
      </Link>
      
    );
  }