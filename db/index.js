const run = async () => {
  await require("./migration1")();
};

run();
