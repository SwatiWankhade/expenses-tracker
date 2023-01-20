const mongoose = require("mongoose");

// xdjiBmKLC9hYEfLe
// mongodb+srv://me:<password>@expenses-tracker.twpj3pn.mongodb.net/?retryWrites=true&w=majority
const dbConnect = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Connected to DB");
} catch (error) {
    console.log(`Error ${error.message}`);
}
};

module.exports = dbConnect;