import { useParams, Link } from "react-router-dom";
import { data } from "./data";

export default function ProjectDescriptionPage() {

  const { id } = useParams<{ id: string }>();
  const projet = data.find((p) => p.id === Number(id));
  const projectId = parseInt(id ?? "0", 10);

  if (!projet) return <p>Projet introuvable</p>;

  // récupérer les projets précédent/suivant
  const prev = data.find((p) => p.id === projectId - 1);
  const next = data.find((p) => p.id === projectId + 1);

  return (
    <div>
            {/* Navigation flèches */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {prev ? (
          <Link to={`/projectDescription/${prev.id}`} className="btn btn-outline-secondary">
            ← {prev.titre}
          </Link>
        ) : (
          <div />
        )}

        <h2 className="text-center">{projet.titre}</h2>

        {next ? (
          <Link to={`/projectDescription/${next.id}`} className="btn btn-outline-secondary">
            {next.titre} →
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* -----------A propos ---------------- */}

      {projet.aPropos && (
        <>
          <h4>À propos</h4>
          <p>{projet.aPropos}</p>
        </>
      )}

      {/* ---------------Contraintes--------------- */}

      {projet.contraintes?.length > 0 && (
        <>
          <h4>Contraintes</h4>
          <ul>
            {projet.contraintes.map((c, idx) => (
              <li key={idx}>
                <strong>{c.categorie} :</strong> {c.description}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* ---------------------Images--------------------- */}
      <div className="row">
      {projet.imagesDemonstration.map((media, idx) => {
        const isVideo = media.endsWith(".mp4"); // Vérifier si c'est une video
        return (
          <div key={idx} className="col-12 col-md-6 mb-3">
            {/* Vidéo */}
            {isVideo ? (
              <video
                src={media}
                controls
                className="w-100 rounded shadow-sm"
              />
            ) : (
              // image
              <img
                src={media}
                alt={`${projet.titre} demo ${idx}`}
                className="w-100 rounded shadow-sm"
              />
            )}
          </div>
        );
      })}
      </div>

      {/* -------------- Lien GitHub--------- */}
      {projet.github && (
        <div className="d-flex justify-content-center mt-3">
          <a href={projet.github} target="_blank" rel="noreferrer" className="btn btn-outline-primary mt-auto">
            Voir en détail
          </a>
        </div>
      )}
    </div>
  );
}
