const express =require('express')
const bodyParser =require('body-parser')
const cors =require('cors')
const morgan =require('morgan')

const app= express()
app.use(morgan('combined'))
app.use(bodyParser.json()) //alow our express ap to parse any json requrest that are sent in
app.use(cors())

app.post('/register',(req,res)=>{ //get request/respond
    res.send({
        message: `Hello ${req.body.email} 'User registered!`
    })


})

app.listen(process.env.port|| 8081)
