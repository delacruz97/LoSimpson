import { PersonajesGrid } from './components/personajesGrid';
import style from '../src/style/App.module.css';
function App() {
  return (
    <div>
      <header>
        <h1 className={style.title}>Los simpson</h1>
      </header>
      <main>
        <PersonajesGrid/>
      </main>
    </div>
  );
}

export default App;
