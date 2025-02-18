import React from 'react';

// Composant pour la page Services
const Services = ({ handleNavigation }) => (
  <div className="d-flex flex-column min-vh-100">
    {/* Contenu principal */}
    <div className="container flex-grow-1 my-auto py-5">
      {/* Header */}
      <header className="text-center mb-4">
        <h2><strong>SERVICES</strong></h2>
      </header>

      {/* Texte principal */}
      <main className="text-center mb-4">
        <p>
          En plus de nos produits, nous proposons gratuitement à nos clients des services qui facilitent l'utilisation du matériel :
        </p>
        <ul className="text-start">
          <li>Assistance technique: nous fournissons à nos clients toute l'aide et l'assistance technique sur nos produits.</li>
          <li>Documents pédagogiques: nous proposons à nos clients des fiches de travaux pratiques et des fiches d'expériences pour faciliter l'utilisation des interfaces, elles sont disponibles sur demande.</li>
          <li>Programmes d'acquisition: nous avons toute une gamme de programmes pour utiliser les capteurs avec les différentes calculatrices, vous pouvez les télécharger dès maintenant.</li>
          <li>Stages de formation: Nous organisons des sessions de formation sur nos produits, auxquels les enseignants peuvent assister gratuitement. Pour pouvoir en bénéficier, il suffit de nous contacter.</li>
          <li>Démonstrations: si vous envisagez d'équiper votre établissement scolaire, nous pouvons venir gratuitement pour vous faire une démonstration des possibilités de nos produits.</li>
        </ul>
        <p>
          Vous pouvez aussi poser vos questions par email : <a href="mailto:info@calibration.fr">info@calibration.fr</a>
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

export default Services;
