import { useRouter } from 'next/router'

import englishContent from '~/locales/footer/en.footer'
import spanishContent from '~/locales/footer/es.footer'

export default function Footer() {
  const { locale } = useRouter()
  const content = locale === 'en' ? englishContent : spanishContent

  return (
    <footer className="w-full h-16 p-3 flex justify-center items-center">
      <small className="text-center">{content.credits}</small>
    </footer>
  )
}
