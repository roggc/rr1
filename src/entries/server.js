process.env.NODE_ENV !== 'production' && console.log('src/entries/server')
import express from 'express'
import fs from 'fs'
import path from 'path'
const render= (req,res,next)=>fs.readFile(path.resolve('./out/client/index.html'),'utf8',(err, data)=>res.send(data))
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('out/client'))
app.listen(port)
console.log(`listening on localhost:${port} ...`)
