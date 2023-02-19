import React, { useEffect, useState } from "react";
import NaveCard from "../components/accesories/NaveCard";
import ModalNaves from "../components/NavesRoute/ModalNaves";
import Loader from "../components/accesories/Loader";
import "../css/NavesRoute.css";
const NavesRoute = () => {
  const [url, setUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [api, setApi] = useState("https://swapi.dev/api/starships/");
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
  const [naves, setNaves] = useState([]);
  useEffect(() => {
    setLoader(true);
    fetch(api)
      .then((response) => response.json())
      .then((response) => {
        setNaves(response.results);
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
    <div className="container-Charapter_route2">
      {loader && (
        <div>
          <Loader />
        </div>
      )}
      <section className="container-character_cards2">
        {naves.length !== 0 && (
          <>
            {naves.map((e) => (
              <NaveCard key={e.id} item={e} abrirModal={abrirModal} />
            ))}
          </>
        )}
      </section>
      <section>
        {previous ? (
          <button onClick={handleClickPrevious} className="botones">
            Previous
          </button>
        ) : (
          <button disabled={true}>Previous</button>
        )}
        {next ? (
          <button onClick={handleClickNext} className="botones">
            Next
          </button>
        ) : (
          <button disabled={true}>Next</button>
        )}
      </section>
      {url && <ModalNaves cerrarModal={cerrarModal} url={url} />}
    </div>
  );
};

export default NavesRoute;
