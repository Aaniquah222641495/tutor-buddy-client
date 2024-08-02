import React from 'react';
import './footer.css'; 

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <p>&copy;{new Date().getFullYear()} Cape Peninsula University of Technology. All rights reserved</p>
                <div className='social-media'>
                    <a href='https://www.facebook.com/cput.ac.za' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-facebook-f'></i>
                    </a>

                    <a href='https://www.twitter.com/cput' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-twitter'></i>
                    </a>

                    <a href='https://www.instagram.com/cput.ac.za/' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-instagram'></i>
                    </a>

                    <a href='https://www.linkedin.com/school/cput/' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-linkedin'></i>
                    </a>
                </div>
                <div className='footer-links'>
                    <a href='https://www.cput.ac.za' target='_blank' rel='noopener noreferrer'>
                        Visit CPUT Website
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
