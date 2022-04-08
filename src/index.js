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