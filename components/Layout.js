import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="p-3">{children}</main>
      <Footer />
    </div>
  )
}
