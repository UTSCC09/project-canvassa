const appDataDatabase = require("../databases/appData");

const getRoomModes = async () => {
  return await appDataDatabase.getRoomModes();
};

module.exports = {
  getRoomModes,
};
