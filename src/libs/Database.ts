import * as mongoose from 'mongoose';

export default class Database {
    static open(MONGO_URL) {
     return new Promise((resolve, reject) => {
            mongoose.set('useUnifiedTopology', true );
            mongoose.set('useNewUrlParser', true);
            mongoose.set('useCreateIndex', true);
            mongoose.connect(MONGO_URL, (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                console.log('Database Connected');
                resolve(undefined);
            });
        });
    }

    static disconnect() {
        mongoose.disconnect(err => {
            if (err) {
                console.log(err);
            }
            console.log('Database Disconnected');
        });
    }
}

