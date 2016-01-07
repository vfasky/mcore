/**
 * 
 * @date 2016-01-07 21:45:16
 * @author vfasky <vfasky@gmail.com>
 */

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'mcore.js',
        libraryTarget: 'umd'
    }
};
