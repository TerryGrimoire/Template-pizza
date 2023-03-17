import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar">
      <Link to="/Services">
        <button className="CTA_home" type="button">
          Nos pizzas
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
