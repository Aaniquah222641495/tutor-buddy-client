import React from 'react';
import './footer.css'; 


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <p>&copy; {new Date().getFullYear()} <a href='https://www.cput.ac.za' target='_blank' rel='noopener noreferrer'>Cape Peninsula University of Technology</a>. All rights reserved</p>
                <div className='social-media'>
                    <a href='https://www.facebook.com/cput.ac.za' target='_blank' rel='noopener noreferrer'>
                        <i className='bi bi-facebook'></i>
                    </a>
                    <a href='https://www.twitter.com/cput' target='_blank' rel='noopener noreferrer'>
                        <i className='bi bi-twitter'></i>
                    </a>
                    <a href='https://www.instagram.com/cput.ac.za/' target='_blank' rel='noopener noreferrer'>
                        <i className='bi bi-instagram'></i>
                    </a>
                    <a href='https://www.linkedin.com/school/cput/' target='_blank' rel='noopener noreferrer'>
                        <i className='bi bi-linkedin'></i>
                    </a>

                </div>
            </div>

        </footer>
    );
};

export default Footer;
