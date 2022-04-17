/**
 * @author [Gimenz]
 * @email [agaaja187@mail.com]
 * @create date 2022-04-09 03:32:09
 * @modify date 2022-04-17 15:04:17
 * @desc [Un-Official Wattpad API Wrapper for NodeJS]
 */

const Stories = require('./Stories');
const User = require('./User');

class Wattpad {
    #cookie;
    constructor(cookie = '') {
        this.#cookie = cookie
    }
    Stories = new Stories(this.#cookie)
    User = new User(this.#cookie)
}

module.exports = Wattpad