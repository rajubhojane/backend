const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("RajuBhojane")
})
app.get('/login',(req,res)=>{
    res.send('<h1> Please Login at chai aur code</h>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

