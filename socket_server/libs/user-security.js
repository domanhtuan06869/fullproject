module.exports = {
    _encoded: async function (value) {
        return Buffer.from(value).toString('base64');
    },
    _decoded: async function (value) {
        return Buffer.from(value, 'base64').toString();
    }
}