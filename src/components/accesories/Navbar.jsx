import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../context/UserProvider";

const Navbar = () => {
  const { user, logOut } = useContext(userContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="charapters" className="nav-link">
                Personajes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="naves" className="nav-link">
                Naves
              </Link>
            </li>
            <li className="nav-item">
              <Link to="planets" className="nav-link">
                Planetas
              </Link>
            </li>
            {/***--------------------------CONDICIONAL------------------------------***/}

            {user ? (
              <>
                <li className="nav-item">
                  <Link to="login" className="nav-link" onClick={logOut}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="registro" className="nav-link">
                    Register
                  </Link>
                </li>
              </>
            )}

            {/***------------------------------------------------------------***/}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
