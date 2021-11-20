const {
  extract
} = require('article-parser')

const url = 'https://goo.gl/MV8Tkh'

extract(url).then((article) => {
  console.log(article.content)
}).catch((err) => {
  console.log(err)
})

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/website/:page', (req, res) => {
  res.send(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})