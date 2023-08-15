import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header className='max-width'>
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
        className='header-logo'
      />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-wrapper">
              <span className="material-icons absolute-center location-icon">location_on</span>
              <div className='zomato-location-name'>Bangalore</div>
            </div>
            <span className="material-icons caret-icon">arrow_drop_down</span>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-search-bar">
            <div className="search-bar-wrapper">
              <div className="search-bar-icon-wrapper">
                <span className="material-icons search-icon">search</span>
              </div>
              <input
                placeholder='Search for restaurant, or a dish'
                className='search-input'
              />
            </div>
          </div>
        </div>

        <div className="profile-wrapper">
          <div className="login-wrapper">
            <span className="login">
              Login
            </span>
          </div>
          <div className="signUp-wrapper">
            <span className="signUp">
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
