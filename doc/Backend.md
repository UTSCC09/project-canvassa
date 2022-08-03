# The Canvassa Server

This server is responsible for REST API calls for the Canvassa app and managing information about Canvassa Rooms.

## Setting it up for the dev env

Note: The database should be correctly set up before the server can function as expected.

From the project directory, enter `cd backend`. This brings you to the Canvassa Server directory. Here, add a `.env` file that looks like the following:

```
MONGODB_PORT=<your-mongodb-port>
DB_NAME=<your-mongodb-db-name>
AUTH0_SECRET=<some-long-private-string>
ENVIRONMENT=dev

MONGODB_ROOT_DEV=localhost
FE_ROOT_DEV="http://localhost:3000"
BE_DOMAIN_DEV=http://localhost:5000
FE_DOMAIN_DEV=http://localhost:3000
```

Run `npm i` and then `node server.js`. If the logs state that the server is running successfully and the MongoDB connection is established successfully, you are good to go.

## The Server

`server.js` boots up the server. It adds middleware for logging endpoint calls, handling CORS, and authentication.

## The REST API

This API is responsible for management of Canvassa users and room metadata.

### Error Handling

The API follows consistent behaviour on errors. The following schema is expected on `4xx` and `5xx` errors.

```
{
  status: integer,
  messages: string[]
}
```

### Auth (/backend/api/auth)

Note: `server.js` adds middleware to authenticate users on each endpoint call. If the user is not authenticated, they are redirected to the login page on the frontend.

#### POST (/signup)

Body:
```
{
  username: string,
  password: string,
  returnTo: string | null
}
```

If a unique `username` is given, adds the user to to the database with a salted hash of the `password`. If `returnTo` is given, redirects the user to it.

On Response 200:
```
{ 
  id: string, 
  username: string, 
  createdAt: TimeStamp
}
```

On Response 301:
```
Redirect to `returnTo`
```

#### POST (/signin)

Body:
```
{
  username: string,
  password: string,
  returnTo: string | null
}
```

Validates `username` and `password`. On success, logs in the user. If `returnTo` is given, redirects the user to it.

On Response 200:
```
{ 
  id: string, 
  username: string, 
  createdAt: TimeStamp
}
```

On Response 301:
```
Redirect to `returnTo`
```

#### GET (/signout)

Logs out the user.

On Response 200:
```
{
  status: "logged out"
}
```

### AppData (/backend/api/app-data)

#### GET (/room-modes)

Returns a list of the room modes Canvassa offers.

On Response 200:
```
{
  roomModes: [{ 
    title: string,
    desc: string,
    disabled: boolean,
    createdAt: TimeStamp,
    updatedAt: TimeStamp
   }]
}
```

#### GET (/public-rooms)

Returns a list of the rooms joinable by any authenticated user.

On Response 200:
```
{
  publicRooms: [{ 
    _id: string,
    name: string,
    link: string,
    members: string[],
    canvas: ThreeCanvas,
    type: string,
    createdAt: TimeStamp,
    updatedAt: TimeStamp
   }]
}
```

### Rooms (/backend/api/rooms)

#### POST (/)

Body:
```
{
  name: string
}
```

Creates a room with name `name` and the user as the only initial member. Generates a join link that can be sent to others to join the room. Returns the room.

On Response 200:
```
{
  _id: string,
  name: string,
  link: string,
  createdAt: TimeStamp,
  updatedAt: TimeStamp,
  members: string[],
  canvas: ThreeCanvas,
  type: string
}
```

#### GET (/:id)

URL Params:
- id: string

Returns the room with id `id`.

On Response 200:
```
{
  _id: string,
  name: string,
  link: string,
  createdAt: TimeStamp,
  updatedAt: TimeStamp,
  members: string[],
  canvas: ThreeCanvas,
  type: string
}
```

#### PATCH (/:id/add-member)

URL Params:
- id: string

Body:
```
{
  memberId: string
}
```

Adds the user with id `memberId` to the room with id `id`. Returns the updated room.

On Response 200:
```
{
  _id: string,
  name: string,
  link: string,
  createdAt: TimeStamp,
  updatedAt: TimeStamp,
  members: string[],
  canvas: ThreeCanvas,
  type: string
}
```

#### PATCH (/:id/remove-member)

URL Params:
- id: string

Body:
```
{
  memberId: string
}
```

Removes the user with id `memberId` from the room with id `id`. Returns the updated room.

On Response 200:
```
{
  _id: string,
  name: string,
  link: string,
  createdAt: TimeStamp,
  updatedAt: TimeStamp,
  members: string[],
  canvas: ThreeCanvas,
  type: string
}
```

#### DELETE (/:id)

URL Params:
- id: string

Deletes the room with id `id`. Returns the deleted room.

On Response 200:
```
{
  _id: string,
  name: string,
  link: string,
  createdAt: TimeStamp,
  updatedAt: TimeStamp,
  members: string[],
  canvas: ThreeCanvas,
  type: string
}
```

#### GET (/:id/dynamic-join)

URL Params:
- id: string

Adds the user to the room with id `id` and redirects the user to the room page on the frontend.

Note: This is used by the link generated when rooms are created. Users can share the link to hit this endpoint, which will allow them to directly join the room.

On Response 301:
```
Redirect to room page on the frontend with id `id`.
```

## The Sockets

`socket.js` defines the starting point for socket connections. However, the functional logic is deferred to the `sockets/*` files.

The sockets only allow authenticated connections and are responsible for allowing users to join or leave rooms. Each handler will, on error, return an error code and messages that mimick the handling of REST API endpoints.

### "join-room" - onJoinRoom({ roomId: str })

Add the user to the room specified by `roomId` and store the socket id as connected to the room (to be used for `onDisconnect`). Update all users in the room with the new list of room members.

### "disconnect" - onDisconnect()

Remove the user from the room in which the socket is connected to. Update all users in the room with the new list of room members. If no members are left, delete the room.