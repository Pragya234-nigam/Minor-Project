const express = require('express');
const app = express();
const UserRouter = require('./routers/userRouter');
const EventRouter = require('./routers/eventRouter');
const cors = require('cors');
const port = 5000;
const Users = require('./models/userModel');
const MEvent = require('./models/eventModel');


app.use(express.json());
app.use(cors());
app.use('/user', UserRouter);
app.use('/event', EventRouter);

app.get('/', (req, res) => {
    res.send('response from express');
})


app.get('/getuserModel', (req, res) => {//By ME
    Users.find()
        .then(students => res.json(students))
        .catch(err => res.json(err))
})

app.get('/geteventModel', (req, res) => {//By ME
    MEvent.find()
        .then(events => res.json(events))
        .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log('server started');
})