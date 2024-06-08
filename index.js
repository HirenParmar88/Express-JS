// Express JS
//1) install : npm install express

/*
const express=require('express');
const app=express();

app.get('',(req,res)=>{
    console.log("data sent by browser",req.query.name)
    res.send('<h1>Home Page</h1>');
});
app.get('/about', (req, res) => {
    res.send('About page');
});
app.get('/help',(req,res)=>{
    res.send('Help Page')
})
app.listen(5000);
*/

/* Render html and json */

const express=require('express');
const app=express();

app.get('',(req,res)=>{
    //console.log("data sent by browser",req.query.name)
    res.send('<h1>Welcome, Home Page</h1><a href="/about">Go to About Page</a>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><input type="text" placeholder="User Name"/><button>Submit</button><br><br><a href="/">Go to Home Page</a>');
});

app.get('/help',(req,res)=>{
    res.send([
        {
            name:'Hiren',
            email:'hiren11@gmail.com'
        },
        {
            name:'Vivek',
            email:'Vivekk11@gmail.com'
        }
]);
})
app.listen(5000);
