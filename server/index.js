const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/User');
const passport = require('../client/src/passport-config');
const path = require('path');

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, '../client/public')));

// MongoDB connection
mongoose.connect("mongodb+srv://karimcheggar:Uemf2016@cluster0.kbcqal8.mongodb.net/mongoDBProjects?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error:", err));

// API to get user data
app.get("/getUsers", async (req, res) => {
    try {
        const result = await UserModel.findOne({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

// Server listening on port
const port = 3001;
app.listen(port, () => {
    console.log('Server runs perfectly');
    console.log(`Server running on port ${port}`);
});
console.log(path.join(__dirname, 'public'));

