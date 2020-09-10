module.exports = require('mongoose').connect('mongodb://localhost/workouts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})