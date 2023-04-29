// import express 
const express = require('express');
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');
const equipmentRouter = require('./routers/equipmentRouter');

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000'}));


app.use(express.json());

app.use('/user', userRouter);
app.use('/seller', sellerRouter);

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