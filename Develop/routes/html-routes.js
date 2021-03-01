const router = require("express").Router();
// Dependencies
const path = require('path');

// Routes
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
//   router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/blog.html'));
//   });

  router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });

  // blog route loads blog.html
  router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

  module.exports = router;