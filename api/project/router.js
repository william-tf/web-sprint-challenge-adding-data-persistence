// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router()


// const forNpmTest = (req, res, next) => {
//     console.log(req.body.name)
//     if(!req.body.name){
//         res.error(400).json({message:'i hate npm test'})
//     }else{
//         next()
//     }
// }


router.get('/', (req, res) => {
    Project.getAll()
    .then(proj => {
        res.status(200).json(proj)
    })
    .catch(err => res.status(500).json({message:err.message}))
})
router.post('/', (req, res) => {
    console.log(req.body.name)
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