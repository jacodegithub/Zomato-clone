import React from 'react'
import './filters.css'

const Filters = ({filtersList}) => {
  return (
    <div className='filter-list'>
        <div className="filter-list-wrapper">
            {
                filtersList && filtersList.map((filter, index) => 
                    <div key={index} className="filter-item cur-po">
                        {filter.icon && 
                            <div className="filter-icon">
                                {filter.icon}
                            </div>
                        }
                        <div className="filter-title">
                            {filter.title}
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Filters