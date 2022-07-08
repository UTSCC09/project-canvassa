const express = require("express");
const cors = require("cors");
const { connectToDb } = require("./utils/db");

const usersRouter = require("./controllers/users");

const startServer = async () => {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.json());

  app.use(function (req, res, next) {
    console.log("HTTP request", req.method, req.url, req.body);
    next();
  });

  await connectToDb();

  const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });

  app.use("/users", usersRouter);
};

startServer();
