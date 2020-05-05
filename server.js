#!/usr/bin/env node

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.get('/blog.html', (req, res) => {
      app.render(req, res, '/blog')
    })

    server.get('/:category/:year/:month/:date/:post.html', (req, res) => {
      const rewrite = `/${Object.values(req.params).join('/')}`
      app.render(req, res, rewrite)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
  })
