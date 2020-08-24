const express = require('express');
const dotenv = require('dotenv');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Initializa app variable
const app = express();

const PORT = process.env.PORT || 5000;
const env = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server running in ${env} mode on port ${PORT}!`));
