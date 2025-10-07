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
      "Je suis Marie Thielens, je suis... Derrière Toi !!! MOUHAHAHAHA (rire diabolique). J'habite Bruxelles et je suis en dernière année à l'EPFC pour un bachelier en informatique ",
      "Salut ! Je m'appelle Marie et j'adore coder Avec mes pieds. J'habite Bruxelles et je suis en dernière année à l'EPFC pour un bachelier en informatique",
      "Hey, Hey, bien le bonjour, je m'appelle Marie Thielens. Je suis en dernière année pour un bachelier en informatique "
    ],
  },
  // Lien réseau
  {
    motsCle: ["réseau", "réseaux", "reseau", "github", "linkedin", "LinkedIn", "social"],
    reponses: [
        "Tu peux me trouver sur LinkedIn https://www.linkedin.com/in/marie-thielens/ trouver une partie de mon travail sur Github https://github.com/marieThielens?tab=repositories"
    ]
  },
    // Sur mes compétences techniques
  {
    motsCle: ["skills", "compétences","competences", "technologies", "code"],
    reponses: [
      "J'ai fait des projets en/avec : React, Java, C#, Dart, SQl, PHP, Api, Git, angular, postgresql ",
    ],
  },
  {
    motsCle: ["formation", "études", "parcours", "parcour", "etudes"],
    reponses: [
      "J'ai fait une formation à interface3 en webdevelopper. Ensuite, j'ai été coach (prof) à becode. Actuellement je suis en dernière année à l'EPFC pour un bachelier en informatique",
      "Mon parcours m'a amenée à travailler sur du web, du mobile et du jeu vidéo. Je suis entrain de coder un jeu avec unity couplé avec un site d'apprentissage du code fait en React. Je fais cela pour mon tfe à l'EPFC (bachelier en informatique)"
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
      "J'ai déjà travaillé sur plusieurs projets pratiques au cours de mes études. Un jeu en JAVAFX, un tricount en web (flutter/dart/postgrest). Allez voir dans la page \"Projets\", c'est plus complet sur cette page. Pour l'expérience, j'ai travaillé comme coach chez becode",
      "La liste est mieux expliquée sur la page \"projets\". En attendant saches que j'ai déjà fait des projets en java, react, postgress, php, sql, wordpress, flutter. Pour l'expérience, j'ai travaillé comme coach chez becode",
    ],
  },
    {
    motsCle: ["passions", "hobbies", "loisirs"],
    reponses: [
      "Clair obscur courbe de rature, lalala lala.. (Yep, j'aime les jeux ps5).",
      "J'ai appris par moi même à jouer de la guitare (ChatGPT ne m'a pas aidé du tout, il était même pas né ).",
      "J'ai participé plusieurs fois aux 20 kms de Bruxelles."
    ]
  },
    {
    motsCle: ["cv", "resume", "pdf"],
    reponses: [
      "Tu peux télécharger mon CV directement depuis la section 'À propos'.",
      "Mon CV est disponible en PDF, n'hésite pas à le consulter depuis la page \"À propos\"."
    ]
  },
  {
    motsCle: ["blague", "humour", "drole", "rire", "rigoler", "s'amuser"],
    reponses: [
      "Il y a 10 types de personnes dans le monde : Ceux qui comprennent le binaire, et ceux qui ne comprennent pas..",
      "C'est une requête SQL qui entre dans un bar, et le serveur répond : « Il n'y a plus de tables !",
      "Pourquoi les claviers azerty sont ils plus chers que les claviers qwerty ? Car un clavier azerty en vaut 2",
      "Tu sais pourquoi l'iPhone 6 se plie ? Parce que l'Apple Store",
      "Où partent les geeks en vacances ? Au C-Shell",
      "Un geek ne descend pas du métro. Il libère la RAM",
    ]
  },
  {
    motsCle: ["moi", "Je m'appelle", "Bonjour"],
    reponses: [
      "Bienvenue sur mon terminal personnel ! Si tu ne sais pas par où commencer, tape \"aide\"",
      "system@portfolio:~$ Bonjour humain. Tape \"aide\" pour en savoir plus.",
      "Bienvenue, explorateur du code. Tape \"aide\" pour obtenir ton premier indice.",
      "Le monde numérique t'accueille. Tape \"aide\" si tu veux savoir comment interagir"
    ]
  }
];
