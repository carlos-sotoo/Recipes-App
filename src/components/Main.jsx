import Footer from './Footer'
import Header from './Header'

import '../styles/components/main.scss'

import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Main
