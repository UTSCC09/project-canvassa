import { ObjectId } from "mongodb";
import { getDb } from "../../database.js";

console.log("rooms loaded");

async function getRoom(id) {
  const room = await getDb()
    .collection("rooms")
    .findOne({ _id: ObjectId(id) });
  console.log("Get Room: ");
  console.log(room);
  return room;
}

async function saveRoom(id, room) {
  return await getDb()
    .collection("rooms")
    .updateOne({ _id: ObjectId(id) }, { $set: room });
}

export default { getRoom, saveRoom };
