import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../component/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>The Wizkid Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </Layout>
  )
}
