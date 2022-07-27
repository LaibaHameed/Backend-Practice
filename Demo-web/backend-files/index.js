const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 9654;

// url = Uniform Resource Locator
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());

const _ProductManagementRoute = require('./Routes/pdRoute');
app.use('/ProductManagement', _ProductManagementRoute)

app.listen(PORT, () => {
    console.log(`Your Application has Launched from the Port ${PORT}`);
})