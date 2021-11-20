const {
  extract
} = require('article-parser')

const url = 'https://goo.gl/MV8Tkh'



const express = require('express')
const app = express()
const port = 3000

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/website/:page', (req, res) => {

	console.log(decodeURIComponent(req.params.page))

	var decodedURL = decodeURIComponent(req.params.page)
	extract(decodedURL).then((article) => {
	  res.send(article.content)
	}).catch((err) => {
	  console.log(err)
	})



	// res.send(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})