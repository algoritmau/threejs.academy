import { useTheme } from 'next-themes'
import useMounted from '~/hooks/useMounted'
import Icon from './Icon'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const toggleIsMounted = useMounted()

  const handleClick = () => {
    setTheme(`${theme === 'light' ? 'dark' : 'light'}`)
    localStorage.theme = `${theme === 'light' ? 'dark' : 'light'}`
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-5 h-5 p-0.5 flex justify-center items-center"
      onClick={handleClick}
    >
      {toggleIsMounted && theme === 'light' ? (
        <Icon name="sun" />
      ) : (
        <Icon name="moon" />
      )}
    </button>
  )
}
