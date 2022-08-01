import axios from "axios";
import { API } from "../constants";
import { errorHandler } from "./apiUtils";

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
      .catch(errorHandler),
  getRoom: (id) =>
    axios
      .get(`${API.ROOT}/rooms/${id}`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch(errorHandler),
});
