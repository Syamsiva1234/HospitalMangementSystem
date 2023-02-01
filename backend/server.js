const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const faker = require('faker')

const fs = require("fs")
var cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

dotenv.config({ path: './config.env' })
require('./db/conn')
const User = require('./model/userSchema')

app.post('/patients', (req, res) => {
    const { username, email, contact, id } = req.body
    const about = faker.lorem.paragraph(12)
    const milestone = faker.lorem.paragraph(9)
    const devices = faker.lorem.paragraph(11)
    const intimations = faker.lorem.paragraph(9)
    const abstract = faker.lorem.paragraph(12)
    if (!username || !email || !contact || !id) {
        return res.status(422).json({ error: "please fill all the fields!!" })
    }
    const user = new User({ username, email, contact, id, about, milestone, devices, intimations, abstract })
    user.save()
        .then(() => { res.status(201).json({ message: "Data saved into DB successfully.!" }) })
        .catch((err) => { res.status(500).json({ error: "failed registration" }) })
})

app.use(require('./router/auth'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server Running at port no ${PORT}`)
})

