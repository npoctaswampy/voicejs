
class Menu {
    name = "";
    prompt = "";
    choices = [];
    noInput = "";
    
    constructor(name, prompt, choices, noInput) {
        this.name = name;
        this.prompt = prompt;
        this.choices = choices;
        this.noInput = noInput;
    }

    addToXml(xml) {
        const menuEl = xml.ele('menu');
        const prompt = menuEl.ele('prompt').txt(this.prompt);
    }
}

module.exports = Menu;