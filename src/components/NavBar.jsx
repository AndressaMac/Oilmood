import React from 'react'

export default function navBar() {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="./logoOleo.png"
            alt="óleo essencial"
            width="60"
            height="60"
            className="d-inline-block align-text-top"
          />
          Oilmood
        </a>
      </div>
    </nav>
  )
}
