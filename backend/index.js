const express = require('express');
const app = express();
const UserRouter = require('./routers/userRouter');
// const UserRouter = require('./routers/userRouter');
const cors = require('cors');
const port = 5000;

app.use(express.json());
app.use(cors());
app.use('/user', UserRouter);
// app.use('/user', UserRouter);

app.get('/', (req, res) => {
    res.send('response from express');
})

app.listen(port, () => {
    console.log('server started');
})