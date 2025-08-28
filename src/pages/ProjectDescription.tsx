
import { data , type dataProject} from './data'

export default function ProjectDescriptionPage(){

    return(
        <>
            <div>
      <h2 className="mb-4">Mes projets</h2>
      <div className="row">
        {data.map((p: dataProject) => (
          <div key={p.id} className="col-md-6 mb-3">
            <div className="card h-100 shadow-sm">
              <h4 className="card-title text-center mt-2">{p.titre}</h4>
              <img
                src={p.imageLien}
                className="card-img-top object-fit-contain"
                style={{ height: "300px" }}
                alt={p.titre}
              />
              <div className="card-body d-flex flex-column">
                <p className="card-text">{p.desc}</p>

                <div className="mb-3">
                  {p.langage.map((lang, idx) => (
                    <span key={idx} className="badge bg-secondary me-1">
                      {lang}
                    </span>
                  ))}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-auto"
                >
                  Voir code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

                       {/* Bouton */}
                {/* <a
                  href={p.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-auto"
                >
                  Voir code
                </a> */}
        </>
    );
}