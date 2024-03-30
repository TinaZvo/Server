//the first code imports Express in the file. 
const express = require('express')
const app = express()
const port = 3000
// app.get function lets you define a route handler for GET requests to a given URL.
app.get('/', (req, res) => {
  //Takes an object as input and it sends this to the requesting client.
    res.send('Hello World!')
}) 
//Binds and listens for connections on the specified host and port. 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})