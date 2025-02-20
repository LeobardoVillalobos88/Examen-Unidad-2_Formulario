import React from "react";

const Usuario = ({ usuario }) => {
  return (
    <center>
    <div>
      <h2>Usuario</h2>
      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Contraseña:</strong> {usuario.password}</p>
    </div>
    </center>
  );
};

export default Usuario;

