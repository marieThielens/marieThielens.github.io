export default function About() {
  return (
    <>
    <div>
      <h2 className="mb-4">À propos de moi</h2>
      <img
        src="/images/moi.png"
        alt="Mon avatar"
        className="mb-3 d-block mx-auto"
        width="150"
        height="150"
      />

      <p>En dernière année à l'EPFC pour un bachelier en informatique (orientation développement) je suis à la recherche d'un stage. </p>
      <p>J'ai été coach chez Becode, prof de guitare au Rwanda où j'ai vécu pendant 4 ans et maman d'un merveilleux ado.</p>
      <p>Je suis tétue ! Je veux comprendre pourquoi il y a des bugs (mais ça marchait juste avant. Woin), trouver des solutions, apprendre, apprendre et encore apprendre. J'ai de la chance, avec ce métier j'apprendrai toute ma vie 🙂</p>
      <p> Si vous souhaitez me contacter, me parler d'un projet, d'un stage ou d'une collaboration, envoyez un mail à <strong>thielens.marie@gmail.com</strong> </p>
    </div>


    <div>
      <h2 className="mb-4">Mes réseaux sociaux</h2>
      <div className="d-flex gap-2">
        <a
          href="https://github.com/marieThielens"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary d-flex align-items-center justify-content-center"
          style={{ minWidth: "150px" }}
        >
          <img src="/images/github.svg" alt="github" width="20" height="20" className="me-2" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/marie-thielens/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-info d-flex align-items-center justify-content-center"
          style={{ minWidth: "150px" }}
        >
          <img src="/images/linkedin.svg" alt="linkedin" width="20" height="20" className="me-2" />
          LinkedIn
        </a>
      </div>


    </div>
    </>
  );
}
