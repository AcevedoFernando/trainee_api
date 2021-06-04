const express = require('express').Router
const router = express()
const ProjectRequest = require('../middlewares/ProjectRequest')
const validator = require('../middlewares/validator')
const Project = require('./../models/project')

// Methods
const index = (req, res, next) => {
    Project.findAndCountAll({
        attributes: ['id', 'name', 'price', 'status', 'delivery_at']
    }).then(response => {
        console.log(response)
        res.json(response)
    }).catch(err => {
        next(new Error(err.message))
    })
}

const store = (req, res, next) => {

    let {
        name,
        price,
        delivery_at,
        machine,
        cost,
        type,
        description
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
        desription: description,
        updatedAt: updatedAt,
        createdAt: createdAt
    })
    .then(response => {
        res.json(response)
    }).catch(err => {
        next(new Error(err.message))
    })

}

const show = (req, res, next) => {
    Project.findByPk(req.params.id)
        .then(response => {
            res.json(response)
        }).catch(err => {
            next(new Error(err.message))
        })
}

const update = (req, res, next) => {

    let {
        name,
        price,
        delivery_at,
        machine,
        cost,
        type,
        description
    } =  req.body
    let updatedAt = new Date();
    let id = req.params.id

    Project.update({
        name: name,
        price: price,
        delivery_at: delivery_at,
        machine: machine,
        cost: cost,
        type: type,
        description: description,
        updatedAt: updatedAt,
    }, {
        where: {
            id: id
        }
    })
    .then(response => {
        res.json(response)
    }).catch(err => {
        next(new Error(err.message))
    })

}

const destroy = (req, res, next) => {
    let id = req.params.id
    Project.destroy({
    where: {
            id: id
        }
    }).then(response => {
        res.json(response)
    }).catch(err => {
        next(new Error(err.message))
    })
}

router.get('/', index)
    .post('/', validator(ProjectRequest), store)
    .get('/:id', show)
    .put('/:id', validator(ProjectRequest), update)
    .delete('/:id', destroy)
    

module.exports = router



