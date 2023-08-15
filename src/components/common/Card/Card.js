import React from 'react'
import './Card.css'

export const ExploreCard = ({restaurant}) => {
    const name = restaurant?.info?.name ?? "";
    const coverImg = restaurant?.info?.image?.url;
    const deliveryTime = restaurant?.order?.deliveryTime;
    const rating = restaurant?.info?.rating?.rating_text;
    const approxPrice = restaurant?.info?.cfo?.text;
    const offers = restaurant?.bulkOffers ?? [];
    const cuisines = restaurant?.info?.cuisine?.map(item => item.name).slice(0, 3);
    const bottomContainers = restaurant?.bottomContainers;
    const goldOff = restaurant?.gold?.text;
    const proOff = offers.length > 1?offers[0].text : null;
    const discount = offers.length > 1?offers[1].text : offers.length === 1 ? offers[0].text : null;

  return (
    <div>
        <div className="explore-card cur-po">
            <div className="explore-card-wrapper">
                <div className="explore-card-img-wrapper">
                    <img src={coverImg} alt={name} className='explore-img' />
                    <div className="delivery-time">{deliveryTime}</div>
                    {proOff && <div className='pro-off'>{proOff}</div>}
                    {goldOff && <div className='gold-off'>{goldOff}</div>}
                    {discount && <div className='discount'>{discount}</div>}
                </div>
                <div className="explore-card-details">
                    
                    <div className="explore-restaurant-name">
                        {name}
                    </div>
                    {rating && (
                        <div className="explore-card-rating">
                            {rating} <span className="material-icons">star_border</span>
                        </div>
                    )}
                </div>
                <div className="explore-card-details">
                    {
                        cuisines.length && 
                        <div className="explore-card-cuisine">
                            {
                                cuisines.map((item, index) => {
                                    return (
                                        <span className="cuisine-tag">
                                            {item}
                                            {index !== cuisines.length-1 && ", "} 
                                        </span>
                                    )
                                })
                            }
                        </div>
                    }
                    {approxPrice && 
                        <div className='approx-price'>
                            {approxPrice}
                        </div>
                    }
                </div>
                {
                    bottomContainers && bottomContainers.length > 0 && (
                        <div>
                            <div className="card-separator"></div>
                            <div className="explore-bottom">
                                <img src={bottomContainers[0]?.image?.url} 
                                    alt={bottomContainers[0]?.text} 
                                    style={{height: "10px"}}
                                    className='explore-bottom-img'
                                />
                                <div className="explore-bottom-text">
                                    {bottomContainers[0]?.text}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}
