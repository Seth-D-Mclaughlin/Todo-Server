require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');
let bcrypt = require('bcryptjs');

let user = require('./controllers/usercontroller')
let task = require('./controllers/taskcontroller')

sequelize.sync()
// sequelize.sync({force: true})
app.use(express.json()); 

// Exposed Route
app.use('/user', user);

// Protected route

app.use('/task', task);

app.listen(3001, function(){
    console.log('App is running on port 3001');
})