const express = require('express');

const db = require('../data/helpers/index.js');

const router = express.Router();

router.post('/', (req, res) => {
  const project = req.body;
  db.insertProject(project)
    .then(id => {
      if (id > 0) {
        res.status(201).json(id);
      } else {
        res
          .status(404)
          .json({ error: `Name and Completed are required. Try again.` });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
  db.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.getProject(id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ error: `No project found by supplied ID.` });
      }
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
