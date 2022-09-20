const express = require('express');
const app = express();
const userRoute = require('./routes/user.route');

require('./db')

const PORT = process.env.port | 5000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/user', userRoute);

app.get('/', (req, res) => {
    res.send('hello');
})

app.listen(PORT, () => {
    console.log(`listening on Port: ${PORT}`);
})
