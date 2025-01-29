import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      url: "http://localhost:8000/tokens",
      method: "POST",
      data: { password, username },
    });
    //console.log(response.data.token);
    if (response.data.token) {
      dispatch(login(response.data));
      navigate("/");
    } else {
      navigate("/errorPage?msg=Error en login");
    }
  };

  return (
    <div className="container mt-5 rounded-4 shadow">
      <div className="row">
        <div className="col-md-4 col-lg-7 rounded-start-4 position-relative mainContainer greetingColumn welcomeContainer">
          <i className="fa-brands fa-twitter fs-1 mt-5 ms-5"></i>
          <p className="position-absolute bottom-0 mb-5 ms-5 fs-3">
            Hey! Nice to see you again 🥰
          </p>
        </div>
        <div className="col mainContainer">
          <div className="col mainContainer my-md-5 h-100 mx-5 px-5">
            <h1 className="mt-3 pt-5">Login</h1>
            <p>Ready to start using Twitter?</p>
            <form action="" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="form-label"></label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="form-label"></label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-4 pt-2">
                <button
                  type="submit"
                  className="btn rounded-5 welcomeContainer"
                >
                  Login
                </button>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <p className="textForm">
                  <span>Dont have anaccount? </span>
                  <Link
                    to={"/registro"}
                    className="text-decoration-none textForm btnSign"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
