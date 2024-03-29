const {Router} = require('express')
const router = Router()
const { check } = require('express-validator')
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos')
const { validaJWT } = require('../middlewares/validar-jwt')

router.post(
    '/new',
    [
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de ser 6 caracteres').isLength({min:6}),
        validarCampos

    ],
    crearUsuario)

router.post(
    '/',
    [
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de ser 6 caracteres').isLength({min:6}),
        validarCampos
        
    ],
    loginUsuario)

router.get('/renew',validaJWT,revalidarToken)

module.exports = router