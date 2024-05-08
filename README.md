# User Registration and Login Page

This is a simple Node.js and MongoDB project for user registration and login functionality.

## Table of Contents

- Features
- Prerequisites
- Files included
- Working Images
- Understanding script.js in-depth

## Features

- **User Registration:** Allows users to register by providing their first name, last name, email, password, address, and mobile number.
- **User Login:** Allows registered users to log in using their email and password.

## Prerequisites

- Node.js installed on your machine.
- MongoDB Atlas account or a local MongoDB server.

## Files included

- **index.html:** Main Registration page
- **login.html:** Login page
- **scritp.js:** This section provides a brief overview of the backend setup and configuration, including dependencies, configuration details, and instructions for starting the server.

## Working Images
![Screenshot 2024-05-08 211714](https://github.com/Adityabandaru188/loginpage/assets/169282203/d83420eb-388d-4356-864d-c95039bf662c)
![Screenshot 2024-05-08 211727](https://github.com/Adityabandaru188/loginpage/assets/169282203/fa2d6283-19b1-4d36-987a-a98c9adc56ad)
![Screenshot 2024-05-08 211749](https://github.com/Adityabandaru188/loginpage/assets/169282203/c1371485-aa5e-4985-a9a1-064876fcf65d)
![Screenshot 2024-05-08 211828](https://github.com/Adityabandaru188/loginpage/assets/169282203/292261cd-30ec-4baa-998b-e9adc19dec69)

# Understanding script.js in-depth

## Dependencies

- **Express**: A web application framework for Node.js, used for handling HTTP requests and routing.
- **Mongoose**: A MongoDB object modeling tool designed to work in an asynchronous environment, used for interacting with MongoDB.
- **Cors**: Middleware for Express to enable Cross-Origin Resource Sharing.

## Setup

1. **Imports**: Import required modules - Express, Mongoose, and Cors.

2. **Express App Configuration**: 
   - Create an instance of the Express application.
   - Set up CORS middleware to enable cross-origin requests.
   - Configure middleware to parse URL-encoded and JSON request bodies.

3. **Database Connection**:
   - Define the MongoDB connection URI.
   - Connect to MongoDB using Mongoose.

4. **Database Schema**:
   - Define a schema for the user data with fields like first name, last name, email, password, address, and mobile.

5. **Model Creation**:
   - Create a Mongoose model named "User" based on the defined schema.

## Registration Endpoint (`/register`)

- This endpoint handles POST requests for user registration.
- It first checks if a user with the provided email already exists in the database.
- If a user already exists, it sends a 400 status code with a message indicating that the user already exists.
- If the user does not exist, it creates a new user instance based on the provided data, saves it to the database, and sends a 201 status code indicating successful registration.

## Login Endpoint (`/login`)

- This endpoint handles POST requests for user login.
- It attempts to find a user with the provided email in the database.
- If no user is found, it sends a 404 status code with a message indicating that the user was not found.
- If a user is found, it compares the provided password with the stored password.
  - If the passwords match, it sends a 200 status code indicating a successful login.
  - If the passwords do not match, it sends a 404 status code with a message indicating an incorrect password.

## Error Handling

- Any errors that occur during registration or login processes are caught, and logged, and an appropriate error message is sent back with a 500 status code.

## Server Initialization

- The Express app starts listening on port 3000, and a message is logged to the console upon successful initialization.



