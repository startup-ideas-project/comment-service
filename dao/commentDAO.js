const {pool} = require('./db-configs')


const createComment = async ({
    commentID,
    creatorID,
    startIndex,
    endingIndex,
    documentID,
    createdAt
}) => {
    const text = 'INSERT INTO comments(commentID, creatorID, startIndex, endingIndex, documentID, createdAt) VALUES ($1, $2, $3, $4, $5, $6)'
    const values = [commentID, creatorID, startIndex, endingIndex, documentID, createdAt] 
    return executeRequest(pool, text, values)
}

const getCommentByDocId = async (documentID) => {
    const text = `SELECT * FROM comments WHERE documentID IN ($1)`
    const values = [documentID]
    return executeRequest(pool, text,values)
}

const executeRequest = async (pool, text, values) => {
    return pool.query(text, values).then(data => data)
}
const CommentDAO = {
    createComment,
    getCommentByDocId
}

module.exports = {
    CommentDAO
}