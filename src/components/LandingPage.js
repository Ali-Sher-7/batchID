import React from "react";
import Navbar from "../assets/Navbar";
import Footer from "../assets/Footer";
import { Images } from "../assets/images";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section className="info p-5">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-6 col-sm-6 d-flex align-items-center p-0">
              <div className="card border-0 bg-transparent m-0 p-0">
                <div className="card-body p-0">
                  <h1 className="">
                    Batch<span>ID</span>
                  </h1>
                  <p className="card-text">
                    Revolutionize your dental clinic <br />
                    with flexible batch number management.
                  </p>
                  <Link
                    to="/"
                    className="btn bg-black text-white infoLink px-4 py-3 mt-4"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6  d-flex justify-content-end py-5 p-0 infoImgDiv">
              <img src={Images.infoImg} className="infoImg" alt="..." />
            </div>
          </div>
        </div>
      </section>

      <section className="solForDentalClinic py-5">
        <div className="container-fluid py-3">
          <div className="row ">
            <div className="col-lg-12">
              <h1 className=" text-center">
                BATCHID IS THE ULTIMATE SOLUTION FOR YOUR DENTAL CLINIC
              </h1>
              <p className=" text-center">
                With our app, you can easily scan and manage batch numbers for
                all
                <br /> materials used in the treatment rooms.
              </p>
            </div>
            <div className="col-lg-12">
              <div className="w-100 h-100 d-flex justify-content-center pt-5">
                <img src={Images.secondSecImg} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="batchIdApp py-5">
        <div className="container-fluid py-3">
          <div className="row">
            <div className="col-lg-6 d-flex mobileImgDiv">
              <img src={Images.thirdSecImg} alt="..." className="mobileimg" />
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-end mt-4">
              <div>
                <div>
                  <h1>
                    Batch<span>ID</span> APP
                  </h1>
                  <p>EFFECTIVE HANDLING OF MATERIALS</p>
                </div>
                <div>
                  <ul className="">
                    <li>
                      <div className="d-flex">
                        <div className="">
                          <img
                            src={Images.greaterThan}
                            className="greaterthan"
                            alt="..."
                          />
                        </div>
                        <div className="w-100">
                          Our app enables quick and easy batch number scanning
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <div className=" ">
                          <img
                            src={Images.greaterThan}
                            className="greaterthan"
                            alt="..."
                          />
                        </div>
                        <div className="w-100">
                          Ensuring accurate registration and
                          <br /> tracking
                        </div>
                      </div>
                    </li>

                    <li className="lastLi">
                      <div className="d-flex">
                        <div className=" ">
                          <img
                            src={Images.greaterThan}
                            className="greaterthan"
                            alt="..."
                          />
                        </div>
                        <div className="w-100">
                          This reduces the risk of errors and saves valuable
                          time for your staff
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="optimaizAndStreamline py-5">
        <div className="container-fluid pt-3 pb-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>BatchID- OPTIMIZE AND STREAMLINE</h1>
              <p>
                Discover how BatchID can lift your clinic to new heights and
                guarantee the
                <br /> highest quality and safety for your patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="devClinic">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 h-75">
              <div className="row">
                <div className="col-md-12">
                  <div className="card border-0 bg-transparent">
                    <div className="d-flex justify-content-end toStart">
                      <img
                        src={Images.secureData}
                        className="devClinic-card-img "
                        alt="..."
                      />
                    </div>
                    <div className="card-body py-0">
                      <h5 className="card-title text-end toStart">
                        SECURE DATA
                      </h5>
                      <p className="card-text text-end toStart">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting indus ideas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card border-0 bg-transparent">
                    <div className="d-flex justify-content-end toStart">
                      <img
                        src={Images.fullyfunction}
                        className="devClinic-card-img "
                        alt="..."
                      />
                    </div>
                    <div className="card-body py-0">
                      <h5 className="card-title text-end toStart">
                        FULLY FUNCTIONAL
                      </h5>
                      <p className="card-text text-end toStart">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting indus ideas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center h-75">
              <div className="h-75">
                <img
                  src={Images.fourthSecCenterImg}
                  alt="..."
                  className="devClinicImg"
                />
              </div>
            </div>
            <div className="col-lg-4 h-75">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="card border-0 bg-transparent">
                    <div className="lastColImg">
                      <img
                        src={Images.support}
                        className="devClinic-card-img "
                        alt="..."
                      />
                    </div>
                    <div className="card-body py-0">
                      <h5 className="card-title lastColH">24/7 SUPPORT</h5>
                      <p className="card-text lastColP">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting indus ideas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="card border-0 bg-transparent">
                    <img
                      src={Images.clinic}
                      className="devClinic-card-img "
                      alt="..."
                    />

                    <div className="card-body py-0">
                      <h5 className="card-title">CLINIC MANAGMENT</h5>
                      <p className="card-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting indus ideas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="helped">
        <div className="container">
          <div className="row pt-4 helpedRow">
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-center">
              <div>
                <h1 className="text-center">+12K</h1>
                <p className="text-end">HELPED XX</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-center">
              <div>
                <h1 className="text-center">84</h1>
                <p className="text-center">HELPED XX</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-center">
              <div>
                <h1 className="text-center">3.07</h1>
                <p className="text-center">HELPED XX</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-center">
              <div>
                <h1 className="text-center">24H</h1>
                <p className="text-center">HELPED XX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="container-fluid ">
          <div className="bg ">
            <div className="container mb-5 ">
              <h2 className="text-center">WHAT OUR CUSTOMER SAY</h2>

              <p className="text-center">
                Key patient reviews who have helped us create the impact that we
                have today
                <br /> being on the integral part of our journey
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <Carousel interval={3000} pause={false}>
                  <Carousel.Item>
                    <div className="d-flex justify-content-center">
                      <div className="w-75 reviewMain">
                        <div className="d-flex justify-content-center mb-4">
                          <img src={Images.stars} alt="..." className="star" />
                        </div>

                        <p className="text-center">
                          ‍Since we implemented BatchID in our clinic, our
                          handling of materials has become significantly
                          smoother. The app makes it easy to scan and record
                          batch numbers, saving us tons of time and reducing the
                          chance of errors. Our dentists and coordinators are
                          very satisfied with how user-friendly and efficient
                          the app is.
                        </p>
                        <h3 className="text-center">
                          ~ Dr. Anna Svensson, Clinic Coordinator
                        </h3>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4 reviewImgDiv">
                      <img
                        src={Images.review}
                        alt="..."
                        className="reviewImg"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="d-flex justify-content-center">
                      <div className="w-75 reviewMain">
                        <div className="d-flex justify-content-center mb-4">
                          <img src={Images.stars} alt="..." className="star" />
                        </div>

                        <p className="text-center">
                          ‍Since we implemented BatchID in our clinic, our
                          handling of materials has become significantly
                          smoother. The app makes it easy to scan and record
                          batch numbers, saving us tons of time and reducing the
                          chance of errors. Our dentists and coordinators are
                          very satisfied with how user-friendly and efficient
                          the app is.
                        </p>
                        <h3 className="text-center">
                          ~ Dr. Anna Svensson, Clinic Coordinator
                        </h3>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4 reviewImgDiv">
                      <img
                        src={Images.review}
                        alt="..."
                        className="reviewImg"
                      />
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="getStarted">
        <div className="container-fluid">
          <div className="text-center">
            <h1 className="pb-5">READY TO GET STARTED WITH BATCHID?</h1>
            <Link
              to="/"
              className="bg-black text-white py-3 px-4 text-decoration-none "
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>

      <section className="newsletter py-5">
        <div className="container py-3">
          <div className="card border-0 bg-transparent">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-center">SUBSCRIBE TO</h6>
              <h5 className="card-title text-center">Newsletter</h5>

              <p className="card-text text-center mt-4">
                Keep up with our latest news and events. Subscribe to our
                newsletter.
              </p>
              <div className=" text-center mt-3">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="py-3 mr-5"
                />
                <button className="btn py-3 px-5 shadow"> Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
