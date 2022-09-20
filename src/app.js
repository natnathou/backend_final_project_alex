const express = require('express');
const app = express();
const userRoute = require('./routes/user.route');

const handleErrorMiddleware = require('./middlewares/errorHandler.middleware');

const PORT = process.env.port | 5000;

require('./db')

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/user', userRoute);

app.get('/', (req, res) => {
    res.send('hello');
})
app.use(handleErrorMiddleware);

app.listen(PORT, () => {
    console.log(`listening on Port: ${PORT}`);
})
