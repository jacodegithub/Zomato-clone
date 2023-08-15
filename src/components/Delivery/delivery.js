import React from 'react'
import Filters from '../common/filters/filters'
import { DeliveryCollection } from './deliveryCollection/deliveryCollection'
import { DeliveryBrands } from './deliveryBrands/deliveryBrands'
import { ExploreSection } from '../common/exploreSection/exploreSection'
import { restaurants } from '../../data/restaurantData'

const deliveryFilters = [
  {
    id: 1,
    title: "Filters",
    icon: <span className="material-icons">tune</span>,
  },
  {
    id: 2,
    title: "Rating 4.0+",
  },
  {
    id: 3,
    title: "Cusines",
    icon: <span className="material-icons">expand_more</span>
  },
  {
    id: 4,
    title: "Sales & Hygencis"
  },
  {
    id: 5,
    title: "Pure Veg"
  },
  {
    id: 6,
    title: "Great Offers",
    icon: <span className="material-icons">compare_arrows</span>
  }
]

const restaurantList = restaurants;

export const Delivery = () => {

  return (
    <div>
      <div className='max-width'>
        <Filters filtersList={deliveryFilters} />
      </div>
      <div className="grey-bg">
          <DeliveryCollection />
      </div>
      <div className='max-width'>
        <DeliveryBrands />
        <ExploreSection 
          list={restaurantList} 
          collectionTitle='Delivery Restaurants in Bangalore'
        />
      </div>
    </div>
  )
}
