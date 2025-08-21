import React from 'react'
import './home.css'
import Herosec from '../../component/Herosection/Herosec'
import Services from '../../component/services/Services'
import Faqs from '../../component/faqs/Faqs'
import Payment from '../payment/Payment'

export default function Home() {
  return (
    <div>
        <Herosec/>
        <Services/>
        <Faqs/>
        <Payment/>
    </div>
  )
}
