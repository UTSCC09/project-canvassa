const { COLLECTIONS } = require("../constants");
const { connectToDb } = require("../utils");

const checkMigrationLock = async (migrationName) => {
  const migration = (await connectToDb())
    .collection(COLLECTIONS.MIGRATION_LOCKS)
    .findOne({ migrationName });
  return migration.locked;
};

const lockMigration = async (migrationName) => {
  const migration = (await connectToDb())
    .collection(COLLECTIONS.MIGRATION_LOCKS)
    .findOne({ migrationName });
  if (migration === null) {
    (await connectToDb()).collection(COLLECTIONS.MIGRATION_LOCKS).insertOne({
      migrationName,
      locked: true,
    });
  } else {
    (await connectToDb())
      .collection(COLLECTIONS.MIGRATION_LOCKS)
      .findOneAndUpdate(
        {
          migrationName,
        },
        { $set: { locked: true } }
      );
  }
};

module.exports = {
  checkMigrationLock,
  lockMigration,
};
