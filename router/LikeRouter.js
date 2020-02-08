const router = require('express').Router()
const likeController = require('../controller/LikeController')

router.get('/', likeController.getAllLike)
router.post('/', likeController.likeAPost)
router.delete('/', likeController.dislikeAPost)

module.exports = router