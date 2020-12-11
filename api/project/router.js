// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.body)
    Project.getAll()
    .then(proj => {
        res.status(200).json(proj)
    })
    .catch(err => res.status(500).json({message:err.message}))
})
router.post('/', (req, res) => {
    Project.create(req.body)
    .then(proj => {
        if(proj){

            res.status(201).json(req.body)
        }else{
            res.status(400).json({message:'test'})
        }
    })
    .catch(err => res.status(500).json({message:err.message}))
})

module.exports = router