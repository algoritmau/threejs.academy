import fs from 'fs'
import { join } from 'path'

export default function getLessonIds() {
  const lessonsDirectory = join(process.cwd(), 'lessons/intro')
  const fileNames = fs.readdirSync(lessonsDirectory)

  const lessonSlugs = fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ''),
      },
    }
  })

  return lessonSlugs
}
