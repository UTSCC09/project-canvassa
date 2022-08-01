# Canvassa 🖌️

Canvassa is a web app that allows multiple uses to draw on the same infinite canvas at the same time. It focuses on providing a collaborative drawing/whiteboard experience.

# Setting up the dev env

The following instructions are for setting up a development environment. Note that it expects your system to have `node.js` installed. If you do not, you can do so with their [documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Frontend

From the project directory, run `cd frontend`. This is the working directory for the frontend. From here, run:

```
$ npm i
$ npm start
```

and your frontend should be running on an auto-opened tab on your default browser.

## Backend

From the project directory, run `cd backend`. This is the working directory for the backend. Create a `.env` file here and add a `PORT` key for the port to use for the backend.

### Database

Canvassa stores data in a MongoDB database. You need to install MongoDB and MongoDB Compass. You can do so by following the instructions on their [documentation](https://www.mongodb.com/try/download/community). Then, open up MongoDB compass and create a new database.In the `.env` file, add `MONGODB_PORT` and `DB_NAME` keys in it with the values being the port MongoDB is connected to and the name you chose for the database respectively.

### Auth0

Canvassa uses Auth0 for authentication and authorization. You need to add the following to your `.env` file:

```
AUTH0_SECRET=<some-random-32-character-long-string>
AUTH0_BASE_URL=http://localhost
AUTH0_CLIENT_ID=<client-id>
AUTH0_ISSUER_BASE_URL=<issuer-base-id>
```

In order to obtain a client ID and issuer base ID, you can contact the developers or create an Auth0 application of your own by following steps 1-3 of [this tutorial](https://auth0.com/docs/quickstart/webapp/express). Make sure to use the port value you entered in the `.env` file instead of their default 3000.

From here, run:

```
npm i
nodemon server.js
```

and you should have the server running.
