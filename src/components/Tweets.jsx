import { useEffect, useState } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

import { useSelector } from "react-redux";

function Tweets() {
  const [followingTweets, setFollowingTweets] = useState(null);
  //const params = useParams();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getfollowingTweets = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/tweets/homeFollowing/li",
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });
      console.log("desde Tweet=>", response.data);
      setFollowingTweets(response.data);
    };
    getfollowingTweets();
  }, []);

  const btDelTweet = async (event, idTweet) => {
    event.preventDefault();
    const response = await axios({
      method: "delete",
      url: "http://localhost:8000/tweets",
      data: { idTweet },
      headers: {
        Authorization: "Bearer " + (user && user.token),
      },
    });
    console.log("desde borrar Tweet=>", response.data);
  };

  const mandoLike = async (event, idTweet, idCreador) => {
    event.preventDefault();
    const response = await axios({
      method: "post",
      url: "http://localhost:8000/tweets/like",
      data: { idTweet, idCreador },
      headers: {
        Authorization: "Bearer " + (user && user.token),
      },
    });
    console.log("desde Tweet=>", response.data);
  };

  return (
    followingTweets && (
      <div>
        <h5 className="mt-5 mb-4">Tweets</h5>
        {followingTweets.map((follows) => (
          <div
            key={follows.id}
            className="border-top p-1 pt-3 border-opacity-25"
          >
            <div className="row g-0">
              <div className="col-1 d-inline-block p-2">
                <img
                  src={follows.autor && follows.autor.avatar}
                  className="img-fluid rounded-circle"
                  id="tweetAvatar"
                  alt="User Avatar"
                />
              </div>
              <div className="col d-inline-block">
                <div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold pe-3 align-items-center">
                      {` ${follows.autor && follows.autor.firstname} ${
                        follows.autor && follows.autor.lastname
                      }`}
                    </p>
                    <p className="text-muted pe-3 align-items-center">
                      {`@${follows.autor && follows.autor.username}`}
                    </p>
                    <p className="text-muted pe-3 align-items-center">
                      {formatDistanceToNow(new Date(follows.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                  <div className="col d-inline-block">
                    <p className="">{follows.content}</p>
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        id="btnLikes"
                        onClick={() =>
                          mandoLike(event, follows.id, follows.autor.id)
                        }
                      >
                        <i className="fa-solid fa-heart"> </i>
                        <span className="ms-2">
                          {follows.contTweet >= 0 ? follows.contTweet : "0"}{" "}
                          likes
                        </span>
                      </button>

                      <button onClick={() => btDelTweet(event, follows.id)}>
                        <i className="fa-solid fa-trash me-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

export default Tweets;
