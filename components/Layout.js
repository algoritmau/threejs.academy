import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <main className="p-3">{children}</main>
      <Footer />
    </div>
  )
}
