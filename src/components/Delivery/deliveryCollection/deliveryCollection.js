import React from 'react'
import './deliveryCollection.css'
import Slider from 'react-slick'
import { NextArrow } from '../../common/carousel/nextArrow';
import { PrevArrow } from '../../common/carousel/prevArrow';

const deliveryItem = [
    {
        id: 1,
        title: "Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id: 2,
        title: "Biryani",
        cover: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id: 3,
        title: "Thali",
        cover: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    },
    {
        id: 4,
        title: "Burger",
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id: 5,
        title: "Cake",
        cover: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
    },
    {
        id: 6,
        title: "Chicken",
        cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id: 7,
        title: "Paneer",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id: 8,
        title: "North Indian",
        cover: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
    },
    {
        id: 9,
        title: "Rolls",
        cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
        id: 10,
        title: "Dosa",
        cover: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },
    {
        id: 11,
        title: "Chowmen",
        cover: "https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png"
    },
    {
        id: 12,
        title: "Fried Rice",
        cover: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"
    },

]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const title = "Eat what makes you happy"

export const DeliveryCollection = () => {


  return (
    <div className='delivery-collection'>
        <div className="max-width">
            <div className="collection-title">
                {title}
            </div>
            <div className="collection-items">
                <Slider {...settings}>
                    {
                        deliveryItem && deliveryItem.map((item, index) =>
                            <div key={index} className="delivery-item">
                                <div className="delivery-img-wrapper">
                                    <img src={item.cover} alt={item.title}
                                        className='delivery-img'
                                    />
                                </div>
                                <div className="delivery-title">
                                    {item.title}
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}
