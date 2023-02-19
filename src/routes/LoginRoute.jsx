import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserProvider";
const initialState = { user: "", pass: "" };

const LoginRoute = () => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  //database:
  const [usuarios, setUsuarios] = useState([]);
  const { user, login } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUsuarios(JSON.parse(localStorage.getItem("database")));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    let dataUser = usuarios.find((a) => a.mail === form.user);
    if (dataUser) {
      if (dataUser.password === form.pass) {
        login(dataUser);
        navigate("/");
      } else {
        setError("Error: Incorrect password");
      }
    } else {
      setError("Error: User don't exist");
    }
  };

  const handleChangeform = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          name="user"
          placeholder="Coloque su usuario"
          value={form.user || ""}
          onChange={handleChangeform}
        ></input>
        <input
          type="password"
          name="pass"
          placeholder="Coloque su contraseña"
          value={form.pass || ""}
          onChange={handleChangeform}
        ></input>
        <button>Entrar</button>
        {error && <h1>{error}</h1>}
      </form>
    </div>
  );
};

export default LoginRoute;
