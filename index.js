const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const session = require('express-session');

const { mongoose } = require('./db')

const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use(cors())
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

//Routes
app.use('/api/v1/users', require('./routes/user'))
app.use('/api/v1/types', require('./routes/user_type'))
app.use('/api/v1/tickets', require('./routes/ticket'))
app.use('/api/v1/auth', require('./routes/session'));
app.use('/api/v1/', require('./routes/index'));

//Static files


//Starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`);
})