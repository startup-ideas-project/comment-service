
const express = require('express')
const cors = require('cors')

// import services
const {commentService} = require('./service/comment-service')

const corsOptions = {
    origin: '*'
}



const app = express()
app.use(express.json());
app.use(cors(corsOptions))

// configs
const port = process.env.PORT || 4120

app.post('/comment', commentService)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})