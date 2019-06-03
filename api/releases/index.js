var express = require('express')
    
var  controller = require('./controller');

var router = express.Router();


/*
Varsha's API endpoints
*/
router.route('/users')
    .get(controller.getUser);

router.route('/login')
    .post(controller.login);

router.route('/register')
    .post(controller.register);

router.route('/notes')
    .get(controller.getToDoList);

router.route('/notes')
    .delete(controller.deleteFromList);

router.route('/notes')
    .post(controller.addToList);
/*
Varsha's API endpoints end

*/
module.exports = router;
