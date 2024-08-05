import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from 'sweetalert2';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    const contactData = {
      li_subject: data.subject,
      li_name: data.name,
      li_email: data.email,
      li_message: data.message,
      li_company: "Visko HR Private Limted",
    };
    axios
      .post(
        "https://visko.group/api/inquiry/message/insert-message",
        contactData
      )
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${response.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
    reset();
  };
  return (
    <div>
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <p>Contact Us</p>
          </header>

          <div class="row gy-4">
            <div class="col-lg-6">
              <div class="row gy-4">
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="fa fa-phone"></i>
                    <h3>Call Us</h3>
                    <p>+91 7828911470</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="fa fa-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      info@remarkhr.com
                      <br />
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="fa fa-clock-o"></i>
                    <h3>Open Hours</h3>
                    <p>
                      Monday - Friday
                      <br />
                      9:00AM - 06:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <form
                method="post"
                class="php-email-form "
                onSubmit={handleSubmit(onSubmit)}
              >
                <div class="row gy-4">
                  <div class="col-md-6 bg-light">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Your Name"
                      {...register("name")}
                      required
                    />
                    {errors.name && <span>This field is required</span>}
                  </div>

                  <div class="col-md-6 ">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Your Email"
                      {...register("email", { required: true })}
                      required
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>

                  <div class="col-md-12">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      placeholder="Subject"
                      {...register("subject", { required: true })}
                      required
                    />
                    {errors.subject && <span>This field is required</span>}
                  </div>

                  <div class="col-md-12">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      {...register("message", { required: true })}
                      required
                    ></textarea>
                    {errors.message && <span>This field is required</span>}
                  </div>

                  <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
