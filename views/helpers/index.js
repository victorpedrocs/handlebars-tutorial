const hbs = require('hbs');
hbs.handlebars = require('handlebars');

const helpersObject = {
    makeLink: (text, href) => new hbs.handlebars.SafeString(`<a href="${href}">${text}</a>`),
    dangerText: text => new hbs.handlebars.SafeString(`<span class="text-danger">${text}</span>`),
    successText: text => new hbs.handlebars.SafeString(`<span class="text-success">${text}</span>`),
    transformText (text, options) {
        let result = text;
        let transf = options.hash.transformation;
    
        if (transf === 'upc') {
            result = `<span class="up-case">${text}</span>`;
        }
        else if (transf === 'loc') {
            result = `<span class="low-case">${text}</span>`;
        }
        else if (transf === 'cap') {
            result = `<span class="capitalize">${text}</span>`;
        }
    
        return new hbs.handlebars.SafeString(result);
    },
}


// Register Helpers
for(let h in helpersObject) {
    hbs.registerHelper(h, helpersObject[h]);
}