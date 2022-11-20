import landingImg from '../assets/ram-see-thru.png'
import './LandingPage.css'

export default function LandingPage() {
  return (
  <div className="landing-page section">
    <div className="flex-container">
      <div className="left-flex">
          <img src={landingImg} alt="pink themed chibi half-ram character" />
      </div>
      <div className="right-flex">
          <div className="front-page-title">
              <p className="title">makeup &amp; charm, kawaii style.</p>
          </div>
          <div className="front-page-description">
              <p>POPPI is an anime themed cosmetics and accessory brand with a bit of mystery.</p>
              <p>Join us on the journey to unraveling your favorite character's story through makeup!</p>
          </div>
  
          {/* <i className="fas fa-tiktok"></i>
          <i className="fa fa-instagram"></i> */}
  
          <div className="social-media">
              <a href="#">
                  <i className="fab fa-tiktok fa-2x"></i>
                  <p>Tiktok</p>
              </a>
              <a href="#">
                  <i className="fab fa-instagram fa-2x"></i>
                  <p>Instagram</p>
              </a>
          </div>
      </div>
  </div>
  </div>
  )
}