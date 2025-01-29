import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="row">
        <div className="col d-flex align-items-end flex-column mt-2">
          <div className="col d-flex align-items-end flex-column">
            <div id="sidebarContainerTop">
              <Link
                to="/"
                className="text-decoration-none py-4"
                style={{ color: "#1d9bf0" }}
              >
                <i className="fa-brands fa-twitter fa-2xl"></i>
              </Link>
              <Link
                to="/"
                className="text-decoration-none py-4 d-flex"
                style={{ color: "#000000" }}
              >
                <i className="fa-solid fa-house fa-2xl"></i>
                <span className="hideSidebar text-decoration-none ps-3">
                  Home
                </span>
              </Link>
              <Link
                to={`${""}li`}
                className="text-decoration-none py-3 d-flex"
                style={{ color: "#000000" }}
              >
                <i className="fa-regular fa-user fa-2xl"></i>
                <span className="hideSidebar text-decoration-none ps-4 hideSidebar">
                  Profile
                </span>
              </Link>
              <Link
                to="/"
                className="text-decoration-none py-3"
                style={{ color: "#1d9bf0" }}
              >
                <div id="hideSidebarIcon">
                  <i className="fa-solid fa-feather fa-2xl"></i>
                </div>
                <div className="mt-4 hideSidebarButton">
                  <button className="rounded-5 px-5 py-2 btnLightBlue">
                    Tweet
                  </button>
                </div>
              </Link>
            </div>
            <Link
              to="/logout"
              className="text-decoration-none py-4"
              id="sidebarContainerBottom"
            >
              <i
                id="hideSidebarIcon"
                className="fa-solid fa-right-from-bracket fa-2xl text-danger"
              ></i>
              <div className="hideSidebarButton">
                <button className="btn rounded-5 px-5" id="btnDeleteInverted">
                  Logout
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
