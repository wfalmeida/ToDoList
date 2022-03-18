const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/delete/:id', TaskController.deleteTask)
router.get('/edit/:id', TaskController.updateTask)
router.post('/edit/:id', TaskController.updateTaskSave)
router.post('/updateStatus/:id', TaskController.toogleTaskStatus)
router.get('/', TaskController.showTasks)

module.exports = router