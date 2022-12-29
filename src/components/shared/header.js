import React from 'react'

function Header() {
  const elementos={
    home:"INICIO",
    catalogue:"SERVICIOS",
    cataloguePad:"/catalogue",
    contact:"CONTACTO",
    contactPad:"/contact",
    bussiness:"QUIENES SOMOS",
    businessPad: "/business",
    Logo:"./Images/logo.png"
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="nav-link" aria-current="page" href="/"><img src={elementos.Logo} width="70" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/" id="texto">{elementos.home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/catalogue" id="texto">{elementos.catalogue}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href={elementos.contactPad}id="texto">{elementos.contact}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href={elementos.businessPad}id="texto">{elementos.bussiness}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header