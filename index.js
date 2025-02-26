const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/api/products",productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API server updated");
});


// Connect to MongoDB and start the server
mongoose.connect("mongodb+srv://chandu:chandu123@cluster0.gmbn4.mongodb.net/Project_curd?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });
