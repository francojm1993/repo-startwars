import React, { useContext, useEffect, useState } from "react";
import CharapterCard from "../components/accesories/CharapterCard";
import ModalCharapter from "../components/charapterRoute/ModalCharapter";
import Loader from "../components/accesories/Loader";
import "../css/CharaptersRoute.css";
import { userContext } from "../context/UserProvider";

const CharaptersRoute = () => {
  const [personaje, setPersonaje] = useState([]);
  const [url, setUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [api, setApi] = useState("https://swapi.dev/api/people/");
  const { user, addPJFav } = useContext(userContext);
  /**  ABRIR MODAL   **/
  //Esta función se para a la card y al hacer click en un botón se pasa el link del personaje.
  const abrirModal = (e, data) => {
    e.preventDefault();
    setUrl(data);
  };

  //Limpia el state de la url por lo que se cerra el modal.
  //Se debe pasar al modal y crear un botón para cerrarlo.
  /**  CERRAR MODAL   **/
  const cerrarModal = (e) => {
    e.preventDefault();
    setUrl("");
  };

  useEffect(() => {
    setLoader(true);
    fetch(api)
      .then((response) => response.json())
      .then((response) => {
        setPersonaje(response.results);
        setPrevious(response.previous);
        setNext(response.next);
        setLoader(false);
      });
  }, [api]);

  const handleClickPrevious = () => {
    setApi(previous);
  };
  const handleClickNext = () => {
    setApi(next);
  };

  return (
    <div className="container-Charapter_route1">
      <h1>Personajes </h1>
      {loader && (
        <div>
          <Loader />
        </div>
      )}
      <section className="container-character_cards1">
        {personaje.length !== 0 && (
          <>
            {personaje.map((e) => (
              <CharapterCard
                key={`${Date.now()}-${e.name}`}
                item={e}
                abrirModal={abrirModal}
                user={user}
                addPJFav={addPJFav}
              />
            ))}
          </>
        )}
      </section>
      <section className="boton">
        {previous ? (
          <button onClick={handleClickPrevious}>Previous</button>
        ) : (
          <button disabled={true}>Previous</button>
        )}
        {next ? (
          <button onClick={handleClickNext}>Next</button>
        ) : (
          <button disabled={true}>Next</button>
        )}
      </section>

      {/** ---- RENDERIZADO MODAL ------**/}
      {url && <ModalCharapter cerrarModal={cerrarModal} url={url} />}
    </div>
  );
};

export default CharaptersRoute;
