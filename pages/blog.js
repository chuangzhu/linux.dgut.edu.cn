import React from 'react'
import Card from '@material/react-card'
import { Headline6, Body2 } from '@material/react-typography'
import CardPrimaryContent from '../components/CardPrimaryContent'
import Layout from '../components/Layout'
import { getPostsBrief } from '../src/posts-brief'
import Link from 'next/link'

export default function Blog(props) {
  return (
    <Layout title="Blog">
      {props.postsBrief.map(brief => (
        <Card style={{ marginBottom: 16 }} key={brief.link}>
          <Link
            href="/[category]/[year]/[month]/[date]/[post]"
            as={brief.link}
            passHref>
            <CardPrimaryContent style={{ padding: 16 }}>
              <Headline6 style={{ margin: 0 }}>{brief.title}</Headline6>
              {brief.excerpt && <Body2 style={{
                marginBottom: 0,
                color: 'rgba(0, 0, 0, 0.57)'
              }}>{brief.excerpt}</Body2>}
            </CardPrimaryContent>
          </Link>
        </Card>
      ))}
    </Layout>
  )
}

// getStaticProps is always executed on server side
export async function getStaticProps() {
  const postsBrief = await getPostsBrief()
  return { props: { postsBrief } }
}
