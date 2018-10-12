const knex = require('knex');

const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  insertProject(project) {
    return db('projects')
      .insert(project)
      .into('projects');
  },

  insertAction(action) {
    return db('actions')
      .insert(action)
      .into('actions');
  },

  get() {
    return db('projects');
  },

  async getProject(id) {
    try {
      const projects = await db('projects')
        .where({ id })
        .first();
      const actions = await db('actions').where({ project_id: id });
      projects.actions = actions;
      return projects;
    } catch (error) {
      console.log(error);
    }
  },
};
