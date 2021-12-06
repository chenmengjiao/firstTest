global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema = {
    name: String,
    age:Number,
    health:String,
    hobby:String,
    home:String
}

const mydata = mongoose.model('cats', schema);

 const kitty = new mydata({ name: 'testZildjian' });
 kitty.save().then(() => console.log('testmeow'));

// const kitty1 = new Cat({ name: 'zhang1' ,age:1,health:"good"});
// kitty1.save().then(() => console.log('new schema writed'));
mydata.find({name:"zhang3"},(err,data)=>{console.log(data._doc)})
