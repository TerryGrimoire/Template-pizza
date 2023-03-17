import React from "react";
import { Link, useParams } from "react-router-dom";

function Burger() {
  const { id } = useParams();

  return (
    <header className="flex padding-header justify-between align-center">
      <Link to={`/pizza/${id}`}>
        <h3>{id}</h3>
      </Link>
      <Link to={`/pizza/${id}/menu`}>
        <button className="CTA_home" type="button">
          Nos pizzas
        </button>
      </Link>
    </header>
  );
}

export default Burger;
