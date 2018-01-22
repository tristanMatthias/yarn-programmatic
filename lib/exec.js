const {exec} = require('child-process-promise');
require('colors');

module.exports = async (cmd, args, options) => {
    return exec(`yarn ${cmd} ${args.join(' ')}`, options)
        .catch(e => {
            console.log(e.message.red);
        });
}
