import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import React from 'react'
const readdir = promisify(fs.readdir)

export default function Index(props) {
  return (
    props.fileNames.map(file => <h1>{file}</h1>)
  )
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'posts')
  const fileNames = await readdir(dir)
  return {
    props: {
      fileNames
    }
  }
}
