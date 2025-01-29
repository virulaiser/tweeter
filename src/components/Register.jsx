import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: "http://localhost:8000/user/",
      data: { password, username, firstname, lastname, email },
    });
    console.log("register =>" + response.data);

    navigate("/");
  };

  return (
    <div className="container mt-5 rounded-4 shadow">
      <div className="row">
        <div className="col-md-4 col-lg-7 rounded-start-4 position-relative mainContainer greetingColumn welcomeContainer">
          <i className="fa-brands fa-twitter fs-1 mt-5 ms-5"></i>
          <p className="position-absolute bottom-0 mb-5 ms-5 fs-3">
            Hi! Welcome to Twitter Clone 👋
          </p>
        </div>
        <div className="col mainContainer">
          <div className="col mainContainer my-md-5 h-100 mx-5 px-5">
            <h1 className="mt-3">Sign Up</h1>
            <p>Create an account and start using Twitter</p>
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-1">
                <label htmlFor="firstname" className="form-label"></label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="form-control"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="lastname" className="form-label"></label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="mb-1">
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
              <div className="d-grid gap-2 mt-4">
                <label
                  htmlFor="avatar"
                  className="border rounded p-2 my-1 textForm uploadFile chooseFile"
                >
                  Choose file
                </label>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  className="hide"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="username" className="form-label"></label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder={"Email"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-1">
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

              <div className="d-grid gap-2 my-4 pt-2">
                <button
                  type="submit"
                  className="btn rounded-5 welcomeContainer"
                  onChange={(e) => handleSubmit(e)}
                >
                  Sign up
                </button>
              </div>

              <div className="d-flex justify-content-center mt-3">
                <p className="textForm">
                  Already have an account?{" "}
                  <Link
                    to={"/iniciar-sesion"}
                    className="text-decoration-none textForm btnSign"
                  >
                    Sign in
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

export default Register;
