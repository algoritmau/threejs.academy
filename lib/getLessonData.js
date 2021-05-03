import fs from 'fs'
import { join } from 'path'
const mdx = require('@mdx-js/mdx')
import matter from 'gray-matter'

export default async function getLessonData(slug) {
  const lessonsDirectory = join(process.cwd(), 'lessons/intro')
  const fullPath = join(lessonsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data: metadata } = matter(fileContents)

  return {
    slug,
    metadata,
  }
}
