import Link from 'next/link'
import { bool, node, string } from 'prop-types'
import InlineLinkStyles from '~/styles/InlineLink.module.sass'

const InlineLink = ({ isExternal, text, to, children }) => {
  return (
    <Link href={to}>
      <a
        className={InlineLinkStyles.link}
        target={isExternal ? '_blank' : null}
        rel={isExternal ? 'noreferrer' : null}
      >
        {text ? text : children}
      </a>
    </Link>
  )
}

InlineLink.propTypes = {
  children: node,
  isExternal: bool.isRequired,
  text: string,
  to: string.isRequired
}

export default InlineLink
