import React, { useState } from 'react'
import { Header } from '../components/common/header/Header'
import { Footer } from '../components/common/footer/footer'
import { TabOptions } from '../components/common/tabOption/tabOptions'
import { Delivery } from '../components/Delivery/delivery'
import { DiningOut } from '../components/DiningOut/diningOut'
import { NightLife } from '../components/NightLife/nightLife'

export const HomePage = () => {

    const [currentPage, setCurrentPage] = useState("Delivery")

  return (
    <div>
        <Header />
        <TabOptions currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {getCurrentPage(currentPage)}
        <Footer />
    </div>
  )
}


const getCurrentPage = (currentPage) => {
    switch(currentPage) {
        case "Delivery":
            return <div><Delivery /></div>
        case "Dining Out":
            return <div><DiningOut /></div>
        case "NightLife":
            return <div><NightLife /></div>
        default:
            return <div><Delivery /></div>
    }
}

export default getCurrentPage