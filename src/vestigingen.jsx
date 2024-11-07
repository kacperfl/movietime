import './styling/vestigingen.scss'; 

function Vestigingen() {
  const vestigingen = [
    { naam: "MovieTime Amsterdam", adres: "Kalverstraat 1, 1011 AA Amsterdam", telefoon: "020 1234123", email: "amsterdam@movietime.nl" },
    { naam: "MovieTime Amstelveen", adres: "Stadsplein 2, 1122 BB Amstelveen", telefoon: "020 4321321", email: "amstelveen@movietime.nl" },
    { naam: "MovieTime Haarlem", adres: "Zijlstraat 3, 2033 CC Haarlem", telefoon: "023 7654321", email: "haarlem@movietime.nl" },
    { naam: "MovieTime Utrecht", adres: "Neude 4, 3544 DD Utrecht", telefoon: "030 8877665", email: "utrecht@movietime.nl" },
    { naam: "MovieTime Groningen", adres: "Heerenstraat 5, 3544 DD Groningen", telefoon: "050 8877665", email: "groningen@movietime.nl" },
    { naam: "MovieTime Maastricht", adres: "Vrijthof 6, 3544 DD Maastricht", telefoon: "043 8877665", email: "maastricht@movietime.nl" }
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
