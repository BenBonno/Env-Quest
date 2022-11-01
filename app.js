require('dotenv').config()

const express = require('express')

const app = express()
const port = process.env.SERVER_PORT

const name = process.env.MY_NAME
const city = process.env.MY_CITY
const langage = process.env.MY_LANGUAGE


app.listen(port, () => console.log(`Notre appli est accessible à l'URL :  http://localhost:${port}`))

app.get("/", (req, res) => {
  res.send(`I am ${name}, wilder in ${city}, and I love ${langage}`)
  console.log(`I am ${name}, wilder in ${city}, and I love ${langage}`);
})