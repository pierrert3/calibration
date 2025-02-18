import React from 'react';

// Composant pour la page Products
const Products = ({ handleNavigation }) => (
  <div className="d-flex flex-column min-vh-100">
    {/* Contenu principal */}
    <div className="container flex-grow-1 my-auto py-5">
      {/* Header */}
      <header className="text-center mb-4">
        <h2><strong>PRODUITS</strong></h2>
      </header>

      {/* Texte principal */}
      <main className="text-center mb-4">
        <p>
          <a href="/catalogue2024-2025.pdf" download className="btn btn-warning">
            Cliquer ici pour accéder à la description des produits en affichant notre catalogue actuel.
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

export default Products;
