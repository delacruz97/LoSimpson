import React from "react";
import { useParams } from "react-router-dom";
import style from "../style/PersonajeDetails.module.css";


export function PersonajeDetails() {

  //console.log(useParams());
  const { id } = useParams();
  console.log(id);

  const [Personaje, setPersonaje] = React.useState({});

  React.useEffect(() => {
    const obtenerPersonaje = async () => {
      const data = await fetch(`http://localhost:5000/${id}`);
      const personaje = await data.json();
      setPersonaje(personaje);
    };
    obtenerPersonaje();
  }, [id]);


  return (
    <div className={style.dettalle}>
      <img className={style.col + " " + style.image} src={Personaje.image} alt={Personaje.nombre}></img>
      <div className={style.col + " " + style.texto}>
      <h2>{Personaje.nombre}</h2>
      <p>Descripcion: {Personaje.descripcion}</p>
      </div>
      
    </div>
  );
}