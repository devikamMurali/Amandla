import React from 'react'

export default function Navad() {
  return (
    
    <> 
       <section className="header_section">
  <div className="container">
    <nav className="navbar navbar-expand-lg custom_nav-container d-lg-none">
      <a className="navbar-brand" href="#">
        <div className="logo-box">
          <img src="asset/images/logo.png" alt="" />
          <span>Transportz</span>
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
            <a className="nav-link" href="">
               <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              {" "}
              Manage User{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
            Manage Driver{" "}
              
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/viewcontact">
              {" "}
              manage Contacts
              {" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              {" "}
              Manage vehicles
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
                    <a className="nav-link" href="">
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/adminuser">
                    Manage user {" "} </a></li>
                     
                  <li className="nav-item">
                    <a className="nav-link" href="/admindriver">
                    Manage Driver{" "}
                    </a></li>
                   
                  <li className="nav-item">
                    <a className="nav-link" href="/admintruck">
                      {" "}
                      Manage Vehicles
                      {" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/viewcontact">
                      {" "}
                      Manage contacts
                      {" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/feedbackview">
                      {" "}
                      view feedback
                      {" "}
                    </a>
                  </li>
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


  

