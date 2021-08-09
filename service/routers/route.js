const express = require('express')
const router = express.Router()

// import services
const {commentService} = require('../comment-service')

// public route
router.get('/health', (req,res) => res.sendStatus(200))

// authe route
router.post('/', commentService.createCommentService)
router.get('/', commentService.getAllCommentService)
router.get('/:documentID', commentService.getCommentService)
router.post('/:commentID', commentService.addReviewrs)
router.get('/comment-reviewers/:commentID', commentService.getReviewers)

module.exports = {
    router
}