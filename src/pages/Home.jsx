import React from 'react';
import '../styles/Global.css'; // Import du fichier CSS personnalisé

const Home = () => (
  <div className="d-flex flex-column min-vh-100">
    <div className="container flex-grow-1 my-auto py-5">
      <header className="text-center mb-4">
        <h2>
          <strong>CALIBRATION</strong>
          <img src="sablier.jpg" alt="Sablier" className="ms-2" style={{ height: 30, width: 20 }} />
        </h2>
      </header>
      <main className="text-center mb-4">
        <p>
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
            <strong>Cliquer ici pour télécharger notre Catalogue 2024-2025</strong>.
          </a>
        </p>
      </main>
    </div>
    <footer className="footer">
      <p className="calibration-text">@ Calibration 2024</p>
    </footer>
  </div>
);

export default Home;
