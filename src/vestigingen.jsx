import './styling/vestigingen.scss'; 

// een lijst met aantal verzonnen bioscoop informatie 
function Vestigingen() {
  const vestigingen = [
    {
      naam: "Bioscoop Amsterdam",
      adres: "Kalverstraat 1, 1012 NX Amsterdam",
      telefoon: "020 123 4567",
      email: "amsterdam@bioscoop.nl",
    },
    {
      naam: "Bioscoop Rotterdam",
      adres: "Coolsingel 50, 3011 AD Rotterdam",
      telefoon: "010 765 4321",
      email: "rotterdam@bioscoop.nl",
    },
    {
      naam: "Bioscoop Utrecht",
      adres: "Vredenburg 90, 3511 BD Utrecht",
      telefoon: "030 987 6543",
      email: "utrecht@bioscoop.nl",
    },
    {
      naam: "Bioscoop Den Haag",
      adres: "Spui 10, 2511 BS Den Haag",
      telefoon: "070 112 3344",
      email: "denhaag@bioscoop.nl",
    },
    {
      naam: "Bioscoop Eindhoven",
      adres: "Markt 8, 5611 EB Eindhoven",
      telefoon: "040 224 6688",
      email: "eindhoven@bioscoop.nl",
    },
    {
      naam: "Bioscoop Groningen",
      adres: "Grote Markt 30, 9711 LP Groningen",
      telefoon: "050 887 7766",
      
      email: "groningen@bioscoop.nl",
    }
  ];

  return (
    <div className="vestigingen-container">
      <h1>Onze Vestigingen</h1>

      <div className="vestigingen-grid">
        {vestigingen.map((vestiging, index) => (

          <div key={index} className="vestiging-card">
            <h2>{vestiging.naam}</h2>
            <p>{vestiging.adres}</p>
            <p>Telefoon: {vestiging.telefoon}</p>
            <p>Email: <a href={`mailto:${vestiging.email}`}>{vestiging.email}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vestigingen;
