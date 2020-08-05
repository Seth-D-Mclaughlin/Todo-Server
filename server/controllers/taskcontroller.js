let express = require('express');
let router = express.Router();

//Practice route
// *****************************
router.get('/practice', function(req, res){
    res.send('Hey!! This is a practice route!')
})
// *****************************

module.exports = router