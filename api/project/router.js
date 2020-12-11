// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router()
const boolean = 0
const transBoolean = boolean ? true:false

// const forNpmTest = (req, res, next) => {
//     console.log(req.body.name)
//     if(!req.body.name){
//         res.error(400).json({message:'i hate npm test'})
//     }else{
//         next()
//     }
// }


const makeBoolean = (req, res, next) =>{
    if(req.body.completed == boolean){
        req.body.completed = transBoolean
        console.log(req.body.completed)
        next()
    }

}

router.get('/', (req, res) => {
        Project.getAll()
        .then(pro => {
        pro.forEach(project => {
            const bool = project.completed
            const newBool = bool ? true:false
            project.completed = newBool
        })
        res.status(200).json(pro)
        })
        .catch(err => res.status(500).json({message:err.message}))
})


router.post('/', (req, res) => {
    console.log(req.body.name)
    Project.create(req.body)
    .then(proj => {
        if(proj){
            const bool = req.body.completed
            const newBool = bool ? true:false
            req.body.completed = newBool
            res.status(201).json(req.body)
        }else{
            res.status(400).json({message:'no project wow'})
        }
    })
    .catch(err => res.status(500).json({message:err.message}))
})

module.exports = router


    // router.get("/:id", (req, res) => {
    //     const id = req.params.id;
    //     Project.getById(id)
    //       .then((resp) => {
    //           res.status(200).json(resp);
    //           console.log(resp.completed)
    //       })
    //       .catch((err) => {
    //         res.status(500).json({ Error: err.message });
            
    //     });
    // })
    // router.get('/', async (req, res) => {
    //     try{
            
    //             const data = await Project.getAll()
    //             console.log(data.id)
    //             res.status(200).json(data)
          
            
    //     } catch(err){
    //         res.status(500).json({message: err.message})
    //     }
    // })