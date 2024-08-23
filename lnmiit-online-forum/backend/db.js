const mongoose = require('mongoose')

const url ="mongodb+srv://vivek:Nvivek@cluster1.wj3pyyh.mongodb.net/"

module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(()=>{
        console.log('MoongoDB connected successfully')
    }).catch((error) => console.log("Error: ", error));
};

     
