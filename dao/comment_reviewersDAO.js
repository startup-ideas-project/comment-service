const {pool} = require('./db-configs')


const createAddition = async ({
    additionID,
    documentID,
    reviewerID,
    reviewerEmail
}) => {
    const text = 'INSERT INTO comment_reviewers(additionID, documentid, reviewerID, reviewerEmail) VALUES ($1, $2, $3, $4)'
    const values = [additionID, documentID, reviewerID, reviewerEmail] 
    return executeRequest(pool, text, values)
}

const getReviewsByCommentID = async (commentID) => {
    const text = `SELECT * FROM comment_reviewers WHERE commentID IN ($1)`
    const values = [commentID]
    return executeRequest(pool, text,values)
}

const executeRequest = async (pool, text, values) => {
    return pool.query(text, values).then(data => data)
}
const CommentReviewerDAO = {
    createAddition,
    getReviewsByCommentID
}

module.exports = {
    CommentReviewerDAO
}