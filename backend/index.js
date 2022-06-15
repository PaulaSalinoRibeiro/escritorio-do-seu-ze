const express = require('express');
const cors = require('cors');
const officeRouter = require('./routes/officesRouter');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/offices', officeRouter);


app.listen(3333, () => console.log('Server running in port 3333 🚀'));