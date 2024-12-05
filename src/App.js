import { React, useState, useEffect } from "react";

const App = (props) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [compteur, setCompteur] = useState(0);
  const [liste, setListe] = useState([]);
  const [nouvelElement, setNouvelElement] = useState("");

  const incrementerCompteur = () => {
    setCompteur(compteur + 1);
  };

  const ajouterElement = () => {
    if (nouvelElement.trim() !== "") {
      setListe([...liste, nouvelElement]);
      setNouvelElement("");
    }
  };

  useEffect(() => {
    console.log("useEffect for nom...");
  }, [nom]);

  useEffect(() => {
    console.log("useEffect for prenom...");
  }, [prenom]);

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleListeChange = (event) => {
    setNouvelElement(event.target.value);
  };

  console.log("render App...");

  return (
    <>
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={handleNomChange}
      />
      <input
        type="text"
        placeholder="Entrez votre prénom"
        value={prenom}
        onChange={handlePrenomChange}
      />
      <div>
        Bonjour {nom} {prenom}
      </div>
      <button onClick={incrementerCompteur}>Incrémenter : {compteur}</button>
      <h1>Liste de courses</h1>
      <input
        type="text"
        placeholder="Ajouter un élément"
        value={nouvelElement}
        onChange={handleListeChange}
      />
      <button onClick={ajouterElement}>Ajouter</button>
      <ul>
        {liste.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
