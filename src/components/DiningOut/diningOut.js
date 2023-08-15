import React from 'react'
import './diningOut.css'
import Filters from '../common/filters/filters'
import { DiningOutCarousel } from './diningOutCarousel/diningOutCarousel'
import { diningOutList } from '../../data/diningOutDataList'
import { ExploreSection } from '../common/exploreSection/exploreSection'


export const discountOffImg = "https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"
export const discountOffImgName = "BigDiscount"

const diningOutFilterList = [
  {
    id: 1,
    title: "Filters",
    icon: <span className="material-icons">tune</span>,
  },
  {
    id: 2,
    title: "Gold",
  },
  {
    id: 3,
    title: "Raing 4.0+",
  },
  {
    id: 4,
    title: "Outdoor Seating"
  },
  {
    id: 5,
    title: "Serves Alcohol"
  },
  {
    id: 6,
    title: "Open Now"
  }
]



export const DiningOut = () => {
  return (
    <div>
      <div className="dining-out-collection grey-bg">
        <DiningOutCarousel />
      </div>
      <div className="dining-out-filter max-width">
        <Filters filtersList={diningOutFilterList} />
      </div>
      <div className="max-width">
        <img src={discountOffImg} alt={discountOffImgName} 
          className='dining-out-big-img '
        />
      </div>
      <div className="dining-out-explore-card max-width">
        <ExploreSection 
          list={diningOutList} 
          collectionTitle="Trending dining restaurants in Agra Cantt"
        />
      </div>
    </div>
  )
}
