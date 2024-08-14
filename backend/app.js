import express from 'express';
import cors from 'cors';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();

app.use(cors()); // middleware to get data from the front-end since it is local config

app.use(express.json()); //middleware that allows to read request from post method

app.use((req, res, next) => {
  console.log('This is from the middle ware'); //user defined middleware to check
  next();
});

console.log(process.env);

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

// below is the testing end points, to see if its working

// app.get('/', (req, res)=>{
//     res.status(200).json({message: "ready to accept incoming requests", app : "Dushie's Studio"});
// });

// app.post('/', (req, res)=> {
// res.status(201).send("now you can post your data")
// })

export default app;
