import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const lessonsDirectory = join(process.cwd(), 'lessons/intro')

export function getLessonSlugs() {
  return fs.readdirSync(lessonsDirectory)
}

export function getLessonBySlug(slug, fields = []) {
  const actualSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(lessonsDirectory, `${actualSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = actualSlug
    }

    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllLessons(fields = ['slug', 'title', 'lang']) {
  const slugs = getLessonSlugs()
  const lessons = slugs.map((slug) => getLessonBySlug(slug, fields))

  return lessons
}

export function getLessonsPaths() {
  const slugs = getLessonSlugs()

  const lessonPath = slugs.map((slug) => {
    return {
      params: {
        slug: slug.replace(/\.mdx$/, ''),
      },
    }
  })

  return lessonPath
}
