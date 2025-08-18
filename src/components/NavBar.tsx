import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark flex-grow-1">
      <div className="container">

        {/* coté gauche */}
        <Link className="navbar-brand" to="/">Mon CV</Link>
        {/* coté droit */}
        <div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Accueil</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">Projets</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">A propos/contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
