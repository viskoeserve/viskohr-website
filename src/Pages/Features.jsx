import React from "react";
import img from "../assets/img/imgs.png";
import imgs2 from "../assets/img/imgs2.png";
import img3 from "../assets/img/pricing-starter.png";

const Features = () => {
  return (
    <div>
      <section id="features" class="features">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <p>PROBLEMS THAT AIM TO SOLVE</p>
          </header>

          <div class="row">
            <div class="col-lg-6">
              <img src={img} class="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div class="row align-self-center gy-4">
                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                  <div class="feature-box d-flex align-items-center">
                    <i class="fa fa-check"></i>
                    <h3>Rise in Technical Issues</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                  <div class="feature-box d-flex align-items-center">
                    <i class="fa fa-check"></i>
                    <h3>Lack of AI integrated features</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                  <div class="feature-box d-flex align-items-center">
                    <i class="fa fa-check"></i>
                    <h3>Lack of data-driven recruitment process</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                  <div class="feature-box d-flex align-items-center">
                    <i class="fa fa-check"></i>
                    <h3>Biased recruitment process</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                  <div class="feature-box d-flex align-items-center">
                    <i class="fa fa-check"></i>
                    <h3>Lack of useful information</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                  <div class="feature-box d-flex align-items-center">
                    <i class="fa fa-check"></i>
                    <h3>Fraudulent applications</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row feature-icons" data-aos="fade-up">
            <h3>Other</h3>

            <div class="row">
              <div
                class="col-xl-4 text-center align-self-center"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img
                  src={imgs2}
                  class="img-fluid p-4"
                  alt=""
                />
              </div>

              <div class="col-xl-8 d-flex content">
                <div class="row align-self-center gy-4">
                  <div class="col-md-6 icon-box" data-aos="fade-up">
                    <i class="ri-line-chart-line"></i>
                    <div>
                      <h4>AI confidence calculation</h4>
                      <p style={{lineHeight: "30px",wordSpacing: "2px"}}>
                        Being one of its kind, our AI-based software will
                        analyze facial expressions, tone of voice, and other
                        non-verbal cues to provide insights into a
                        candidate&#39;s soft skills and cultural fit. This can
                        complement traditional interview methods and help
                        identify the best candidates.
                      </p>
                    </div>
                  </div>

                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i class="ri-stack-line"></i>
                    <div>
                      <h4>Interview preparation for candidates</h4>
                      <p style={{lineHeight: "30px",wordSpacing: "2px"}}>
                        With the help of our AI-based software, candidates can
                        interact with a bot which will help them with answering
                        of interview related questions. This bot is created in a
                        similar manner as to that of an interviewer, which helps
                        the candidate to prepare for the interview before-hand.
                      </p>
                    </div>
                  </div>

                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i class="ri-brush-4-line"></i>
                    <div>
                      <h4>AI generated job and bio description</h4>
                      <p style={{lineHeight: "30px",wordSpacing: "2px"}}>
                        Candidates often struggle writing a complete bio for
                        themselves to be put up on a job portal. In the same
                        manner, recruiters struggle to put up complete
                        information about the job posting and their
                        expectations. With the help of our software, employers
                        and employees can have a customized bio written.
                      </p>
                    </div>
                  </div>

                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i class="ri-magic-line"></i>
                    <div>
                      <h4>
                        Audio and Video Interview schedulation through
                        application:
                      </h4>
                      <p style={{lineHeight: "30px",wordSpacing: "2px"}}>
                        Through our mobile applications, employers and employees
                        can both schedule personal interviews at their
                        convenience. Our technical team has built up a robust
                        software with extremely less chances of encountering
                        technical faults, when compared to free video platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
