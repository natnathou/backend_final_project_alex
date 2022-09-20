const mongoose = require("mongoose");

const url = "mongodb+srv://alex:ZpqWjL0FfvQ2n4eu@cluster0.k8aj7is.mongodb.net/project";
mongoose.connect(url).then(() => {
    console.log('db is connected')
}).catch(err => {
    console.log(`err when to trying to connect to db, err: ${err}`)
})