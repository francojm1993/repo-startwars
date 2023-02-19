import React, { useEffect, useState } from "react";
import "../../css/Modal.css";
const ModalCharapter = ({ cerrarModal, url }) => {
  const [pj, setPj] = useState({});
  useEffect(() => {
    fetch(url)
      .then((e) => e.json())
      .then((e) => setPj(e));
  }, []);
  return (
    <div className="container-modal">
      <section className="modal-info">
        {/**  BOTÓN PARA CERRAR EL MODAL **/}
        <button className="btn btn-danger" onClick={(e) => cerrarModal(e)}>
          Cerrar
        </button>
        {Object.keys(pj).length !== 0 && (
          <>
            <div className="mb-5">
              <div className="card" style={{ minWidth: "200px" }}>
                <div className="card-body">
                  <img src="/img/default.jpg" alt="" className="img-card" />
                  <h5 className="card-title">{pj.name}</h5>
                  <hr />
                  <p>Home World: {pj.homeworld}</p>
                  <p>Gender: {pj.gender}</p>
                  <p>Born: {pj.birth_year}</p>
                  <p>Eye Color: {pj.eye_color}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default ModalCharapter;
