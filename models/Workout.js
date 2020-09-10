const { model, Schema } = require('mongoose')

const Workout = new Schema({
  day: {
    type: Date,
    default: Date.now
  }, 
  exercises: [{
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    distance: {
      type: Number
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    }
  }]
}, { timestamps: true })

module.exports = model('Workout', Workout)