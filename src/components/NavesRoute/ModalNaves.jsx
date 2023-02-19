import React, { useEffect, useState } from "react";
import "../../css/Modal.css";
const ModalNaves = ({ cerrarModal, url }) => {
  const [nave, setNave] = useState({});

  useEffect(() => {
    fetch(url)
      .then((e) => e.json())
      .then((e) => setNave(e));
  }, []);

  return (
    <div className="container-modal">
      <section className="modal-info">
        {/**  BOTÓN PARA CERRAR EL MODAL **/}
        <button className="btn btn-danger" onClick={(e) => cerrarModal(e)}>
          Cerrar
        </button>
        {Object.keys(nave).length !== 0 && (
          <>
            <div key={nave.id} className="col mb-5">
              <div className="card" style={{ minWidth: "200px" }}>
                <div className="card-body">
                  <h5 className="card-title">{nave.name}</h5>
                  <hr />
                  <p>Model: {nave.model}</p>
                  <p>Cost: {nave.cost_in_credits}</p>
                  <p>Manufacturer: {nave.manufacturer}</p>
                  <p>Passengers: {nave.passengers}</p>
                  <p>Crew: {nave.crew}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default ModalNaves;
