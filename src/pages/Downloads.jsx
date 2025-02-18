import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Composant pour la page Downloads
const Downloads = ({ handleNavigation }) => (
  <div className="d-flex flex-column min-vh-100">
    {/* Contenu principal */}
    <div className="container flex-grow-1 my-auto py-5">
      {/* Header */}
      <header className="text-center mb-4">
        <h2><strong>TÉLÉCHARGEMENTS</strong></h2>
      </header>

      {/* Texte principal */}
      <main className="text-center mb-4">
        <p>Vous pouvez télécharger la dernière version de nos programmes pour CBL :</p>
        <p>
          {/* Lien vers le fichier .zip placé dans le dossier public */}
          <a 
            href="/prgmcbl.zip" 
            download
            className="btn btn-link"
          >
            Télécharger prgmcbl.zip
          </a>
        </p>
        <p>
          Pour télécharger les mises à jour des logiciels que vous avez (Logger Pro, Graphical Analysis ...) ou les mises à jour système des interfaces, nous vous conseillons de nous envoyer un email à{' '}
          <a href="mailto:info@calibration.fr">info@calibration.fr</a> en précisant le logiciel et le système d'exploitation concerné. Nous vous enverrons un lien de téléchargement adapté à vos besoins.
        </p>
        <p>Notre société distribue en France les produits Vernier Science Education.</p>
        <p>
          Vous pouvez accéder à leur site en cliquant sur le lien ci-dessous :
        </p>
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
    <footer className="text-center text-muted mt-auto py-3">
      © Calibration 2024
    </footer>
  </div>
);

export default Downloads;
