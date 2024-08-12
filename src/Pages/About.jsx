import React from 'react'
import about1 from '../assets/img/about1.jpeg'

const About = () => {
  return (
    <div>
       <section id="about" class="about">

<div class="container" data-aos="fade-up">
  <div class="row gx-0">
  <header class="section-header">
  
    <p>About Us</p>
  </header>
    <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div class="content">
       
        <p style={{lineHeight: "30px",wordSpacing: "2px"}}>
          Recently incorporated in the year 2022, VISKO HR Private Limited is a dynamic and innovative job recruitment company dedicated to connecting top-tier talent with leading organizations across various industries. With a focus on excellence, integrity, and personalized service, we strive to be a trusted partner for both employers and job-seekers. Our mission is to empower businesses with exceptional human capital while providing individuals with rewarding career opportunities. We are committed to fostering long-term relationships based on trust, transparency, and mutual success. To achieve our mission, we have created a unique AI-based job portal named, REMARK, which connects employers and employees with the help of AI.</p>
        <div class="text-center text-lg-start">
          
        </div>
      </div>
    </div>

    <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
      <img src={about1} class="img-fluid" alt="" style={{borderRadius:"10px"}}/>
    </div>

  </div>
</div>

</section>
    </div>
  )
}

export default About
