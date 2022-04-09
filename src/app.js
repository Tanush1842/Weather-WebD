const express=require("express");
const path=require("path");
const app=express();
const port= process.env.PORT || 3000;
const StaticPath=path.join(__dirname,"../public");
app.use(express.static(StaticPath));
//console.log(StaticPath);
app.get(" ",(req,res)=>{
   res.send("hlo")
})
app.get("/about.html",(req,res)=>{
    res.send("about")
 })
 app.get("/weather.html",(req,res)=>{
    res.send("weather")
 });
 app.get("*",(req,res)=>{
   res.send("ERROR, PLEASE GO TO BACK :)");
 });
app.listen(port,()=>{
   console.log(`Running on ${port} port`);
});