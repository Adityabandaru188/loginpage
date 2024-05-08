const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection string to store the data in the database

const uri = 'mongodb+srv://aditya:aditya%401234@cluster10.lz72s5j.mongodb.net/mydatabase';
mongoose.connect(uri);
const db = mongoose.connection;

// Create a schema for the database

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    address: String,
    mobile: String
});

// Creating a model

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    try {
        const userData = req.body;
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            const htmlResponse = `
            <html>
            <head>
                <title>Registration Successful</title>
            </head>
            <body>
                <h1>User already exists</h1>
            </body>
            </html>
        `;
        res.status(400).send(htmlResponse);       
     }
        const newUser = new User(userData);
        await newUser.save();
        const htmlResponse = `
            <html>
            <head>
                <title>Registration Successful</title>
            </head>
            <body>
                <h1>Registration Successful!</h1>
                <p>Thank you for registering.</p>
            </body>
            </html>
        `;
        res.status(201).send(htmlResponse);
    } catch (error) {
        console.error('Error: ', error);
        const htmlResponse = `
            <html>
            <head>
            </head>
            <body>
                <h1>Error!</h1>
            </body>
            </html>
        `;
        res.status(500).send(htmlResponse);
    }
});

app.post('/login', async (req, res) => {
    let htmlResponse;
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }); 

        if (!user) {
            htmlResponse = `
            <html>
            <head>
            </head>
            <body>
                <h1>User not found!</h1>
                
            </body>
            </html>
        `;
            return res.status(404).send(htmlResponse);
        }

        if (user.password !== password) {
            htmlResponse = `
            <html>
            <head>
            </head>
            <body>
                <h1>Incorrect password!</h1>
                
            </body>
            </html>
        `;
            return res.status(404).send(htmlResponse);
        }
        htmlResponse = `
        <html>
        <head>
        </head>
        <body>
            <h1>Login successfull!</h1>
            
        </body>
        </html>
    `;
        return res.status(200).send(htmlResponse);

    } catch (error) {
        console.error('Error: ', error);
        htmlResponse = `
        <html>
        <head>
        </head>
        <body>
            <h1>Internal server error!</h1>
            
        </body>
        </html>
    `;
        return res.status(500).send(htmlResponse);
    }
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
