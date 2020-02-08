const router = require('express').Router()
const userRouter = require('./UserRouter')

router.get('/', (req, res) => {
    res.send('BCC In Glory')
})

router.use('/user', userRouter)

module.exports = router

