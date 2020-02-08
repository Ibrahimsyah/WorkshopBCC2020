const router = require('express').Router();
const postController = require('../controller/PostController');

router.get('/:id', postController.getPostById)
router.post('/', postController.createPost)
router.put('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)

module.exports = router