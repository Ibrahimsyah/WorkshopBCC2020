const router = require('express').Router()

const user = ["User1", "User2", "User3"]

router.get('/', (req, res) => {
    if (user.length > 0) {
        res.status(200)
        res.json({
            "success": true,
            "users": user
        })
    }else{
        res.status(404)
        res.json({
            "success" : false,
            "message" : "user not found"
        })
    }
})

router.get('/:id', (req, res)=>{
    const index = req.params.id
    res.json({
        "success" : true,
        "user" : user[index]
    }).status(200)
})

router.post('/', (req, res)=>{
    const userBaru = req.body.user
    user.push(userBaru)
    res.json({
        "success" : true,
    })
})

router.put('/:id', (req, res)=>{
    const index = req.params.id
    const dataBaru = req.body.user
    user[index] = dataBaru
    res.json({
        "success" : true,
    })
})

module.exports = router