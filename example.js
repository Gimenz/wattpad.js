const Wattpad = require('./src')
const w = new Wattpad()

w.Stories.read('1172507293').then(res => {
    console.log(res);
})

w.User.lookup('Khinantiee').then(res => {
    console.log(res);
})

w.Stories.nextHandler('https://www.wattpad.com/v4/search/stories?query=ghosting&limit=20&offset=20&language=20&mature=true&fields=stories%28id%2Ctitle%2CvoteCount%2CreadCount%2CcommentCount%2Cdescription%2Ccompleted%2Cmature%2Ccover%2Curl%2CisPaywalled%2Clength%2Clanguage%28id%29%2Cuser%28name%29%2CnumParts%2ClastPublishedPart%28createDate%29%2Cpromoted%2Csponsor%28name%2Cavatar%29%2Ctags%2Ctracking%28clickUrl%2CimpressionUrl%2CthirdParty%28impressionUrls%2CclickUrls%29%29%2Ccontest%28endDate%2CctaLabel%2CctaURL%29%29%2Ctotal%2Ctags%2Cnexturl')
    .then(res => {
        console.log(res);
    })