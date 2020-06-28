const express = require('express');
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');

const contact = express();

contact.listen(3000, () => {
    console.log('Server is running!');
});
