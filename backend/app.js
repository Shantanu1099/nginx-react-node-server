import express from "express";
import cors from "cors";

const app = express();

app.use(cors());


app.get('/', (req, res, next) => {
    res.send('HELLOOO WORLDDDD').status(200);
});

app.post('/signup', (req, res, next) => {
    res.send('HELLO /signup').status(200);
});

app.get('/path', (req, res, next) => {
    res.send('HELLOOO WORLDDDD from /path').status(200);
});


app.listen(5000, () => {
    console.log('app listening at... 5000')
});
