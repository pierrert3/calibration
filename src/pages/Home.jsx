import React from 'react';
import '../styles/Global.css'; // Importation des styles globaux

// Composant pour la page Accueil
const Home = () => (
  <div className="d-flex flex-column min-vh-100">
    {/* Contenu principal */}
    <div className="container flex-grow-1 my-auto py-5">
      {/* Header */}
      <header className="text-center mb-4">
        <h2>
          <strong>CALIBRATION</strong>
          <img src="sablier.jpg" alt="Sablier" className="ms-2" style={{ height: 30, width: 20 }} />
        </h2>
      </header>

      {/* Texte principal */}
      <main className="text-center mb-4">
        <p className="lead">
          Matériels et Logiciels pour l'enseignement des mathématiques et des sciences.
        </p>
        <p>
          CALIBRATION distribue en France les produits Vernier Science Education.
        </p>
        <p>
          <a
            href="/Calibration2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning"
          >
            Cliquer ici pour télécharger notre <strong>Catalogue 2024-2025</strong>.
          </a>
        </p>
      </main>
    </div>

    {/* Footer */}
    <footer className="text-center text-muted mt-auto py-3">
      © Calibration 2024
    </footer>
  </div>
);

export default Home;
