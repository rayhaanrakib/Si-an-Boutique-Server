const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000;
const allowedOrigins = ['http://localhost:5173', 'https://si-an-boutique.vercel.app'];

// middlewares
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not Allowed by CORS'))
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true
}));
app.use(express())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Server is running')
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})