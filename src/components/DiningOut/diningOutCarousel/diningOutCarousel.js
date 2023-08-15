import React from 'react'
import { NextArrow } from '../../common/carousel/nextArrow';
import { PrevArrow } from '../../common/carousel/prevArrow';
import Slider from 'react-slick';
import './diningOutCarousel.css'

const dingiOutCarouselList = [
    {
      id: 1,
      title: "6 Taj View Restaurants",
      places: "5 Places",
      cover: "	https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png"
    },
    {
      id: 2,
      title: "18 Best Luxury Dining Places",
      places: "18 Places",
      cover: "https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1684740352.jpg"
    },
    {
      id: 3,
      title: "6 Best Mughlai Places",
      places: "6 Places",
      cover: "https://b.zmtcdn.com/data/collections/a33a75bb9ce00650cde613173fe9d2ee_1684740006.png"
    },
    {
      id: 4,
      title: "12 Blissful Breakfast Places",
      places: "12 Places",
      cover: "https://b.zmtcdn.com/data/collections/91657c6e0f9452b3d54b4658e7bc90b9_1684741472.jpg?output-format=webp"
    },
    {
      id: 5,
      title: "14 Local Favourite Places",
      places: "14 Places",
      cover: "https://b.zmtcdn.com/data/collections/c3e8fb46e352ebb9d72c4f0cb5d27f39_1686042567.png"
    },
    {
      id: 6,
      title: "13 Serene Rooftop Places",
      places: "14 Places",
      cover: "https://b.zmtcdn.com/data/collections/293255cbfe49f4ebdb244c1bfc3a0f74_1684741669.jpg"
    },
    {
      id: 7,
      title: "19 Great Cafes",
      places: "19 Places",
      cover: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1684741886.jpg"
    },
    {
      id: 8,
      title: "13 Best Bars & Pubs",
      places: "13 Places",
      cover: "https://b.zmtcdn.com/data/collections/21ebc8e2867c6917de5b0eb1aae8174e_1684741284.jpg"
    },
]
  
const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const title = "Collections"
const collectionTitle = "Explore curated lists of top restaurants, cafes, pubs, and bars in Agra, based on trends"

export const DiningOutCarousel = () => {


  return (
    <div className='dining-collection'>
        <div className="dining-collection-wrapper max-width">
            <div className="collection-title">
                {title}
            </div>
            <div className="dining-collection-top-title">
                <div className="dining-collection-title-left">
                    {collectionTitle}
                </div>
                <div className="dining-collection-title-right cur-po">
                    All collections in Bengalur 
                    <span class="material-icons">play_arrow </span>
                </div>
            </div>
            <div className='dining-collection-item'>
                <Slider {...settings}>
                    {
                        dingiOutCarouselList && dingiOutCarouselList.map((item, index) =>
                            <div key={index} className="dining-item cur-po">
                                <div className="dining-img-wrapper">
                                    <img src={item.cover} alt={item.title}
                                        className='dining-img'
                                    />
                                </div>
                                <div className="dining-bg">
                                    <div className="dining-title">
                                            {item.title}
                                    </div>
                                    <div className="dining-places">
                                        {item.places}
                                    </div>
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

