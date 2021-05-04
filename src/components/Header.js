import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Chelsea Becker</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/home">Home</a>
            <a className="nav-item nav-link" href="/resume">Resume</a>
            <a className="nav-item nav-link" href="/projects">Projects</a>
            <a className="nav-item nav-link" href="/contact">Contact Me</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;