import { useState } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

import menuOptionsEnglish from '~/locales/menu/en.menu'
import menuOptionsSpanish from '~/locales/menu/es.menu'

import slugify from 'lib/slugify'

import Icon from './Icon'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { locale } = useRouter()
  const menuOptions = locale === 'en' ? menuOptionsEnglish : menuOptionsSpanish

  return (
    <div className="tablet-l:hidden">
      <button
        className={`w-7 h-7 bg-gray flex justify-center items-center rounded-full fixed bottom-3 tablet-s:bottom-7 right-3 tablet-xs:right-5 tablet-s:right-7 z-30 transition-all`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <Icon name="cancel" /> : <Icon name="menu" />}
      </button>
      <nav
        className={`fixed top-0 ${
          isOpen ? 'left-0 flex flex-col gap-5' : '-left-full hidden'
        } p-4 overflow-y-scroll bg-black dark:bg-white text-white dark:text-black w-3/4 tablet-xs:w-3/5 tablet-s:w-1/2 h-100v z-20 transition-all duration-300`}
      >
        {menuOptions.map((menuOption) => {
          const linkHref = `${menuOption.canonical}/${slugify(
            menuOption.title
          )}`

          return (
            <ul key={menuOption.id} className="flex flex-col gap-1">
              <Link href={linkHref}>
                <a>
                  <h4 className="uppercase text-body-copy-small mb-0.5">
                    {menuOption.title}
                  </h4>
                </a>
              </Link>
              {menuOption.options.map((option, i) => {
                const optionLinkHref = `${menuOption.canonical}/${slugify(
                  option
                )}`

                return (
                  <Link href={optionLinkHref} key={i}>
                    <a>
                      <li className="pl-1 text-gray">{option}</li>
                    </a>
                  </Link>
                )
              })}
            </ul>
          )
        })}
      </nav>
      <div
        className={`absolute top-0 ${
          isOpen
            ? 'left-3/4 tablet-xs:left-2/5 tablet-s:left-1/2 block'
            : '-left-full hidden'
        }  bg-black bg-opacity-70 w-1/4 tablet-xs:w-2/5 tablet-s:w-1/2 h-100v z-20 transition-all duration-300`}
      ></div>
    </div>
  )
}

export default MobileNav
