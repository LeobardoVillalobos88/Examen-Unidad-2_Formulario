import React, { useState } from "react";

const Registro = ({ onRegister }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let newErrors = { ...errors };

    if (field === "nombre") {
      newErrors.nombre = value.trim() ? "" : "El nombre es obligatorio";
    }

    if (field === "password") {
      newErrors.password = value.length >= 6 ? "" : "La contraseña debe tener al menos 6 caracteres";
    }

    setErrors(newErrors);
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
    validate("nombre", e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validate("password", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = !errors.nombre && !errors.password;
    
    if (isValid) {
      onRegister({ nombre, email, password });
    }
  };

  return (
    <center>
      <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input type="text" value={nombre} onChange={handleNombreChange} />
            {errors.nombre && <p style={{ color: "red" }}>{errors.nombre}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Contraseña:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          </div>
          <button type="submit">Registrar Usuario</button>
        </form>
      </div>
    </center>
  );
};

export default Registro;
