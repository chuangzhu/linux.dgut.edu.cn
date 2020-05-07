import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default () => (
  <Layout title="404 Not Found">
    <article className="article">
      <h1>🙃 404 Not Found</h1>
      <p>Thε pДgε y0μ'Яe ЮOKIn' før do∃ηs't ∃χi5t.</p>
      <Link href="/">&lt; Back to main page</Link>
    </article>
  </Layout>
)
