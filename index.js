require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;

app.get('/home', (req, res) => {
  res.send('Hello World!');
});

app.get('/index',(req,res) =>{
    res.send("hi haseeb")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});


