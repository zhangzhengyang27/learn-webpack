const path = require('path');
// 进入目录
console.log(path.join(__dirname, ''))
process.chdir(__dirname);

describe('builder-webpack test case', () => {
    require('./unit/webpack-base-test');
});
