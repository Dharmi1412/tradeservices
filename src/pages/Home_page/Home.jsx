import React from 'react'
import './home.css'
import Herosec from '../../component/Herosection/Herosec'
import Services from '../../component/services/Services'
import Faqs from '../../component/faqs/Faqs'
import Footer from '../../component/footer/Footer'

export default function Home() {
  return (
    <div>
        <Herosec/>
        <Services/>
        <Faqs/>
        {/* <Footer/> */}
    </div>
  )
}
