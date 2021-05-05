import Link from 'next/link'

import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import Icon from './Icon'

export default function Header() {
  return (
    <header className="w-full h-10 px-3 flex justify-between items-center">
      <Link href="/">
        <a className="w-min p-1 -ml-1 flex justify-between items-center">
          <Logo />
        </a>
      </Link>
      <div className="flex w-3/4 justify-between items-center">
        <form className="w-16 h-6 p-0.5">
          <label htmlFor="search">
            <input
              className="w-full h-full p-1 rounded-md"
              id="search"
              type="text"
              placeholder="Search"
            />
          </label>
        </form>
        <div className="w-10 h-5 flex justify-between items-center">
          <ThemeToggle />
          <a
            href="https://github.com/spaceinvadev/three.scholl"
            target="_blank"
            rel="_noreferrer"
            className="w-5 p-1 flex justify-center items-center"
          >
            <Icon name="github" />
          </a>
        </div>
      </div>
    </header>
  )
}
