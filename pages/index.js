import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>John Nzivo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>I am</p>
        <h1 className={styles.title}>
          <a href="https://github.com/nzivo">John Nzivo!</a>
        </h1>

        <p className={styles.description}>
          A {' '}
          <code className={styles.code}>Front-end Developer</code>
        </p>
        
        <p className={styles.description}>
          I love coding and designing interfaces and great products.
          <br/>
          My portfolio is currently underway and I will be updating you soon.
        </p>
    
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
