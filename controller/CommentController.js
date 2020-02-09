const db = require('../database')
module.exports = {
    getCommentForPost: async (req, res, next) => {
        const id_post = req.params.id_post
        const [rows] = await db.query('select * from comments where id_post = ?', [id_post])
        res.json({
            "success": true,
            "comments": rows
        })
    },
    postCommentOnPost: (req, res, next) => {
        const id_post = req.params.id_post
        const id_user = req.body.id_user
        const content = req.body.content
        db.query('insert into comments(id_post, id_user, content) values(?,?,?)',
            [id_post, id_user, content])
            .then(() => {
                res.json({
                    "success": true,
                    "message": "Comment posted"
                })
            }).catch((err) => {
                res.json({
                    "success": false,
                    "error": err
                })
            })
    },
    updateComment: (req, res, next) => {
        const id_comment = req.params.id_comment
        const content = req.body.content
        db.query('update comments set content = ? where id = ?',
            [content, id_comment])
            .then(() => {
                res.json({
                    "success": true,
                    "message": "Comment updated"
                })
            }).catch((err) => {
                res.json({
                    "success": false,
                    "error": err
                })
            })
    },
    deleteComment: (req, res, next) => {
        const id_comment = req.params.id_comment
        db.query('delete from comments where id = ?', [id_comment])
            .then(() => {
                res.json({
                    "success": true,
                    "message": "comments deleted"
                })
            }).catch((err) => {
                res.json({
                    "success": false,
                    "error": err
                })
            })
    }
}