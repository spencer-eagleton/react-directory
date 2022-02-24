import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
export default function Layout({ children }) {
  return (
    <div>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  )
}
