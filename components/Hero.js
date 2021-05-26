import { useRouter } from 'next/router'

import Button from './Button'
import InlineLink from './InlineLink'

import englishContent from '~/locales/hero/en.hero'
import spanishContent from '~/locales/hero/es.hero'

export default function Hero() {
  const { locale } = useRouter()
  const content = locale === 'en' ? englishContent : spanishContent

  return (
    <section className="w-full h-64v flex flex-col justify-center items-center">
      <h1 className="mb-1 text-center font-bold text-heading-1-xs phone-m:text-heading-1-s tablet-s:text-heading-1-m tablet-l:text-heading-1-l desktop-s:text-heading-1-xl">
        {content.title}
      </h1>
      <p className="text-center text-gray-lt-txt dark:text-gray-dt-txt w-4/5 mb-4 mx-auto">
        {content.tagline}
      </p>
      <div className="flex flex-col justify-center items-center gap-3">
        <Button text={content.primaryButtonText} />
        <InlineLink
          text={content.secondaryButtonText}
          to="#"
          isExternal={false}
          isRawLink={true}
        />
      </div>
    </section>
  )
}
