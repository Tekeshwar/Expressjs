var express = require('express');
var path =require('path');
var app = express();

// app.get('/', function(req, res){
//    res.send("Hello world!");
// });

// or

// app.get('/',(req,res)=>{
// res.sendfile(path.join(__dirname,'public','index.html'));
// });

// OR set static folder
app.use(express.static(path.join(__dirname,'public')));


app.get('/hello', function(req, res){
   res.send("Hello world - Hello");

   app.post('/hello', function(req, res){
      res.send("You just called the post method at '/hello'!\n");
   });
});

app.listen(3000);