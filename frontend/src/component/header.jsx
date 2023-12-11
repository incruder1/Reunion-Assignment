import React from "react";
import "../styles/header.style.css";
function Header() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <h1 className="navbar-brand logo">LOGO</h1>
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item active">
        <h1 className="nav-link home" href="#">Home </h1>
      </li>
      <a href="/login" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Login</a>
      <a href="/signup" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Signup</a>

     
      
    </ul>
    
  </div>
</nav> */}
      {/* <div className="header-container">
  <a href="/home" className="logo">LOGO</a>
  <a href="/home" className="home">Home</a>
 <a> href="/login" {<button  className='but login'>Login</button>}
 </a>
  <button href='/signup' className='but register'>Register</button>

</div> */}
      <header class="header">
        <nav>
          <div class="logo">
            <a href="">
              Re<span>Union</span>
            </a>
          </div>

          <label for="menu-toggle" class="menu-icon">
            &#9776;
          </label>
          <ul class="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/signup">SignUp</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            {/* <li>
              <a href="#">Connect</a>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
