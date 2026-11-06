function language(name,country){
    this.name=name;
    this.country=country;
    this.greet=function(){
        return `Say Hi to ${name}`
    }
}

var Hindi = new language('Hindi','India')

class language {
    constructor(name,country){
        this.name = name;
        this.country = country;

    }
    greet = () => {
        return `Say Hi to ${this.name}`
    }
}
var French = new language('French','France')