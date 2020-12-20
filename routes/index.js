const env = process.env.NODE_ENV || "development";
const cfg = require("../knexfile");
const knex = require("knex")(cfg[env]);

const router = (app) => {
  app.get("/", (request, response) => {
    response.send({
      message: "Node.js and Express REST API",
    });
  });

  app.get("/universidades", async (request, response) => {
    try {
      let universidades = await knex("universidade").select();
      const total = await knex("universidade")
        .count("id as total")
        .first();

      universidades = { universidades, total: total.total };

      response.send(universidades);
    } catch (e) {
      response.status(500).send(e);
    }
  });
};

module.exports = router;
