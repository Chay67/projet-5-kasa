import React from 'react'
import useLocalData from "../../hooks/useLocalData";
import Card from "../../components/Card";

const Home = () => {
  
const { data, loading, error } = useLocalData();

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h1>Données :</h1>
      <div>{data.map(d => {
        return (
          <Card key={d.id} id={d.id} title={d.title} cover={d.cover} />
        )
      })}</div>
    </div>
  );
}

export default Home