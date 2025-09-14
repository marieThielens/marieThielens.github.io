
import { Link } from "react-router-dom";
import { data } from "./data";


export default function Projects() {
  return (
    <div>
      <h2 className="mb-4">Mes projets</h2>
      <div className="row">
        {data.map((p, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="card h-100 shadow-sm" style={{filter: "brightness(0.9) sepia(0.2) hue-rotate(200deg) saturate(170%)"}}>
              <h4 className="card-title text-center mt-2">{p.titre}</h4>
              {/* Image projet */}
              <img src={p.imageLien} className="card-img-top object-fit-contain" style={{ height: "500px" }}  alt={p.titre} />
              <div className="card-body d-flex flex-column">
                {/* <h5 className="card-title text-center">{p.titre}</h5> */}
                <p className="card-text">{p.desc}</p>

                {/* Langages */}
                <div className="mb-3">
                  {p.langage.map((lang, idx) => (
                    <span key={idx} className="badge bg-secondary me-1">
                      {lang}
                    </span>
                  ))}
                </div>

 
                     {/* Lien vers page détaillée */}
                <Link to={`/projectDescription/${p.id}`} className="btn btn-outline-primary mt-auto">
                  Voir détails
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}