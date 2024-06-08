/* Middleware */

const exp=require('express');
const app=exp();

const reqFilter=(req,res,next)=>{
    console.log('reqFilter');
    next();
}
app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send('Welcome to Home Page')
})

app.get('/users',(req,res)=>{
    res.send('Welcome to Users Page')
})

app.listen(6565)