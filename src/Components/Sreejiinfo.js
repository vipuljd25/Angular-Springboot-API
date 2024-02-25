import React from 'react'
import  { useState } from 'react';
import axios from 'axios';
import './Sreejiinfo.css'

const Sreejiinfo = () => {
  const sliderWrapper = document.getElementById('sliderWrapper');
  let currentIndex = 0;
  
  function showCard(index) {
    const cardWidth = document.querySelector('.card').offsetWidth;
    const newPosition = -index * cardWidth;
    sliderWrapper.style.transform = `translateX(${newPosition}px)`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    showCard(currentIndex);
  });
  
  function nextCard() {
    currentIndex = (currentIndex + 1) % sliderWrapper.children.length;
    showCard(currentIndex);
  }
  
  function prevCard() {
    currentIndex = (currentIndex - 1 + sliderWrapper.children.length) % sliderWrapper.children.length;
    showCard(currentIndex);
  }
  
  // Add event listeners for navigation
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      nextCard();
    } else if (event.key === 'ArrowLeft') {
      prevCard();
    }
  });
  ////////////////////////////////////////////////////////////////////////
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const sendMessage = async () => {
    try {
      const response = await axios.post(
        'YOUR_API_ENDPOINT',
        {
          fullName: fullName,
          email: email,
          message: message,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY', 
          },
        }
      );

      console.log('Message sent successfully!', response.data);
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmissionStatus('error');
    }
  };

  const handleAlertClose = () => {
    setSubmissionStatus(null);
  };
  
  return (
    <>
      {/* image-text */}
      <div class="example" >
        <img src="https://www.shreejiinfotech.info/images/in-1.jpg" alt=''/>
        <h1 class="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationduration: '1s', animationname: 'slideInDown',color:'white' }}>
       <big>   WELCOME TO  SHREEJI INFO SOFT</big></h1>

      </div>
      {/* image-text-close */}
      {/* text-image-start */}
      <article className="article group">
        <img className="image right"
          src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww" width={'800px'} height={'500px'} alt="Image" />
        <section className="content">
          <h1 style={{ color: 'blue' }}>Theory of computation</h1>
          <p className="headline" style={{ color: 'black' }}>
            In theoretical computer science and mathematics, the theory of computation is the 
            branch that deals with what problems can be solved on a model of computation, using 
            an algorithm, how efficiently they can be solved or to what degree (e.g., approximate 
            solutions versus precise ones). The field is divided into three major branches: automata 
            theory and formal languages, computability theory, and computational complexity theory, which 
            are linked by the question: "What are the fundamental capabilities and limitations of computers?".
            In order to perform a rigorous study of computation, computer scientists work with a mathematical 
            abstraction of computers called a model of computation. There are several models in use, but the most 
            commonly examined is the Turing machine. Computer scientists study the Turing machine because it is 
            simple to formulate, can be analyzed and used to prove results, and because it represents what many 
            consider the most powerful possible "reasonable" model of computation (see Church–Turing thesis).
          </p>
        </section>
      </article>
      {/* text-image-close */}
      {/* Why choose Us-start */}
      <div class="feat bg-gray pt-5 pb-5">
    <div class="container5" style={{overflowX:'hidden'}}>
      <div class="row">
        <div class="section-head col-sm-12">
          <h4><span>Why Choose</span> Us?</h4>
          <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. 
            <br/>Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_one">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVsf8ScEOF-XWHSWBKcqH-p8VyXyMgDCtlg&usqp=CAU'
            alt=''/></span>
            <h6>Modern Design</h6>
            <p>We use latest technology for the latest world because we know the demand of peoples.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_two">
            <img src='https://img.freepik.com/premium-vector/abstract-arrow-logo-3d-colorful-arrow-logo-circle-earth-icon_345408-1123.jpg'
           alt='' /></span>
            <h6>Creative Design</h6>
            <p>We are always creative and and always lisen our costomers and we mix these two things and make beast design.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_three">
            <img src='https://www.shutterstock.com/image-vector/operator-logo-vector-icon-online-260nw-2126789186.jpg' alt=''/></span>
            <h6>24 x 7 User Support</h6>
            <p>If our customer has any problem and any query we are always happy to help then.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_four">
            <img src='https://png.pngtree.com/template/20200101/ourmid/pngtree-growth-logo-template-blue-business-image_343379.jpg' alt=''/></span>
            <h6>Business Growth</h6>
            <p>Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you're climbing it</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_five">
            <img src='https://e7.pngegg.com/pngimages/457/718/png-clipart-computer-icons-marketing-strategy-business-sales-marketing-text-logo.png' alt=''/></span>
            <h6>Market Strategy</h6>
            <p>Holding back technology to preserve broken business models is like allowing blacksmiths to veto the internal combustion engine in order to protect their horseshoes.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_six">
            <img src='https://logo.com/image-cdn/images/kts928pd/production/f384d24494a9a0cabebbcb7f790b496df575d8cb-341x352.png?w=1080&q=72' alt=''/></span>
            <h6>Affordable cost</h6>
            <p>Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.</p>
          </div>
        </div>
      </div>
      <button style={{ marginLeft: '43%', backgroundColor: 'black', overflow: 'hidden', color: 'White', borderRadius: '10px 0px 10px' }}><a href="/Contact" class="nav-link" >SELL YOUR DOMAIN</a></button>
    </div>
  </div>
     
      {/* Why choose Us-close */}
      {/* button-crusal-start */}
      <div id="headerd" >
      <br/>
        <h1 style={{textAlign:'center',color:'white'}}>Featured Domains</h1>
        <br/>
    <input type="radio" name="dot" id="one"/>
    <input type="radio" name="dot" id="two"/>
    <div class="main-card">
      <div class="cards">
        <div class="card">
         <div class="content">
           <div class="details">
             <div class="name"><strong>Trident.com</strong></div>
             <br/>
             <div><button style={{borderRadius:'10px 0px 10px',color:'lightsteelblue',color:'black'}}>
              <a >INQUIRE NOW</a></button></div>
           </div>
          
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="details">
             <div class="name"> <strong>DSA.com</strong></div>
             <br/>
             <div><button style={{borderRadius:'10px 0px 10px',color:'lightsteelblue',color:'black'}}>
              <a >INQUIRE NOW</a></button></div>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="details">
             <div class="name"><strong>Terrific.com</strong></div>
             <br/>
             <div><button style={{borderRadius:'10px 0px 10px',color:'lightsteelblue',color:'black'}}>
              <a >INQUIRE NOW</a></button></div>
           </div>
         </div>
        </div>
      </div>
      <div class="cards">
        <div class="card">
         <div class="content">
           <div class="details">
             <div class="name"><strong>Maiden.com</strong></div>
             <br/>
             <div><button style={{borderRadius:'10px 0px 10px',color:'lightsteelblue',color:'black'}}>
              <a >INQUIRE NOW</a></button></div>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="details">
             <div class="name"><strong>Dutchess.com</strong></div>
             <br/>
             <div><button style={{borderRadius:'10px 0px 10px',color:'lightsteelblue',color:'black'}}>
              <a >INQUIRE NOW</a></button></div>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="details">
             <div class="name"><strong>Continuous.com</strong></div>
             <br/>
             <div><button style={{borderRadius:'10px 0px 10px',color:'lightsteelblue',color:'black'}}>
              <a >INQUIRE NOW</a></button></div>
           </div>
         </div>
        </div>
      </div>
    </div>
    <div class="button">
      <label for="one" class=" active one"></label>
      <label for="two" class="two"></label>
    </div>
  </div>
      {/* button-crusal-close */}
  <br/>
        {/* button2-crusal-add-start */}
        <div class="slider-container">
          <br/>
          <br/>
          <h1 style={{color:'wheat',textAlign:'center'}}>Domains We've Sold</h1>
      <marquee>
    <div class="slider-wrapper" id="sliderWrapper" >
      <div class="card" style={{borderRadius:'10px 0px 10px'}}><p style={{textAlign:'center'}}><strong>Sandy.com</strong></p></div>
      <div class="card" style={{borderRadius:'10px 0px 10px'}}><p style={{textAlign:'center'}}><strong>Background.com</strong></p></div>
      <div class="card" style={{borderRadius:'10px 0px 10px'}}><p style={{textAlign:'center'}}><strong>Bowman.com</strong></p></div>   
      <div class="card" style={{borderRadius:'10px 0px 10px'}}><p style={{textAlign:'center'}}><strong>AFX.com</strong></p></div>  
      <div class="card" style={{borderRadius:'10px 0px 10px'}}><p style={{textAlign:'center'}}><strong>Transcript.com</strong></p></div>  
      <div class="card" style={{borderRadius:'10px 0px 10px'}}><p style={{textAlign:'center'}}><strong>Garza.com</strong></p></div>  
    </div>
    </marquee>
    
  </div>
         {/* button2-crusal-add-close */}
        <br/>
         {/* Services-start */}
         <div class="top width">
<h2 style={{color:'black'}}>Services</h2>
<div class="white-div"></div>
<div class="row no-gutters">
<div class="col-md-12 d-flex justify-content-around flex-wrap">
<div class="bitcoins col-lg-2 col-md-6 col-sm-6 col-12" id="top1">
<div class="domain-brocerage-background domain-background"></div>
<img src='https://apexmoon.com/img/Domain-brokerage-icon.svg' width={'100px'} alt=''/>
<h3>DOMAIN BROKERAGE</h3>
<p></p>
</div>
<div class="bitcoins col-lg-2 col-md-6 col-sm-6 col-12" id="top2">
<div class="domain-acquistions-background domain-background"></div>
<img src='https://apexmoon.com/img/Domain-acquisitions-icon.svg' width={'100px'} alt=''/>
<h3>STEALTH DOMAIN ACQUISITION</h3>
<p></p>
</div>
<div class="bitcoins col-lg-2 col-md-6 col-sm-6 col-12" id="top3">
<div class="services-background"></div>
<div class="domain-acquistions-valuation domain-background"></div>
<img src='https://apexmoon.com/img/Domain-valuation-icon.svg' width={'100px'} alt=''/>
<h3>DOMAIN VALUATION</h3>
<p></p>
</div>
<div class="bitcoins col-lg-2 col-md-6 col-sm-6 col-12">
<a href="phpl#bottom4" class="portfolio-link">
<div class="portfolio domain-background"></div>
<img src='https://apexmoon.com/img/portfolio-management-icon.svg' width={'100px'} alt=''/>
<h3>PORTFOLIO MANAGMENT</h3>
</a>
</div>
</div>
</div>
</div>
         <br/>
          {/* Services-close */}
          {/* image-text5-start */}
         <div className="container-fluid no-gutters hero" id="bottom1" >
      <div className="row no-gutters domain-brokerage">
        <div className="col-lg-6">
          {/* Background image for the left side */}
          <div className="hero-background"></div>
        </div>
        <div className="col-lg-6">
          <div className="brokerage-half d-flex flex-column justify-content-center wow bounceInUp" 
            data-wow-offset="127" 
            data-wow-duration="1s"
            style={{visibility: 'visible', animationDuration: '1s', animationName: 'bounceInUp'}}
          >
            <h2 style={{color:'black'}}>Domain Brokerage</h2>
            <p className="head-p">Quality, not quantity - that is our focus. When you list a domain name with us, we take it seriously. We apply ourselves thoroughly and work tirelessly to find the perfect buyer.</p>
            <p>Unlike many others, when you list your domain with Apex Moon, we don’t simply sit and wait for inbound inquiries. Our vast network and expertise allows us to proactively seek out decision-makers in big companies, the people that will see the true value of your domain name.</p>
            <p className="last-p">Want to know the best part? We only get paid if and when we successfully sell your domain. We are so confident that we will find you the perfect buyer at your desired price that we charge no fees upfront.</p>
          </div>
        </div>
      </div>
    </div>
          {/* image5-text-close */}
             
       <br/>
         {/* image-text7-start */}
         <article className="article group">
        <img className="image right" style={{marginLeft:'10px',overflow:'hidden'}}
          src="https://blogbackend.bigrock.in/wp-content/uploads/2021/10/why-should-you-register-multiple-domain-extensions-for-your-business-website-blog-banner.jpg"  alt="Image"  />
        <section className="content" style={{marginLeft:'10px'}}>
          <h1 style={{ color: 'black' }}>Theory of computation</h1>
          <p className="headline" style={{ color: 'black' }}>
            In theoretical computer science and mathematics, the theory of computation is the 
            branch that deals with what problems can be solved on a model of computation, using 
            an algorithm, how efficiently they can be solved or to what degree (e.g., approximate 
            solutions versus precise ones). The field is divided into three major branches: automata 
            theory and formal languages, computability theory, and computational complexity theory, which 
            are linked by the question: "What are the fundamental capabilities and limitations of computers?".
            In order to perform a rigorous study of computation, computer scientists work with a mathematical 
            abstraction of computers called a model of computation. There are several models in use, but the most 
            commonly examined is the Turing machine. 
          </p>
        </section>
      </article>
          {/* image-text7-close */}
      <br/>
          {/* image-text8-start */}
          <div class="how-container">
    <div class="right-container">
        <div class="right-content">
          <h1>Portfolio Managment</h1>
          <p>Our Portfolio Management is a full service that takes care of the entirety 
            of your domain name portfolio. We will ensure your domain names are taken care
             of, renewed every year, utilized to their full potential, and if desired, sold
              for the maximum amount to the perfect buyer. We take this service very seriously 
              and if your portfolio is accepted for our Portfolio Management,
             you can rest assured that your domains are in the best hands possible..</p>
          
        </div>
    </div>
    <div class="left-container">
      <div class="left-content" >
        <img 
        src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp" 
        width={'600px'} alt=''/>
      </div>
    </div>
  </div>
          {/* image-text8-end */}
            <br/>
          {/* Testimonials-start */}
          <div className='bavhtr'>
          <div class="container" style={{backgroundImage:'url(https://apexmoon.com/img/testimonils-bg.jpg)'}} >
    <div class="lead-testimonial-cont" >
      <br/>
      <h2 class="tstmnl-hndg" style={{color:'white',textAlign:'center'}}>What people say about us</h2>
      <div id="testimonialCarousel" class="lead-tstmnl-slider carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" style={{color:'white'}}>
            <div class="lead-tstmnl-slide">
              <div class="lead-tstmnl-img">
              </div>
              <div class="lead-tstmnl-text-cont">
                <span class="lead-tstmnl-comment">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <ul class="lead-tstmnl-nm-dsg" style={{textAlign:'center'}}>
                  <li>Salman Khan</li>
                  <li>Bollywood Actor</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Add more carousel items for other testimonials --> */}
          <div class="carousel-item" style={{color:'white'}}>
            <div class="lead-tstmnl-slide" >
              <div class="lead-tstmnl-img">
              </div>
              <div class="lead-tstmnl-text-cont">
                <span class="lead-tstmnl-comment">
                  Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <ul class="lead-tstmnl-nm-dsg"  style={{textAlign:'center'}}>
                  <li>Sonakshi Sinha</li>
                  <li>Bollywood Actress</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="carousel-item" style={{color:'white'}}>
            <div class="lead-tstmnl-slide">
              <div class="lead-tstmnl-img">
              </div>
              <div class="lead-tstmnl-text-cont">
                <span class="lead-tstmnl-comment">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
                </span>
                <ul class="lead-tstmnl-nm-dsg" style={{textAlign:'center'}}>
                  <li>Salman Raza</li>
                  <li>Ux/Ui, Graphic &amp; Frond-end Designer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Add navigation controls if needed --> */}
        <a class="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
  </div>
          {/* Testimonials-end */}
          <br/>
          
      {/* context us page */}
      <div className="contact-us-container">
      <div className="section-header">
        <div className="con">
          <h2>Contact Us</h2>
          <p>"Shreeji infosoft Software Company is based. This company working on Website development and design, 
            Website SEO and Marketing, ERP & CRM type software, Mobile Application IOS and Android."</p>
        </div>
      </div>

      <div className="con contact-grid">
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-home"></i>
            </div>

            <div className="contact-info-content">
              <h4>Address</h4>
              <p>plot no 5, Singapore Township, Indore, Madhya Pradesh <br />453771</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-phone"></i>
            </div>

            <div className="contact-info-content">
              <h4>Phone</h4>
              <p>798-77-24-653</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-envelope"></i>
            </div>

            <div className="contact-info-content">
              <h4>Email</h4>
              <p>info@shreejiinfosoft.com</p>
            </div>
          </div>
        </div>

        <div className="contact-form" style={{width:'295px',overflow:'hidden'}}>
          <label>
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <br />
          <label >
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Type your message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here"
            />
          </label>
          <br />
          <button onClick={sendMessage}>Send Message</button>

          {submissionStatus === 'success' && (
            <div className="alert success" onClick={handleAlertClose}>
              Successfully submitted! Click to close.
            </div>
          )}

          {submissionStatus === 'error' && (
            <div className="alert error" onClick={handleAlertClose}>
              Error submitting message. Click to close.
            </div>
          )}
        </div>
      </div>
    </div>
      {/* context-us page-close */}
    <br/>
       {/* footer-start */}
       <footer id="footer">
			<div class="container">
				<div class="row">
					<div class="col-md-3">
						<a href=""><img src="https://api.logo.com/api/v2/images?logo=logo_259f2318-4726-4aae-a9f9-f0e7a679fb8c&width=1000&height=1000&fit=contain&margin_ratio=0&background=transparent&name=Shreeji%20Info%20Soft&u=2024-02-08T12%3A26%3A58.579Z&format=png&quality=30" alt="" class="img-fluid logo-footer"/></a>

					</div>
					<div class="col-md-3">
						<div class="useful-link">
							<h2>Useful Links</h2>
							<img src="./assets/images/about/home_line.png" alt="" class="img-fluid"/>
							<div class="use-links">
								<li><a href="/home"><i class="fa-solid fa-angles-right"></i> Home</a></li>
								<li><a href="/aboutus"><i class="fa-solid fa-angles-right"></i> About Us</a></li>
								<li><a href="/services"><i class="fa-solid fa-angles-right"></i> Services</a></li>
								<li><a href="contact"><i class="fa-solid fa-angles-right"></i> Contact</a></li>
							</div>
						</div>

					</div>
                    <div class="col-md-3">
                        <div class="social-links">
							<h2>Follow Us</h2>
							<img src="./assets/images/about/home_line.png" alt=""/>
							<div class="social-icons">
								<li><a href="https://shreejiinfosoft.com/#"><i class="fa-brands fa-facebook-f"></i> Facebook</a></li>
								<li><a href="https://shreejiinfosoft.com/#"><i class="fa-brands fa-instagram"></i> Instagram</a></li>
								<li><a href="https://www.linkedin.com/in/shreeji-infosoft/"><i class="fa-brands fa-linkedin-in"></i> Linkedin</a></li>
							</div>
						</div>
                    

                    </div>
					<div class="col-md-3">
						<div class="address">
							<h2>Address</h2>
							<img src="./assets/images/about/home_line.png" alt="" class="img-fluid"/>
							<div class="address-links">
								<li class="address1"><i class="fa-solid fa-location-dot"></i> Plot No. 5, Singapore Township ,Indore (M.P.) 453771</li>
								   <li><a href=""><i class="fa-solid fa-phone"></i> +91 8827010584</a></li>
								   <li><a href=""><i class="fa-solid fa-envelope"></i> info@shreejiinfosoft.com</a></li>
							</div>
						</div>
					</div>
                  
				</div>
			</div>

		</footer>
		{/* <!-- footer section end -->
		<!-- footer copy right section start --> */}
		<section id="copy-right">
			<div class="copy-right-sec"><i class="fa-solid fa-copyright"></i>  
      Copyright © 2024 <a href="#">Shreeji InfoSoft </a> 


			</div>

		</section>
		{/* <!-- footer copy right section end --> */}

       {/* footer-end */}

     
    </>
  )
}

export default Sreejiinfo