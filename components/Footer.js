import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      fontFamily: 'Roboto, sans-serif',
    }}>
      <div style={{ fontSize: '1.2rem' }}>
        <Link href="https://t.me/dgutlug">
          <a><span className="mdi mdi-telegram" />Telegram</a>
        </Link>
        <Link href="https://jq.qq.com/?_wv=1027&k=5Tw7Nao">
          <a><span className="mdi mdi-qqchat" />QQ</a>
        </Link>
        <Link href="https://github.com/dglinux">
          <a><span className="mdi mdi-github" />GitHub</a>
        </Link>
        <style jsx>{`
          a {
            margin-right: 16px;
            color: var(--mdc-theme-primary);
            text-decoration: none;
          }
          .mdi { margin-right: 3px; font-size: 1.5rem; }
          .mdi::before { vertical-align: middle }
        `}</style>
      </div>
      <div style={{
        fontSize: '.8rem',
        color: 'rgba(0, 0, 0, 0.43)'
      }}>Copyleft 2020 dglinux. Some rights reserved.</div>
    </footer>
  )
}