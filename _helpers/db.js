const config = require('../config.json');
const mongoose = require('mongoose');

const connectionOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAnModify: false,
};

mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);

module.exports = {
    User: require('../users/user.model')
};