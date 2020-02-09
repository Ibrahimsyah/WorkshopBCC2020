const db = require('../database')

const getAllUser = async (req, res, next) => {
    try {
        const [rows] = await db.query('select * from users')
        res.json({
            "success": true,
            "data": rows
        })
    } catch (err) {
        next(err)
    }
}

const registerUser = (req, res, next) => {
    const name = req.body.name
    db.query('insert into users(name) values(?)', [name])
        .then(() => {
            res.json({
                "success": true,
                "message": "Registered"
            })
        })
        .catch((err) => {
            next(err)
        })
}

const getUserById = async (req, res, next) => {
    const id = req.params.id
    const [rows] = await db.query('select * from user where id = ?',
        [id])
    if (rows.length > 0) {
        res.json({
            "success": true,
            "user": rows[0]
        })
    } else {
        res.status(404)
        const error = new Error("User Not Found")
        next(error)
    }
}

const updateUserName = (req, res, next) => {
    const id = req.params.id
    const newName = req.body.name
    db.query('update users set name = ? where id = ?', [newName, id])
        .then(() => {
            res.json({
                "success": true,
                "message": "Change name success"
            })
        })
        .catch(() => {
            res.status(404)
            const error = new Error("User Not Found")
            next(error)
        })
}

const deleteUser = (req, res, next) => {
    const id = req.params.id
    db.query('delete from users where id = ?', [id])
        .then(() => {
            res.json({
                "success": true,
                "message": "delete success"
            })
        })
        .catch(() => {
            res.status(404)
            const error = new Error("User Not Found")
            next(error)
        })
}

const userController = {
    getAllUser,
    registerUser,
    getUserById,
    updateUserName,
    deleteUser
}

module.exports = userController