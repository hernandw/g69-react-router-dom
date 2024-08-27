import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black navbar-dark">
  <div className="container">
    <Link className="navbar-brand" to="/home">Empresa DB</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar