var path = require("path");
var cheerio = require("cheerio");

var downloadImg = require("./downloadImg");
var writeInfos = require("./writeInfos");

var fetchWebPage = require("./fetchWebPage");
var getTitles = require("./getTitles");
var getImgPaths = require("./getImgPaths");
var getTextPaths = require("./getTextPaths");
var getText = require("./getText");

// constants from writeInfos
var TITLEINFO = 1,
    IMGINFO = 2,
    TEXTINFO = 3;

function writeProductsSinglePage(productListUrl) {
    fetchWebPage(productListUrl, function(data) {
        var $ = cheerio.load(data);

        getTitles($, function(titles) {
            writeInfos(TITLEINFO, titles);
        });

        getImgPaths($, function(imgPaths) {
            imgPaths.forEach(function(imgPath) {
                downloadImg(imgPath);
            });

            var imgPathsWithoutExt = imgPaths.map(getImgNameWithoutExt);
            writeInfos(IMGINFO, imgPathsWithoutExt);
        });

        getTextPaths($, function(textPaths) {
            textPaths.forEach(function(textPath) {
                fetchWebPage(textPath, getText);
            });
        });
    });
}

function getImgNameWithoutExt(imgPath) {
    return path.basename(imgPath).replace(".jpg", "");
}


module.exports = writeProductsSinglePage;
