let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    Name: String,
    Description: String,
  
},
{
    collection: "favourite"
});

module.exports = mongoose.model('demo', contactSchema);