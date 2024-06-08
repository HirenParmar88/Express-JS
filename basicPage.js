// Basic Pages Navigation Using Express JS
// install Express JS -> npm i express

//step 1:
/*
const exp = require('express')
const app = exp()

app.get('',(req,res)=>{
    res.send('<center><h1>Home Page</h1><br><a href="/about">Go to About Page</a></center>')
});
app.get('/about',(req,res)=>{
    res.send('<h1>About Page</h1><br><a href="/">Back to Home</a>')
});
app.get('/contact',(req,res)=>{
    res.send('<h1>Contact Page</h1>')
});
app.listen(8585);
*/

// Step 2:
/*
const exp = require('express')
const app = exp()

app.get('',(req,res)=>{
    res.send(`
    <center>
    <h1>Home Page</h1><br>
    <h2>Login Page</h2>
    UserName : <input type="text" placeholder="username"><br><br>
    Password : <input type="text" placeholder="password"><br><br>
    <button>Login</button><br><br>
    <a href="/about">Go to About Page</a>
    </center>`)
});
app.get('/about',(req,res)=>{
    res.send('<h1>About Page</h1><br><a href="/">Back to Home</a>')
});
app.get('/contact',(req,res)=>{
    res.send('<h1>Contact Page</h1>')
});
app.listen(8585);
*/

//Step 3:
// Access HTML File
// 1) Make a folder html/ create two files home.html and about.html
const exp = require('express');
const pt=require('path');
const app=exp();
const publicPath=pt.join(__dirname,'html');

//app.use(exp.static(publicPath));
app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/home.html`)
})
app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('/help',(_,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})
app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/noPage.html`)     //default show *
})

app.listen(5555);

//How to run this code : localhost:5555/about.html


