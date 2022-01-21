
import Header from '../header/global'
import Footer from '../footer/global'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
