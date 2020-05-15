const express = require("express")
const mongoose = require("mongoose")
const Port = process.env.PORT||4040
const app = express()
const routes = require("./routes/apiroutes")
// const route = require("./routes/htmlroutes")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
app.use(routes)
 
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/bookdb",
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  );
  
app.listen(Port,function(){
    console.log("Server Listening")

})

