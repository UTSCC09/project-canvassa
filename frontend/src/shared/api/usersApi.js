import axios from "axios";
import { API } from "../constants";

export const useUsersApi = () => ({
  updateUser: (email) =>
    axios
      .patch(`${API.ROOT}/users`, { email })
      .then((res) => res.data)
      .catch((err) => console.error(err)),
});
