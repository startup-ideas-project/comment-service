
const express = require('express')
const cors = require('cors')
const {router} = require('./service/routers/route')

const corsOptions = {
    origin: '*'
}



const app = express()
app.use(express.json());
app.use(cors(corsOptions));
app.use('/comment', router);

// configs
const port = process.env.PORT || 4120

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})