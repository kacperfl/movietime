// er worden paar dingen geimporteerd om project te runnen zoals standard react en de state useref en useeffect wat worden gebruikt voor 
//aparte basis functies voor deze pagina, daarnaast ook icon library
import React, { useState, useRef, useEffect } from 'react';
import './styling/filmrecensie.scss';
import { FaStar } from 'react-icons/fa'; 
// aantal arrays die waarden van 0 - null hebben
const Recensie = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [recensie, setRecensie] = useState('');
  const [beoordeling, setBeoordeling] = useState(0);
  const [recensies, setRecensies] = useState([]);
  const reviewRef = useRef(null);


  //dit is het lijstje van handmatige toegevoegde films ze spelen nu voornameklijk rol als een placeholders
  const films = [
    { id: 1, foto: 'src/photos/ATLAS-KEYART.jpg', title: 'Atlas' },
    { id: 2, foto: 'src/photos/6f690089947a98659643e2ce8f5f0200-647x1024.png', title: 'Godzilla X KONG The New Empire' },
    { id: 3, foto: 'src/photos/398055860_688837486526142_8475637847272940667_n-820x1024.jpg', title: 'Planet of the Apes' },
    { id: 4, foto: 'src/photos/fpMYRZpRpyDqXhvTPIz9O4ApXsqHGj3ssMxatQH5-810x1200.jpg', title: 'Oppenheimer' },
    { id: 5, foto: 'src/photos/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg', title: 'Dune' },
    { id: 6, foto: 'src/photos/MV5BMGI3YzQyMzctMzM5Zi00ZmIxLTg2NjEtMmUzMjc1ZTUxODhhXkEyXkFqcGc@._V1_.jpg', title: 'The Novince' },
    { id: 7, foto: 'src/photos/MV5BMmY1ODUzZGItNDllOS00MDBhLTg4NmUtYjU4YjUxMGNlYmMwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg', title: 'Blue Beetle' },
    { id: 8, foto: 'src/photos/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg', title: 'The Batman' },
    { id: 9, foto: 'src/photos/MV5BZWNjZWUwNDgtYTM4ZC00Zjk0LTg3ZWItNGEyZmVkZTIxZDk0XkEyXkFqcGc@._V1_.jpg', title: 'Bad Boys' },
    { id: 10, foto: 'src/photos/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg', title: 'Black Adam' },
  ];

  //dit is een functie die er voor zorgt dat je de recensies kunt opslaan zelfs als je pagina refresht
  useEffect(() => {
    const storedRecensies = JSON.parse(localStorage.getItem('recensies')) || [];
    setRecensies(storedRecensies);
  }, []);

//   hier worden paar dingen gedaan: als je op een poster klikt wordt de naam opgenomen mogelijkheid om een recesie in text box te schrijven een strerren
//booredeling geven en als laatste gaat de scherm naar het plekje waar dat review zijn met de beoordelingen zodat je handmatig niet hoeft te scrollen
  const handleFilmClick = (film) => {
    setSelectedFilm(film);
    setRecensie(''); 
    setBeoordeling(0);
    reviewRef.current.scrollIntoView({ behavior: 'smooth' });
  };
//sterren beoordling als je op strek aan clickt
  const handleStarClick = (index) => {
    setBeoordeling(index + 1);
  };
// als je je review geschreven hebt submit je dan je resultaten en worden de informatie dat werden doorgegeven opgeslagen zelfs als je refresht
//het neemt de naam van de film op  aantal sterren en jou gegeven tekst
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecensie = { film: selectedFilm.title, beoordeling, recensie };

    const updatedRecensies = [...recensies, newRecensie].slice(-3);
    setRecensies(updatedRecensies);
    
    localStorage.setItem('recensies', JSON.stringify(updatedRecensies));
// wanner je precies 3 reviews hebt gegevens wordt er een alert getoont dat je een kortings code kan gebruiken
    if (updatedRecensies.length === 2) {
      alert('Bedankt voor jou reviews als een bedankje: 10% korting! Gebruik de code: KORTING10');
    }
    
    setRecensie('');
    setBeoordeling(0);
  };

  return (
    <div className="recensie-container">
      <div className="film-posters">
        {films.map((film) => (
          <div key={film.id} className="film-poster" onClick={() => handleFilmClick(film)}>
            <img src={film.foto} alt={film.title} />
          </div>
        ))}
      </div>
      <div className="review-section" ref={reviewRef}>
        {selectedFilm && (
          <>
            <h2>Recensie voor: {selectedFilm.title}</h2>
            <div className="star-rating">
              {[...Array(5)].map((star, index) => (
                //hier uit kan je selecteren uit de strerren er wordt ook visueel getoont op hoeveel strerren je clickte
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
              <h3>{item.film}</h3>
              <div className="star-rating">
                {[...Array(5)].map((star, i) => (
                  <FaStar key={i} className={`star ${i < item.beoordeling ? 'filled' : ''}`} />
                ))}
              </div>
              <p>{item.recensie}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recensie;
