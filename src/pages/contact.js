import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact"></Head>
      <h1>Contact me on</h1>
      <h2>
        <a
          rel="noopener noreferrer"
          href="http://www.google.com"
          target="_blank"
        >
          on Google?
        </a>
      </h2>
    </Layout>
  )
}

export default ContactPage
