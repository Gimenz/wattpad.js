const Wattpad = require('./src')
const w = new Wattpad()

w.Stories.read('1172507293').then(res => {
    console.log(res);
})

w.User.lookup('Khinantiee').then(res => {
    console.log(res);
})