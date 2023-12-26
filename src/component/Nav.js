import React from 'react'

const Nav = () => {
    return (
        <div className='navss'> 
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href='/'>
                        <img
                            src="https://aakashlabs.com/_nuxt/img/logo.358602d.png"
                            className="img-fluid rounded-top"
                            alt=""
                        />
                        
                    </a>
                    
                    <div className="collapse navbar-collapse" id="navbarText nav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href='/' >HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/about' >ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='contact'>CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/news'>NEWS</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                        <button type="button" class="btn btn-primary">Start a Project</button>
                        </span>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Nav
