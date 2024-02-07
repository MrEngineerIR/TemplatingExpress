const express = require("express");
const app = express();
const path = require("path");
const Data = require("./data.json");


app.use(express.static("public"));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));



app.get("/",(req,res)=>{
    res.send("after port number use(/r/YourSearch) to find page you want")
})
app.get("/r/:sub" , (req , res)=>{
  
    const SubCheckRes = Object.hasOwn(Data ,req.params.sub);
    if(SubCheckRes){
        const NewData = Data[req.params.sub];
        res.render("sub.ejs" , {Udata:{...NewData}});
    }else{
        res.render("error.ejs" ,{sub:req.params.sub})
    }
   
})
app.get("*",(req,res)=>{
    res.send("first (/r) and then (/YourSearch)")
})



app.listen(5000 ,()=>{
    console.log("Listing at port 5000");
})