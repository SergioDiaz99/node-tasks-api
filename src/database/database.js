import mongoose from 'mongoose'
import config from '../config/config'

(async () => {
    try{
        const db = await mongoose.connect(config.mongodbURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Database is connected to:',db.connection.name);
    }catch(e){
        console.error();(e)
    }
})();
