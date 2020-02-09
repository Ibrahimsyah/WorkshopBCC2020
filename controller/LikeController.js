const db = require('../database')

module.exports = {
    getAllLike: async (req, res, next) => {
        const [rows] = await db.query('select * from likes')
        res.json({
            "success": true,
            "likes": rows
        })
    },
    likePost: (req, res, next) => {
        const id_post = req.body.id_post
        const id_user = req.body.id_user
        db.query('insert into likes(id_post, id_user) values(?,?)',
        [id_post, id_user])
            .then(() => {
                res.json({
                    "success": true,
                    "message": "post liked"
                })
            })
            .catch((err) => {
                next(err)
            })
    },
    dislikePost: (req, res, next) =>{
        const id_post = req.params.id_post
        db.query('delete from likes where id_post = ?', [id_post])
        .then(() => {
            res.json({
                "success": true,
                "message": "delete success"
            })
        })
        .catch((err) => {
            next(err)
        })
    }
}