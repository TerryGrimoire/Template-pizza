import React from "react";
import { Link, useParams } from "react-router-dom";

function Burger() {
  const { id, type, langue } = useParams();

  return (
    <header className="flex padding-header justify-between align-center">
      <Link to={`/${type}/${id}`}>
        <h3>{id}</h3>
      </Link>
      <Link to={`/${type}/${id}/menu`}>
        <button className="CTA_home" type="button">
          {langue === "fr" ? "Nos Tarifs" : "Nout tarif"}
        </button>
      </Link>
    </header>
  );
}

export default Burger;
