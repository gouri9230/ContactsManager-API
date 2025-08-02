const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const contactRouter = require('./routes/contactRoutes');
const userRouter = require('./routes/userRoutes');
const connectDb = require('./config/dbConnection');

connectDb();

const app = express();
const port = process.env.PORT || 4001;
app.use(express.json());

app.use('/api/contacts', contactRouter);
app.use('/api/users', userRouter);
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
