const router = require('express').Router()
const postController = require('../controller/PostController')
const { checkToken } = require('../middleware/')

// GET /: id    get post by id
router.get('/:id_post', postController.getPostById)
// POST / post a post
router.post('/', checkToken,postController.postPost)
// PUT /: id    update a post by id
router.put('/:id_post', postController.updatePost)
// DELETE /:id Delete a post by id
router.delete('/:id_post', checkToken, postController.deletePostById)

module.exports = router