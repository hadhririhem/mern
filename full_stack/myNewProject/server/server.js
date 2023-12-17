const express = require('express');
const cors = require("cors");
const app = express();

require('./routes/person.route')(app);   // We're importing the routes export.
app.use(cors)
const port = 8000;
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
require('./config/person.config'); 

    
app.listen(port, () => console.log(`Listening on port: ${port}`) );
