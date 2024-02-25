import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      {/* image-text */}
      <div class="example" >
        <img src="https://www.helloverify.com/Consumer/content/images/banner4.png" alt=''/>
        <h1 class="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationduration: '1s', animationname: 'slideInDown',color:'white',paddingRight:'120px' }}>
          WELCOME TO  SHREEJI INFO SOFT</h1>
      </div>
      {/* image-text-close */}

  {/* text-image-start */}
  <article className="article group ">
        <img className="image right"
          src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww" width={'800px'} height={'500px'} alt="Image" />
        <section className="content">
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
            commonly examined is the Turing machine. Computer scientists study the Turing machine because it is 
            simple to formulate, can be analyzed and used to prove results, and because it represents what many 
            consider the most powerful possible "reasonable" model of computation (see Church–Turing thesis).
          </p>
        </section>
      </article>
      {/* text-image-close */}

     <div style={{backgroundColor:'gray'}}>
      <div class="container mt-md-6 mt-5" id="nav-pills" >
      <div class="row">
        <div class="col-lg-9 col-xl-7 mx-auto text-center">
          <h2 style={{ transition: 'color 0.3s ease'}}>Our Services</h2>
          <p class="lead">Retaining customer base is important for any enterprise, it takes great effort to make good customer relationship and minute error can ruin it. Owing to our outstanding customer service we have maintained the 85 % customer retention rate. We, the best IT service provider company in the World, help your business in getting loyalty back by transforming into latest advanced IT technology.</p>
        </div>
      </div>
      <div class="row align-items-center mt-md-6 mt-4">
        <div class="col-lg-6 d-none d-lg-block">
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane active show" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
              <img alt="Image Not Found" class="img-fluid" src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/img/portfolio/card2.jpg"/>
            </div>
            <div class="tab-pane" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
              <img alt="Image Not Found" class="img-fluid" src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/img/portfolio/construction.jpg"/>
            </div>
            <div class="tab-pane" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
              <img alt="Image Not Found" class="img-fluid" src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/img/portfolio/medical.jpg"/>
            </div>
            <div class="tab-pane" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-4-tab">
              <img alt="Image Not Found" class="img-fluid" src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/img/portfolio/poster.png"/>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <ul class="px-lg-5 nav nav-pills outline-pills text-md-left text-center">
            <li class="nav-item position-relative">
              <a class="hover-nav-link text-gray nav-link p-3 active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" aria-controls="v-pills-1">
                <h3 class="text-orange h4">Enterprise Business Solution</h3>
                <p class="m-0">The competitive scenario of business has called for efficient operational activities, leveraging investment cost and overall high profitability. Our experts will guide you to achieve all with perfect enterprise business solution.</p>
              </a>
            </li>
            <li class="pt-3 nav-item position-relative">
              <a class="hover-nav-link text-gray nav-link p-3" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" aria-controls="v-pills-2">
                <h3 class="text-orange h4">Mobility</h3>
                <p class="m-0">The customer inclination to mobility sector has urged the business transformation towards mobility solution. We help in this transformation that brings high efficiency, better customer reach, with more ROI.</p>
              </a>
            </li>
            <li class="pt-3 nav-item position-relative">
              <a class="hover-nav-link text-gray nav-link p-3" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" aria-controls="v-pills-3">
                <h3 class="text-orange h4">UI/UX Design Services</h3>
                <p class="m-0">The UI/UX of the company attach the customer base and is the foremost customer retention factor. The expert designers in our company will assist you in getting the best design analytic solution for your requirement. </p>
              </a>
            </li>
            <li class="pt-3 nav-item position-relative pb-1">
              <a class="hover-nav-link text-gray nav-link p-3" id="v-pills-4-tab" data-toggle="pill" href="#v-pills-4" aria-controls="v-pills-4">
                <h3 class="text-orange h4">Business Analytics</h3>
                <p class="m-0">Getting the right business planning is essential for any business success and progress. We give new insight to your business requirement by better decision-making and intelligent solution.</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
{/* close-demo */}

  {/* image-text7-start */}
  <article className="article group">
        <img className="image right" style={{marginLeft:'10px',overflow:'hidden'}}
          src="https://blogbackend.bigrock.in/wp-content/uploads/2021/10/why-should-you-register-multiple-domain-extensions-for-your-business-website-blog-banner.jpg"  alt="Image"  />
        <section className="content" style={{marginLeft:'10px'}}>
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
            commonly examined is the Turing machine. 
          </p>
        </section>
      </article>
          {/* image-text7-close */}
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

export default Home