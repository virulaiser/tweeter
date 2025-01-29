import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Tweets from "./components/Tweets";
import Profile from "./components/Profile";
import ProfileTweets from "./components/ProfileTweets";
import Following from "./components/Following";
import Followers from "./components/Followers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Tweets />} />
        </Route>
        <Route path="/registro" element={<Register />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/:username" element={<Profile />}>
          <Route path="" element={<ProfileTweets />} />
          <Route path="following" element={<Following />} />
          <Route path="followers" element={<Followers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

/*<Route path="/" element={<UserTweet />} />*/
