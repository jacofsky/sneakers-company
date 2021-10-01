import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light  bg-custom-color">
      <div className="container p-4">
        <a className="navbar-brand" href="#">
          Sneakers Company
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navBarHover">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Adidas
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Nike
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Yeezys
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
