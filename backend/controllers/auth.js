const router = require("express").Router();
const cookie = require("cookie");

const { signup, signin } = require("../services/auth");

const login = (req, res, user, returnTo) => {
  req.session.username = user.username;
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("username", user.username, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    })
  );
  if (returnTo) return res.redirect(301, `${returnTo}-auth`);
  return res
    .status(200)
    .json({ id: user._id, username: user.username, createdAt: user.createdAt });
};

router.route("/signup").post(async (req, res) => {
  try {
    const { username, password, returnTo } = req.body;
    const user = await signup(username, password);
    return login(req, res, user, returnTo);
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ errors: err.messages ?? ["Internal server error"] });
  }
});

router.route("/signin").post(async (req, res) => {
  try {
    const { username, password, returnTo } = req.body;
    const user = await signin(username, password);
    return login(req, res, user, returnTo);
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ errors: err.messages ?? ["Internal server error"] });
  }
});

router.route("/signout").get(async (req, res) => {
  try {
    req.session.destroy();
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("username", "", {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    );
    return res.status(200).json({ status: "logged out" });
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ errors: err.messages ?? ["Internal server error"] });
  }
});

module.exports = router;
