import React from 'react'

const About = () => {
  return (
    <div>

      <div className='container mt-5'>
        <h1 className='contact'>Our Values</h1>
        <p>
          Aakash Labs provides an advanced implementation of digital technologies in areas that are crucial to your business, supporting your ambition and helping to retain your customer base. We give life to your ideas.
        </p>
        <p>
          Aakash Labs combines tech expertise and business intelligence to catalyze change and deliver results. We make sure we add value to those businesses that aim to add value to their customers. When we first get to know you, we’ll immediately begin analyzing your website. We want to know everything we can about your brand.
        </p>

        <div className='team'>
        <h1 className='contact'>Our Team </h1>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img src="https://aakashlabs.com/_nuxt/img/dipesh.b9352d9.jpg" className="card-im" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Dipesh Karki</h5>
                    <p className="card-text">Finance manager</p>
                  </div>
              </div>
            </div>
            <div className="col">
            <div className="card">
                <img src="https://aakashlabs.com/_nuxt/img/manta.b1dd062.jpg" className="card-im" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Manta Lama Pakhrin</h5>
                    <p className="card-text">Digital marketor Creator coordinator</p>
                  </div>
              </div>
            </div>
            <div className="col">
            <div className="card">
                <img src="https://aakashlabs.com/_nuxt/img/dibus.48b47be.jpeg" className="card-im" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Dibush Ranjit</h5>
                    <p className="card-text">Graphics designer</p>
                  </div>
              </div>
            </div>
            <div className="col">
            <div className="card">
                <img src="https://aakashlabs.com/_nuxt/img/yathaartha.8e50260.jpg" className="card-im" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Yathartha Maharjan</h5>
                    <p className="card-text">Frontend developer</p>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About