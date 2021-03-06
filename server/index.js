const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const yup = require('yup');
const {nanoid} = require('nanoid');
const scheme = yup.object().shape({

    slug: yup.string().trim().matches(/[\w\-]/i),
    url: yup.string().trim().url().required(),

});

//express add aditional requirements

const app = express();
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));
//routes

app.post('/url', async (req,res,next) => {
    let {slug,url} = req.body;

    try{
        await scheme.validate({
            slug,
            url,
        });
        if(!slug){
            slug = nanoid(5);
        }
        slug = slug.toLowerCase();

        res.json({
            slug,
            url,
        });
    }catch (error){
        next(error);
        console.log("you got an error" + error);
    }


});
//error handling
app.use((error,req,res,next) => {
    if(error.status){
        res.status(error.status);
    }else{
        res.status(500);
    }
    
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV == 'production' ? '🥞' : error.stack,

    });

});
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

