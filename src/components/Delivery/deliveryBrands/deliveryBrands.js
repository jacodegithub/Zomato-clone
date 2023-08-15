import React from 'react'
import './deliveryBrands.css'
import Slider from 'react-slick'
import { NextArrow } from '../../common/carousel/nextArrow'
import { PrevArrow } from '../../common/carousel/prevArrow'

const deliveryBrands = [
    {
        id: 1,
        title: "McDonald's",
        time: "27 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611376239.png"
    },
    {
        id: 2,
        title: "La Pino's Pizza",
        time: "17 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3bd971b1a5783e208a9782c3604fa9f3_1601885754.png"
    },
    {
        id: 3,
        title: "Mama Chicken Mama Franky House",
        time: "15 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d26cedd52fc09c7a72174a36340a4a6e_1573638778.png"
    },
    {
        id: 4,
        title: "Domino's Pizza",
        time: "25 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521807172.png"
    },
    {
        id: 5,
        title: "Bikanervala",
        timte: "30 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/4d016eeff686a88becd56bba073f18cd_1605111085.png"
    },
    {
        id: 6,
        title: "Pizza Hut",
        time: "18 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
    },
    {
        id: 7,
        title: "Kwality Walls Fozen Desert And Ice Cream Shop",
        time: "19 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/0619ae0b489d44dd3562538f7768e48a_1658818124.png"
    },
]

export const DeliveryBrands = () => {

    const settings = {
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

  return (
    <div>
        <div className="collection-title">
            Top brands for you
        </div>
        <div className="top-brand-carousel">
            <div className="top-brand-carousel-wrapper">
                <Slider {...settings}>
                    {
                        deliveryBrands && deliveryBrands.map((brand, index) =>
                            <div key={index} className="top-brand-item">
                                <div className="top-brand-item-img absolute-center">
                                    <img src={brand.cover} alt={brand.titel} 
                                        className='top-brand-img'
                                    />
                                </div>
                                <div className="top-brand-item-title absolute-center">
                                    {brand.title}
                                </div>
                                <div className="top-brand-item-time absolute-center">
                                    {brand.time}
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
