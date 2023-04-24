import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";

function Services({ helmet }) {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="menu">
      <Helmet>
        <title> {helmet.title} | Services </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <Header id={id} />
      <section>
        <h1>Nos tarifs</h1>
        <div className="prix">
          <h3>Service 1</h3>
          <h4>10.00 €</h4>
        </div>
        <div className="prix">
          <h3>Service 2</h3>
          <h4>15.00 €</h4>
        </div>
        <div className="prix">
          <h3>Service 3</h3>
          <h4>20.00 €</h4>
        </div>
        <div className="prix">
          <h3>Service 4</h3>
          <h4>7.00 €</h4>
        </div>
        <div className="prix">
          <h3>Service 5</h3>
          <h4>8.50 €</h4>
        </div>
      </section>
    </div>
  );
}

export default Services;
