import Link from 'next/link'
import InlineLinkStyles from '~/styles/InlineLink.module.sass'

const InlineLink = ({ isRawLink, isExternal, text, to }) => {
  return isRawLink ? (
    <Link
      href={to}
      target={isExternal && '_blank'}
      rel={'_blank' && 'noreferrer'}
    >
      <a
        className={InlineLinkStyles.link}
        target={isExternal && '_blank'}
        rel={'_blank' && 'noreferrer'}
      >
        {text}
      </a>
    </Link>
  ) : (
    <a
      className={InlineLinkStyles.link}
      href={to}
      target={isExternal && '_blank'}
      rel={'_blank' && 'noreferrer'}
    >
      {text}
    </a>
  )
}

export default InlineLink
