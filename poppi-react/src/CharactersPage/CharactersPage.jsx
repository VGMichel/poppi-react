import { useState } from 'react'
import $ from 'jquery'
import img1 from '../assets/hairi-2.png'
import img2 from '../assets/ram-see-thru.png'
import img3 from '../assets/dtiys1.png'
import img4 from '../assets/hard-candy_2.png'
import img5 from '../assets/tangent-bun.png'
import "./CharactersPage.css";
import { useEffect } from 'react'


export default function CharactersPage() {

const styleImg1 = {
  /* Hairi */
  backgroundImage: 'url(' + img1 +')',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#98cad6',
}

const styleImg2 = {
  /* Ram */
  backgroundImage: 'url(' + img2 +')',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'white',
}

const styleImg3 = {
  /* DTIYS */
  backgroundImage: 'url(' + img3 +')',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'white',
}

const styleImg4 = {
  /* Hard Candy */
  backgroundImage: 'url(' + img4 +')',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'white',
}

const styleImg5 = {
  /* Tangent */
  backgroundImage: 'url(' + img5 +')',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'white',
}

useEffect(() => {
    $(".option").click(function(){
        $(".option").removeClass("active");
        $(this).addClass("active");
   
});
})

  return (
    <div className="characters-page section">
      {/* Image Size: 1280px X 853px */}
        <div className="options">
          <div
            className="option active"
              style={styleImg1}
              >
              <div className="shadow"></div>
              <div className="label">
                  <div className="icon">
                      <i className="fas fa-walking"></i>
                  </div>
                  <div className="info">
                      <div className="main">Hairi</div>
                      <div className="sub">Puran Water Goddess</div>
                  </div>
              </div>
          </div>
          <div 
            className="option"
              style={styleImg2}>
              <div className="shadow"></div>
              <div className="label">
                  <div className="icon">
                      {/* <i className="fas fa-snowflake"></i> */}
                      <span style={{fontSize: 14}} className="icon-fae-icon"></span>
                  </div>
                  <div className="info">
                      <div className="main">Chiyo</div>
                      <div className="sub">Candy Concoctions Healer</div>
                  </div>
              </div>
          </div>
          <div 
            className="option"
              style={styleImg3}>
              <div className="shadow"></div>
              <div className="label">
                  <div className="icon">
                      <i className="fas fa-tree"></i>
                  </div>
                  <div className="info">
                      <div className="main">Kai</div>
                      <div className="sub">Noki Adventurer</div>
                  </div>
              </div>
          </div>
          <div 
            className="option"
              style={styleImg4}>
              <div className="shadow"></div>
              <div className="label">
                  <div className="icon">
                      <i className="fas fa-tint"></i>
                  </div>
                  <div className="info">
                      <div className="main">Sariko</div>
                      <div className="sub">Your Girl Next Door</div>
                  </div>
              </div>
          </div>
          <div 
            className="option"
              style={styleImg5}>
              <div className="shadow"></div>
              <div className="label">
                  <div className="icon">
                      <i className="fas fa-sun"></i>
                  </div>
                  <div className="info">
                      <div className="main">Euphoria</div>
                      <div className="sub">Nyxian Beast Tamer</div>
                  </div>
              </div>
          </div>
      </div>
                    
    </div>
  )
}
