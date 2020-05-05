import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import matter from 'gray-matter'
const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)

export async function getPostsBrief() {
  const dir = path.join(process.cwd(), 'posts')
  const fileNames = (await readdir(dir)).reverse()
  const allBriefs = fileNames.map(async file => {
    const content = await readFile(path.join(dir, file), 'utf8')
    const matterResult = matter(content)
    // e.g. 2020-4-22-webgame.markdown -> 2020/04/22/webgame
    const splitted = file.split('.')[0].split('-')
    const params = [
      matterResult.data.category,
      splitted[0],
      splitted[1],
      splitted[2],
      splitted[3]
    ]
    return {
      params,
      link: `/${params.join('/')}`,
      ...(matterResult.data)
    }
  })
  return Promise.all(allBriefs)
}

export async function getPost(params) {
  const fileName = [
    params.year,
    params.month,
    params.date,
    params.post
  ].join('-') + '.markdown'
  const filePath = path.join(process.cwd(), 'posts', fileName)
  const content = await readFile(filePath)
  const matterResult = matter(content)
  return {
    content: matterResult.content,
    data: matterResult.data
  }
}