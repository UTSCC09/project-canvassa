# Canvassa 🖌️

A web application for users to collaborate on a shared infinite whiteboard.

# Setting up the dev env

The following instructions are for setting up a development environment. Note that it expects your system to have `node.js` installed. If you do not, you can do so with their [documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Frontend

From the project directory, run `$ cd frontend`. This is the working directory for the frontend. From here, run:

```
$ npm i
$ npm start
```

and your frontend should be running on an auto-opened tab on your default browser.

## Backend

From the project directory, run `$ cd backend`. This is the working directory for the backend.

Before being able to successfully run the backend. You need to install MongoDB and MongoDB Compass. You can do so by following the instructions on their [documentation](https://www.mongodb.com/try/download/community). Then, open up MongoDB compass and create a new database. Create a `.env` file in the backend directory and add `MONGODB_PORT` and `DB_NAME` keys in it with the values being the port MongoDB is connected to and the name you chose for the database respectively.

From here, run:

```
$ npm i
$ nodemon server.js
```

and you should have the server running.
