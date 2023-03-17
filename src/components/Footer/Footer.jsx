import React from "react";
import { Link } from "react-router-dom";
import cb from "../../assets/visa.png";
import cheque from "../../assets/cheque.png";
import ticket from "../../assets/chequedej.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import barket from "../../assets/barket.png";
import zotlivraison from "../../assets/zotlivraison.png";
import uber from "../../assets/uber.png";

function Footer() {
  return (
    <footer className="flex-col center padding1 footer ">
      <div>
        <h2>Moyens de paiement acceptés</h2>
        <div className="flex">
          <img src={cb} alt="mastercard logo" />
          <img src={ticket} alt="tickets restaurants logo" />
          <img src={cheque} alt="cheque accepté logo" />
        </div>
      </div>
      <div>
        <h2>Retrouver nos pizzas sur</h2>
        <ul className="barket">
          <a href="https://barket.re">
            <li>
              <img src={barket} alt="barket.re" />
            </li>
          </a>{" "}
          <a href="https://zotlivraison.com/stores/planet-pizza-nepc1igoxb6jipu?fbclid=IwAR3n1PDcVYy--VBbIItZjIPmqlPXsldYM7cRJ2ldd--PbV3deytuV13nfQo">
            <li>
              <img src={zotlivraison} alt="" />
            </li>
          </a>{" "}
          <a href="https://www.ubereats.com/fr/feed?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkFyb2QlMkMlMjBsaWJyYWlyaWUlMjByZWxpZ2lldXNlJTJDJTIwU2FpbnQtRGVuaXMlMjA5NzQwMCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpXYng1a3Q1X2dpRVIxdkJzYkp0U3djWSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EtMjAuODgzMDE4Njk5OTk5OTklMkMlMjJsb25naXR1ZGUlMjIlM0E1NS40NTkxNjA3JTdE">
            <li>
              <img src={uber} alt="" />
            </li>
          </a>
        </ul>
      </div>
      <div className="footer_contact">
        <h2>Nos réseaux sociaux</h2>

        <ul className="flex">
          <li>
            <a href="https://www.facebook.com/planetpizza974">
              <img src={facebook} alt="logo de Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/planetpizza_974/">
              <img src={instagram} alt="logo de Instagram" />
            </a>
          </li>
        </ul>
      </div>

      <small>
        Designé et développé par le{"  "}
        <a
          href="https://grimoire-numerique.re/"
          target="_blank"
          rel="noreferrer"
          className="gn"
        >
          Grimoire Numérique
        </a>
      </small>
      <Link to="/Mentions">
        <small className="small">Mentions Légales</small>
      </Link>
    </footer>
  );
}

export default Footer;
