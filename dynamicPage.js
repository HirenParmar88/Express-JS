/* Dynamic Page with ejs */
//how to make Loop in ejs
//Make Header file
//show common header file

const exp = require('express');
const pt=require('path');
const app=exp();
const publicPath=pt.join(__dirname,'html');

app.set('view engine','ejs')
//app.use(exp.static(publicPath));
app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/home.html`)
})

app.get('/profile',(_,res)=>{
    const user={
        name:'Hiren Parmar',
        email:'hiren111@gmail.com',
        city:'Bhavnagar',
        contact:'9313688860',
        skills:['php','Js','c++','java','node','express']
    }
    res.render('profile',{user});  //show this page
})

app.get('/login',(_,res)=>{
    res.render('login');
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

app.listen(5656);
