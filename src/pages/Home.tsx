import Terminal from "../components/Terminal";

export default function Home() {

    return(
        <>
        <div>
            <h1>Bienvenue sur mon portefolio</h1>
            <p>Voici un terminal, si tu veux avoir des renseignements sur moi écris une phrase ou un mot clé</p>
            <p>Par exemple : "qui es-tu ?" "formation" ...</p>
            <p>Si tu lui reposes la même question, il y a moyen que l'ia te réponde autrement ;p</p>
            <Terminal />
        </div>
        </>
    );
}