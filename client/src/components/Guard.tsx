import axios from "axios";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { server_endpoint } from "../helpers/constants";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../store/userSlice";
import { setQuizzes } from "../store/quizSlice";
import { setLeaderboard } from "../store/leaderboardSlice";

const Guard = () => {
  const dispatch = useDispatch();
  const username = localStorage.getItem("username");

  axios.post(server_endpoint + "/user-info", { username }).then((res) => {
    if (res.status === 200) {
      dispatch(setUserInfo(res.data.userInfo));
      console.log("res.data", res.data);
      dispatch(setQuizzes(res.data.quizzes));
      dispatch(
        setLeaderboard({
          leaderboard: res.data.leaderboard,
          currentUser: res.data.userInfo,
        })
      );
    }
  });
  return username ? <Outlet /> : <Navigate to="/login" />;
};

export default Guard;
