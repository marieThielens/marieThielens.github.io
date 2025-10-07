import Terminal from "../components/Terminal";
import { Link } from "react-router-dom";

export default function Home() {

    return(
        <>
        <div>
            <h1 className="mb-4">Hey, hey, bienvenue sur mon portfolio 😁</h1>
            <p>Tu viens de pénétrer dans le système. Tape une phrase, une question ou "aide" dans le terminal (le gros rectangle noir) pour découvrir tes options (et en apprendre un peu plus sur mon developpeur).</p>
            <p className="mb-4">Ps, j'ai des blagues en stock, demande en moi, il y a une possibilité que je te réponde autrement 😎 .</p>
            <Terminal />

            <Link to={`/projects/`} className="btn btn-outline-primary mt-3">
                Voir les projets
            </Link>
        </div>
        </>
    );
}