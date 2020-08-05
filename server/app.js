let express = require('express');
let app = express();
let sequelize = require('./db');


let user = require('./controllers/usercontroller')
let task = require('./controllers/taskcontroller')

sequelize.sync()
// sequelize.sync({force: true})
app.use(express.json()); 

app.use('/task', task);
app.use('/user', user);

app.listen(3001, function(){
    console.log('App is running on port 3001');
})