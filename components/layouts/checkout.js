import Header from '../header/checkout'
import Footer from '../footer/checkout'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
