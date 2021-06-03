const express = require('express').Router
const router = express()

// Methods
function index(req, res, next) {
    res.send('index')
}

function store(req, res, next) {
    res.send(`store: ${req.body.name}`)
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
    .post('/', store)
    .get('/:id', show)
    .put('/:id', update)
    .delete('/:id', destroy)
    

module.exports = router



