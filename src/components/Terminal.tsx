import { useState, useRef, useEffect } from "react";
import type { KeyboardEvent, ChangeEvent } from "react";
import "../css/Terminal.css";
import { iaQuestionsReponses } from "../ai/iaData";

type Ligne = string; // une ligne du terminal


const aideListe = [
  { sujet: "about", description: "L'auteur du site." },
  { sujet: "competences", description: "Mes compétences techniques et technologies utilisées." },
  { sujet: "contact", description: "Comment me contacter par email." },
  { sujet: "clear", description: "Efface le terminal." },
];
const lignesInitiales: Ligne[] = [
  "Bienvenue sur mon CV interactif ! Tapez `aide` pour la liste des commandes."
];


// fonction pour parcourir et donner la reponse en fonction ------------------
function iaReponse(input: string): string {
  const texte = input.toLowerCase(); // mettre en minuscule l'input entré par l'user

  // parcourir la "liste" le tableau d'objet -------------
  for (const element of iaQuestionsReponses) {
    // si il y a une correspondance avec un de mots clés
    if (element.motsCle.some((motCle) => texte.includes(motCle))) {
      // retourne aléatoirement une des réponses
      return element.reponses[Math.floor(Math.random() * element.reponses.length)];
    }
  }

  return `Commande inconnue : "${input}"`;
}


export default function Terminal() {
  const [lignes, setLignes] = useState<Ligne[]>([
    "Bienvenue sur mon CV interactif ! Tapez `aide` pour la liste des commandes."
  ]);
  const [input, setInput] = useState<string>("");
  const [historique, setHistorique] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  // hook pour mettre à jour la vue (useref garde la reference d'un el du dom ici sur un input)
  const bottomRef = useRef<HTMLInputElement>(null);

  // Focus automatique sur l'input à chaque mise à jour
  useEffect(() => {
    // Pour que si il y a beaucoup de texte ça scrolle vers le "bas"
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lignes]);


  // Commande que l'user peut rentrer ---------------------------
  const handleCommand = (cmd: string): string => {
    const command = cmd.trim().toLowerCase();
    if (command === "clear") {
      setLignes([]);
      return "";
    }
    if (command === "aide") {
    return aideListe.map(item => `- ${item.sujet} : ${item.description}`).join("\n");
    }
    return iaReponse(cmd);
  };

  // Quand l'user ecrit une commande ---------------------------------------
  const ecouterClavier = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!input.trim()) return;

      // pour effacer le terminal (toutes les lignes, etc..)---
      const command = input.trim().toLowerCase();
      // Cas spécial : clear
      if (command === "clear") {
        setLignes(lignesInitiales);
        setHistorique((prev) => [...prev, input]);
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      // rajouter la nouvelle ligne
      const newLines: Ligne[] = [
        ...lignes,
        `C:\\terminal\\marieThielens:~$ ${input}`, // ligne utilisateur
        handleCommand(input), // réponse IA
      ];
      setLignes(newLines);

      // Historique --------
      setHistorique((prev) => [...prev, input]);
      setHistoryIndex(-1);
      setInput("");
    } // si on appuie sur la fleche du haut 
    else if (e.key === "ArrowUp") {
      if (historique.length === 0) return;
      // si on n’est pas encore dans l’historique, on prend la dernière, sinon on remonte d’une commande
      const index = historyIndex === -1 ? historique.length - 1 : historyIndex - 1;
      if (index >= 0) {
        setInput(historique[index]);
        setHistoryIndex(index);
      }
      // si on appuie sur la fleche du bas
    } else if (e.key === "ArrowDown") {
      if (historique.length === 0) return;
      const index = historyIndex === -1 ? -1 : historyIndex + 1;
      if (index < historique.length) {
        setInput(index === historique.length ? "" : historique[index]);
        setHistoryIndex(index);
      }
    }
  };

  //
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="terminal" onClick={() => bottomRef.current?.focus()}>

    {lignes.map((line, idx) => {
      // Si c'est une ligne utilisateur, on peut la split pour garder le prompt vert
      if (line.startsWith("C:\\terminal\\marieThielens:~$ ")) {
        const userInput = line.replace("C:\\terminal\\marieThielens:~$ ", "");
        return (
          <div key={idx} className="terminal-line">
            <span className="terminal-prompt">C:\terminal\marieThielens:~$</span> {userInput}
          </div>
        );
      } else {
        // ligne IA
        return <div key={idx} className="terminal-line">{line}</div>;
      }
    })}

      <div className="terminal-input-line">
        <span className="terminal-prompt">C:\terminal\marieThielens:~$</span>
        <input
          ref={bottomRef}
          value={input}
          onChange={handleInputChange}
          onKeyDown={ecouterClavier}
          className="terminal-input"
        />
      </div>
    </div>
  );
}
