import React, { useState } from "react";
import Registro from "./Registro";
import DatosUsuario from "./Usuario";

const App = () => {
  const [usuario, setUsuario] = useState(null);

  return (
    <div>
      {usuario ? <DatosUsuario usuario={usuario} /> : <Registro onRegister={setUsuario} />}
    </div>
  );
};

export default App;
