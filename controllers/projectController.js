const express = require('express').Router
const router = express()
const ProjectRequest = require('../middlewares/ProjectRequest')
const validator = require('../middlewares/validator')
const Project = require('./../models/project')

// Methods
function index(req, res, next) {
    res.send('index')
}

const store = async (req, res, next) => {
    
    let {
        name,
        price,
        delivery_at,
        machine,
        cost,
        type
    } =  req.body
    let status = 1;
    let createdAt = new Date();
    let updatedAt = new Date();

    Project.create({
        name: name,
        price: price,
        delivery_at: delivery_at,
        machine: machine,
        cost: cost,
        type: type,
        status: status,
        updatedAt: updatedAt,
        createdAt: createdAt
    })
    .then(response => {
        res.json('ok')
    }).catch(err => {
        next(new Error(err.message))
    })
    
}

function show(req, res, next) {
    res.send(`show ${req.params.id}`)
}

function update(req, res, next) {
    res.send(`update ${req.params.id}`)
}

function destroy(req, res, next) {
    res.send(`destroy ${req.params.id}`)
}

router.get('/', index)
    .post('/', validator(ProjectRequest), store)
    .get('/:id', show)
    .put('/:id', validator(ProjectRequest), update)
    .delete('/:id', destroy)
    

module.exports = router



