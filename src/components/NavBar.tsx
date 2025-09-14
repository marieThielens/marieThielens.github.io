import { Link } from "react-router-dom";

export default function Navbar() {


  // flex-grow-1
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
      <div className="container">

        {/* coté gauche */}
            <Link className="navbar-brand d-flex align-items-center" to="/">
      <img
        src="/images/onglet.png"
        alt="Logo"
        width="30"
        height="30"
        className="me-2"
      />
      Marie Thielens
    </Link>
        {/* bouton hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* coté droit */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" >
            <li className="nav-item"><Link className="nav-link" to="/">Accueil</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">Projets</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">A propos/contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
