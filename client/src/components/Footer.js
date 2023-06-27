import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                cloudove
            </p>
            {/* <p className='footer-subscription-text'>
                feel free to leave
            </p>
            <div className='inpput-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email'
                    className='footer-input' />
                    <Button buttonStyle='btn--primary'>Subscribe</Button>
                </form>
            </div> */}
        </section>
        {/* <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Testimonials</Link>
                </div>
            </div>
        </div> */}
        {/* <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        T4U <i className='fab fa-typo3' />
                    </Link>
                </div>
                <small className='website-rights'>T4U @ 2022</small>
                <div className='social-icons'>
                    <Link to='/' className='social-icon-link facebook'
                            target='_blank' aria-label='Facebook'>
                        <i className='fab fa-facebook' />
                    </Link>
                    <Link to='/' className='social-icon-link instagram'
                            target='_blank' aria-label='Instagram'>
                        <i className='fab fa-instagram' />
                    </Link>
                </div>
            </div>
        </section> */}
    </div>
  )
}

export default Footer