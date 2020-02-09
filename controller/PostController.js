const db = require('../database')
module.exports = {
    getPostById: async (req, res, next) => {
        const id_post = req.params.id_post
        const [rows] = await db.query('select * from posts where id = ?', [id_post])
        if (rows.length != 0) {
            res.json({
                "success": true,
                "user": rows[0]
            })
        } else {
            res.status(404)
            res.json({
                "success": false,
                "message": "post not found"
            })
        }
    },
    postPost: (req, res, next) => {
        const id_user = req.user.id_user
        const content = req.body.content
        db.query('insert into posts(id_user, content) values(?,?)',
            [id_user, content])
            .then(() => {
                res.json({
                    "success": true,
                    "message": "post created"
                })
            })
            .catch((err) => {
                res.json({
                    "success": false,
                    "error": err
                })
            })
    },
    updatePost: (req, res, next) => {
        const id_post = req.params.id_post
        const content = req.body.content
        db.query('update posts set content = ? where id = ?', [content, id_post])
            .then(() => {
                res.json({
                    "success": true,
                    "message": "post update"
                })
            })
            .catch((err) => {
                res.json({
                    "success": false,
                    "error": err
                })
            })
    },
    deletePostById: (req, res, next) => {
        const id_post = req.params.id_post
        const id_user = req.user.id_user
        db.query('delete from posts where id = ? and id_user = ?', [id_post, id_user])
            .then((results) => {
                if(results.affectedRows == 0){
                    res.status(404)
                    res.json({
                        "success" : false,
                        "message" : "Post Not Found"
                    })
                }else{
                    res.json({
                        "success" : true,
                        "message" : "Post Deleted"
                    })
                }
            })
            .catch((err) => {
                res.json({
                    "success": false,
                    "error": err
                })
            })
    }
}