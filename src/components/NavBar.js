import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg position-sticky top-0 z-3"
        data-bs-theme="dark"
        style={{ backgroundColor: "#221f1f" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="assets/img/netflix_logo.png"
              style={{ width: "100px", height: "55px" }}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-bold" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/settings">
                  Settings
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <Link className="navbar-brand" to="/search">
                <i className="bi bi-search icons"></i>
              </Link>
              {location.pathname === "/" && (
                <div id="kids" className="fw-bold me-3">
                  cerca serie Tv
                </div>
              )}
              <div id="kids" className="fw-bold">
                KIDS
              </div>
              <i className="bi bi-bell icons"></i>
              <i className="bi bi-person-circle icons"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
