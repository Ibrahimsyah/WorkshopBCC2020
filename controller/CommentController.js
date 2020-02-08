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