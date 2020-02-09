require('dotenv').config()
const db = require('../database')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY

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

const registerUser = async (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const isEmail = validator.isEmail(email)
    if (isEmail) {
        const [rows] = await db.query('select * from users where email = ? limit 1',
            [email])
        if (rows.length == 0) {
            const password = req.body.password
            const hashedPassword = await bcrypt.hash(password, 11)
            db.query('insert into users(name, email, password) values(?,?,?)',
                [name, email, hashedPassword])
                .then(()=>{
                    res.json({
                        "success" :true,
                        "message" : "Register success!"
                    })
                })
                .catch((err)=>{
                    res.status(500)
                    res.json({
                        "success" : false,
                        "error" : err
                    })
                })
    }
        else {
            res.status(409)
            const error = new Error("Email already registered")
            next(error)
        }
    }else{
        res.status(409)
            const error = new Error("Your email is incorrect")
            next(error)
    }

}

const loginUser = async (req, res, next) =>{
    const email = req.body.email
    const [rows] = await db.query('select * from users where email = ?',
    [email])
    if(rows.length != 0){
        const user = rows[0]
        const password = req.body.password
        bcrypt.compare(password, user.password)
        .then(async()=>{
            const payload = {
                "id_user" : user.id,
                "email" : user.email
            }
            const token = await jwt.sign(payload, JWT_KEY)
            if(token){
                res.json({
                    "success" : true,
                    "token" : token
                })
            }else{
                const error = new Error("JWT Error, cant create token")
                next(error)
            }
        })
        .catch(()=>{
            const error = new Error("Wrong password")
            next(error)
        })
    }else{
        const error = new Error("U seems not registered yet")
        next(error)
    }
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
    deleteUser,
    loginUser
}

module.exports = userController