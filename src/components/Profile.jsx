import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams, Outlet, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Trends from "./Trends";

function Profile() {
  const [userData, setUserData] = useState(null);
  const user = useSelector((state) => state.user);

  const params = useParams();
  //console.log(params);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/user/" + params.username,
        headers: {
          Authorization: "Bearer " + (user && user.token),
        },
      });
      //console.log(response.data);
      setUserData(response.data);
    };
    getUser();
  }, []);

  return (
    userData && (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-7 shadow-sm px-5">
            <div id="profileContainer" className="mt-5 pt-5">
              <div className="d-flex justify-content-between">
                <img
                  src={userData.avatar}
                  className="img-fluid rounded-circle"
                  alt="User Avatar"
                />
              </div>
              <div className="d-flex justify-content-end">
                <button className="rounded-5 btnLightBlue py-2 px-3">
                  Follow
                </button>
              </div>
            </div>
            <div>{useParams.username}</div>
            <h3>
              {userData.firstname} {userData.lastname}
            </h3>
            <div className="d-flex justify-content-between">
              <p>{`@${userData.username}`}</p>
              <div className="d-flex justify-content-between">
                <Link
                  to={`/${params.username}/following`}
                  className="me-3 text-decoration-none text-dark fw-bold"
                >
                  {userData.following.length}
                  <span className="text-muted fw-normal"> Following</span>
                </Link>
                <Link
                  to={`/${params.username}/followers`}
                  className="text-decoration-none text-dark fw-bold"
                >
                  {userData.followers.length}
                  <span className="text-muted fw-normal"> Followers</span>
                </Link>
              </div>
            </div>
            <div className="col">
              <div>
                <Outlet context={userData} />
              </div>
            </div>
          </div>
          <div className="col-3 mt-3">
            <Trends />
          </div>
        </div>
      </div>
    )
  );
}

export default Profile;
