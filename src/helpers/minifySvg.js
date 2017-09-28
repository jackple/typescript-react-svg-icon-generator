const path = require('path');
const svgo = require('./svgo');

module.exports = (file, content) => {
    return new Promise(resolve => svgo.optimize(content, result => resolve({
        name: path.basename(file, '.svg'),
        svg: result
    })));
};
