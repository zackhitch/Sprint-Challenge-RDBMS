exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    tbl.increments();

    tbl.string('name', 128).notNullable();

    tbl.string('description', 1024);

    tbl.boolean('completed').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
