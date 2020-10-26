import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [temperature, setTemperature] = useState(-9999)

  useEffect(() => {
    const t = setInterval(() => {
      fetch(`/data.json`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => setTemperature(res.temperature / 1000))

    }, 1000);
    return () => {
      clearTimeout(t)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Temperature : {temperature}
      </main>
    </div>
  )
}
