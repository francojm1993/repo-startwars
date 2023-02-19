import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";

const userContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(undefined);
  const [favpj, setFavpj] = useState([]);

  useEffect(() => {
    const check = localStorage.getItem("user");
    if (check) {
      const userloged = JSON.parse(check);
      setUser(userloged);
      setFavpj(userloged.fav_pj);
    }
  }, []);

  const login = (data) => {
    setUser(data);
    setFavpj(data.fav_pj);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logOut = () => {
    setUser(undefined);
    localStorage.removeItem("user");
  };

  /** FUNCIÓN AGREGAR FAVORITOS  **/

  const addPJFav = (link) => {
    //Si existe el favorito lo saca, sino lo agrega:
    if (favpj.find((i) => i === link)) {
      //nueva lista de favoritos:
      const newFavpj = favpj.filter((i) => i !== link);

      //llamo a la db:
      const database = JSON.parse(localStorage.getItem("database"));
      //Actualizar el usuario:
      //busco entre la lista de usuario, el usuario logueado y le actualizo la lista de favoritos:
      const newDatabase = database.map((i) =>
        i.mail === user.mail ? { ...i, fav_pj: newFavpj } : i
      );
      //actualizo:
      localStorage.setItem("database", JSON.stringify(newDatabase));

      //Actualizamos el state:
      setFavpj(newFavpj);
    } else {
      const newFavpj = [...favpj, link];

      //llamo a la db:
      const database = JSON.parse(localStorage.getItem("database"));
      const newDatabase = database.map((i) =>
        i.mail === user.mail ? { ...i, fav_pj: newFavpj } : i
      );
      //actualizo:
      localStorage.setItem("database", JSON.stringify(newDatabase));

      //Actualizamos el state:
      setFavpj(newFavpj);
    }
  };

  return (
    <userContext.Provider value={{ user, login, logOut, addPJFav, favpj }}>
      {props.children}
    </userContext.Provider>
  );
};
//contexto en todos los archivos:
export { userContext };

//index.js:
export default UserProvider;
