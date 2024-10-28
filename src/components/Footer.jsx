import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer-text">
                <div className="footer-logo">
                    <img src="" alt="" />
                </div>
                <div className="social-media">
                    <a href="#"><i src="facebook.png" alt="Facebook" ></i></a>
                    <a href="#"><i src="twitter.png" alt="Twitter" ></i></a>
                    <a href="#"><i src="instagram.png" alt="Instagram" ></i></a>
                </div>
                <div className="footer-location">
                    <span>Location:</span>
                    <p>123 Main St, Anytown, USA</p>
                </div>
            </div>
            <p> 2024 My Website. All rights reserved.</p>
        </footer>
    )
}

export default Footer