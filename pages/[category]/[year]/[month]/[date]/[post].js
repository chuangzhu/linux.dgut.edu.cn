import React from 'react'
import Layout from '../../../../../components/Layout'
import { getPostsBrief } from '../../../../../src/posts-brief'

export default function PostPage(props) {
  return (
    <Layout>
      <h1>Post page!</h1>
    </Layout>
  )
}

export async function getStaticPaths() {
  const postsBrief = await getPostsBrief()
  const paths = postsBrief.map(({ params }) => ({
    params: {
      category: params[0],
      year: params[1],
      month: params[2],
      date: params[3],
      post: params[4]
    }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps() {
  return { props: {} }
}
