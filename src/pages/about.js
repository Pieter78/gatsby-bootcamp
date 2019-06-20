import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"></Head>
      <h1>Pieter Overbeek</h1>
      <h2>Ik werk bij de Belfabriek</h2>
      <p>
        Contact gegevens hier: <Link to="/contact">KLIK!</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
