const express = require("express");
const cors = require("cors");
const { connectToDb } = require("./utils/db");
const { configureAuth } = require("./utils/auth");
const { requiresAuth } = require("express-openid-connect");

const startServer = async () => {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.json());

  const db = await connectToDb();

  const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });

  configureAuth(app);

  // req.isAuthenticated is provided from the auth router
  app.get("/", (req, res) => {
    res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
  });

  // profile details
  app.get("/profile", requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });
};

startServer();
