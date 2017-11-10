const hbs = require('hbs');
hbs.handlebars = require('handlebars');

const helpersObject = {
}


// Register Helpers
for(let h in helpersObject) {
    hbs.registerHelper(h, helpersObject[h]);
}