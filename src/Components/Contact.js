import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'

const ContactUs = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const sendMessage = async () => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',  
        {
          title: fullName,  
          body: message,
          email: email,
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
    <div className="contact-us-container">
      <div className="section-header">
        <div className="con">
          <h2>Contact Us</h2>
          <p>"Shreeji infosoft Software Company is based. This company working on Website development and design, 
            Website SEO and Marketing, 
            ERP & CRM type software, Mobile Application IOS and Android."</p>
        </div>
      </div>

      <div className="con contact-grid" >
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-home"></i>
            </div>

            <div className="contact-info-content" >
              <h4>Address</h4>
              <p>plot no 5, Singapore Township, Indore, Madhya Pradesh <br />453771</p>
            </div>
          </div>
            <br/>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-phone"></i>
            </div>
             <br/>
            <div className="contact-info-content">
              <h4>Phone</h4>
              <p>798-77-24-653</p>
            </div>
          </div>
            <br/>
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
    {/* contect-close */}

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
  );
};

export default ContactUs;
