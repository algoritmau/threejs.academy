import { useTheme } from 'next-themes'
import Icon from './Icon'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(`${theme === 'light' ? 'dark' : 'light'}`)
    localStorage.theme = `${theme === 'light' ? 'dark' : 'light'}`
  }

  return (
    <button
      className="w-5 h-5 p-0.5 flex justify-center items-center"
      onClick={handleClick}
    >
      {theme === 'light' ? <Icon name="sun" /> : <Icon name="moon" />}
    </button>
  )
}
