const router = require('express').router()
const likeController = require('../controller/LikeController')

router.get('/', likeController.getAllLike)
router.post('/', likeController.likeAPost)
router.delete('/', likeController.dislikeAPost)