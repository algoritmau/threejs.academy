import { string } from 'prop-types'

export default function Icon({ name }) {
  switch (name) {
    case 'cancel':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      )

    case 'menu':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      )

    case 'sun':
      return (
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 1.25a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0V2a.75.75 0 01.75-.75z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25 12a5.75 5.75 0 1111.5 0 5.75 5.75 0 01-11.5 0zM12 7.75a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5z"
            fill="currentColor"
          />
          <path
            d="M5.46 4.399a.75.75 0 00-1.061 1.06l.707.707a.75.75 0 101.06-1.06l-.707-.707zM22.75 12a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75zM19.601 5.46a.75.75 0 10-1.06-1.061l-.707.707a.75.75 0 101.06 1.06l.707-.707zM12 20.25a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75zM18.894 17.834a.75.75 0 10-1.06 1.06l.707.707a.75.75 0 101.06-1.06l-.707-.707zM3.75 12a.75.75 0 01-.75.75H2a.75.75 0 010-1.5h1a.75.75 0 01.75.75zM6.166 18.894a.75.75 0 00-1.06-1.06l-.707.707a.75.75 0 001.06 1.06l.707-.707z"
            fill="currentColor"
          />
        </svg>
      )

    case 'moon':
      return (
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4863 4.76792C7.72194 5.03144 4.75 8.16865 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C15.2079 19.25 17.9297 17.1662 18.8848 14.2787C18.1497 14.5824 17.3441 14.75 16.5 14.75C13.0482 14.75 10.25 11.9518 10.25 8.5C10.25 7.10086 10.7101 5.80909 11.4863 4.76792ZM3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C12.4496 3.25 12.8918 3.28398 13.3239 3.34962C13.6229 3.39503 13.8654 3.61553 13.9388 3.90886C14.0123 4.20219 13.9025 4.51095 13.6602 4.69194C12.4992 5.55935 11.75 6.94208 11.75 8.5C11.75 11.1234 13.8766 13.25 16.5 13.25C17.6342 13.25 18.6738 12.8534 19.4905 12.1906C19.7252 12.0002 20.0513 11.9692 20.3176 12.1121C20.584 12.255 20.7386 12.5437 20.7097 12.8446C20.2843 17.2812 16.5477 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12Z"
            fill="currentColor"
          />
        </svg>
      )

    case 'globe':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )

    case 'github':
      return (
        <svg
          className="w-3 h-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17 16"
          fill="none"
        >
          <g clipPath="url(githublogo)">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M8.184.25C3.822.25.254 3.817.254 8.18c0 3.469 2.28 6.442 5.452 7.533.396.099.495-.198.495-.397V13.93c-2.18.495-2.676-.992-2.676-.992-.396-.892-.892-1.19-.892-1.19-.694-.495.099-.495.099-.495.793.1 1.19.793 1.19.793.693 1.289 1.883.892 2.28.694.099-.496.297-.892.495-1.09-1.784-.199-3.568-.892-3.568-3.965 0-.892.297-1.586.793-2.082-.1-.198-.397-.991.099-2.082 0 0 .694-.198 2.18.793a6.391 6.391 0 011.983-.297c.694 0 1.388.1 1.982.297 1.487-.99 2.181-.793 2.181-.793.397 1.09.198 1.884.1 2.082.495.595.792 1.289.792 2.082 0 3.072-1.883 3.667-3.667 3.865.297.397.594.893.594 1.587v2.18c0 .198.1.496.595.397 3.172-1.09 5.452-4.064 5.452-7.534-.1-4.361-3.668-7.93-8.03-7.93z"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="githublogo">
              <path
                fill="transparent"
                d="M0 0h15.86v15.86H0z"
                transform="translate(.254 .05)"
              />
            </clipPath>
          </defs>
        </svg>
      )

    default:
      return null
  }
}

Icon.propTypes = {
  name: string.isRequired
}
