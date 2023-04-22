const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require('express-validator')

router.post('/registration',
[check('username', "Имя пользователя не может быть пустым").isEmpty(),
check('password', "Пароль должен содержать более 4 и меньше 15 символов").isLength({min: 4, max: 15})]
, controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router