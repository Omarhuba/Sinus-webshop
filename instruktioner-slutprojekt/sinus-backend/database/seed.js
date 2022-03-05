const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');


(async () => {
  await User.destroy({where:{}, truncate: true});
  await Product.destroy({where:{}, truncate: true});
  await Order.destroy({where:{}, truncate: true});

  await User.create({
    email: 'admin@example.com', 
    password: "password", 
    role: "admin",
    name: "Banan Paj",
    city: 'Tokberga',
    street: 'Tokitokvägen 12',
    zip: '0-1337'
  })
  console.log("Admin created `admin@example.com` with password `password`")
  await User.create({
    email: 'customer@example.com', 
    password: "password", 
    role: "customer",
    name: "Grill Korv",
    city: 'Tokberga',
    street: 'Tokitokvägen 13',
    zip: '0-1337'
  })
  console.log("Customer created `customer@example.com` with password `password`")
  await Product.bulkCreate(require('./products.json'))
})()


// const Order = require('../models/Order');





// const path = require('path');
// const appDir = path.dirname(require.main.filename);
// const NeDB = require('nedb-promise')
// const users = new NeDB({filename:path.join(appDir, 'users.db'), autoload: true})
// const products = new NeDB({filename:path.join(appDir, 'products.db'), autoload: true})
// const orders = new NeDB({filename:path.join(appDir, 'orders.db'), autoload: true})
// const bcrypt = require('bcryptjs')
// const productsSeed = require('./productsSeed.json')
// const usersSeed = require('./usersSeed.json')

// usersSeed.forEach(user => user.password = bcrypt.hashSync('password', 10));

// (async ()=>{
//     await orders.remove({},{multi:true})
//     await users.remove({},{multi:true})
//     await products.remove({},{multi:true})
//     await users.insert(usersSeed)
//     await products.insert(productsSeed)
// })()