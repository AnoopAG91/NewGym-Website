import React from 'react'
import './Classes.css'

function Classes() {
  return (
    <div className='classes'>
    <div className='classes-top'>
      <h1>Our <span style={{color:"#ff0000"}}>Classes</span></h1>
    </div>
    
    <div className='classes-body'>
      
      <div className='gym-section'>
        <div className='gym-image'>
          <img src='https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=600'/>
          <div className='gym-overlay'></div>
        </div>
        <div className='gym-content'>
          <div className='text'>
            <h1>GYM</h1>
          <h3>Pushing through the pain,  <br/> embracing the gain.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. </p>
          </div>
          <button>Join Us</button>
        </div>
       
      </div>

      <div className='yoga-section'>
      <div className='yoga-content'>
      <div className='text'>
        <h1>YOGA</h1>
          <h3>Pushing through the pain,  <br/> embracing the gain.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. </p>
          </div>
          <button>Join Us</button>
        </div>
        <div className='yoga-image'>
        <img src='https://images.pexels.com/photos/35987/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'/>
        </div>
      </div>

      <div className='acrobatic-section'>
        <div className='acrobatic-image'>
          <img src='https://images.pexels.com/photos/4324026/pexels-photo-4324026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
        <div className='acrobatic-content'>
        <div className='text'>
        <h1>ACROBATICS</h1>
          <h3>Pushing through the pain,  <br/> embracing the gain.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. </p>
          </div>
          <button>Join Us</button>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Classes