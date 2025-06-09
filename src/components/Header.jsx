import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="d-flex align-items-center p-2">
          <Link className="text-decoration-none pt-5" to={'/'}>
            <div className="d-flex align-items-center">
              <img src="/logo.png" alt="logo" id="header-logo" className="img-fluid" />
              <div className="ms-2 fs-5 text-dark fw-bold">BoolRoad</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
