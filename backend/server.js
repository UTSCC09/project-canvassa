const express = require("express");
const cors = require("cors");
const { connectToDb } = require("./utils/db");
const session = require("express-session");
const { createServer } = require("http");

const { ENV_VARS, FE_VARS } = require("./utils/constants");
const authRouter = require("./controllers/auth");
const roomsRouter = require("./controllers/rooms");
const appDataRouter = require("./controllers/appData");
const { setupSockets } = require("./socket");

const startServer = async () => {
  const app = express();
  const port = ENV_VARS.PORT;

  // app.use(cors());
  app.use(express.json());

  app.use(
    session({
      secret: ENV_VARS.AUTH0_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );

  app.use(function (req, res, next) {
    res.header("Content-Type", "application/json;charset=UTF-8");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", FE_VARS.ROOT);
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH"
    );
    console.log(
      "HTTP request",
      req.session?.username,
      req.method,
      req.url,
      req.body
    );
    next();
  });

  app.use(function (req, res, next) {
    req.username = req.session?.username ?? null;

    if (!req.originalUrl.includes("/auth/") && req.method !== "OPTIONS") {
      if (!req.username) {
        return res.redirect(
          301,
          `${ENV_VARS.FE_DOMAIN}/auth?returnTo=${req.originalUrl}`
        );
      }
    }
    next();
  });

  await connectToDb();

  app.use("/backend/api/auth", authRouter);
  app.use("/backend/api/rooms", roomsRouter);
  app.use("/backend/api/app-data", appDataRouter);

  const server = createServer(app);

  setupSockets(server);

  server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
};

startServer();
