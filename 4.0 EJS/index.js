import express from "express";

const app = express()
const port = 3000

console.log(day)

app.get('/', (req, res) => {
    const d = new Date();
    let day = d.getDay();

    
    
    res.render("index.ejs", {
        dayType: day,
        advice: 'go to work'
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})