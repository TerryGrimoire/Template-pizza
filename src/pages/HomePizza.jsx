import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";
import Image from "../components/Home/LandingPage/Image";
import Header from "../components/Header/Header";
import dataImport from "../data/data";

import lg from "../assets/langue.png";

export default function Home() {
  const { id, type } = useParams();
  const [num, setNum] = useState(0);
  const [langue, setLangue] = useState(false);
  const id2 = () => {
    switch (type) {
      case "pizza":
        setNum(0);
        break;
      case "barber":
        setNum(1);
        break;
      case "coiffeur":
        setNum(2);
        break;
      case "restaurant":
        setNum(3);
        break;
      case "snack":
        setNum(4);
        break;
      default:
        setNum(0);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    id2();
  }, []);

  const data = langue ? dataImport[num].re : dataImport[num].fr;

  const prepareData = (data2) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data2.map((line, index) => {
      if (index > 1) {
        data2[9].forEach((key, j) => {
          if (line[j] !== "" && line[j] !== "PIZZAS") {
            obj = { ...obj, [key]: line[j] };
          }
        });
      }
      return obj;
    });

    json.shift();
    sessionStorage.setItem("pizzas", JSON.stringify([...new Set(json)]));
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_DATA)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, []);

  return (
    <main className="flex-col home">
      <button
        type="button"
        onClick={() => setLangue(!langue)}
        className="button_bottom_homepage"
      >
        <img src={lg} alt="planete terre signifiant langue" />
      </button>
      <Helmet>
        <title> {id} | Accueil </title>
      </Helmet>
      <Header id langue={langue} type />
      <Image
        title={id}
        subtitle={data.subtitle}
        src={data.background_src}
        alt={data.background_alt}
      />
      <h1 className="desktop">Qui nous sommes ?</h1>
      <section className="articles_container">
        <article>
          <div>
            <h2>{data.h2_1}</h2>
            <p>
              {data.p1}
              {"  "}
              {id}
              {data.p11}
            </p>
          </div>
          <img src={data.humain_src} alt={data.humain_alt} />
        </article>
        <article>
          <div>
            <h2>{data.h2_2}</h2>
            <p>{data.p2}</p>
          </div>
          <img src={data.produit_src} alt={data.produit_alt} />
        </article>
      </section>
      <section>
        <div className="iframe">
          <h2>{langue ? "Nous retrouver" : "Artrouv anou"}</h2>
          <div className="locaux">
            <p>
              {langue
                ? "Nous sommes ravis de vous retrouver dans nos locaux."
                : "Va fé plézir anou artrouv azot dann nout bann lokal."}
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1262.0745646142047!2d55.45360514743608!3d-20.8829594607785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21827f06fb2d8581%3A0x24bcf04f3459092f!2s94%20Rue%20Sainte-Marie%2C%20Saint-Denis%2097400%2C%20La%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1675499040432!5m2!1sfr!2sfr"
              title="google maps"
            />
          </div>
        </div>
        <div>
          <h2>{langue ? "Nous contacter" : "Kontakt anou"}</h2>
          <div>
            <p>
              Téléphone :<a href="tel:+262262 00 00 00"> 02 62 00 00 00</a>
            </p>
            <p>
              Email : {"  "}
              <a
                href="mailto:test@live.fr
"
              >
                {`contact@${id.toLowerCase().replaceAll(" ", "")}.com`}
              </a>
            </p>
          </div>

          <ul>
            <li>Lundi : 11h-14h | 18h-22h</li>
            <li>Mardi : 11h-14h | 18h-22h</li>
            <li>Mercredi : 11h-14h | 18h-22h</li>
            <li>Jeudi : 11h-14h | 18h-22h</li>
            <li>Vendredi : 11h-14h00 | 18h-22h</li>
            <li>Samedi : 18h-22h</li>
            <li>Dimanche :18h-22h</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
