import Head from 'next/head'
import Styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from './components/header'
import Content from './components/content'
import useSWR from 'swr'

export default function Home() {
  let title = 'gorilla'
  const fetcher = () => fetch('/api/message')
  const {data, error} = useSWR('/api/message', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Content>
    <Head>
      <title>{ title }</title>
    </Head>
    <Header title={ title } />
    <p>{data.message}</p>
    <div>
      <Link href="/about"><button>Gorilla</button></Link>
    </div>
    <style jsx>{`
      h1 {
        color: white;
      }
      `}</style>
    </Content>
  )
}