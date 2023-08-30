import "./App.css";
import asaf_logo from "../src/imagenes/asaf_logo.png";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";



function App() {
const [numClicks, setNumClics] = useState(0)

  const manejarClick = () => {
    setNumClics (numClicks + 1)
  };

  const reiniciarContador = () => {
    setNumClics (0)
  };



  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="asaf_logo" src={asaf_logo} alt="logo" />
      </div>
      <div className="contPrincipal">
        <Contador numClicks={numClicks} />
        <Boton
          texto="click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
