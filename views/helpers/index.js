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
    globalOptions(options) {
        let lang = options.data.lang;
        if (lang === 'en') {
            return 'You can have global options';
        }
        else {
            return 'Você pode usar opções globais';
        }
    },
    makeRadio(name, options) {
        let radioList  = options.fn();
        radioList = radioList.trim().split('\n');
        let output = '';
    
        for(let i in radioList) {
            let item = radioList[i].trim();
            output += `<input type="radio" name="${name}" value="${item}"> ${item} <br>`;
        }
    
        return output;
    },
    ifeq (a, b, options) {
        if(a == b) return options.fn(this);
        else return options.inverse(this);
    },
    if (data, options) {
        if(data) return options.fn(this)
        else return options.inverse(this)
    },
    with: (context, options) => options.fn(context)
}


// Register Helpers
for(let h in helpersObject) {
    hbs.registerHelper(h, helpersObject[h]);
}