const router = require("express").Router();
// const db = require("../models/workouts.js");
const { Workout } = require("../models/workouts.js");

router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body)
  Workout.findOneAndUpdate({_id: req.params.id}, { $push: { exercises: req.body } }, { new: true })
  .then((dbWorkout) => res.json(dbWorkout));
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    // .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/workouts", (req, res) => {
  Workout.find({})
    // .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
