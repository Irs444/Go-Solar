// import express 
const express = require('express');
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');
const equipmentRouter = require('./routers/equipmentRouter');
const sellerRouter = require('./routers/sellerRouter');
const contactRouter=require('./routers/contactRouter')
const utilRouter=require('./routers/util')
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000'}));


app.use(express.json());

app.use('/user', userRouter);
app.use('/seller', sellerRouter);
app.use('/equipment', equipmentRouter);
app.use('/contact', contactRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));

app.get('/', (req, res) => {
    res.send('working fine');
});

app.get('/home', (req, res) => {
    res.send('Responce from home')
})
app.get('/add', (req, res) => {
    res.send('Add')
})
app.get('/delete', (req, res) => {
    res.send('Delete')
})


app.listen( port, () => { console.log('server started')});