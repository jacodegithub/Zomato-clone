import React from 'react'
import './tabOptions.css'
export const TabOptions = ({currentPage, setCurrentPage}) => {

  const tabs = [
    {
      id: 1,
      name: "Delivery",
      active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      active_bg: "#FCEEC0",
      inactive_bg: "#F8F8F8",
      active_txt: "#EF4F5F",
      inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
    },
    {
      id: 2,
      name: "Dining Out",
      active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      active_bg: "#E5F3F3",
      inactive_bg: "#F8F8F8",
      active_txt: "#EF4F5F",
      inactive_img: "	https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
    },
    {
      id: 3,
      name: "NightLife",
      active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      active_bg: "#FDF4FF",
      inactive_bg: "#F8F8F8",
      active_txt: "#EF4F5F",
      inactive_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
    },
  ]

  return (
    <div className='tab-option'>
        <div className="tabs-option-wrapper max-width">
          {
            tabs && tabs.map((tab, index) => {
              return (
                <section key={index} onClick={() => setCurrentPage(tab.name)}
                  className={`tab-item absolute-center cur-po ${tab.name === currentPage && 'active-tab'}`}
                >
                  <div
                    className='tab-img-container absolute-center'
                    style={{backgroundColor:`${
                      tab.name === currentPage ? tab.active_bg : tab.inactive_bg
                    }`}}
                  >
                      <img src={tab.name === currentPage ? tab.active_img : tab.inactive_img} 
                        alt={tab.name} 
                        className='tab-img'
                      />
                  </div>
                  <div className="tab-name-container"
                    style={{color:`${tab.name === currentPage? tab.active_txt :''}`}}
                  >
                    {tab.name}
                  </div>
                </section>
              )
            })
          }
        </div>
    </div>
  )
}
