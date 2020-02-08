const db = require('../database');

exports.getAllLike = async (req, res, next) => {
    try {
        const [rows] = await db.query('select * from `like`')
        res.json({
            "success": true,
            "data": rows
        })
    } catch (err) {
        next(err)
    }
}


exports.likeAPost = (req, res, next) => {
    const userId = req.body.user_id
    const postId = req.body.post_id
    db.query('insert into `like`(id_post, id_user) values(?,?)', [postId, userId])
        .then(() => {
            res.json({
                "success": true,
                "message": "Post Liked"
            })
        })
        .catch((err) => {
            next(err)
        })
}


exports.dislikeAPost = (req, res, next) => {
    const userId = req.body.user_id
    const postId = req.body.post_id

    db.query('delete from `like` where id_post = ? and id_user = ?', [postId, userId])
        .then(() => {
            res.json({
                "success": true,
                "message": "Post dislike"
            })
        })
        .catch((err) => {
            next(err)
        })
}