import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='home-banner'>
                <div className='overlay'></div>
                <div className='banner-content'>
                    <h1>"Take care of your <span style={{ color: "red" }}>Body.</span> It's the only place you have to <span style={{ color: "red" }}>Live.</span>"</h1>
                    <button>Join Us</button>
                </div>
            </div>

            <div className='home-about'>
                <div className='about-first-section'>
                    <div className='about-first-video'>
                        <iframe
                            width="400"
                            height="300"
                            src="https://www.youtube.com/embed/JxRnueT6wHs"
                            title="50+ Man Workout in Gym Free Stock Video Footage | Muscular Man Working Out or Exercising at Home/Gym"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='about-first-content'>
                        <h3>-WHO ARE WE-</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.<br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='about-second-section'>

                    <div className='about-second-content'>
                        <h3>-WHY CHOOSE US-</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident,<br/>
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button>Learn More</button>
                    </div>

                    <div className='about-second-video'>
                        <iframe
                            width="400"
                            height="300"
                            src="https://www.youtube.com/embed/JxRnueT6wHs"
                            title="50+ Man Workout in Gym Free Stock Video Footage | Muscular Man Working Out or Exercising at Home/Gym"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home