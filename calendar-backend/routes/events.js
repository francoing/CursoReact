const {Router} = require('express')
const { validaJWT } = require('../middlewares/validar-jwt')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { isDate } = require('../helpers/isDate')
router = Router()
router.use(validaJWT)

// Obtener Eventos
router.get('/',getEventos)

// Crear un nuevo evento
router.post('/',[
    check('title','El titulo tiene que ser obligatorio').not().isEmpty(),
    check('start','Fecha de Inicio es obligatoria').custom(isDate),
    check('end','Fecha de Finalizacion es obligatoria').custom(isDate),
    validarCampos

],crearEvento)

// Actualizar Evento
router.put('/:id',
    check('title','El titulo tiene que ser obligatorio').not().isEmpty(),
    check('start','Fecha de Inicio es obligatoria').custom(isDate),
    check('end','Fecha de Finalizacion es obligatoria').custom(isDate),
    validarCampos,
    actualizarEvento)

// Borrar evento
router.delete('/:id', eliminarEvento)

module.exports = router