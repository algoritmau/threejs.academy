const Button = ({ main, text }) => (
  <button
    className={`w-16 py-2 text-center rounded-lg text-white ${
      main ? 'bg-gray-700' : 'bg-gray-900'
    }`}
  >
    {text}
  </button>
)

export default Button
