import React, { useState, useRef, useEffect } from 'react';
import './styling/filmrecensie.scss';
import { FaStar } from 'react-icons/fa';

const Recensie = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [recensie, setRecensie] = useState('');
  const [beoordeling, setBeoordeling] = useState(0);
  const [recensies, setRecensies] = useState([]);
  const [films, setFilms] = useState([]);
  const reviewRef = useRef(null);

  //3. de fotos zijn gecompresseerd waardoor ze minder qua grootte hebben en sneller inladen
  // 3. de foto formaat is geoptimaliseerd
  const defaultFilms = [
    { id: 1, foto: 'src/photos/ATLAS-KEYART.jpg', title: 'Atlas' },
    { id: 2, foto: 'src/photos/JokerFolieC3A0Deux_133650099276711151_big.jpg', title: 'Joker Folie Deux' },
    { id: 3, foto: 'src/photos/398055860_688837486526142_8475637847272940667_n-820x1024.jpg', title: 'Planet of the Apes' },
    { id: 4, foto: 'src/photos/fpMYRZpRpyDqXhvTPIz9O4ApXsqHGj3ssMxatQH5-810x1200.jpg', title: 'Oppenheimer' },
    { id: 5, foto: 'src/photos/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE._V1_.jpg', title: 'Dune' },
    { id: 6, foto: 'src/photos/MV5BMGI3YzQyMzctMzM5Zi00ZmIxLTg2NjEtMmUzMjc1ZTUxODhhXkEyXkFqcGc@._V1_.jpg', title: 'The Novince' },
    { id: 7, foto: 'src/photos/MV5BMmY1ODUzZGItNDllOS00MDBhLTg4NmUtYjU4YjUxMGNlYmMwXkEyXkFqcGdeQXVyODE5NzE3OTE._V1_.jpg', title: 'Blue Beetle' },
    { id: 8, foto: 'src/photos/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY._V1_.jpg', title: 'The Batman' },
    { id: 9, foto: 'src/photos/MV5BZWNjZWUwNDgtYTM4ZC00Zjk0LTg3ZWItNGEyZmVkZTIxZDk0XkEyXkFqcGc._V1_.jpg', title: 'Bad Boys' },
    { id: 10, foto: 'src/photos/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU._V1_.jpg', title: 'Black Adam' },
  ];

  // 5. Laad recensies en films uit localStorage wanneer de pagina geladen wordt
  useEffect(() => {
    const storedRecensies = JSON.parse(localStorage.getItem('recensies')) || [];
    setRecensies(storedRecensies);

    // 5. Films cachen in localStorage
    // 3. kortere functies
    const storedFilms = JSON.parse(localStorage.getItem('films'));
    if (storedFilms) {
      setFilms(storedFilms);
    } else {
      localStorage.setItem('films', JSON.stringify(defaultFilms));
      setFilms(defaultFilms);
    }
  }, []);

  const handleFilmClick = (film) => {
    setSelectedFilm(film);
    setRecensie('');
    setBeoordeling(0);
    reviewRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStarClick = (index) => {
    setBeoordeling(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecensie = { film: selectedFilm.title, beoordeling, recensie };

    const updatedRecensies = [...recensies, newRecensie].slice(-3);
    setRecensies(updatedRecensies);
    localStorage.setItem('recensies', JSON.stringify(updatedRecensies));

    if (updatedRecensies.length === 3) {
      alert('Bedankt voor jou reviews als een bedankje: 10% korting! gebruik de code: SuperUser1010');
    }

    setRecensie('');
    setBeoordeling(0);
  };

  return (
    <section className="recensie-container">
      <article className="film-posters">
        {films.map((film) => (
          <div key={film.id} className="film-poster" onClick={() => handleFilmClick(film)}>
            {/* 7.alt toegevoegt bij elke dyamiche foto zodat zoekmachine weet wat voor soort foto het is */}
            {/* 8. Gebruik gemaakt van lazy loading waardoor alleen de nodige fotos gerenderd worden. */}
            <img src={film.foto} alt={`Poster van ${film.title}`} loading="lazy" />
          </div>
        ))}
      </article>
      <article className="review-section" ref={reviewRef}>
        {selectedFilm && (
          <>
            <header>
              <h2>Recensie voor: {selectedFilm.title}</h2>
            </header>
            <div className="star-rating">
              {[...Array(5)].map((star, index) => (
                <FaStar
                  key={index}
                  className={`star ${index < beoordeling ? 'filled' : ''}`}
                  onClick={() => handleStarClick(index)}
                />
              ))}
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  Recensie:
                  <textarea 
                    value={recensie} 
                    onChange={(e) => setRecensie(e.target.value)} 
                    rows={4} 
                    maxLength={250} 
                    style={{ resize: 'none' }} 
                  />
                </label>
              </div>
              <button type="submit">Verstuur</button>
            </form>
          </>
        )}
        <div className="recensies-overview">
          <h2>Jouw recensies:</h2>
          {recensies.map((item, index) => (
            <div key={index} className="recensie-item">
              <header>
                <h3>{item.film}</h3>
              </header>
              <div className="star-rating">
                {[...Array(5)].map((star, i) => (
                  <FaStar key={i} className={`star ${i < item.beoordeling ? 'filled' : ''}`} />
                ))}
              </div>
              <p>{item.recensie}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Recensie;
