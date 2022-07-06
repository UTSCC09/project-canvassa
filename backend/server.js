const express = require("express");
const cors = require("cors");
const { connectToDb } = require("./utils/db");
const { configureAuth } = require("./utils/auth");
const { requiresAuth } = require("express-openid-connect");

const { router: usersRouter } = require("./controllers/users");
const { getUserByEmail, createUser } = require("./services/users");

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
  app.get("/", async (req, res) => {
    let msg = "Logged out";
    let data = null;
    if (req.oidc.isAuthenticated()) {
      msg = "Logged in";
      if (!(await getUserByEmail(req.oidc.user.email)))
        data = await createUser(req.oidc.user.email);
    }
    res.send(msg);
  });

  // profile details
  app.get("/profile", requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });

  app.use("/users", usersRouter);
};

startServer();
