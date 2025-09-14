
// pour pouvoir mettre parfois tricount, parfois google keep, etc
export type ProjectConstraint = {
  categorie: string;  // ex: "Utilisateur", "Note", "Authentification"
  description: string;
};


export type dataProject = {
    id:number;
    titre: string;
    desc: string;
    aPropos: string;
    langage: string[];
    github: string;
    imageLien: string;
    imagesDemonstration: string[];
    contraintes: 
        // utilisateur: string;
        // tricounts: string;
        // participations: string;
        // depenses: string;
        ProjectConstraint[];
};


//  en trypescript il faut typer
export const data: dataProject[]  = [
    {
        id: 1,
        titre: "Tricount", 
        desc: "Une application qui aide à partager et équilibrer les dépenses entre plusieurs personnes.", 
        aPropos: "Le but du projet était de développer une application de gestion de dépenses partagées inspirée de l'application mobile Tricount.L'application Tricount permet à des utilisateurs de gérer des dépenses partagées au sein de groupes appelés tricounts. Chaque tricount regroupe plusieurs participants et facilite la gestion équilibrée des contributions financières en calculant la balance individuelle de chaque utilisateur.",
        langage: ["Flutter", "Dart", "PostgREST", "Riverpod"],
        github: "https:/github.com/marieThielens/tricountPostgresFlutter", 
        imageLien:"/images/tricount.png",
        imagesDemonstration: ["/images/tricount/login.png", "/images/tricount/tricounts.png", "/images/tricount/tricountOne.png", "/images/tricount/operation.png", "/images/tricount/balance.png"],
        contraintes: [
            // description = contrainte
            { categorie: "Utilisateur", description: "Identifiant unique, mot de passe haché, mail unique, rôle user/admin" },
            { categorie: "Tricount", description: "Titre min. 3 caractères, créateur non modifiable, date de création" },
            { categorie: "Participation", description: "Le créateur participe toujours au tricount qu'il crée" },
            { categorie: "Dépenses", description: "Montant >= 0.01 €, calcul selon poids choisi" }
        ]
    },
    {
        id: 2,
        titre: "Google Keep", 
        desc: "Inspiré d'une application de Google pour prendre des notes rapides, faire des listes et sauvegarder des idées.", 
        aPropos: "",
        langage:  ["PHP", "SQL","Xampp", "Javascript", "Ajax"],
        github: "/https:/github.com/marieThielens/googleKeep", 
        imageLien:"/images/googleKeep.png",
        imagesDemonstration: ["/images/googleKeep/login.png", "/images/googleKeep/notes.png", "/images/googleKeep/addCheckingNote.png", "/images/googleKeep/editCheclistNote.png", "/images/googleKeep/openCheckingNote.png", "/images/googleKeep/label.png"],
        contraintes: [
            { categorie: "Utilisateur", description: "Avoir un identifiant unique, un mot de passe haché, un mail unique, un role ( user ou admin)." },
            { categorie: "Notes", description: "caractérisés par un identifiant unique, un titre, une date de création, une date de dernière édition, un flag indiquant si la note est épinglée." },
            { categorie: "Ajout de notes du type case à cocher", description: "Avoir l'identifiant de la note." },
            { categorie: "Editer une note du type case à cocher", description: "Le bouton - permet de supprimer un élément cochable (delete_item). L'élément est directement supprimé en base de données." },
            { categorie: "Libellés pour une note", description: "Les libellés doivent avoir une longueur comprise entre 2 et 10 caractères, être unique par notes." }
        ]
    }, 
    {
        id: 3,
        titre: "Sokoban",
        desc: "Un jeu de réflexion où l'on doit pousser des caisses sur des cases cibles dans un labyrinthe. Un mode pour créer la map, l'autre pour jouer.",
        aPropos: "Dans le cadre du cours “Projet d'analyse et de conception” à l'EPFC il fallait faire une analyse et concevoir une application inspirée du jeu Sokoban en utilisant les Design Patterns. Le projet s'est fait en groupe de 2. ",
        langage: ["JavaFX", "JAVA", "MVVM","xsb", "binding"],
        github: "https:/github.com/marieThielens/jeuFermierJavaFx",
        imageLien:"/images/sokoban/sobokanLayout.png",
        imagesDemonstration:["/images/sokoban/sokoban.mp4", "/images/sokoban/start.png", "/images/sokoban/save.png", "/images/sokoban/dimensions.png", "/images/sokoban/play.png", "/images/sokoban/errors.png"],
        contraintes: [
            { categorie: "Démarrage", description: "On présente à l'utilisateur par défaut une grille de 10x5 vierge. A gauche une boite à outils permettant de dessiner sur la grillle. Un menu en haut nous permet de charger, sauvegarder un terrain (format xsb), creér une nouvelle grille avec des dimensions" },
            { categorie: "Constuire", description: "Dans la map, il faut qu'il y ai le même nombre de cible(s) que de caisse(s) et un joueur présent dans la grille."},
            { categorie: "Jouer", description: "Le joueur ne peut pas passer à travers les murs, il doit mettre les caisses sur les cibles pour pouvoir gagner."}

        ]
    },
    {
        id: 4,
        titre: "Gratt",
        desc: "Travail de mi-formation à interface3. Faire un site pour un client fictif. Il faut imaginer un client qui veut un site pour son école de guitare mais qui soit également amusant et éducatif.",
        aPropos: "Nous avions décidé de faire une partie ou les utilisateurs peuvent jouer",
        langage: ["HTML", "CSS", "Javascript"],
        github: "mariethielens.github.io/projetDeSiteInterface3/",
        imageLien:"/images/gratt/siteGratt.png",
        imagesDemonstration:["/images/gratt/accueil.mp4", "/images/gratt/jeu.mp4", "/images/gratt/cours.mp4", ],
        contraintes: [
            { categorie: "Makup", description: "Conception du design dans Adobe InDesign ou illustrator " },
        ]
    },
    {
        id: 5,
        titre: "Médium",
        desc: "Medium est une plateforme en ligne où les utilisateurs peuvent publier, lire et partager des articles et des histoires sur une variété de sujets.",
        aPropos: "J'aime apprendre de nouvelles compétences et partager ce que j'ai appris comme d'autres l'ont fait. Et ainsi rendre un peu de ce partage.",
        langage: ["Ubuntu", "Wordpress", "GithubPage", "Injection SQL"],
        github: "https://medium.com/@mariethielens",
        imageLien:"/images/medium.png",
        imagesDemonstration:["/images/medium/mediumExemple.png", ],
        contraintes: [
            { categorie: "Makup", description: "Conception du design dans Adobe InDesign ou illustrator " },
        ]
    }
];