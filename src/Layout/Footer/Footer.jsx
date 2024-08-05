import React from 'react'
import '../../assets/css/style.css'
import logo from '../../assets/img/Visko_logo.png'
const Footer = () => {
  return (
    <>
  
  <footer>
        <div class="container  containers" >
          <img src={logo} alt="" style={{height:"100px"}} />
            <div class="footer-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="social-links">
                <a href="https://www.facebook.com/remarkhr" target="_blank"><i class="fa fa-facebook-f"></i></a>
                <a href="https://twitter.com/Remark_official" target="_blank"><i class="fa fa-twitter"></i></a>
                <a href="https://www.instagram.com/remarkhr" target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/remark-official" target="_blank"><i class="fa fa-linkedin"></i></a>
            </div>
           
            <p class="copyright">&copy;All right reserved | Visko HR </p>
        </div>
    </footer>
  </>
  
  ) 
}

export default Footer
