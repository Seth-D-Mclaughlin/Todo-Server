//let express = require('express');
const validateSession = require('../middleware/validate-session');
const Task = require('../db').import('../models/task');
const router = require('express').Router(); // CAMERON CHANGED THIS LINE TO INCLUDE THE ROUTER BEFORE EXPRESS **

//Practice route
// *****************************
router.get('/practice', function(req, res){
    res.send('Hey!! This is a practice route!')
})
// *****************************


// Get all Tasks
router.get("/", (req, res) =>{
    Task.findAll()
        .then(tasks => res.status(200).json(tasks))
        .catch(err => res.status(500).json({error : err}))
});


// Task Create
router.post('/create', validateSession, (req, res) =>{
    const taskEntry = {
        title: req.body.task.title,
        notes: req.body.task.notes,
        isImportant: req.body.task.isImportant,
        isComplete: req.body.task.isComplete,
        date: req.body.task.date,
        owner: req.user.id
    }
    Task.create(taskEntry)
    .then(task => res.status(200).json(task))
    .catch(err => res.status(500).json({error: err}))
})


// Get tasks by User
router.get("/mine", validateSession, (req, res)=>{
    let userid = req.user.id
    Task.findAll({
        where: {owner: userid}
    })
        .then(tasks => res.status(200).json(tasks))
        .catch(err => res.status(500).json({error : err}))
})

// Get Entries by Title
router.get('/:title', function(req,res){
    Task.findOne({
        where: {title: req.params.title}
    })
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({error: err}))
});

//! Update by ID
router.put('/:id',(req, res)=>{
    Task.update(req.body, {where: {id:req.params.id}})
    .then(task => res.status(200).json(task))
    .catch(err => res.status(500).json({error: err}))
})

//! Delete
router.delete('/:id', (req, res) =>{
    Task.destroy({
        where: {id: req.params.id}
    })
    .then(task => res.status(200).json(task))
    .catch(err => res.status(500).json({error: err}))
})
module.exports = router