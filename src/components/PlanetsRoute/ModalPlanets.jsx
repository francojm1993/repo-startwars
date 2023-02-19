import React, { useEffect, useState } from "react";
import "../../css/Modal.css";
const ModalPlanets = ({ cerrarModal, url }) => {
  const [pl, setPl] = useState({});

  useEffect(() => {
    fetch(url)
      .then((e) => e.json())
      .then((e) => setPl(e));
  }, []);

  return (
    <div className="container-modal">
      <section className="modal-info">
        {/**  BOTÓN PARA CERRAR EL MODAL **/}
        <button className="btn btn-danger" onClick={(e) => cerrarModal(e)}>
          Cerrar
        </button>
        {Object.keys(pl).length !== 0 && (
          <>
            <div key={pl.id} className="col mb-5">
              <div className="card" style={{ minWidth: "200px" }}>
                <div className="card-body">
                  <h5 className="card-title">{pl.name}</h5>
                  <hr />
                  <p>Population: {pl.population}</p>
                  <p>Climate: {pl.climate}</p>
                  <p>Orbital Period: {pl.orbital_period}</p>
                  <p>Gravity: {pl.gravity}</p>
                  <p>Population: {pl.population}</p>
                  <p>Terrain: {pl.terrain}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default ModalPlanets;
