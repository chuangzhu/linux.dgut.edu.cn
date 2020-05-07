import React from 'react'
import { Headline4, Headline5 } from '@material/react-typography'
import { Button as _Button } from '@material/react-button'
import Head from 'next/head'
import Link from 'next/link'
import Footer from './Footer'

const Button = React.forwardRef(_Button)

const imageHeight = 2.5 + 2 - (2.5 - 2.125) / 2 - (2 - 1.5) / 2
const Brand = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  }}>
    <img src="/assets/logo.png" style={{
      height: `${imageHeight}rem`,
      marginRight: 8
    }} />
    <div style={{ width: '13rem' }}>
      <Headline4 style={{ margin: 0, width: '100%' }}>东莞理工学院</Headline4>
      <Headline5 style={{
        margin: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        {'GNU/Linux 协会'.split('').map((l, i) => <span key={i}>{l}</span>)}
      </Headline5>
    </div>
  </div>
)

const Nav = () => (
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }}>
    <Link href="/" passHref><Button>Home</Button></Link>
    <Link href="/blog.html" passHref><Button>Blog</Button></Link>
    <Button href="https://mirrors.dgut.edu.cn">Mirrors</Button>
  </div>
)

export default function Layout({ children, title }) {
  return (
    <div style={{ margin: 16, marginTop: 36 }}>
      <Head>
        <meta name="theme-color" content="#efefef" />
        <title>{title && `${title} - `}DGUT GNU/Linux 协会</title>
        <link rel="icon" type="image/png" href="/assets/logo.png" />
      </Head>
      <div className="layout-outer">
        <div className="brand-n-nav">
          <Brand />
          <Nav />
        </div>
        <div className="layout-inner">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}