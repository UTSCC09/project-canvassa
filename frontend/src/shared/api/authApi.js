import axios from "axios";
import { API } from "../constants";

const getUserName = () =>
  document.cookie.replace(
    /(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

export const useAuthApi = () => ({
  getUserName,
  isLoggedIn: () => getUserName() !== "",
  signin: (username, password) =>
    axios
      .post(
        `${API.ROOT}/auth/signin`,
        { username, password },
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data)
      .catch((err) => console.error(err)),
  signup: (username, password) =>
    axios
      .post(
        `${API.ROOT}/auth/signup`,
        { username, password },
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data)
      .catch((err) => console.error(err)),
  signout: () =>
    axios
      .get(`${API.ROOT}/auth/signout`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch((err) => console.error(err)),
});
