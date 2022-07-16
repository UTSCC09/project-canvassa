import axios from "axios";
import { API } from "../constants";

export const useRoomsApi = () => ({
  createRoom: (name) =>
    axios
      .post(
        `${API.ROOT}/rooms`,
        { name },
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data)
      .catch((err) => console.error(err)),
});