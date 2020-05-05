import React from 'react'
import Layout from '../components/Layout'
import Card from '@material/react-card'
import CardPrimaryContent from '../components/CardPrimaryContent'
import { Headline4, Headline5, Subtitle2 } from '@material/react-typography'

const ServiceCard = ({ title, children, icon, href }) => (
  <Card style={{ marginBottom: 12 }}>
    <CardPrimaryContent style={{ padding: 16 }} href={href}>
      <span className={`mdi mdi-${icon}`} />
      <Headline5 style={{ margin: 0, display: 'inline' }}>{title}</Headline5>
      <Subtitle2 style={{ margin: 0, opacity: 0.57 }}>
        {children}
      </Subtitle2>
    </CardPrimaryContent>
  </Card>
)

export default function Index() {
  return (
    <Layout>
      <Card style={{ padding: '16px 16px 0 16px' }}>
        <article className="article">
          <p>
            东莞理工学院 GNU/Linux 协会成立于 2005 年 10 月，是在黄培灿老师的带领下，联合在校的 GNU/Linux 爱好者发起并组成的一个全校性群众团体技术型协会。成立 GNU/Linux 协会的目的在于联合东莞理工的 GNU/Linux 使用者，搭建信息交流共享的平台，宣传自由软件的精神，提高自由软件开源社区文化氛围，推广自由软件在校园的应用。推动整个学校开源事业的发展。
          </p>
          <p>
            有点儿无聊。咱们来换一种说法：
          </p>
          <p>
            GNU/Linux 协会是 <b>研讨/宣传开放源代码的</b>，<b>给DGUT校内/校外学生一个交流平台的</b>，<b>一起共同进步的</b> 平台。
          </p>
          <p>
            在这里，你可以学会/分享所有和自由软件世界相关的东西，包括但不限于怎么用（几乎）学习曲线最抖的编辑器：
          </p>
          <p className="img-container">
            <img src="/assets/vim-is-hard.png" alt="Vim is hard" />
          </p>
          <p>
            学习使用大名鼎鼎的 shell 指令：
          </p>
          <p className="img-container">
            <img src="/assets/shell-is-hard.png" alt="Shell is hard" />
          </p>
          <p>
            了解和使用各种大名鼎鼎的开源软件：
          </p>
          <p className="img-container">
            <img src="/assets/oss-icons.png" alt="OSS icons" />
          </p>
          <p>
            GNU/Linux 协会所追求的是一个共同探讨、宣传开放文化的平台。自 2005 年来已往来 14 个春秋，我们本着开放的精神一同携手走进 Linux 世界，在计算机世界中，享受着技术所带来的乐趣。在这里，我们有着共同的向往，憧憬着自由开放精神的点滴，追求着充满激情的世界。在这里，我们抛开浑浊杂念，追求着我们共同热爱的开源文化，崇尚着自由的技术世界以及那头脑风暴式的探讨。我们一直以来，本着开源精神的理念，向全校推崇自由开源开放的文化，尽自己所能去感知更多的 Linux 爱好者，共同去探讨我们所憧憬向往的技术世界！
          </p>
        </article>
        <style jsx>{`
          .img-container { max-width: 40rem; margin: 0 auto; }
        `}</style>
      </Card>
      <Headline5 style={{ margin: '32px 0 12px 0' }}>资源</Headline5>
      <ServiceCard title="GNU/Linux 协会镜像源" icon="minidisc" href="https://mirrors.dgut.edu.cn">
        依托于东莞理工学院，是教育网华南地区唯二的公网开源镜像站(另一为 SCAU Mirrors)。
      </ServiceCard>
      <ServiceCard title="GNU/Linux 协会 Git 服务器" icon="git" href="https://git.dglinux.com">
        GNU/Linux Git 服务器是架设在校内，意图给DGUT学子使用。目前不在线。
      </ServiceCard>
      <ServiceCard title="GNU/Linux 协会授课直播" icon="presentation-play" href="https://linux.dgut.edu.cn/live/">
        来看直播呀！
      </ServiceCard>
      <ServiceCard title="GNU/Linux 协会 DoH" icon="dns" href="https://linux.dgut.edu.cn/dns-query">
        快速，安全的 DoH 服务。
      </ServiceCard>
    </Layout>
  )
}
