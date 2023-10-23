import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
            <div className='footer-left'>
                <div className='quick-links'>
                <h3>Quick Links</h3>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/classes'}>Classes</Link>
                    <Link to={'/contact'}>Contact</Link>
                </div>
                <div className='blogs'>
                    <h3>Latest Blogs</h3>
                    <div className='blog'>
                        <img src='https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{width:"100px"}}/>
                    </div>
                    <div className='blog'>
                        <img src='https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{width:"100px"}}/>
                    </div>
                </div>
                <div className='more-links'>
                <h3>More Links</h3>
                    <Link>link</Link>
                    <Link>link</Link>
                    <Link>link</Link>
                    <Link>link</Link>
                </div>
            </div>
            <div className='footer-right'>
                <div className='logo'>
                   <Link> GYM </Link>
                   <h2>Train with us</h2>
                   <p>To explore the world of <span style={{color:"#ff0000"}}>Fitness</span></p>
                    </div>
                    <div className='social-links'>
                    <Link><AiOutlineInstagram/></Link>
                    <Link><AiOutlineTwitter/></Link>
                    <Link><AiOutlineYoutube/></Link>
                    <Link><AiOutlineFacebook/></Link>
                    </div>
            </div>

            </div>
<div className='ruler'></div>
            <div className='footer-copyright'>
                <p>&copy;Gym. All rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
