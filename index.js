var mongoose =require("mongoose");
var db=mongoose.connection;
const express = require('express')
const app = express()
const port = 3000


mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("we are connected!");
});


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
