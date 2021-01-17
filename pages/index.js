import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useAuth } from '../pages/lib/auth'
import { auth } from 'firebase'

export default function Home() {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>My Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, Cool World!!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <button onClick={(e) => auth.signinWithGitHub()} >Sign In</button>
        <div>
          {auth?.user?.email}
        </div>
        {auth?.user && (
          <button onClick={(e) => auth.signout()} >Sign Out</button>
        )}
        <article>test1</article>
        <aside>test2</aside>
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
