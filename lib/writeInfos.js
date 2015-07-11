var fs = require("fs");

var TITLEINFO = 1,
    IMGINFO = 2,
    TEXTINFO = 3;

var TITLEFILE = "title.csv",
    IMGFILE = "img.csv",
    TEXTFILE = "text.csv";

var fileNamePrefix = "../csv/";

function writeInfos(type, infos) {
    infos = formatInfos(infos);

    switch (type) {
        case TITLEINFO:
            writeCSV(TITLEFILE, infos);
            break;
        case IMGINFO:
            writeCSV(IMGFILE, infos);
            break;
        case TEXTINFO:
            writeCSV(TEXTFILE, infos);
            break;
        default:
            console.log("No info type matched.");
    }
}

function formatInfos(infos) {
    if (infos instanceof Array)
	return infos.join('\n');
    else
	return infos;
}

function writeCSV(fileName, infos) {
    fileName = fileNamePrefix + fileName;
    fs.appendFile(fileName, infos);
    fs.appendFile(fileName, '\n');
}

module.exports = writeInfos;
