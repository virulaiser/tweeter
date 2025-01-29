import { Link } from "react-router-dom";

function Trends() {
  return (
    <div className="container d-none d-md-block">
      <div
        className="card border-0 mb-4 p-3 align-items-start"
        id="backgroundTrends"
      >
        <h4 className="ps-3">What's happening</h4>
        <div className="card-body">
          <div className="mb-4">
            <p className="card-subtitle text-body-secondary">
              Programming Trending
            </p>
            <h6 className="card-title">
              <Link to="#" className="text-decoration-none fs-5 text-dark">
                #MongoVsSequeilize
              </Link>
            </h6>
            <p className="card-subtitle text-body-secondary">97.5K Tweets</p>
          </div>
          <div className="mb-4">
            <p className="card-subtitle text-body-secondary">
              Entretaiment Trending
            </p>
            <h6 className="card-title">
              <Link to="#" className="text-decoration-none fs-5 text-dark">
                #StarWars
              </Link>
            </h6>
            <p className="card-subtitle text-body-secondary">97.5K Tweets</p>
          </div>
          <div className="">
            <p className="card-subtitle text-body-secondary">News Trending</p>
            <h6 className="card-title">
              <Link to="#" className="text-decoration-none fs-5 text-dark">
                #LifeInMars
              </Link>
            </h6>
            <p className="card-subtitle text-body-secondary">97.5K Tweets</p>
          </div>
        </div>
      </div>
      <div
        className="card border-0 p-3 align-items-start"
        id="backgroundTrends"
      >
        <h4 className="ps-2">Who to follow</h4>
        <table className="text-align table-borderless">
          <tbody>
            <tr>
              <td scope="row">
                <i
                  className="fa-solid fa-circle-user fa-3x"
                  style={{ color: "#adb7b8" }}
                ></i>
              </td>
              <td>
                <div className="ms-2 me-4">
                  <h6 className="card-title">Hack Academy</h6>
                  <p className="card-subtitle text-body-secondary">
                    @HackAcademyDev
                  </p>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn rounded-5"
                    style={{ color: "#ffffff", backgroundColor: "#1d9bf0" }}
                  >
                    Follow
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <i
                  className="fa-solid fa-circle-user fa-3x"
                  style={{ color: "#adb7b8" }}
                ></i>
              </th>

              <td>
                <div className="ms-2 me-4">
                  <h6 className="card-title">JavaScript</h6>
                  <p className="card-subtitle text-body-secondary">
                    @JavaScript
                  </p>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn rounded-5"
                    style={{ color: "#ffffff", backgroundColor: "#1d9bf0" }}
                  >
                    Follow
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <i
                  className="fa-solid fa-circle-user fa-3x"
                  style={{ color: "#adb7b8" }}
                ></i>
              </th>
              <td>
                <div className="ms-2 me-4">
                  <h6 className="card-title">MondoDB</h6>
                  <p className="card-subtitle text-body-secondary">@MongoDB</p>
                </div>
              </td>

              <td>
                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn rounded-5"
                    style={{ color: "#ffffff", backgroundColor: "#1d9bf0" }}
                  >
                    Follow
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <i
                  className="fa-solid fa-circle-user fa-3x"
                  style={{ color: "#adb7b8" }}
                ></i>
              </th>
              <td>
                <div className="ms-2 me-4">
                  <h6 className="card-title">Node.js</h6>
                  <p className="card-subtitle text-body-secondary">@nodejs</p>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn rounded-5"
                    style={{ color: "#ffffff", backgroundColor: "#1d9bf0" }}
                  >
                    Follow
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <i
                  className="fa-solid fa-circle-user fa-3x"
                  style={{ color: "#adb7b8" }}
                ></i>
              </th>
              <td>
                <div className="ms-2 me-4">
                  <h6 className="card-title">MDN Web Docs</h6>
                  <p className="card-subtitle text-body-secondary">
                    @MoxDevNet
                  </p>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn rounded-5"
                    style={{ color: "#ffffff", backgroundColor: "#1d9bf0" }}
                  >
                    Follow
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Trends;
