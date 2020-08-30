const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
//express add aditional requirements

const app = express();
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));
//routes

app.get('/url/:id', (req,res) => {
    //get a short url by id

});
app.get('/',(req,res) =>  {

    res.json({
        message: 'hello there this is a test'
    });
    
});
app.get('/.*',(req,res) =>  {
//  REDIRECT TO URL
    
});

app.post




const port = process.env.PORT || 1337;
app.listen(port,() => {

    console.log(`listening on localhost:${port}`);

});

