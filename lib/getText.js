var cheerio = require("cheerio");

var writeInfos = require("./writeInfos");

// constants from writeInfos
var TITLEINFO = 1,
    IMGINFO = 2,
    TEXTINFO = 3;

function getText(data){
    var $ = cheerio.load(data);

    // var textPattern = "div.productR>ul>li:nth-child(4)";
    var textPattern = "div.productR>ul>li";
    var text = "";

    $(textPattern).each(function(i, e) {
        text += $(e).text().replace(/[,\s]+/g, " ");
    });

    writeInfos(TEXTINFO, text);
}

module.exports = getText;
