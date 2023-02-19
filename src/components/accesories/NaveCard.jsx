import React from "react";
import "../../css/Cards.css";
const NaveCard = ({ item, abrirModal }) => {
  return (
    <div key={item.id} className="col mb-5">
      <div className="card-star-wars" style={{ minWidth: "200px" }}>
        <div className="card-star-wars-body">
          <img src="/img/ship.jpg" alt="" className="img-card" />
          <h5 className="card-title">{item.name}</h5>
          <hr />
          <p>Model: {item.model}</p>
          <p>cost: {item.cost_in_credits}</p>
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

export default NaveCard;
