import React from 'react'
import Layout from '../components/Layout'
import { Body1 } from '@material/react-typography'
import Card from '@material/react-card'
import { getPostsBrief } from '../src/posts-brief'

export default function Index(props) {
  return (
    <Layout>
      <Card style={{ padding: '0 16px' }}>
        <Body1>
          东莞理工学院 GNU/Linux 协会成立于 2005 年 10 月，在黄培灿老师的带领下，联合在校的 GNU/Linux 爱好者发起并组成的一个全校性群众团体技术型协会。成立 GNU/Linux 协会的目的在于联合东莞理工的 GNU/Linux 使用者，搭建信息交流共享的平台，宣传自由软件的精神，提高自由软件开源社区文化氛围，推广自由软件在校园的应用。推动整个学校开源事业的发展。
        </Body1>
      </Card>
    </Layout>
  )
}

// getStaticProps is always executed on server side
export async function getStaticProps() {
  const postsBrief = await getPostsBrief()
  return { props: { postsBrief } }
}
