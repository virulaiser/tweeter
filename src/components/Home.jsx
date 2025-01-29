import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Trends from "./Trends";
import { Outlet } from "react-router-dom";
//import Tweets from "./Tweets";

function Home() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(null);
  const [userTweet, setUserTweet] = useState(" ");

  useEffect(() => {
    if (!user) return navigate("/iniciar-sesion");
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/tweets/twee",
        headers: {
          Authorization: "Bearer " + (user && user.token),
        },
      });
      console.log("info del back =>", response.data.userDel);
      setUserInfo(response.data.userDel);
    };
    getUser();
  }, []);

  const saveTweet = async () => {
    const response = await axios({
      method: "post",
      url: "http://localhost:8000/tweets",
      data: { content: userTweet, autor: userInfo.id },
      headers: {
        Authorization: "Bearer " + (user && user.token),
      },
    });

    setUserInfo(response.data);
    console.log("info mando al back body =>", response.data);
    setUserTweet("");
  };

  return (
    user && (
      <div className="container">
        <div className="row">
          <div className="col-2 ">
            <Sidebar />
          </div>
          <div className="col-7 shadow-sm">
            <div className="mt-2">
              <form
                method="post"
                action="/username/crear"
                encType="multipart/form-data"
              >
                <div className="container">
                  <label htmlFor="newTweet">
                    <h4 className="card-title mt-3">Home</h4>
                    <textarea
                      className="form-control border-0 shadow-sm"
                      rows="3"
                      type="text"
                      id="newTweet"
                      value={userTweet}
                      onChange={(event) => setUserTweet(event.target.value)}
                      name="newTweet"
                      placeholder="What's happening?"
                    ></textarea>
                  </label>
                  <div className="d-flex justify-content-end mt-4 mb-5">
                    <button
                      type="button"
                      className="btn rounded-5 welcomeContainer"
                      onClick={() => saveTweet()}
                    >
                      Tweet
                    </button>
                  </div>

                  <div>
                    <Outlet />
                  </div>
                </div>
              </form>
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

export default Home;
