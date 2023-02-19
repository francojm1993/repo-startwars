import React, { useEffect, useState } from "react";

const initialState = { username: "", mail: "", password: "" };

const Register = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [form, setForm] = useState(initialState);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setUsuarios(JSON.parse(localStorage.getItem("database")));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("");
    //Comprobamos:
    const checkUsername = usuarios.find((i) => i.username === form.username);
    const checkMail = usuarios.find((i) => i.mail === form.mail);
    if (checkUsername) {
      return setMsg("username en uso");
    }
    if (checkMail) {
      return setMsg("mail en uso");
    }

    //Guardamos:
    const newUser = {
      username: form.username,
      mail: form.mail,
      password: form.pass,
      fav_pj: [],
      fav_naves: [],
      fav_planetas: [],
    };

    //los 3 puntos son una copia:
    const database = [...usuarios, newUser];
    localStorage.setItem("database", JSON.stringify(database));

    //reiniciar los form:
    setForm(initialState);
    setMsg("usuario registrado");
  };

  return (
    <div>
      <h1>Register</h1>

      {/** FORMULARIO DE REGISTRO **/}

      <form className="form-register" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={form.username || ""}
        />
        <input
          type="mail"
          name="mail"
          placeholder="mail"
          onChange={handleChange}
          value={form.mail || ""}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={form.password || ""}
        />
        <button>Submit</button>
      </form>

      {/**  MENSAJE DEL SERVIDOR  **/}
      {msg && <p>{msg} </p>}
    </div>
  );
};

export default Register;
