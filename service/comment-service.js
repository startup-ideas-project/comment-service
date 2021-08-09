const {CommentDAO} = require('../dao/commentDAO')
const {CommentReviewerDAO} = require('../dao/comment_reviewersDAO')
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

const generateCommentInputs = (body) => {
    body.commentID = uuidv4()
    body.createdAt = moment().format()
    return body
}
const createCommentService = async (req, res) => {
    const comment = generateCommentInputs(req.body)
    CommentDAO.createComment(comment).then(_ => res.sendStatus(200))
}

const getCommentService = async (req,res) => {
    const documentID = req.params.documentID
    CommentDAO.getCommentByDocId(documentID).then( data => res.send(JSON.stringify(data.rows)))
}

const getAllCommentService = async (req, res) => {
    CommentDAO.getAllComments().then( data => res.send(JSON.stringify(data.rows)))
}


// Comment Review table
const addReviewrs = async(req, res) => {
    const additionInfo = req.body.additionInfo
    additionInfo.additionID = uuidv4()
    CommentReviewerDAO.createAddition(additionInfo).then(_ => res.sendStatus(200))
}

const getReviewers = async (req, res) => {
    const commentID = req.params.commentID
    CommentReviewerDAO.getReviewsByCommentID(commentID).then(data => {
        res.send(JSON.stringify(data.rows))
    })
}
// ========================================

const commentService = {
    createCommentService,
    getCommentService,
    getAllCommentService,
    addReviewrs,
    getReviewers
}

module.exports = {
    commentService
} 