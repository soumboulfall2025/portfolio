import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Bienvenue sur mon portfolio</h1>
      <Image src="/sf.jpeg" alt="Photo de profil" width={150} height={150} />
      <p>Je suis développeur full-stack passionné par React, Node.js et Next.js.</p>
    </div>
  );
}
