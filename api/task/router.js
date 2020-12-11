// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const router = express.Router()



const forNpmTest = (req, res, next) => {
    if(!req.body.description){
        res.error(400).json({message:'i hate npm test'})
    }else{
        next()
    }
}

router.get('/', (req, res) => {
    console.log(req.body)
    Task.getAll()
    .then(task => {
        task.forEach(tas => {
            const bool = tas.completed
            const newBool = bool ? true:false
            tas.completed = newBool
        })
        res.status(200).json(task)
        })
    .catch(err => res.status(500).json({message:err.message}))
})
router.post('/', forNpmTest, (req, res) => {
    Task.create(req.body)
    .then(task => {
        if(task){
            const boolean = req.body.completed
             const transBoolean = boolean ? true:false
            req.body.completed = transBoolean
            res.status(201).json(req.body)
        }
        else{
            res.status(400).json({message:'no task!!'})  
        }
    })
    .catch(err => res.status(500).json({message:err.message}))
})





module.exports = router