import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <section className="bg-gray-7">
          <div className="breadcrumbs-custom box-transform-wrap context-dark">
            <div className="container">
              <h3 className="breadcrumbs-custom-title">Contacts</h3>
              <div className="breadcrumbs-custom-decor" />
            </div>
            <div
              className="box-transform"
              style={{
                backgroundImage: "url(/assets/images/bg-typography.jpg)",
              }}
            />
          </div>
          <div className="container">
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link href="/">Home</Link>
              </li>
              {/* <li>
                <a href="#">Pages</a>
              </li> */}
              <li className="active">Contacts</li>
            </ul>
          </div>
        </section>
        {/* Contacts*/}
        <section className="section section-lg bg-default text-md-left">
          <div className="container">
            <div className="row row-60 justify-content-center">
              <div className="col-lg-8">
                <h4 className="text-spacing-25 text-transform-none">
                  Get in Touch
                </h4>
                <form
                  className="rd-form rd-mailform"
                  data-form-output="form-output-global"
                  data-form-type="contact"
                  method="post"
                  action="bat/rd-mailform.php"
                >
                  <div className="row row-20 gutters-20">
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <input
                          className="form-input"
                          id="contact-your-name-5"
                          type="text"
                          name="name"
                          data-constraints="@Required"
                        />
                        <label
                          className="form-label"
                          htmlFor="contact-your-name-5"
                        >
                          Your Name*
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <input
                          className="form-input"
                          id="contact-email-5"
                          type="email"
                          name="email"
                          data-constraints="@Email @Required"
                        />
                        <label className="form-label" htmlFor="contact-email-5">
                          Your E-mail*
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        {/*Select 2*/}
                        <select
                          className="form-input"
                          data-minimum-results-for-search="Infinity"
                          data-constraints="@Required"
                        >
                          <option value={1}>Select a Service</option>
                          <option value={2}>Value Engineering</option>
                          <option value={3}>HVAC Design</option>
                          <option value={4}>Geospatial Design</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <input
                          className="form-input"
                          id="contact-phone-5"
                          type="text"
                          name="phone"
                          data-constraints="@Numeric"
                        />
                        <label className="form-label" htmlFor="contact-phone-5">
                          Your Phone*
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-wrap">
                        <label
                          className="form-label"
                          htmlFor="contact-message-5"
                        >
                          Message
                        </label>
                        <textarea
                          className="form-input textarea-lg"
                          id="contact-message-5"
                          name="message"
                          data-constraints="@Required"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="button button-secondary button-winona"
                    type="submit"
                  >
                    Contact us
                  </button>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="aside-contacts">
                  <div className="row row-30">
                    <div className="col-sm-6 col-lg-12 aside-contacts-item">
                      <p className="aside-contacts-title">Get social</p>
                      <ul className="list-inline contacts-social-list list-inline-sm">
                        <li>
                          <a className="icon mdi mdi-facebook" href="#" />
                        </li>
                        <li>
                          <a className="icon mdi mdi-twitter" href="#" />
                        </li>
                        <li>
                          <a className="icon mdi mdi-instagram" href="#" />
                        </li>
                        <li>
                          <a className="icon mdi mdi-google-plus" href="#" />
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-lg-12 aside-contacts-item">
                      <p className="aside-contacts-title">Phone</p>
                      <div className="unit unit-spacing-xs justify-content-center justify-content-md-start">
                        <div className="unit-left">
                          <span className="icon mdi mdi-phone" />
                        </div>
                        <div className="unit-body">
                          <p className="phone">+91-124-4653435</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-12 aside-contacts-item">
                      <p className="aside-contacts-title">E-mail</p>
                      <div className="unit unit-spacing-xs justify-content-center justify-content-md-start">
                        <div className="unit-left">
                          <span className="icon mdi mdi-email-outline" />
                        </div>
                        <div className="unit-body">
                          <p className="mail">hr@stsinfracon.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-12 aside-contacts-item">
                      <p className="aside-contacts-title">Address</p>
                      <div className="unit unit-spacing-xs justify-content-center justify-content-md-start">
                        <div className="unit-left">
                          <span className="icon mdi mdi-map-marker" />
                        </div>
                        <div className="unit-body">
                          <p className="address">
                            Registered office: 307, 3rd Floor, Eros City Square,
                            Rosewood City, <br className="d-md-none" />
                            Sector 49-50, Gurugram, Haryana-122018
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
