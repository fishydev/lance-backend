var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')

const usersRouter = require('./routes/users.route')
const loginRouter = require('./routes/login.route')
const jobRouter = require('./routes/jobs.route')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Mongoose connection setup
let dev_db_url = 'mongodb+srv://lance:Jg!L4NC3@cluster0-l7hqg.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = dev_db_url;
// mongoose.connect(mongoDB);

try {
    mongoose.connect(dev_db_url)
    console.log("connected to MongoDB")
} catch (err) {
    console.log(err.message)
    process.exit(1)
}

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res) => {
    res.json({ msg: 'Express' })
})

app.use('/users', usersRouter)
app.use('/login', loginRouter)
app.use('/jobs', jobRouter)

var port = process.env.port || 5000

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;