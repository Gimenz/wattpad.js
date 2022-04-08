# wattpad.js
Un-Official Wattpad API Wrapper for NodeJS
<img src="https://a.wattpad.com/image/supportfooterlogo.png" width="65%">

Ported from [wattpad](https://github.com/ardzz/wattpad "wattpad") for NodeJS

## example
```javascript
const Wattpad = require('wattpad.js')
const w = new Wattpad();

// reading stories
w.Stories.read('1172507293').then(res => {
    console.log(res);
    /* {
        text: 'Aku pun bergegas menggunakan cd dan celana pendek ketatku , tidak lupa aku menggunakan sweater olahraga ku tanpa dalaman apapun lagi, aku bahkan belum mencuci sisa orgasme di meme...',
        text_hash: '6c651f9a'
    }*/
})

// search an stories
w.Stories.search('akhwat nakal').then(res => {
    console.log(res);
})
```