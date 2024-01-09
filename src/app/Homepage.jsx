import React from 'react'

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
// import CreateTicket from './components/CreateTicket'
import SignUp from './components/SignUp'
// import Footer from './components/Footer.jsx'
//import Link from 'next/link'

function Homepage() {
  return (
    <>
      <Navbar />
      <SignUp />
      <Footer />
    </>
  )
}

export default Homepage
