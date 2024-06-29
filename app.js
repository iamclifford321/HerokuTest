const express = require('express');
const app = express();
const Joi = require('@hapi/joi');

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Welcome to Daily Code Buffer in Heroku Auto Deployments!!');
})
app.get('/test', (req,res) => {
    res.send('testset');
});

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));