import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

const Gallery = ({ data }) => {
  return (
    <div className="home__container">
      <div className="home__gallery">
        {data.map((logement) => {
          return (
            <article key={logement.id}>
              <Card id={logement.id} cover={logement.cover} title={logement.title} />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
