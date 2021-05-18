import CtaStyles from '~/styles/Cta.module.sass'

const Button = ({ text }) => {
  return (
    <button
      className={`${CtaStyles.cta} bg-white dark:bg-black text-black dark:text-white border-black dark:border-white`}
    >
      {text}
    </button>
  )
}

export default Button
