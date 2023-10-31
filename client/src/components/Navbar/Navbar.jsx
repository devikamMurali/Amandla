import React from 'react'

export default function Navbar() {
  return (
    <> 
       <section className="header_section">
  <div className="container">
    <nav className="navbar navbar-expand-lg custom_nav-container d-lg-none">
      <a className="navbar-brand" href="#">
        <div className="logo-box">
          <img src="asset/images/logo.png" alt="" />
          <span>AMANDLA</span>
        </div>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  ">
          <li className="nav-item active">
            <a className="nav-link" href="/home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">
              {" "}
              About Us{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
           {" "} Contact Us  {" "}
              
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              {" "}
              
              {" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              {" "}
              {" "}
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link " href="">
              
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="header_container ">
      <div className="logo-box">
        <img src="asset/images/logo.png" alt="" />
        <span>AMANDLA</span>
      </div>
      <div>
        <div className="header_top">
          <div className="header_top-contact">
            <a href="" className="ml-4">
              <div>
                <img src="asset/images/phone.png" alt="" />
              </div>
              <span>(+71)258964785</span>
            </a>
            <a href="" className="ml-4">
              <div>
                <img src="asset/images/mail.png" alt="" />
              </div>
              <span>amandla@gmail.com</span>
            </a>
          </div>
           

          <div className="header_top-social">
            <div>
              <a href="">
                <img src="asset/images/fb.png" alt="" />
              </a>
            </div>
            <div>
              <a href="">
                <img src="asset/images/twitter.png" alt="" />
              </a>
            </div>
            <div>
              <a href="">
                <img src="asset/images/g-plus.png" alt="" />
              </a>
            </div>
            <div>
              <a href="">
                <img src="asset/images/linkedin.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="header_btm">
          <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/About">
                      {" "}
                      About Us{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contact Us{" "}
                      
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      {" "}
                      
                      {" "}
                    </a>
                  </li>
                  <div class="dropdown">
    <button className="dropbtn">Register</button>
    <div className="dropdown-content">
      <a href="/Registeruser">User</a>
      <a href="/Registerdriver">Driver</a>

    </div>
    
</div>
<div className="ml-3" >
                                <a href="/login" className="dropbtn">
                                  <span>Login</span>
                                  
                                </a>
                              </div>
                  <li className="nav-item ">
                    <a className="nav-link pr-0" href="">
                      
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

