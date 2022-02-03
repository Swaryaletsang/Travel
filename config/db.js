const mongoose = require('mongoose');

const connectDB =  async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            //useFindAndModify:true,
            useUnifiedTopology:true,
            //useCreateIndex:true
        });
        console.log('mongoDB Connection successful 😛');
    } catch (error) {
        console.log('mongoDB Connection failed😭'+ Error.name);
        process.exit(1);
    }
}

module.exports = connectDB;