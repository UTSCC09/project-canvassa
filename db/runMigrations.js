const { checkMigrationLock, lockMigration } = require("./migrations/utils");

const includeMigrations = [1, 2];
const migrations = includeMigrations.map((migrationNum) => {
  const {
    name,
    migrationUp,
  } = require(`./migrations/migration${migrationNum}`);
  return { name, up: migrationUp };
});

const runMigrations = async () => {
  for (const migration of migrations) {
    if (await checkMigrationLock(migration.name)) {
      throw new Error(`migration ${migration.name} already run`);
    }
    await migration.up();
    await lockMigration(migration.name);
  }
};

module.exports = runMigrations;
