import React from "react";
import "../../css/Cards.css";
const CharapterCard = ({ user, item, abrirModal, addPJFav }) => {
  return (
    <div className="mb-5">
      <div className="card" style={{ minWidth: "200px" }}>
        <div className="card-body">
          <img src="/img/default.jpg" alt="" className="img-card" />
          <h5 className="card-title">{item.name}</h5>
          <hr />
          <p>Home World: {item.homeworld}</p>
          <p>Gender: {item.gender}</p>
          <button
            className="btn btn-info"
            onClick={(e) => abrirModal(e, item.url)}
          >
            Ver
          </button>
          {user && (
            <button className="btn btn-info" onClick={() => addPJFav(item.url)}>
              Agregar favorito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharapterCard;
