const assert = require('assert');
const baseConfig = require("../../lib/webpack.base");
// 不能单独运行，必须是 index.js
describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')
    console.log(baseConfig.entry.index)

    it('entry', () => {
        assert.equal(baseConfig.entry.index.indexOf('builder-webpack/test/smoke/template/src/index/index.js')>-1, true);
        assert.equal(baseConfig.entry.search.indexOf('builder-webpack/test/smoke/template/src/search/index.js')>-1, true);
    });
});
