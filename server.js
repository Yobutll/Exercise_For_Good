const express = require('express');
const app = express();

app.use(express.static('/CSS-'));
app.use(express.static('/Picture'));
app.use(express.static('/JS'));


app.get('/adminpage', (req, res, next) => {
    res.sendFile(__dirname + '/admin.html');
});

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/main.html');
});


app.listen(3000, () => {
    console.log('server started localhost:3000');
    });