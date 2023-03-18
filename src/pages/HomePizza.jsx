import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";
import Image from "../components/Home/LandingPage/Image";
import Header from "../components/Header/Header";
import dataImport from "../data/data";

export default function Home({ langue }) {
  const { id, type } = useParams();
  const [num, setNum] = useState(0);

  const id2 = () => {
    switch (type) {
      case "pizza":
        setNum(0);
        break;
      case "coiffeur":
        setNum(1);
        break;
      case "snack":
        setNum(2);
        break;
      case "restaurant":
        setNum(3);
        break;
      default:
        setNum(0);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    id2();
  }, []);

  const data = langue === "fr" ? dataImport[num].fr : dataImport[num].re;

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
      <Helmet>
        <title> {id} | Accueil </title>
      </Helmet>
      <Header id langue />
      <Image
        title={id}
        subtitle={data.subtitle}
        src={data.background_src}
        alt={data.background_alt}
      />
      <section className="articles_container">
        <article>
          <h2>{data.h2_1}</h2>
          <img src={data.humain_src} alt={data.humain_alt} />
          <p>
            {` Bienvenue chez ${id}, votre destination pour des pizzas savoureuses. Ici, chaque pizza est cuite avec soin et
            amour dans nos fours. Nous sommes fiers d'être une entreprise
            familiale qui offre des pizzas délicieuses à nos clients depuis de
            nombreuses années. Que vous optiez pour une margherita classique,
            une pepperoni épicée, ou quelque chose de plus original, nous avons
            la pizza parfaite pour vous.`}
          </p>
        </article>
        <article>
          <h2>{data.h2_2}</h2>
          <img src={data.produit_src} alt={data.produit_alt} />
          <p>
            Nous utilisons les ingrédients des ingrédients frais, de saison et
            de qualité pour la préparation de nos pizzas. Nous attachons un soin
            particulier à la confection de nos recettes et à la satisfaction de
            vos papilles.
          </p>
        </article>
      </section>
      <section>
        <div className="iframe">
          <h2>Nous retrouver</h2>
          <div className="locaux">
            <p>Nous sommes ravis de vous retrouver dans nos locaux.</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1262.0745646142047!2d55.45360514743608!3d-20.8829594607785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21827f06fb2d8581%3A0x24bcf04f3459092f!2s94%20Rue%20Sainte-Marie%2C%20Saint-Denis%2097400%2C%20La%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1675499040432!5m2!1sfr!2sfr"
              title="google maps"
            />
          </div>
        </div>
        <div>
          <h2>Nous contacter</h2>
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
