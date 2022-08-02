/**
 * This servers as a model for the room
 */
import roomapi from "./api/database/rooms.js";
import { ENV_VARS } from "./constants.js";
import canvas from "./Canvas.js";

let room = {
  name: "",
  link: "",
  members: [],
  canvas: {},
  type: "",
};

/**
 * This populates the room object with that of the database copy
 */
async function pullFromDatabase() {
  room = await roomapi.getRoom(ENV_VARS.ROOM_ID);
  canvas.loadCanvas(room.canvas);
}

async function save() {
  room.canvas = canvas.getCanvas();
  await roomapi.saveRoom(ENV_VARS.ROOM_ID, room);
}

function setLink(link) {
  room.link = link;
}

function getLink(link) {
  return room.link;
}

function addMember(member) {
  room.members.push(member);
}

function removeMemeber(member) {
  room.members.remove(member);
}

function getName() {
  return room.name;
}

function getRoom() {
  return room;
}

async function load() {
  await pullFromDatabase();
  //   Save Room Ever 5 seconds
  setInterval(async () => {
    await save();
    console.log("Updated Backend " + Date());
  }, ENV_VARS.SAVE_INTERVAL);
}

export default {
  getName,
  removeMemeber,
  addMember,
  getLink,
  setLink,
  save,
  load,
  getRoom,
};
