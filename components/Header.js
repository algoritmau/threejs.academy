import { useRouter } from 'next/router'
import Link from 'next/link'

import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import Icon from './Icon'

export default function Header() {
  const router = useRouter()
  const { locale } = router
  const changeLanguage = (e) => {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <header className="w-full h-12 tablet-l:h-16 flex justify-between items-center globalPaddingX">
      <Link href="/">
        <a className="w-min p-1 -ml-1 flex justify-between items-center">
          <Logo />
        </a>
      </Link>
      <div className="flex justify-center items-center">
        <form className="w-16 h-6 mr-1 p-0.5">
          <label htmlFor="search">
            <input
              className="w-full h-full p-1 rounded-md"
              id="search"
              type="text"
              placeholder="Search"
            />
          </label>
        </form>
        <label
          className="flex justify-between items-center"
          htmlFor="language-toggle"
        >
          <Icon name="globe" />
          <select
            id="language-toggle"
            onChange={changeLanguage}
            defaultValue={locale}
            className="py-1 pr-1 pl-0.5 appearance-none text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="en">
              en
            </option>
            <option className="text-black" value="es">
              es
            </option>
          </select>
        </label>
        <ThemeToggle />
      </div>
    </header>
  )
}
