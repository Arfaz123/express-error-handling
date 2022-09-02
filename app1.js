import express from "express";

const app = express();

//1)
// app.get("/",(req, res)=>{
//     res.status(404).json({
//         message: "Not Found",
//     });
// });


//2)
// const h1 = (req, res)=>{
//     res.status(404).json({
//         message: "Not Found",
//     });s
// };  
// app.get("/",h1);


app.get("/",(req, res, next)=>{
    
    console.log("A");
    next();
    // return next(new Error("Custom Error"));
},(req, res, next)=>{
    console.log("B");
    next();
},(req, res, next)=>{
    console.log("C");

});
app.use((err,req,res, next)=>{
    res.status(404).json({
        message: err.message,
    })
})

app.listen(4000,()=>{
    console.group('sever is working fine...');
});

