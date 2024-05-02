import express from 'express'
import { join } from 'path'

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.static(join(__dirname, 'public')))
app.use(express.static(join(__dirname, 'pages')))

function getRoute(file: string) {
    return join(__dirname, 'pages', file)
}

app.get("/", (req, res) => {
    res.sendFile(getRoute('index.html'))
})

//write code here


app.listen(3000, () => {
    console.log(`Server running on port 3000`)
})