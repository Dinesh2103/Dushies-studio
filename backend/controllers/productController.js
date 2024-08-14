// import fs from 'fs';
import path from 'path'; //since js modules doesn't support __dirname directly, we would use path.resolve() refer line 10
import Product from '../models/productModel.js';

const __dirname = path.resolve();

// const products = JSON.parse(
//   fs.readFileSync(`${__dirname}/backend/dev-data/exampleJson.json`)
// );

// const checkID = (req, res, next, val) => {
//   // this is middleware called in params id, if the ID is not present, it will return the default message
//   console.log('displaying ID ', req.params.id);
//   console.log('displaying val', val);
//   if (val > products.length - 1) {
//     return res
//       .status(404)
//       .json({ status: 'failed', message: "Entered ID doesn't exist" });
//   }
//   next();
// };

// const checkBody = (req, res, next) => {
//   if (!req.body) {
//     return res
//       .status(404)
//       .json({ status: 'failed', message: 'data is missing' });
//   }
//   next();
// };

const getAllProducts = async (req, res) => {
  //GET request - get all products from db

  try {
    const products = await Product.find();

    res.status(200).json({
      status: 'success',
      results: products.length,
      // requestedAt: req.requestTime,
      data: {
        products,
      },
    });
  } catch (err) {
    res
      .status(404)
      .json({ status: 'Failed', message: 'unable to fetch data', error: err });
  }
};

const getProductById = async (req, res) => {
  // Get request with id QP
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (err) {
    res
      .status(404)
      .json({ status: 'Failed', message: 'unable to fetch data', error: err });
  }
};

const createProduct = async (req, res) => {
  // // POST req add new Product
  // const newId = products[products.length - 1].id + 1; // eg ., 8 products -> products[7].id + 1
  // const newProduct = Object.assign({ id: newId }, req.body);
  // products.push(newProduct);

  // fs.writeFile(
  //   `${__dirname}/backend/dev-data/exampleJson.json`,
  //   JSON.stringify(products),
  //   (err) => {
  //     res.status(201).json({
  //       status: 'success',
  //       message: 'product add successfully',
  //       data: { newProduct },
  //     });
  //   },
  // );
  try {
    const newProduct = await Product.create(req.body);
    console.log('image url from backend', req.body);
    res.status(201).json({
      status: 'success',
      message: 'product add successfully',
      data: { newProduct },
    });
  } catch (err) {
    // console.log('The product was not added');
    res.status(400).json({ status: 'Data not posted', message: err });
  }
};

const updateProduct = async (req, res) => {
  // Get request with id QP
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    res.status(200).json({
      status: 'success',
      data: {
        updatedProduct,
      },
    });
  } catch (err) {
    res
      .status(404)
      .json({ status: 'Failed', message: 'unable to update data', error: err });
  }
};

const deleteProduct = async (req, res) => {
  // Get request with id QP
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res
      .status(404)
      .json({ status: 'Failed', message: 'unable to delete data', error: err });
  }
};

export {
  /* checkID,  checkBody,*/
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
