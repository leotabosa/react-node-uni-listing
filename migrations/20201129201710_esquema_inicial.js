exports.up = function(knex) {
  return knex.schema.createTable("universidade", (table) => {
    table.increments("id");
    table.string("nome", 200);
    table.text("sigla");
    table.text("cidade");
    table.string("UF", 2);
    table.string("fundacao", 4);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("universidade");
};
