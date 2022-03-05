const fs = require('fs')
const path = require('path')
require('dotenv').config()

if(fs.existsSync(path.join('database',process.env.DB_FILE))){
  fs.unlinkSync(path.join('database',process.env.DB_FILE))
}

const db = require('./connection')

require('../models')()

db.sync()