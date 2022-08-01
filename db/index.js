const run = async () => {
  await require("./runMigrations")();
};

run();
