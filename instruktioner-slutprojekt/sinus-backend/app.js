const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const Logger = require('./middleware/Logger');
const _404 = require('./routes/404');
const {errorHandler} = require('./errors/errorHandler')

// Initialize Models
require('./models')()

const app = express();

// Middleware
app.use( cors() )
app.use( Logger )
app.use( express.static('public') )
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Routes
app.use('/api', routes.auth);
app.use('/api/items', routes.products);
app.use('/api/orders', routes.orders);
app.use('/api/images', routes.images)
app.use( errorHandler )
app.use( _404 )


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SINUS API running on port ${PORT}`));