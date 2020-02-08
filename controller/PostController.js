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