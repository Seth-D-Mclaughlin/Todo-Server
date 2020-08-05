let express = require('express');
let app = express();

let sequelize = require('./db');

let task = require('./controllers/taskcontroller')

sequelize.sync()
//sequelize.sync({force: true})
app.use('/task', task);

app.listen(3001, function(){
    console.log('App is running on port 3001');
})