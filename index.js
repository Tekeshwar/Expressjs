var express = require('express');
var path = require('path'); 
var members= require('./api/members');

var app = express();
// call api
app.get('/api/members',(req,res)=>{
    res.json(members);
   }); 
app.listen(3000);