const { response } = require('express');
const express = require('express')

const router = express.Router();
// const data = require('../Database/db.json')
require('../db/conn')
const User = require('../model/userSchema')

router.get('/patients/:id', (req, res) => {
    User.find({ id: req.params.id })
        .then((result) => {
            res.json(result)
        })
        .catch((error) => { response.json({ error: "Error Fetching Data fora Single Patient." }) })
})

router.get('/patients', (req, res) => {
    User.find()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => { response.json({ error: "Error Fetching Data." }) })
})


module.exports = router