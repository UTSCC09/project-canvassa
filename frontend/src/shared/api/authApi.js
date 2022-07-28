import axios from "axios";
import { API } from "../constants";
import { errorHandler } from "./apiUtils";

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
      .catch(errorHandler),
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
      .catch(errorHandler),
  signout: () =>
    axios
      .get(`${API.ROOT}/auth/signout`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch(errorHandler),
});
