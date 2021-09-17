const express = require("express");
const app = express();
app.use(express.static('./public'));

app.listen(3000, ()=>{
console.log('servidor funcionando');
});

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
});


app.get('/compare', (req, res)=>{
    res.sendFile(__dirname + '/views/compare.html');
});

