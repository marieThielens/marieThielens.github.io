export type IaDonnees = {
  motsCle: string[];
  reponses: string[];
};

// Base de connaissances pour notre mini IA
export const iaQuestionsReponses: IaDonnees[] = [
  {
    // A propos de moi -------
    motsCle: ["about", "qui", "toi", "présente", "presente"],
    reponses: [
      "Je suis Marie Thielens, je suis... Derrière Toi !!! MOUHAHAHAHA (rire diabolique).",
      "Salut ! Je m'appelle Marie et j'adore coder Avec mes pieds.",
      "Hey, Hey, bien le bonjour, je m'appelle Marie Thielens. Il me semble que c'est écrit un peu partout (en grand)"
    ],
  },
  // Lien réseau
  {
    motsCle: ["réseau", "réseaux", "reseau", "github", "linkedin"],
    reponses: [
        "Tu peux trouver une partie de mon travail sur Github https://github.com/marieThielens?tab=repositories"
    ]
  },
    // Sur mes compétences techniques
  {
    motsCle: ["skills", "compétences","competences", "technologies"],
    reponses: [
      "Mes compétences : React, TypeScript, Node.js, Flutter, TON FRERE.",
      "J'aime travailler avec React, Node et TA MERE!"
    ],
  },
  {
    motsCle: ["formation", "études", "parcours", "parcour", "etudes"],
    reponses: [
      "J'ai étudié l'informatique à l'EPFC avec une spécialisation en développement logiciel.",
      "Mon parcours m'a amenée à travailler sur du web, du mobile et du jeu vidéo. Je suis entrain de coder un jeu avec unity pendant mes études à l'EPFC"
    ]
  },
  {
    motsCle: ["contact", "email", "mail", "contacter"],
    reponses: [
      "Vous pouvez me contacter à : thielens.marie@gmail.com",
      "Pour me joindre, envoyez un mail à thielens.marie@gmail.com",
      "Tu veux mon 06 ? Petit coquin. Contacte moi plutôt par mail thielens.marie@gmail.com"
    ],
  },
    {
    motsCle: ["expérience", "pro", "stage", "travail"],
    reponses: [
      "J'ai déjà travaillé sur plusieurs projets pratiques au cours de mes études. Un jeu en JAVAFX, un tricount en web (flutter/dart/postgrest). Vas voir dans l'onglet Projets, c'est plus complet sur cette page. Pour l'expérience, j'ai travaillé comme coach chez becode",
      "La liste est mieux expliquée sur la page projets. En attendant saches que j'ai déjà fait des projets en java, react, typescript, php, sql, wordpress. Pour l'expérience, j'ai travaillé comme coach chez becode",
    ],
  },
    {
    motsCle: ["passions", "hobbies", "loisirs"],
    reponses: [
      "Clair obscur courbe de rature, lalala lala.. (Yep, j'aime les jeux ps5).",
      "J'ai appris par moi même à jouer de la guitare (ChatGPT ne m'a pas aidé du tout).",
      "J'ai participé plusieurs fois aux 20 kms de Bruxelles."
    ]
  },
    {
    motsCle: ["cv", "resume", "pdf"],
    reponses: [
      "Tu peux télécharger mon CV directement depuis la section 'À propos'.",
      "Mon CV est disponible en PDF, n’hésite pas à le consulter."
    ]
  },
      {
    motsCle: ["blague", "humour", "drole"],
    reponses: [
      "Il y a 10 types de personnes dans le monde : Ceux qui comprennent le binaire, et ceux qui ne comprennent pas..",
      "C'est une requête SQL qui entre dans un bar, et le serveur répond : « Il n'y a plus de tables !",
      "Pourquoi les claviers azerty sont ils plus chers que les claviers qwerty ? Car un clavier azerty en vaut 2"
    ]
  },
];
