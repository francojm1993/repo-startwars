import React from "react";

const PlanetCard = ({ item, abrirModal }) => {
  return (
    <div key={item.id} className="col mb-5">
      <div className="card-star-wars1" style={{ minWidth: "200px" }}>
        <div className="card-body">
          <img src="/img/84311.jpg" alt="" className="img-card" />
          <h5 className="card-title">{item.name}</h5>
          <hr />
          <p>Population: {item.population}</p>
          <p>Climate: {item.climate}</p>
          <button
            className="btn btn-info"
            onClick={(e) => abrirModal(e, item.url)}
          >
            Ver
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
