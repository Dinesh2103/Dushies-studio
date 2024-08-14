import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

import app from './app.js';

const db = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log(con.connections);
    console.log('DB connection is successful');
  });

// const newProduct = new Product({
//   name: 'Testing the schema and model',
//   language: 'English',
//   version: 4.8,
//   bio: 'some info',
// });

// newProduct
//   .save()
//   .then((doc) => console.log('Data successfully posted', doc))
//   .catch((err) => console.log('an error occured', err));

const port = process.env.PORT || 3000;

console.log(`Process.env ${process.env.PORT}`);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`); //starting the server to listen on port 3000
});
