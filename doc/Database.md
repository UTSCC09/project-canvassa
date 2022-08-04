# The Database

The database component is responsible for independent communication with the MongoDB database required to operate the Canvassa app. Before Canvassa can properly function, the migrations must be run to prepulate the database with necesarry documents.

## Setting it up for the dev env

Note: The database requires MongoDB to be installed. You can do so by following [their documentation](https://www.mongodb.com/docs/compass/current/install/).

From the project directory, enter `cd db`. This brings you to the Database directory. Here, add a `.env` file that looks like the following:

```
MONGODB_PORT=<your-mongodb-port>
DB_NAME=<your-mongodb-db-name>
ENVIRONMENT=dev
MONGODB_ROOT_DEV=localhost
BE_DOMAIN_DEV=http://localhost:5000
```

From here, run `node ./index.js` to run the migrations. This should be all you need to set up the database for the local environment.

## Migrations

The migrations exist in the `db/migrations` directory. Each is a file that has a `migrationUp` and a `migrationDown` function that is used to put up or pull down the database with the migration's changes.

`runMigrations.js` contains the logic to run the migrations. It ensures each migration to be run is not locked (i.e. not already run) and after running the migration, locks it in the database. This ensures migrations are not put up multiple times without first pulling them down.