import React from 'react'
import './exploreSectoin.css'
import { ExploreCard } from '../Card/Card'

export const ExploreSection = ({list, collectionTitle}) => {
  return (
    <div>
        <div className="explore-section">
            <div className="explore-section-wrapper">
                <div className="collection-title">
                    {collectionTitle}
                </div>
                <div className="explore-grid">
                    {
                        list && list.map((rest, index) => 
                            <ExploreCard key={index} restaurant={rest} />
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
