//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import { dirname } from "path";
import { fileURLToPath } from "url";
import express from 'express'
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000

app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post('/check', (req, res) => {
    let pass = req.body.password
    console.log(pass)
    if (pass === "ILoveProgramming") {
        res.sendFile(__dirname + "/public/secret.html")
    } else {
        res.send("<h1>Wrong!</h1>")
    }
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})