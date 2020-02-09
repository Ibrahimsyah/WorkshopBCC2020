const router = require('express').Router()
const likeController = require('../controller/LikeController')

// GET / get all Like
router.get('/', likeController.getAllLike)
// POST /:id like a post by id_post
router.post('/', likeController.likePost)
// DELETE /:id dislike a post
router.delete('/:id_post', likeController.dislikePost)

module.exports = router