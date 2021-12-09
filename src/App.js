import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import style from '../src/style/App.module.css';
import { PersonajeDetails } from "./pages/PersonajeDetails";
import { LandingPage } from "./pages/LandingPage";



function App() {
  return (
    <Router>
      <header>

        <div className={style.nav}>
        <Link to="/"><h1 className={style.title}>Los simpson</h1></Link>
        </div>
     
      </header>
      <main>
        
      <Switch> {/* Switch para que solo se muestre la primer ruta que coincide*/}
          <Route path="/personaje/:id">
            <PersonajeDetails />
          </Route>
          <Route exact path="/">
            <LandingPage/>
            
          </Route>
          
          
        </Switch>
      </main>
    </Router>
  );
}

export default App;
