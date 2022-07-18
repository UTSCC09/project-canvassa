import axios from "axios";
import { API } from "../constants";

const getUsername = () =>
  document.cookie.replace(
    /(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

export const useAuthApi = () => ({
  getUsername,
  isLoggedIn: () => getUsername() !== "",
  signin: (username, password, returnTo) =>
    axios
      .post(
        `${API.ROOT}/auth/signin`,
        { username, password, returnTo },
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data)
      .catch((err) => console.error(err)),
  signup: (username, password, returnTo) =>
    axios
      .post(
        `${API.ROOT}/auth/signup`,
        { username, password, returnTo },
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
