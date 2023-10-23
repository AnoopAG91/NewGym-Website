import React from 'react'
import './About.css'
import { FaDumbbell } from 'react-icons/fa'
import { BiSolidNotepad } from 'react-icons/bi'

function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <h1>About <span style={{ color: "#ff0000" }}> Us</span></h1>
      </div>

      <div className='about-body'>

        <div className='about-content-left'>
          <div className='left-text'>
            <h1>The Best Fitness Gym In Town</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority <br />have suffered alteration in some form, by injected humour, or randomised words <br />which don't look even slightly believable.</p>

          </div>
          <div className='left-detail'>

            <div className='icon-detail'>
              <div className='icon'> <FaDumbbell /></div>
              <div className='text'>
                <h3>Modern Machine</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className='icon-detail'>
              <div className='icon'> <BiSolidNotepad /></div>
              <div className='text'>
                <h3>Training Plan</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>


            </div>

          </div>

          <div className='about-left-btn'>
            <button>Read More</button>
          </div>

        </div>

        <div className='about-content-right'></div>
      </div>

      <div className='about-blog'>
        <h1>Our Latest Blog</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. the readable content of a page <br />when looking at its layout.</p>

        <div className='blog-section'>
          <div className='blog'>
            <div className='blog-image'>
              <img src='https://images.pexels.com/photos/4999847/pexels-photo-4999847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
              <div className='overlay'> <button>KNOW MORE</button> </div>
            </div>
            <h3>Acrobatics</h3>
            <h2>Experience the power of Acrobatics</h2>
            <p>October 4 2023 . 0 comments</p>
          </div>
          <div className='blog'>
            <div className='blog-image'>
              <img src='https://images.pexels.com/photos/3763702/pexels-photo-3763702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
              <div className='overlay'>
                <button>KNOW MORE</button>
              </div>
            </div>

            <h3>Gymnastics</h3>
            <h2>Whats is Gymnastics</h2>
            <p>October 4 2023 . 0 comments</p>
          </div>
          <div className='blog'>
            <div className='blog-image'>
              <img src='https://images.pexels.com/photos/3658399/pexels-photo-3658399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
              <div className='overlay'> <button>KNOW MORE</button> </div>
            </div>


            <h3>Yoga</h3>
            <h2>Become a Yogi</h2>
            <p>October 4 2023 . 0 comments</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default About