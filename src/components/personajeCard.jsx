import { Link } from "react-router-dom";
import style from "../style/personajeCard.module.css";
export function PersonajeCard({ personaje }) {
    
  return (
      <li className={style.borde}> 
        <Link to={"/personaje/" + personaje.id}>
        <div>
          <img className={style.img} src={personaje.image} alt={personaje.nombre} />
        </div>


        <div className={style.titulo}>
          {personaje.nombre}
          <br/>
          {personaje.apellido}
        </div>
        </Link>
      </li>
    );
}