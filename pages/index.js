import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { w3cwebsocket } from 'websocket'

const client = new w3cwebsocket('ws://go-rpi.herokuapp.com/ws')

export default function Home() {
  const [temperature, setTemperature] = useState(-9999)

  useEffect(() => {
    client.onopen = () => {
      console.log("connected");
    }

    client.onmessage = message => {
      setTemperature(message.data)
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
