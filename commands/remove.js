const exec = require('../lib/exec');
const mapFlags = require('../lib/mapObjToFlags');

module.exports = async (packages, options = {}) => {
    const p = (typeof packages == 'string') ? [packages] : packages;

    const flags = mapFlags(options);

    await exec('remove', [p.join(' ')], options);
};
