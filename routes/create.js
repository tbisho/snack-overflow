const express = require('express')
const router = express.Router()


router.get('/snackadd', (req, res) => {
    res.render('/snackadd')
})