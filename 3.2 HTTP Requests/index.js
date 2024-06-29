import express from "express";
const app = express();


app.listen(3000, () => {
    console.log('listening on 3000')
})


app.get("/", (req, resp) => {
    resp.send('home page');
})
app.get("/about", (req, resp) => {
    resp.send('about us and stuff')
})
app.get("/contact", (req, resp) => {
    resp.send('555-555-5555')
})
app.get('/mike', (req, resp) => {
    resp.send('<h1>my name is miksfasfsafsfe</h1>')
})