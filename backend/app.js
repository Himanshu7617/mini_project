const express = require('express');

const app = express();

require('dontenv').config();

port = env.process.BACKEND_PORT || 3000;

app.use(express.json());



app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})