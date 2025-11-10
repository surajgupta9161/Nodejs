import express from "express";
const app = express();

let port = 3000;
app.listen(port, () => {
    console.log(`Listening by port ${port}`)
})
const fruits = "<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li></ul>";
const obj = {
    name: "Suraj Gupta",
    age: 23,
    city: "Noida"
}

//Ye kisi bhi route pe exicute ho jayega 

// app.use((req, res) => {
//     console.log("request received")
//     res.send(fruits)
// })

app.get("/", (req, res) => {
    res.send("It is Home Page");
})

// app.get("/fruits", (req, res) => {
//     res.send(fruits);
// })

// app.get("/:username", (req, res) => {
//     const { username, id } = req.params;
//     // console.log(`Welcome @${username}`);
//     res.send(`Welcome @${username}`)
// })

app.get("/search", (req, res) => {
    const { q } = req.query;
    res.send(`Query for the ${q}`);
})
