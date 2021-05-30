const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

const productsRouter = require('./routes/products');
const handtoolsRouter = require('./routes/handtools');
const outdoortoolsRouter = require('./routes/outdoor');
const geartoolsRouter = require('./routes/gear');

const signUpRouter = require('./routes/signUp');

app.use(cors())
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/products', productsRouter);

app.use('/handtools', handtoolsRouter);
app.use('/outdoor', outdoortoolsRouter);
app.use('/gear', geartoolsRouter);
app.use('/signup', signUpRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
  
  
    return;
  });
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});