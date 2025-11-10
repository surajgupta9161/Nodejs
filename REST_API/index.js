const express = require("express")
const app = express();
const path = require("path")
const port = 8080;
const { v4: uuid4 } = require("uuid")
const methodOverride = require("method-override");

app.listen(port, () => {
    console.log("Server Start");
})

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

app.use(express.static(path.join(__dirname, "public")))

let posts = [
    {
        id: uuid4(),
        username: "Suraj Gupta",
        content: "Hard working is nothing luck is important"
    },
    {
        id: uuid4(),
        username: "Gopal",
        content: "Doing our job well"
    },
    {
        id: uuid4(),
        username: "Naresh Gupta",
        content: "Evertything is fine"
    },
    {
        id: uuid4(),
        username: "Ajeet",
        content: "All Works are done"
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts })
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuid4();
    posts.push({ id, username, content })
    res.redirect("/posts")
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id == id)
    res.render("show.ejs", { post })
})

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => p.id == id)
    post.content = newContent;
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id == id)
    res.render("edit.ejs", { post })
})

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect("/posts");
})