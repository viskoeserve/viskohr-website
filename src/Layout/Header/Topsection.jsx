import React from 'react'
import Remarkhero from "../../assets/img/reamrkhearo.png"

const Topsection = () => {
  return (
    <div>
      <section id="hero" class="hero d-flex align-items-center">

<div class="container " >
  <div class="row ">
    <div class="col-lg-6 d-flex flex-column justify-content-center fadeInLeft">
      <h1 data-aos="fade-up">Visko HR Pvt Ltd </h1>
      <h2 data-aos="fade-up" data-aos-delay="400">
      Best known for making modern technology applications, Visko HR Pvt Ltd constantly works on developing cutting-edge and innovative job search applications to make recruitment seamless for employers and candidates
              </h2>
      <div data-aos="fade-up" data-aos-delay="600">
        <div class="text-center text-lg-start">
          <a href="https://apps.apple.com/in/app/remark-job-recruiter-app/id6475642568" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center" style={{backgroundColor:"#115E59"}}>
            <span >Download from Appstore</span>
            <i class="fa fa-arrow-right" style={{color:"white"}}></i>
          </a>
        </div>
      </div>
    </div>
    <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
      <img src={Remarkhero} class="img-fluid fadeInRight" alt="" style={{width:"100%",height:"600px"}}/>
    </div>
  </div>
</div>

</section>
    </div>
  )
}

export default Topsection
