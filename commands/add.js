const {exec} = require('child-process-promise');
const mapFlags = require('../lib/mapObjToFlags');

const flagMap = {
    dev: 'saveDev'
}

module.exports = async (packages, options = {}) => {
    const p = (typeof packages == 'string') ? [packages] : packages;

    const flags = mapFlags(options, flagMap)

    await exec(`yarn add ${p.join(' ')}`, options);
};
