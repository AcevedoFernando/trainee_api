const express = require('express').Router
const router = express()
const projectController = require('../controllers/projectController')

router.use('/projects', projectController)

module.exports = router