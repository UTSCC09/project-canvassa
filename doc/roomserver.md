# Room Server

The room server is a seperate nodejs application that clients can connect to and their edits
to the shared canvas will be able to be shared to all users. The communication is done
primarily through the Socket API. The updates to the canvas are priodically saved to the
main database. These attributes can be configured through environment variables

What it does:
  * Privilege / Authentication Verification
  * Communicate Changes to the shared canvas to all users
  * Load and Save the shared canvas to the main database
  * Communicate Server Status (ie ping, number of clients, location)

## Environment Variables

The room id must point to a valid room in the mongodb
```
ROOM_ID=<room id>
```
The save interval is how often the room server updates the database an 
interval of 500 is sufficient.
```
SAVE_INTERVAL=<miliseconds>
```
To configure mongo database connection you must fillout the following.
```
MONGODB_ROOT_DEV=<hostname>
MONGODB_PORT=<port>
DB_NAME=<database name>
```

## File Structure

* `./`
* `Canvas.js` A model for the Canvas which is synchronized with the database
* `Room.js` A model for the room which is synchronized with the database
* `Server.js` Initializes database, room & canvas models, and client server logic.
* `ServerClientLogic.js` Where all the socket.io logic resides
* `Database.js` an API to update the mongodb database
* `Constants.js` stores all the constants


