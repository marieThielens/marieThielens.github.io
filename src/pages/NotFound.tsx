import { Link } from "react-router-dom"

export default function ErreurPage(){
    return(
        <>
        <div className="section-bg text-white d-flex flex-grow-1"
            style={{
                backgroundImage: `url('/images/robotErreur.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                width:'100%',
            }} >


            <div className="d-flex flex-column justify-content-end align-items-center position-relative m-5">
                <Link to="/" className="btn btn-primary w-50 p-2 ">Fuir</Link>
                <p>*L'abus d'alcool est dangereux pour la santé</p>
            </div>
        </div>


        </>
    );
}