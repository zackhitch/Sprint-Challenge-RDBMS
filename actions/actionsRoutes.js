const express = require('express');

const db = require('../data/helpers/index.js');

const router = express.Router();

router.post('/', (req, res) => {
  const action = req.body;
  db.insertAction(action)
    .then(id => {
      if (id > 0) {
        res.status(201).json(id);
      } else {
        res
          .status(404)
          .json({
            error: `Description, ProjectID, and Completed are required. Try again.`,
          });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
