import React from 'react'
import Card from '@material/react-card'
import Layout from '../../../../../components/Layout'
import { Headline4 } from '@material/react-typography'
import ReactMarkdown from 'react-markdown'
import { getPostsBrief, getPost } from '../../../../../src/posts-brief'
import { ChipSet, Chip } from '@material/react-chips'

export default function PostPage({ post, date }) {
  return (
    <Layout title={post.data.title}>
      <Card style={{ padding: 16 }}>
        <div style={{ paddingBottom: 24 }}>
          <h1 className="article-title">{post.data.title}</h1>
          <ChipSet>
            <Chip label={date.join('/')} leadingIcon={<span className="mdi mdi-clock-outline" />} />
            <Chip label={post.data.category} leadingIcon={<span className="mdi mdi-tag-outline" />} />
            <Chip label={post.data.author} leadingIcon={<span className="mdi mdi-account-edit-outline" />} />
          </ChipSet>
        </div>
        <article className="article">
          <ReactMarkdown source={post.content} />
        </article>
      </Card>
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

export async function getStaticProps({ params }) {
  const post = await getPost(params)
  return { props: { post, date: [params.year, params.month, params.date] } }
}
