export default function About() {
  return (
    <>
    <div>
      <h2>À propos de moi</h2>
      <p>En dernière année à l'EPFC à Bruxelles je suis à la recherche d'un stage. </p>
      <p>J'ai été coach chez Becode, prof de guitare au Rwanda où j'ai vécu pendant 4 ans et maman d'un merveilleux ado.</p>
      <p>Je suis tétue ! Je veux comprendre pourquoi il y a des bugs (mais ça marchait juste avant. Woin), trouver des solutions, apprendre, apprendre et encore apprendre. J'ai de la chance, avec ce métier j'apprendrai toute ma vie 🙂</p>

    </div>
    <div className="col-md-6 mx-auto">

      <img
        src="/images/moi.png"
        alt="Mon avatar"
        className="mb-3"
        width="150"
        height="150"
      />
      <h2 className="mb-4">Contact</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
    </>
  );
}
