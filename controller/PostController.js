const db = require('../database');

exports.createPost = (req, res, next) => {
    const content = req.body.content
    const userId = req.body.id_user
    db.query('insert into post(content, id_user) values (?,?)', [content, userId])
        .then(() => {
            res.json({
                "success": true,
                "message": "Post Create"
            })
        })
        .catch((err) => {
            next(err)
        })
}


exports.getPostById = async (req, res, next) => {
    try {
        const id = req.params.id
        const [posts] = await db.query('select * from post where id = ?', [id])
        res.json({
            success: true,
            data: posts
        })
    } catch (err) {
        next(err)
    }
}