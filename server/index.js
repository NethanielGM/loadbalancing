const express = require('express')
const address = require('address');
const cors = require('cors')
const app = express();
app.use(cors())

app.get('/', async (req, res) => {
    res.send({
        publicIp: address.ip(),
    })
})
app.listen(9090, () => console.log(`${address.ip()}/9090`));