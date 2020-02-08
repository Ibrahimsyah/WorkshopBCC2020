const db = require('../database');

exports.getPostComment = async (req, res, next) => {
    try {
        const id = req.params.id
        const comments = await db.query('select * from comment where id_post = ?', [id])

        res.json({
            success: true,
            data: comments
        })
    } catch (err) {
        next(err)
    }
}


exports.postComment = (req, res, next) => {
    const user_id = req.body.user_id
    const post_id = req.body.post_id
    const content = req.body.content

    db.query('insert into comment(id_post, id_user, content) values (?,?,?)', [post_id, user_id, content])
        .then(() => {
            res.json({
                success: true,
                message: "comment posted",
                data: content
            })
        })
        .catch((err) => {
            next(err)
        })
}


exports.updateComment = (req, res, next) => {
    const id = req.params.id
    const newComment = req.body.comment

    db.query('update comment set content = ? where id = ?', [newComment, id])
        .then(() => {
            res.json({
                success: true,
                message: "comment updated"
            })
        })
        .catch((err) => {
            next(err)
        })
}

exports.deleteComment