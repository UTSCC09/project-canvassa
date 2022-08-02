const appDataDatabase = require("../databases/appData");

const getRoomModes = async () => {
  return await appDataDatabase.getRoomModes();
};

const getPublicRooms = async () => {
  return await appDataDatabase.getPublicRooms();
};

module.exports = {
  getRoomModes,
  getPublicRooms,
};
