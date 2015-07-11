function getImgPaths($, callback) {
    var productImgPattern = "div.album>a>img";
    var imgPaths = [];

    $(productImgPattern).each(function(i, e) {
        imgPaths.push($(e).attr("src"));
    });

    callback(imgPaths);
}

module.exports = getImgPaths;
