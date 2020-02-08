const router = require('express').Router();
const commentController = require('../controller/CommentController');

router.get('/:id', commentController.getPostComment)
router.post('/', commentController.postComment)
router.put('/:id', commentController.updateComment)
router.delete('/:id', commentController.deleteComment)

module.exports = router