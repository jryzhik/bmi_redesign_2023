import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Default_nav_bar from '../components/navigation/default_nav_bar';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
