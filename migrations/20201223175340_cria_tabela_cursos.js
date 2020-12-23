exports.up = function(knex) {
  return knex.schema.createTable("curso", (table) => {
    table.increments("id");
    table
      .int("universidade_id")
      .unsigned()
      .references("id")
      .inTable("universidade");
    table.string("nome", 200);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("curso");
};
