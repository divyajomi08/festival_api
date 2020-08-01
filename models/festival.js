const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _country : {type : String},
    _title : {type : String},
    _description : {type : String},
    _date : {type : Number},
    _month : {type : String}
    
});
 module.exports= mongoose.model("Festival",schema);