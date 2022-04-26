import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
      <Layout pagina='- Inicio'>
        <h1>Desde index</h1>
      </Layout>
  )
}

export default Home
