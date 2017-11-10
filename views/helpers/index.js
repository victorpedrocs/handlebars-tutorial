const hbs = require('hbs');
hbs.handlebars = require('handlebars');

const helpersObject = {
    makeLink: (text, href) => new hbs.handlebars.SafeString(`<a href="${href}">${text}</a>`),
}


// Register Helpers
for(let h in helpersObject) {
    hbs.registerHelper(h, helpersObject[h]);
}