import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Footer } from '@/components/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    console.log('マウント時の処理')
    // DOMを直接アクセスするのは基本NG(その場合useRefを使用)
    document.body.style.backgroundColor = 'lightblue'

    // return文の中身はアンマウント時の挙動を制御
    return () => {
      console.log('アンマウント時の処理')
      document.body.style.backgroundColor = ''
    }
  }, [])
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
          <h1>Hello about.js</h1>
        </div>
        <Footer/>
      </main>
    </>
  )
}
