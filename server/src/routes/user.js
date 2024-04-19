const {Router} = require('express')
const router = Router()

const { createUser, getUsers, loginSession, deleteUser, updateUser} = require('../controllers/user.controller')

router.route('/')
    .get(getUsers)

router.route('/register')
    .post(createUser)

router.route('/authenticate')
    .post(loginSession)

router.route('/removeUser/:id')
    .delete(deleteUser)

router.route('/updateUser/:id')
    .put(updateUser) 

module.exports = router;