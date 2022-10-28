require('dotenv').config()

const express = require('express')

const app = express()
const port = process.env.SERVER_PORT

app.listen(port, () => console.log(`Notre appli est accessible à l'URL :  http://localhost:${port}`))

app.get("/", (req, res) => {
  res.send(`I am ${process.env.MY_NAME}, wilder in ${process.env.CITY}, and I love ${process.env.MY_LANGAGE}`)
  console.log(req.params);
})