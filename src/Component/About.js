import React from 'react'

const About = () => {
  return (
      <section id='about'>
        <div className="about-1 container">
          <h3 className='text-center my-5'>ABOUT-US</h3>
         { <p className='mx-3'>Prestious IT Solution Pvt. Ltd. is a software development company established in 2022. They are headquartered in Surat, India. We offers web and mobile app development.
          
          </p>}
        </div>
        <div className="about-2 my-5">
          <div className="content-box-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="about-item text-center">
                  <i className="fa fa-book">
                    <h3>MISSION</h3>
                    <hr />
                    <p>To go any extra mile to deliver a cost-effective array of customized solutions, especially in the pressing timelines, maintaining the service quality several notches higher.</p>
                  </i>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="about-item text-center">
                  <i className="fa fa-book">
                    <h3>VISSION</h3>
                    <hr />
                     <p>Our vision is to build an Organization that stands for Customer Delight and Empathy and be the no 1 choice for web and mobile app development solutions.</p>
                  </i>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="about-item text-center">
                  <i className="fa fa-book">
                    <h3>ACHIVEMENTS</h3>
                    <hr />
                    <p>Started business from scratch with mere  39, 000/- revenue first year, that too after two major business failures, he not only he sustained but emerged as a leader in respect of trading industry in Gujarat.</p>
                  </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className='text-center mt-5'>
         <p>Copyright &copy; 2023 ALL rights reserved by Freddie Nice Inc.</p>
        </footer>

      </section>
      
  )
}

export default About