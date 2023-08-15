import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <footer className='max-width'>
        <div className="footer-container">
          <div className="footer-header">
          <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="zomato-logo"
            className='header-logo'
          />
            <div className="footer-header">
              <div className="footer-left-title absolute-center">India
              <span className="material-icons">expand_more</span>
              </div>
              <div className="footer-right-title absolute-center">English
              <span className="material-icons">expand_more</span>
              </div>
            </div>
          </div>
          <div className="footer-body cur-po">
            <div className="footer-body-content-box">
              <div className="footer-body-header">
                ABOUT ZOMATO
              </div>
              <ul className="footer-body-pts">
                <li className="pts">Who We Are</li>
                <li className="pts">Blog</li>
                <li className="pts">Work with us</li>
                <li className="pts">Investor Relations</li>
                <li className="pts">Report Fraud</li>
                <li className="pts">Contact Us</li>
              </ul>
            </div>
            <div className="footer-body-content-box">
              <div className="footer-body-header">
                ZOMAVERSE
              </div>
              <ul className="footer-body-pts">
                <li className="pts">Zomato</li>
                <li className="pts">Blinkit</li>
                <li className="pts">Feeding India</li>
                <li className="pts">Hyperpure</li>
                <li className="pts">Zomaland</li>
              </ul>
            </div>
            <div className="footer-body-content-box">
              <div className="footer-body-header">
              FOR RESTAURANTS
              </div>
              <ul className="footer-body-pts">
                <li className="pts">Partners with Us</li>
                <li className="pts">Apps for You</li>
              </ul>
            </div>
            <div className="footer-body-content-box">
              <div className="footer-body-header">
                LEARN MORE
              </div>
              <ul className="footer-body-pts">
                <li className="pts">Privacy</li>
                <li className="pts">Security</li>
                <li className="pts">Terms</li>
                <li className="pts">Sitemap</li>
              </ul>
            </div>
            <div className="footer-body-content-box">
              <div className="footer-body-header">
                SOCIAL LINKS
              </div>
              <ul className="footer-body-pts">
                <li className="pts"></li>
                <li className="pts"></li>
                <li className="pts"></li>
                <li className="footer-img-container">
                  <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" 
                    alt="apple" 
                    className='footer-img'
                  />
                </li>
                <li className="footer-img-container">
                  <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" 
                  alt="google-app" 
                  className='footer-img'
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-separator"></div>
          <div className="footer-copyright">
              By continuing past this page, you agree to our Terms of Service, 
              Cookie Policy, Privacy Policy and Content Policies. 
              All trademarks are properties of their respective owners. 
              2008-2023 © Zomato™ Ltd. All rights reserved.
          </div>
        </div>
    </footer>
  )
}
