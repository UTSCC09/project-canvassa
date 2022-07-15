export const getPaths = {
  getLandingPage: () => "/",
  getPublicRoomsPage: () => "/rooms/public",
  getCreateRoomsPage: () => "/rooms/create",
  getAuthPage: () => "/auth",
  getRoomPage: (id) => `/rooms/${id}`,
};

export const APP_TITLE = "Canvassa";

export const API = {
  ROOT: "http://localhost:5000",
};
