const express = require('express');
const app = express()
const port = 3000
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute')
const noteRoute = require('./routes/notesRoute')

mongoose.connect('mongodb+srv://shamseer:12345@cluster0.dtv82.mongodb.net/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log(`Mongo Is ready and Connected....!`);
})
.catch((err) => {
    console.log(err);
});
//json-parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', userRoute)
app.use('/notes', noteRoute)

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
})