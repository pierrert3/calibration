import React from 'react';
import '../styles/Global.css'; // Import du fichier CSS personnalisé

const Company = ({ handleNavigation }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1 my-auto py-5">
        <header className="text-center mb-4">
          <h2><strong>Nos COORDONNEES</strong></h2>
        </header>
        <main className="text-center mb-4">
          <p>
            Calibration vous propose divers matériels et logiciels pour enseigner les mathématiques et les sciences en utilisant les nouvelles technologies.
          </p>
          <p>
            Depuis 1995, nous collaborons étroitement avec Vernier et proposons leurs interfaces et capteurs.
          </p>
          <p>Pour toutes vos questions, n'hésitez pas à nous contacter :</p>
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
        <div className="text-center">
          <button
            className="btn btn-warning"
            onClick={() => handleNavigation(0)}
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
      <footer className="footer">
        <p className="calibration-text">@ Calibration 2024</p>
      </footer>
    </div>
  );
};

export default Company;
