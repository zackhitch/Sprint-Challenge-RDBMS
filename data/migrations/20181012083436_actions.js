exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
    tbl.increments();

    tbl.string('description', 1024).notNullable();

    tbl.string('notes', 2048);

    tbl.boolean('completed').notNullable();

    tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
