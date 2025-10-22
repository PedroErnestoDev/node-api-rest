import ArticleRoutes from './Routes/ArticleRoutes.js'
import express from 'express'

const app = express()
app.use(express.json())

app.use("/articles", ArticleRoutes)

const PORT = 3000


app.listen(PORT, () =>{
    console.log("Server on")
})