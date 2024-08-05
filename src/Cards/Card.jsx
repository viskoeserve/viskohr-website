import React from "react";
import remark from '../assets/img/reamrk2.png'

const Card = () => {
  return (
    <>
      {/* <section id="values" class="values">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <p>Explore Categories</p>
          </header>

          <div class="row">
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOU-eNhRHJP9KBPhx4EX2fLMyakapkeVCIOQ&usqp=CAU"
                  class="img-fluid"
                  alt=""
                  style={{ height: "300px" }}
                />
                <h3>Hospital</h3>
                <p>36 open postion</p>
              </div>
            </div>

            <div
              class="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="box">
                <img
                  src="https://img.freepik.com/free-vector/invoice-concept-illustration_114360-2411.jpg"
                  class="img-fluid"
                  alt=""
                  style={{ height: "300px" }}
                />
                <h3>Accounting & Finance</h3>
                <p>99 open postion</p>
              </div>
            </div>

            <div
              class="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div class="box">
                <img
                  src="data:image/png;base64,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  "
                  class="img-fluid"
                  alt=""
                  style={{ height: "300px" }}
                />
                <h3>IT Contractor</h3>
                <p>33 open postion</p>
              </div>
            </div>
          </div>
          <br/>
          <br/>

          <div class="row">
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-WCVT910lDcDqpNAl7oFLUz8m_5BPFri8rn2XgqBXCdj1fXfcEyYeDc9CCyLBybqaNCQ&usqp=CAU"
                  class="img-fluid"
                  alt=""
                  style={{ height: "250px" }}
                />
                <h3>Graphics design</h3>
                <p>14 open postion</p>
              </div>
            </div>

            <div
              class="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="box">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/construction-site-2923052-2430702.png?f=webp"
                  class="img-fluid"
                  alt=""
                  style={{ height: "250px" }}
                />
                <h3>Construction</h3>
                <p>15 open postion</p>
              </div>
            </div>

            <div
              class="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div class="box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxD8GOVJ-2VDC8vXIIa3aybdBJmsfDoxqPP0WwhEpS9nrD2-s5KmN8yHklVEy0JxlsTk&usqp=CAU"
                  class="img-fluid"
                  alt=""
                  style={{ height: "250px" }}
                />
                <h3>Other</h3>
                <p>807 open postion</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="about" class="about">
        <div class="container">
          <header class="section-header">
            <p>Our Product</p>
          </header>
          <div class="row">
            <div class="col-xl-6 col-lg-7" data-aos="fade-right">
              <img src={remark} class="img-fluid" alt="" />
            </div>
            <div class="col-xl-6 col-lg-5 pt-5 pt-lg-0">
         
              <h1 data-aos="fade-up" className=" fw-bold fs-2 mb-4">
              Remark - Job & Recruiter App
              </h1>
              <p data-aos="fade-up" className=" fs-6">
                India's 1st AI-Powered Job Portal Remark is a product of Visko
                HR Pvt Ltd. The portal aims to revolutionize the recruitment
                process by providing a seamless and efficient platform for job
                seekers and employers (and recruiters). We at Remark strive to
                bridge the gap in hiring and create new opportunities for
                everyone with our innovative and state-of-the-art approach.
              </p>
              <p data-aos="fade-up" className=" fs-6">
                Remark has the best AI technology and inclusive design, which
                makes it easy for everyone to navigate through the app
                throughout their hiring journey. Leveraged with mind-blowing AI
                features such as AI Job Match, AI Bio, AI Job Description, and
                more, Remark is transforming the recruitment process like never
                before.
              </p>
              <p data-aos="fade-up" className=" fs-6">
                In a short span, Remark is in the league of becoming the best
                job portal in India due to its innovative job search, smooth and
                user-friendly interface, data safety and privacy, and attractive
                services. Everything in Remark is automated. Therefore, register
                with the app, and Remark will handle the mundane tasks while you
                can focus on preparing for jobs or hiring candidates.
              </p>
              <div className=" d-flex justify-content-center  ">
                <button type="button" class="btn  btn-lg fs-5 " style={{backgroundColor:"#115E59" ,color:"white"}}>
                  <a href="https://apps.apple.com/in/app/remark-job-recruiter-app/id6475642568" className=" text-light fw-semibold fs-5">  Download from Appstore <i class="fa fa-arrow-right" style={{color:"white"}}></i></a>
              
                </button>
                <button type="button" class="btn  btn-lg " style={{marginLeft:"5px",backgroundColor:"#115E59",color:"white"}}>
                <a href="https://play.google.com/store/apps/details?id=com.remark.viskohr" className=" text-light fw-semibold fs-5">  Download from Playstore <i class="fa fa-arrow-right" style={{color:"white"}}></i></a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
