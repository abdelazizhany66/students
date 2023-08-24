const { Router } = require('express')
const studentController = require('./studentsController')

const router = Router()

router.get('/',studentController.getStudents)
router.get('/:id',studentController.getOneStudent)
router.post('/',studentController.createStudent)
router.put('/:id',studentController.updateStudent)
router.delete('/:id',studentController.deleteStudent)

module.exports = router