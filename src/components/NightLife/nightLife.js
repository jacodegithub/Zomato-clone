import React from 'react'
import './nightLife.css'
import Filters from '../common/filters/filters'
import { ExploreSection } from '../common/exploreSection/exploreSection'
import { discountOffImg, discountOffImgName } from '../DiningOut/diningOut'
import { nightLifeData } from '../../data/nightLifeDataList'

const nightLifeFiltersList = [
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
  },
  {
    id: 7,
    title: "Distance",
    icon: <span className="material-icons">compare_arrows</span>
  }
]

const nightLifeList = nightLifeData;

export const NightLife = () => {
  return (
    <div> 
      <div className="night-life grey-bg">
        <div className="night-life-collection max-width">
          <div className="night-life-collection-title collection-title">
            Collections
          </div>
          <div className="night-life-carousel-container cur-po">
            <div className="night-life-img-wrapper">
              <img src="https://b.zmtcdn.com/data/collections/21ebc8e2867c6917de5b0eb1aae8174e_1684741284.jpg" alt="night-life-img" 
                className='night-life-img'
              />
            </div>
            <div className="night-life-img-text-container">
              <div className="top-text">
                13 Best Bars & Pubs
              </div>
              <div className="bottom-text absolute-center">
                14 Places  <span class="material-icons">play_arrow </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="night-life-filters max-width">
          <Filters filtersList={nightLifeFiltersList} />
      </div>
      <div className="max-width">
        <img src={discountOffImg} alt={discountOffImgName} 
          className='dining-out-big-img '
        />
      </div>
      <div className="night-life-explore-collections max-width">
        <ExploreSection 
          list={nightLifeList}
          collectionTitle="Nightlife Restaurants in Bangalore"
        />
      </div>
    </div>
  )
}
