import Terminal from "../components/Terminal";

export default function Home() {

    return(
        <>
        <div>
            <h1 className="mb-4">Bienvenue sur mon portfolio</h1>
            <p>Voici un terminal, si tu veux avoir des renseignements sur moi écris une phrase ou un mot clé</p>
            <p>Par exemple : "qui es-tu ?", "formation", etc ...</p>
            <p className="mb-4">Si tu lui reposes la même question, il y a une possibilité que l'IA te réponde autrement 😎 .</p>
            <Terminal />
        </div>
        </>
    );
}