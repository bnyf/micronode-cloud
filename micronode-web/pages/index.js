import Head from 'next/head'
import styles from '../styles/utils.module.css'
import JsCodeBlock from '../lib/jsCodeBlock'
import { getCodeData } from '../lib/jsCode'

export default function Home({ codeList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>micronode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to micronode!
        </h1>

        <p className={styles.description}>
          Get started by downloading the js-app to IoT device.
        </p>

        <div className={styles.grid}>
          {Object.entries(codeList).map(([key, value]) => (
            <JsCodeBlock key={key} name={key} description={value}>
            </JsCodeBlock>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Next.js
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const codeList = getCodeData();
  return {
    props: {
      codeList
    }
  }
}