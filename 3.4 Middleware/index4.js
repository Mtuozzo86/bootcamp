import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from 'body-parser'
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


let bandName = '' /*set the variable to empty, each time an input is created there should be an empty variable to be reassigned inside of the function*/
app.use(bodyParser.urlencoded({ extended: true }))



function myMiddle(req, res, next) {
  bandName = req.body.street + req.body.pet /* assign variable each time */
  console.log("myMiddle :", req.body);
  console.log("band name: ", bandName);
  next()
}

app.use(myMiddle)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit', (req, res) => {
  res.send(`<h1>Band Name Generator</h1> <p>${bandName}</p>`)
  console.log('post method: ', bandName)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
