import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Select from "react-select";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [id, setId] = useState("");
  const [type, setType] = useState("");

  const options = [
    { value: "pizza", label: "pizza" },
    { value: "barbershop", label: "barbershop" },
    { value: "coiffeur", label: "coiffeur" },
  ];
  const handleOptions = (selectedOptions) => {
    setType(selectedOptions.value);
  };

  return (
    <main className="flex-col simulateur">
      <Helmet>
        <title> Simulateur site Grimoire Numérique </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <h1>Simulez votre site internet </h1>
      <form>
        <label htmlFor="nom">
          Nom de votre entreprise
          <input type="text" onChange={(e) => setId(e.target.value)} />
        </label>
        <Select options={options} onChange={handleOptions} />
        <Link to={`/${type}/${id}`}>
          <button type="button">Voir le résultat</button>
        </Link>
      </form>
    </main>
  );
}
