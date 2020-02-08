const db = require('../database');

exports.getAllLike = async (req, res, next) => {
    try {
        const [rows] = await db.query('select * from like')
        res.json({
            "success": true,
            "data": rows
        })
    } catch (err) {
        next(err)
    }
}