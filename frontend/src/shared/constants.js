export const getPaths = {
  getLandingPage: () => "/",
  getCreateRoomsPage: () => "/rooms/create",
  getAuthPage: () => "/auth",
  getRoomPage: (id) => `/rooms/${id}`,
};

export const APP_TITLE = "Canvassa";

export const API = {
  ROOT: "/backend/api",
};

export const SOCKET_API = {
  ROOT: "http://localhost:5000",
};

export const SOCKET_EVENTS = {
  JOIN_ROOM: "join-room",
  UPDATE_ROOM_MEMBERS: "update-room-members",
  ERROR: "cavassa-error",
  CONNECT_ERROR: "connect_error",
  LINES: "lines",
};
