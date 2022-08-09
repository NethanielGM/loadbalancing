const express = require('express')
const address = require('address');
const cors = require('cors')
const app = express();
app.use(cors())

app.get('/', async (req, res) => {
    res.send({
        publicIp: address.ip(),
        url: req.url
    })
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app listening on http://localhost:${port}`));