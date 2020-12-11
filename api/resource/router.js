// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')
const router = express.Router()

router.get('/', (req, res) => {

    Resource.getAll()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => res.status(500).json({message:err.message}))
})
router.post('/', (req, res) => {
    console.log(req.body)
    Resource.create(req.body)
    .then(resource => {
        if(resource){
            res.status(201).json(req.body)
        } else{
            res.status(404).json({message:'no resource dang'})
        }
    })
    .catch(err => res.status(500).json({message:err.message}))
})

module.exports = router