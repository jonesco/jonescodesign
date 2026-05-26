import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <div className="wrapper">
        <Nav />
        <Outlet />
        <div className="push"></div>
      </div>
      <Footer />
    </>
  )
}
