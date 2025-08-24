import React from 'react'
import useLocalData from "../../hooks/useLocalData";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import bannerImage from '../../assets/banner-mobile.png';

export default function Home() {
  const { data, loading, error } = useLocalData();
  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
  return (
    <>
      <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
      <main className="page home">
        <ul className="home__list">
          {data.map(item => (
            <li key={item.id}>
              <Card id={item.id} title={item.title} cover={item.cover} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
