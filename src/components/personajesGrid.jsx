import { PersonajeCard } from "./personajeCard";

import simpson from "../simpson.json";

import style from "../style/personajesGrid.module.css";


export function PersonajesGrid() {
    //cargando personajes de archivo local
    //console.log(simpson);
    return (
        
        <ul className={style.grid}>
                {simpson.map((personaje) => (  
                 <PersonajeCard key={personaje.id} personaje={personaje}/>     
                   
                ))}
        </ul>
    );
}
