const express = require('express')
const router = express.Router()
const ModelUsers = require('../models/users.models')

router.get('/all', (req, res) => {
    ModelUsers.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
        return data
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    ModelUsers.findById(id, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

router.post('/create', (req, res) => {
    const Userdata = req.body
    ModelUsers.create(Userdata, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    ModelUsers.findByIdAndDelete(id, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const Userdata = req.body
    ModelUsers.findByIdAndUpdate(id, Userdata, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

module.exports = router