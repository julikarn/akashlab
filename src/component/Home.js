import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const Home = () => {
    return (
        <div>

            <div className='one'>
                <div className='left'>
                    <h2>
                        <span className='span'>
                            GROW
                        </span>

                        <span className='span'>YOUR</span>
                        <span className='span'>
                            BUSINESS WITH US
                        </span>

                    </h2>
                    <div className='description'>
                        <p>
                            Aakash Labs combines technology with business intelligence to catalyze change and deliver data driven results. We're a dynamic team of passionate people with technical, creative & digital expertise. </p>
                    </div>
                    <button>Get Free Consulation</button>
                </div>
                <div className='right'>
                    <img
                        src="https://aakashlabs.com/_nuxt/img/experience-banner.a0902ac.jpeg"
                        className="img-fluid rounded-top"
                        alt=""
                    />

                </div>
            </div>
            <div className='slider container mt-5'>
                <h1 className='contact'>Slider</h1>
                <Carousel>
                    <Carousel.Item>
                        <img
                            src="https://aakashlabs.com/_nuxt/img/neeldavid.65f9db8.png"
                            className="img-fluid rounded-top"
                            alt=""
                        />


                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>

                        <img
                            src="https://aakashlabs.com/_nuxt/img/mahindra_optimized.0e2a97b.png"
                            className="img-fluid rounded-top"
                            alt=""
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>

                        <img
                            src="https://aakashlabs.com/_nuxt/img/angan.d969b64.png"
                            className="img-fluid rounded-top"
                            alt=""
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='services container mt-5'>
                <h1 className='contact'>Our Services</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="https://aakashlabs.com/_nuxt/img/001-laptop.6747861.svg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">
                                    Social Media Marketing</h4>
                                <p className="card-text">
                                    The best form of marketing doesn’t feel like marketing that is why we provide a custom-made framework that lists all the key digital marketing activities needed for your business to enhance your online presence and sales.However, a successful business isn’t achievable without a strong online presence. Without a strategy, it’s hard to know what you need to do online to achieve your business goals. Digital marketing strategy gives you direction and measures how successful you are.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://aakashlabs.com/_nuxt/img/003-desktop.0ccf3a7.svg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">

                                    Website Development
                                </h4>
                                <p className="card-text">
                                    The best form of marketing doesn’t feel like marketing that is why we provide a custom-made framework that lists all the key digital marketing activities needed for your business to enhance your online presence and sales.However, a successful business isn’t achievable without a strong online presence. Without a strategy, it’s hard to know what you need to do online to achieve your business goals. Digital marketing strategy gives you direction and measures how successful you are.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://aakashlabs.com/_nuxt/img/015-user.f6dec36.svg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">

                                    Search Engine Marketing
                                </h4>
                                <p className="card-text">
                                    The best form of marketing doesn’t feel like marketing that is why we provide a custom-made framework that lists all the key digital marketing activities needed for your business to enhance your online presence and sales.However, a successful business isn’t achievable without a strong online presence. Without a strategy, it’s hard to know what you need to do online to achieve your business goals. Digital marketing strategy gives you direction and measures how successful you are.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://aakashlabs.com/_nuxt/img/091-robot.2385fff.svg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">

                                    Chat Bots Development
                                </h4>
                                <p className="card-text">
                                    The best form of marketing doesn’t feel like marketing that is why we provide a custom-made framework that lists all the key digital marketing activities needed for your business to enhance your online presence and sales.However, a successful business isn’t achievable without a strong online presence. Without a strategy, it’s hard to know what you need to do online to achieve your business goals. Digital marketing strategy gives you direction and measures how successful you are.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='contact container mt-5'>

                <h1 className='contact'>Contact Us</h1>
                <div>

                    {/* <div className="card">

                        <div className="card-body">

                            <p>

                                We at Aakash Labs can provide you with unparalleled insight and digital marketing analysis. For assistance with any inquiries, or if you require our services, reach out to us at:

                            </p>
                        </div>
                    </div> */}
                    <div className="card border-success mb-3 max-width">
                        <p>

                            We at Aakash Labs can provide you with unparalleled insight and digital marketing analysis. For assistance with any inquiries, or if you require our services, reach out to us at:

                        </p>
                        <div className='a'>
                             <img
                                src="https://aakashlabs.com/_nuxt/img/contact.5b4936a.svg"
                                class="img-fluid rounded-top c"
                                alt=""
                             />
                             <div className='text'>

                                <h3>Call us</h3>
                                <p> +977-1-4430196 </p>

                             </div>
                             

                        </div>
                        <div className='a'>
                             <img
                                src="https://aakashlabs.com/_nuxt/img/contact-mail.ac3a3cc.svg"
                                class="img-fluid rounded-top c"
                                alt=""
                             />
                             <div className='text'>

                                <h3>Email Us</h3>
                                <p>   info@aakashlabs.com  </p>

                             </div>
                             

                        </div>
                        <div className='a'>
                             <img
                                src="https://aakashlabs.com/_nuxt/img/contact-location.c969177.svg"
                                class="img-fluid rounded-top c"
                                alt=""
                             />
                             <div className='text'>

                                <h3>Address</h3>
                                <p> Laxmi Plaza, Putali Sadak, Kathmandu, Nepal</p>

                             </div>
                             

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Home