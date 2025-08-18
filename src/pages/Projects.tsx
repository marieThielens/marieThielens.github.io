const projets = [
  { titre: "Google Keep", desc:"Inspiré d'une application de Google pour prendre des notes rapides, faire des listes et sauvegarder des idées.", language: ["PHP", "SQL, phpMyAdmin ", "Javascript"], lien:"https://github.com/marieThielens/googleKeep", image:"/images/googleKeep.png" },
  { titre: "Tricount", desc: "Une application qui aide à partager et équilibrer les dépenses entre plusieurs personnes", language:["Flutter", "Dart", "PostgREST", "Riverpod"] , lien: "https://github.com/marieThielens/tricountPostgresFlutter", image:"/images/tricount.png" },
  { titre: "Sokoban", desc: "Un jeu de réflexion où l'on doit pousser des caisses sur des cases cibles dans un labyrinthe. Un mode pour créer la map, l'autre pour jouer", language: ["JavaFX", "JAVA", "MVVM", "binding"], lien: "https://github.com/marieThielens/jeuFermierJavaFx", image:"images/sobokanLayout.png"},
  { titre: "Gratt", desc:"Travail de mi-formation à interface3. Faire un site pour un client fictif. Il faut imaginer un client qui veut un site pour son école de guitare mais qui soit également amusant et éducatif.", language:["html", "css","javascript"], lien:"mariethielens.github.io/projetDeSiteInterface3/", image:"/images/siteGratt.png"},
  { titre: "Medium", desc:"Medium est une plateforme en ligne où les utilisateurs peuvent publier, lire et partager des articles et des histoires sur une variété de sujets.", language:["Ubuntu", "Wordpress", "GithubPage", "Injection SQL"],lien:"https://medium.com/@mariethielens", image:"/images/medium.png"}
];


export default function Projects() {
  return (
    <div>
      <h2 className="mb-4">Mes projets</h2>
      <div className="row">
        {projets.map((p, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="card h-100 shadow-sm">
              <h4 className="card-title text-center mt-2">{p.titre}</h4>
              {/* Image projet */}
              <img src={p.image} className="card-img-top object-fit-contain" style={{ height: "500px" }}  alt={p.titre} />
              <div className="card-body d-flex flex-column">
                {/* <h5 className="card-title text-center">{p.titre}</h5> */}
                <p className="card-text">{p.desc}</p>

                {/* Langages */}
                <div className="mb-3">
                  {p.language.map((lang, idx) => (
                    <span key={idx} className="badge bg-secondary me-1">
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Bouton */}
                <a
                  href={p.lien}
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
  );

}