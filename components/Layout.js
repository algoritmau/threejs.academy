import Header from './Header'
import MobileNav from './MobileNav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-black px-3 tablet-xs:px-5 tablet-s:px-7 tablet-l:px-8 desktop-xs:px-9 desktop-s:px-10">
      <Header />
      <MobileNav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
