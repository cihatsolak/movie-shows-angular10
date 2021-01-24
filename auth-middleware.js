const jwt = require("jsonwebtoken");
const app_secret = "myappsecret";
const username = "admin";
const password = "secret";

module.exports = function (request, response, next) {
  if (request.url === "/login" && request.method == "POST") {
    if (
      request.body.username === username &&
      request.body.password === password
    ) {
      let token = jwt.sign(
        {
          data: username,
          expiresIn: "1h",
        },
        app_secret
      );
      response.json({ success: true, token: token });
    } else {
      response.json({ success: false });
    }
    response.end();
    return;
  } else {
    if (
      (request.url.startsWith("/products") ||
        request.url.startsWith("/categories")) &&
      request.method != "GET"
    ) {
      let token = request.headers["authorization"];
      if (token != null && token.startsWith("Bearer")) {
        token = token.substring(7, token.length);

        try {
          jwt.verify(token, app_secret);
          next();
          return;
        } catch (error) {}
      }

      response.statusCode = 401;
      response.end();
      return;
    }
  }
  next();
};
