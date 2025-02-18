import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Composant pour la page Links
const Links = ({ handleNavigation }) => (
  <div className="d-flex flex-column min-vh-100">
    {/* Contenu principal */}
    <div className="container flex-grow-1 my-auto py-5">
      {/* Header */}
      <header className="text-center mb-4">
        <h2><strong>LIENS</strong></h2>
      </header>

      {/* Texte principal */}
      <main className="text-center mb-4">
        <p>Notre société distribue en France les produits Vernier Science Education.</p>
        <p>Vous pouvez accéder à leur site en cliquant sur le lien ci-dessous :</p>
        <p>
          <a 
            href="https://www.vernier.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-link"
          >
            Vernier Science Education
          </a>
        </p>
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
    <footer className="footer">
      <p className="calibration-text">@ Calibration 2024</p>
    </footer>
  </div>
);

export default Links;
