require('dotenv').config();
const epxress = require('express');
const formData = require('express-form-data');
const cors = require('cors');

const todoRoutes = require('./routes/todos');

const PORT = process.env.PORT || 3000;
const app = epxress();
app.listen( PORT, console.log("Server is running at http://localhost:5000/api"));

app.use(epxress.json());
app.use(formData.parse());
app.use(cors(
    {
        origin: "*"
    }
));

app.use('/api', todoRoutes);