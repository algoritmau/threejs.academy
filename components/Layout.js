import Header from './Header'
import MobileNav from './MobileNav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <MobileNav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
