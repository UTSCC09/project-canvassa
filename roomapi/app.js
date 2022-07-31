const express = require("express");
const app = express();
const port = 4000;
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Room Deployment API",
      description: "Deploys rooms via kubernetes",
      contact: {
        name: "Canvassa Team",
      },
      servers: ["http://localhost:5000"],
    },
  },
  apis: ["app.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Routes
/**
 * @swagger
 * /roomcreate:
 *  get:
 *    description: Creates a room server
 *    responses:
 *      '200':
 *        description: A Sucessful Response
 *
 */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
