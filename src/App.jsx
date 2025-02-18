import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importation des styles de base de Swiper
import { Mousewheel } from 'swiper/modules'; // Importation du module Mousewheel

import Home from './pages/Home';
import Company from './pages/Company';
import Products from './pages/Products';
import Services from './pages/Services';
import Downloads from './pages/Downloads';
import Links from './pages/Links';
import Navbar from './components/Navbar'; // Importation du composant Navbar

import './styles/App.css'; // Importation des styles globaux

const App = () => {
  const [searchQuery, setSearchQuery] = useState(''); // Stocke la recherche
  const swiperRef = useRef(null); // Référence au swiper pour contrôler la navigation

  // Liste des mots-clés associés aux slides
  const slidesKeywords = [
    { index: 0, keywords: ['accueil', 'home', 'départ'] },
    { index: 1, keywords: ['entreprise', 'company', 'société'] },
    { index: 2, keywords: ['produits', 'products', 'articles'] },
    { index: 3, keywords: ['services', 'prestations', 'aide'] },
    { index: 4, keywords: ['télécharger', 'downloads', 'fichiers'] },
    { index: 5, keywords: ['liens', 'links', 'ressources'] },
  ];

  // Fonction pour naviguer vers une slide spécifique
  const handleNavigation = (slideIndex) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(slideIndex); // Navigue vers la slide spécifiée
    }
  };

  // Fonction pour gérer la soumission du formulaire de recherche
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    const lowerCaseQuery = searchQuery.toLowerCase(); // Convertir la recherche en minuscule pour comparaison
    const match = slidesKeywords.find((slide) =>
      slide.keywords.includes(lowerCaseQuery)
    );

    if (match) {
      handleNavigation(match.index); // Naviguer vers la slide correspondant au mot-clé
    } else {
      alert('Aucune slide ne correspond à votre recherche.');
    }
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar handleNavigation={handleNavigation}>
        {/* Search Bar */}
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" type="submit">Rechercher</button>
        </form>
      </Navbar>

      {/* Swiper Container */}
      <Swiper
        direction="horizontal"
        spaceBetween={30}
        slidesPerView={1}
        mousewheel={{ forceToAxis: true }} // Permet de swiper horizontalement uniquement
        modules={[Mousewheel]}
        touchEventsTarget="container"
        pagination={{ clickable: true }}
        style={{ width: '100vw', height: '100vh' }}
        ref={swiperRef}
      >
        {/* Slide 1 */}
        <SwiperSlide id="home">
          <Home />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide id="company">
          <Company handleNavigation={handleNavigation}/>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide id="products">
          <Products handleNavigation={handleNavigation}/>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide id="services">
          <Services handleNavigation={handleNavigation}/>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide id="download">
          <Downloads handleNavigation={handleNavigation}/>
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide id="links">
          <Links handleNavigation={handleNavigation}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;
