var siteUrl = "http://www.saekodive-taiwan.com.tw/";

function getTextPaths($, callback) {
    var productUrlPattern = "div.album>a";
    var textPaths = [];

    $(productUrlPattern).each(function(i, e) {
        textPaths.push(fullPath($(e).attr("href")));
    });

    callback(textPaths);
}

function fullPath(url) {
    return siteUrl + url;
}

module.exports = getTextPaths;
