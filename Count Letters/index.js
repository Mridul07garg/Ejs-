import Express from "express";
import bodyparser from "body-parser";

const app = Express();
const port = 3000;

app.use(bodyparser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post('/submit',(req,res)=>{
    var count = req.body['namme'].length + req.body['sname'].length;
    console.log(count);
    res.render("index.ejs",{count:count});T
})

app.listen(port,()=>{
    console.log(`Serve running at port ${port}`);
})