import Express from 'express'
import dotenv from 'dotenv'
import db from './db/db.js'
import route from './route/route.js'
import cors from 'cors'
const app=Express()
dotenv.config()
app.use(cors())
app.use(Express.json())

db()
// const port=4100

app.use('/api/vi',route)
// // app.get('/',(req,res)=>{
// //     res.send('success')
// // })


app.listen(process.env.PORT,()=>{
    console.log(`port is ${process.env.PORT}`)
})


// app.listen(port,()=>{
//     console.log(`port is ${port}`)
// })