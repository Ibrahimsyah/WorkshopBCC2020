const db = require('../database');

exports.createPost = (req, res, next) => {
    const content = req.body.content
    db.query('insert into post values (?)', [content])
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