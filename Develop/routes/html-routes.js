const router = require("express").Router();
// Dependencies
const path = require('path');

// Routes
  // Each of the below routes just handles the HTML page that the user gets sent to.

  router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });

  // blog route loads exercise.html
  router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

  // If no matching route is found default to home
  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


  module.exports = router;