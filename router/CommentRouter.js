const router = require('express').Router()
const commentController = require('../controller/CommentController')

// GET /: id    get comment for a post by id_post
router.get('/:id_post', commentController.getCommentForPost)

router.post('/:id_post', commentController.postCommentOnPost)
// PUT /: id    update comment by id
router.put('/:id_comment', commentController.updateComment)
// DELETE /: id delete comment by id
router.delete('/:id_comment', commentController.deleteComment)

module.exports = router