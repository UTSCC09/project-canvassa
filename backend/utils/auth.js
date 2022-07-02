const { auth } = require("express-openid-connect");
const { ENV_VARS } = require("./constants");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: ENV_VARS.AUTH0_SECRET,
  baseURL: ENV_VARS.AUTH0_BASE_URL,
  clientID: ENV_VARS.AUTH0_CLIENT_ID,
  issuerBaseURL: ENV_VARS.AUTH0_ISSUER_BASE_URL,
};

const configureAuth = (app) => {
  // auth router attaches /login, /logout, and /callback routes to the baseURL
  app.use(auth(config));
};

module.exports = { configureAuth };
