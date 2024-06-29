const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
const path = require('path')
app.use(express.json());

app.get('/', (req,res) => {
    console.log(path.join(__dirname, '/index.html'));
    res.sendFile(path.join(__dirname, '/index.html'), function (err) {
        if (err) {
          res.status(500).send(err)
        }
    })
})

app.get('/test', (req,res) => {
    res.send('testset');
});

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));