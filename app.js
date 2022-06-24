const http=require('http')
const express=require('express')
const bcrypt=require('bcrypt')
const mongoose=require('mongoose')
const app=express();
const server=http.createServer(app)
const PORT=3000
mongoose.connect("mongodb://localhost:27017/user_books").then(()=>{
    return console.log("MongoDB is running on localhost 27017")
}).catch((err)=>{
    return console.log(`error while running mongo the error is ${err}`)
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))

/* USER ROUTES*/
const user_router=require("./routes/user.routes")
app.use("/users",user_router)

/* AUTH-login ROUTES*/
// const auth_router=require("./auth.login")
// app.use("/login",auth_router)

/* authorization && login*/
const author_router=require("./login/login.router")
app.use("/",author_router)

/*  BOOK ROUTES */
const book_router=require("./books/book.routes")
app.use("/books",book_router)









server.listen(PORT, ()=>{
    console.log("serer is runnin on the localhost http://localhost:127.0.0.1.3000:")
})