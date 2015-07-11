function getTitles($, callback) {
    var productTitlePattern = "div.album>p";
    var titles = [];

    $(productTitlePattern).each(function(i, e) {
        titles.push($(e).text().trim());
    });

    callback(titles);
}

module.exports = getTitles;
