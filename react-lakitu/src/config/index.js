let config

if (process.env === 'prod') {
    config = require('./prod');
} else {
    config = require('./local');
}

export default config