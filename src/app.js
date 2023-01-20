const express = require("express");
const dotenv = require("dotenv"); 
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const userRoute = require("./routes/users/usersRoute.js");


const app = express();
//env
dotenv.config();
// middleware
// const logger = (req,res,next) => {
//     console.log("Am a logger ");
//     next();
// };
// app.use(logger);

app.use(express.json());

// dbConnect
dbConnect();

// xdjiBmKLC9hYEfLe
// mongodb+srv://me:<xdjiBmKLC9hYEfLe>@expenses-tracker.twpj3pn.mongodb.net/?retryWrites=true&w=majority

//middleware
app.use(express.json());

// routes
// app.post('/register', registerUser);
app.use('/api/users', userRoute);

//Error
app.use(notFound);
app.use(errorHandler);

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// })


module.exports = app