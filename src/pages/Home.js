import React, { useEffect, useState } from 'react';
import Weblayout from '../layout/Weblayout';
import axios from '../Admin/component/axios';

function Home() {
const [courses,setCourses]=useState([]);
   useEffect(() => {
       getCourses();
     }, []);
   
     const getCourses = async (e) => {
       let res = await axios.get(`front_api/courses.php`)
       setCourses(res.data);
     }
  return (
    <Weblayout>

  <main className="main">
    
    <section id="hero" className="hero section dark-background">

      <img src="assets/img/hero-bg.jpg" alt=""/>

      <div className="container">
        <h2>Learning Today,<br/>Leading Tomorrow</h2>
        <p>We are team of talented designers making websites with Bootstrap</p>
        <div className="d-flex mt-4">
          <a href="courses.html" className="btn-get-started">Get Started</a>
        </div>
      </div>

    </section>
    
    <section id="about" className="about section">

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-6 order-1 order-lg-2">
            <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-6 order-2 order-lg-1 content">
            <h3>Voluptatem dignissimos provident quasi corporis</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
            </ul>
            <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
          </div>

        </div>

      </div>

    </section>

    
    <section id="counts" className="section counts light-background">

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter"></span>
              <p>Students</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter"></span>
              <p>Courses</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter"></span>
              <p>Events</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter"></span>
              <p>Trainers</p>
            </div>
          </div>

        </div>

      </div>

    </section>

   
    <section id="why-us" className="section why-us">

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4">
            <div className="why-box">
              <h3>Why Choose Our Products?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div className="text-center">
                <a href="#" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="row gy-4">

              <div className="col-xl-4">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-clipboard-data"></i>
                  <h4>Corporis voluptates officia eiusmod</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-gem"></i>
                  <h4>Ullamco laboris ladore pan</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-inboxes"></i>
                  <h4>Labore consequatur incidid dolore</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>

   
    <section id="features" className="features section">

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-4">
            <div className="features-item">
              <i className="bi bi-eye" style={{color: '#ffbb2c'}}></i>
              <h3><a href="" className="stretched-link">Lorem Ipsum</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="features-item">
              <i className="bi bi-infinity" style={{color: '#5578ff'}}></i>
              <h3><a href="" className="stretched-link">Dolor Sitema</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="features-item">
              <i className="bi bi-mortarboard" style={{color: '#e80368'}}></i>
              <h3><a href="" className="stretched-link">Sed perspiciatis</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="features-item">
              <i className="bi bi-nut" style={{color: '#e361ff'}}></i>
              <h3><a href="" className="stretched-link">Magni Dolores</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="features-item">
              <i className="bi bi-shuffle" style={{color: '#47aeff'}}></i>
              <h3><a href="" className="stretched-link">Nemo Enim</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="features-item">
              <i className="bi bi-star" style={{color: '#ffa76e'}}></i>
              <h3><a href="" className="stretched-link">Eiusmod Tempor</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="features-item">
              <i className="bi bi-x-diamond" style={{color: '#11dbcf'}}></i>
              <h3><a href="" className="stretched-link">Midela Teren</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="features-item">
              <i className="bi bi-camera-video" style={{color: '#4233ff'}}></i>
              <h3><a href="" className="stretched-link">Pira Neve</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="features-item">
              <i className="bi bi-command" style={{color: '#b2904f'}}></i>
              <h3><a href="" className="stretched-link">Dirada Pack</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="features-item">
              <i className="bi bi-dribbble" style={{color: '#b20969'}}></i>
              <h3><a href="" className="stretched-link">Moton Ideal</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="features-item">
              <i className="bi bi-activity" style={{color: '#ff5828'}}></i>
              <h3><a href="" className="stretched-link">Verdo Park</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="features-item">
              <i className="bi bi-brightness-high" style={{color: '#29cc61'}}></i>
              <h3><a href="" className="stretched-link">Flavor Nivelanda</a></h3>
            </div>
          </div>

        </div>

      </div>

    </section>

    
    <section id="courses" className="courses section">

     
      <div className="container section-title">
        <h2>Courses</h2>
        <p>Popular Courses</p>
      </div>

      <div className="container">

        <div className="row">

        {courses.length > 0 && courses.map((d, key) =>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="course-item">
              <img src={`${process.env.REACT_APP_API_URL}${d.image}`} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="category">{d.cat_name}</p>
                  <p className="price">{d.price}</p>
                </div>

                <h3><a href="course-details.html">{d.title}</a></h3>
                <p className="description">{d.description}</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bi bi-person user-icon"></i>&nbsp;50
                    &nbsp;&nbsp;
                    <i className="bi bi-heart heart-icon"></i>&nbsp;65
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        </div>

      </div>

    </section>

    
    <section id="trainers-index" className="section trainers-index">

      <div className="container">

        <div className="row">

          <div className="col-lg-4 col-md-6 d-flex" >
            <div className="member">
              <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" alt=""/>
              <div className="member-content">
                <h4>Walter White</h4>
                <span>Web Development</span>
                <p>
                  Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                </p>
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex" >
            <div className="member">
              <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt=""/>
              <div className="member-content">
                <h4>Sarah Jhinson</h4>
                <span>Marketing</span>
                <p>
                  Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                </p>
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex" >
            <div className="member">
              <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt=""/>
              <div className="member-content">
                <h4>William Anderson</h4>
                <span>Content</span>
                <p>
                  Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                </p>
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
    </Weblayout>
    
  );
}




export default Home;
