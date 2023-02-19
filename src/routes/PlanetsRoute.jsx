import React, { useEffect, useState } from "react";
import PlanetCard from "../components/accesories/PlanetCard";
import ModalPlanets from "../components/PlanetsRoute/ModalPlanets";
import Loader from "../components/accesories/Loader";
import "../css/PlanetsRoute.css";
const PlanetsRoute = () => {
  const [url, setUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [api, setApi] = useState("https://swapi.dev/api/planets/");

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

  const [planet, setPlanet] = useState([]);
  useEffect(() => {
    setLoader(true);
    fetch(api)
      .then((response) => response.json())
      .then((response) => {
        setPlanet(response.results);
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
    <div className="container-Charapter_route">
      {loader && (
        <div>
          <Loader />
        </div>
      )}
      <section className="container-character_cards">
        {planet.length !== 0 && (
          <>
            {planet.map((e) => (
              <PlanetCard key={e.id} item={e} abrirModal={abrirModal} />
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
      {url && <ModalPlanets cerrarModal={cerrarModal} url={url} />}
    </div>
  );
};

export default PlanetsRoute;
