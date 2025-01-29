import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteTweet, likeTweet } from "../redux/tweetSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";

function ProfileTweets() {
  const [tweets, setTweets] = useState(null);
  const params = useParams();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/tweets/" + params.username,
        headers: {
          Authorization: "Bearer " + (user && user.token),
        },
      });
      console.log(response.data);
      setTweets(response.data);
    };
    getTweets();
  }, []);

  const dispatch = useDispatch();

  const handleDeleteTweet = (tweetId) => {
    dispatch(deleteTweet(tweetId));
  };

  const handleLikeTweet = (tweetId) => {
    dispatch(likeTweet(tweetId));
  };

  return (
    tweets && (
      <div>
        <h5 className="mt-5 mb-4">Tweets</h5>

        {tweets.map((tweet) => {
          return (
            <div
              key={tweet.id}
              className="border-top p-1 pt-3 border-opacity-25"
            >
              <div className="row g-0">
                <div className="col-1 d-inline-block">
                  <img
                    src={tweet.autor.avatar}
                    className="img-fluid rounded-circle"
                    id="tweetAvatar"
                    alt="User Avatar"
                  />
                </div>
                <div className="col d-inline-block">
                  <div>
                    <div className="d-flex">
                      <p className="fw-bold pe-3 align-items-center">
                        {tweet.autor.firstname} {tweet.autor.lastname}
                      </p>
                      <p className="text-muted pe-3 align-items-center">
                        {`@${tweet.autor.username}`}
                      </p>
                      <p className="text-muted pe-3 align-items-center">
                        ·{" "}
                        {formatDistanceToNow(new Date(tweet.createdAt), {
                          addSuffix: true,
                        })}
                      </p>
                    </div>
                    <div className="col d-inline-block">
                      <p className="">{tweet.content}</p>
                      <div className="d-flex justify-content-between">
                        <button type="submit" id="btnLikes">
                          <p>
                            <i
                              className={
                                tweet.isLiked
                                  ? "fa-solid fa-heart"
                                  : "fa-regular fa-heart text-muted"
                              }
                              onClick={() => handleLikeTweet(tweet.isLiked)}
                            ></i>
                            <span className="ms-2">Q likes</span>
                          </p>
                        </button>
                        <button
                          type="submit"
                          id="btnDelete"
                          onClick={() => handleDeleteTweet(tweet.id)}
                        >
                          <i className="fa-solid fa-trash me-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}

export default ProfileTweets;
