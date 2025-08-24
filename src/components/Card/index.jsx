import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <div className="card__media">
        {cover ? <img src={cover} alt={title} /> : <div className="card__fallback" />}
        <div className="card__gradient" />
      </div>
      <div className="card__title">{title}</div>
    </Link>
  );
}
