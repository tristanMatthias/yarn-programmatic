/**
 *
 * @param {Object} obj The object to map
 * @param {Object} map The map of options to flags
 * @returns {Object}   The object with keys mapped from the map, and values
 *                     cast as strings
 */
module.exports = (obj, map = {}) => {
    const mapped = {};
    Object.keys(obj).forEach(k => {
        let key = map[k] || k;

        // Cast to string if value exists
        if (obj[k] || obj[k] === false) {
            const value = String(obj[k]);
            // Convert camel case to hyphen
            key = key.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);
            mapped[`--${key}`] = value;
        }
    });

    return Object.entries(mapped).reduce((prev, [k, v]) => {
        let val = k;
        if (v || v === false) val = `${val}=${v}`;

        return `${prev} ${val}`;
    }, '');
};
