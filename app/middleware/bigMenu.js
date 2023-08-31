const Menu = require("../../voicexml/menu/menu");

function initialMenuMw(req, res, next) {
    const menu = new Menu("", "This is the prompt", [], "");

    req.app.locals.builtElements = [];
    req.app.locals.builtElements.push(menu);

    next();
}

module.exports = initialMenuMw;