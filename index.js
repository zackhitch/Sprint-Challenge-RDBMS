const express = require('express');
const helmet = require('helmet');

const projectsRoutes = require('./projects/projectsRoutes.js');
const actionsRoutes = require('./actions/actionsRoutes.js');

const server = express();

const port = 9070;

server.use(helmet(), express.json());

server.use('/api/projects', projectsRoutes);
server.use('/api/actions', actionsRoutes);

server.listen(port, () =>
  console.log(`\n=== API running on port: ${port} ===\n`)
);
