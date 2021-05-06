import { useRouter } from 'next/router'

import Button from './Button'

import englishContent from '~/locales/hero/en.hero'
import spanishContent from '~/locales/hero/es.hero'

export default function Hero() {
  const { locale } = useRouter()
  const content = locale === 'en' ? englishContent : spanishContent

  return (
    <section className="w-full h-64v flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-5xl mb-1">{content.title}</h1>
      <p className="text-center w-4/5 mb-4 mx-auto">{content.tagline}</p>
      <div className="flex justify-center items-center gap-1">
        <Button main={true} text={content.primaryButtonText} />
        <Button main={false} text={content.secondaryButtonText} />
      </div>
    </section>
  )
}
