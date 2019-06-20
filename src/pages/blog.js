import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { graphql, useStaticQuery, Link } from 'gatsby'

import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog"></Head>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, i) => (
          <li key={i} className={blogStyles.post}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h1>{edge.node.title}</h1>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
      <p>Posts will show up here later on.</p>
    </Layout>
  )
}

export default BlogPage
