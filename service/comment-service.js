const {CommentDAO} = require('../dao/commentDAO')
const { v4: uuidv4 } = require('uuid');
const moment = require('moment')

const generateCommentInputs = (body) => {
    body.commentID = uuidv4()
    body.createdAt = moment().format()
    return body
}
const commentService = async (req, res) => {
    const comment = generateCommentInputs(req.body)
    CommentDAO.createComment(comment).then(_ => res.sendStatus(200))
}

module.exports = {
    commentService
} 