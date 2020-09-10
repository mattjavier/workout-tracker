const router = require('express').Router()
const { Workout } = require('../models')

// GET all workouts
router.get('/workouts', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

router.get('/workouts/range', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

// POST new workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

// PUT exercise to workout exercises
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

module.exports = router