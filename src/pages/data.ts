
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
        desc: "Une application qui aide à partager et équilibrer les dépenses entre plusieurs personnes", 
        aPropos: "Le but du projet était de développer une application de gestion de dépenses partagées inspirée de l'application mobile Tricount.L'application Tricount permet à des utilisateurs de gérer des dépenses partagées au sein de groupes appelés tricounts. Chaque tricount regroupe plusieurs participants et facilite la gestion équilibrée des contributions financières en calculant la balance individuelle de chaque utilisateur.",
        langage: ["Flutter", "Dart", "PostgREST", "Riverpod"],
        github: "https://github.com/marieThielens/tricountPostgresFlutter", 
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
        langage: ["PHP", "SQL, phpMyAdmin ", "Javascript"],
        github: "/https://github.com/marieThielens/googleKeep", 
        imageLien:"/images/googleKeep.png",
        imagesDemonstration: ["/images/googleKeep/login.png", "/images/googleKeep/notes.png", "/images/googleKeep/addCheckingNote.png", "/images/googleKeep/editCheclistNote.png", "/images/googleKeep/balance.png"],
        contraintes: [

            { categorie: "Utilisateur", description: "Avoir un identifiant unique, un mot de passe haché, un mail unique, un role ( user ou admin)" },
            { categorie: "Notes", description: "caractérisés par un identifiant unique, un titre, une date de création, une date de dernière édition, un flag indiquant si la note est épinglée" },
            { categorie: "Ajout de notes du type case à cocher", description: "Avoir l'identifiant de la note." },
            { categorie: "Editer une note du type case à cocher", description: "" },
            { categorie: "Libellés pour une note", description: "Les libellés doivent avoir une longueur comprise entre 2 et 10 caractères, être unique par notes" }
        ]
    }
];