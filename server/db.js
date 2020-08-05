const Sequelize = require('sequelize');
const sequelize = new Sequelize('Todo-list', 'postgres', 'skywalker',{
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function(){
        console.log('Connected to Todo-list postgres database');
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize;
