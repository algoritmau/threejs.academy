import { useRouter } from 'next/router'

import Button from './Button'
import InlineLink from './InlineLink'

import englishContent from '~/locales/hero/en.hero'
import spanishContent from '~/locales/hero/es.hero'

export default function Hero() {
  const { locale } = useRouter()
  const content = locale === 'en' ? englishContent : spanishContent

  return (
    <section className="w-full h-640px py-10 tablet-l:py-12 desktop-xs:py-16 px-3 tablet-xs:px-5 tablet-s:px-7 tablet-l:px-8 desktop-xs:px-9 desktop-s:px-10 flex flex-col justify-center items-center hero bg-hero-pattern-mobile desktop-s:bg-hero-pattern-desktop desktop-l:bg-hero-pattern-desktop-xl bg-cover">
      <h1 className="mb-2 text-center font-bold text-heading-1-xs phone-m:text-heading-1-s tablet-s:text-heading-1-m tablet-l:text-heading-1-l desktop-s:text-heading-1-xl z-10">
        {content.title}
      </h1>
      <p className="text-center text-gray-lt-txt dark:text-gray-dt-txt w-4/5 mb-5 tablet-s:mb-8 mx-auto text-body-copy-m tablet-s:text-body-copy-l z-10">
        {content.tagline}
      </p>
      <div className="flex flex-col justify-center items-center gap-3 z-10">
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
