import React from 'react';
import '../styles/Global.css'; // Importation des styles globaux

const Company = ({ handleNavigation }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Contenu principal */}
      <div className="container flex-grow-1 my-auto py-5">
        {/* Header */}
        <header className="text-center mb-4">
          <h2><strong>Nos COORDONNEES</strong></h2>
        </header>

        {/* Texte principal */}
        <main className="text-center mb-4">
          <p>
            Calibration vous propose divers matériels et logiciels pour enseigner les mathématiques et les sciences en utilisant les nouvelles technologies.
          </p>
          <p>
            Depuis 1995, nous collaborons étroitement avec Vernier et proposons leurs interfaces et capteurs.
          </p>
          <p>Pour toutes vos questions, n'hésitez pas à nous contacter :</p>

          {/* Coordonnées */}
          <address>
            <strong>CALIBRATION</strong>
            <br />
            12 Rue Jules CLARETIE
            <br />
            78220 VIROFLAY
            <br />
            Tél. 01 30 24 50 28
            <br />
            Fax. 01 30 24 41 46
            <br />
            Email : <a href="mailto:info@calibration.fr">info@calibration.fr</a>
          </address>
        </main>

        {/* Bouton de retour à l'accueil */}
        <div className="text-center">
          <button
            className="btn btn-warning"
            onClick={() => handleNavigation(0)} // Appelle la fonction pour revenir à la première slide
          >
            Retour à l'accueil
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-muted mt-auto py-3">
        © Calibration 2024
      </footer>
    </div>
  );
};

export default Company;