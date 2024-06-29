import express from "express";

const app = express();
const port = 3000;

app.use(logger);

function logger(req, resp, next) {
  console.log("Request method: ", req.body)
  next()
}

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post('/submit')

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
