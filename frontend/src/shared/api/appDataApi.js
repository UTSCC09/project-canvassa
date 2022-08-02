import axios from "axios";
import { API } from "../constants";
import { errorHandler } from "./apiUtils";

export const useAppDataApi = () => ({
  getRoomModes: () =>
    axios
      .get(`${API.ROOT}/app-data/room-modes`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch(errorHandler),
  getPublicRooms: () =>
    axios
      .get(`${API.ROOT}/app-data/public-rooms`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch(errorHandler),
});
