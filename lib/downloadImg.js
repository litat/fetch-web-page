var http = require("http");
var path = require("path");
var fs = require("fs");

var imgPathPrefix = "../img/";

function downloadImg(imgFullPath) {
    var fileName = getImgName(imgFullPath);

    http.get(imgFullPath, function(res) {
        var chunks = [];
        res.on("data", function(chunk) {
            chunks.push(chunk);
        });
        res.on("end", function() {
            var buffer = Buffer.concat(chunks);
            writeImgFile(fileName, buffer);
        });
        res.on("error", function(err) {
            console.error(err);
        });
    });
}

function writeImgFile(fileName, buffer) {
    fileName = imgPathPrefix + fileName;
    
    fs.writeFile(fileName, buffer, function(err) {
        if (err) throw err;
    });
}

function getImgName(imgPath) {
    return path.basename(imgPath);
}

module.exports = downloadImg;
