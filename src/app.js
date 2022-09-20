const express = require('express');
const app = express();
const tryCatchMiddleware = require('./middlewares/try-catch-middleware');
const userRoute = require('./routes/user.route');

require('./db')

const PORT = process.env.port | 5000;

app.use(tryCatchMiddleware);
app.use('/user', userRoute);

app.get('/', (req, res)=>{
    res.send('hello')
})
app.listen(PORT, () => {
    console.log(`listening on Port: ${PORT}`);
})