var DocumentHelper = function(file) {
    var self = this;

    self.types = {
        "text/plain" : "text",
        "application/msword" : "word",
        "application/pdf" : "pdf",
        "application/zip" : "zip",
        "text/html" : "html",
        "video/mp4" : "video",
        "video/quicktime" : "video",
        "video/mpeg" : "video",
        "video/x-flv" : "video",
        "video/x-ms-wmv" : "video",
        "application/x-gzip":"zip",
        "application/x-zip-compressed":"zip",
        "application/html":"html",
        "application/vnd.ms-excel":"excel",
        "application/vnd.ms-powerpoint":"powerpoint",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" : "word",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template" : "word",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation" : "powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.slideshow" : "powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.template" : "powerpoint",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" : "excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template" : "excel",
        "image/jpeg" : "photo",
        "image/png" : "photo",
        "image/gif" : "photo",
        "image/tiff" : "photo",
        "image/bmp" : "photo"
    };

    self.extensions = {
        "jpg" : "photo",
        "png" : "photo",
        "gif" : "photo",
        "txt" : "text",
        "ppt":"powerpoint",
        "pptx":"powerpoint",
        "doc" : "word",
        "docx" : "word",
        "pdf" : "pdf",
        "zip" : "zip",
        "html" : "html",
        "htm" : "html",
        "mp4" : "video",
        "mpeg" : "video",
        "flv" : "video",
        "wmv" : "video",
        "mov" : "video",
        "xls": "excel",
        "xlsx": "excel",
        "dot" : "word",
        "dotx" : "word",
        "pot": "powerpoint",
        "potx": "powerpoint",
        "pps": "powerpoint",
        "ppsx": "powerpoint",
        "jpeg" : "photo",
        "gzip" : "zip",
        "tiff" : "photo",
        "tif" : "photo",
        "bmp" : "photo"
    };

    self.init = function(file) {
        self.file =  file;
    };

    self.fileType = function() {
        var fileType = "";
        if (typeof self.file === "object") {
            fileType = self.types[self.file.type];
        } else {
            var filepart = file.split(".");
            if (filepart.length > 0) {
                fileType = self.extensions[filepart[filepart.length-1].toLowerCase()];
            }
        }
        return fileType;
    };

    self.fileSize = function() {
        var rv = "";
        if (typeof self.file === "object") {
            var desc = ["B", "KB", "MB", "GB"];
            var size = self.file.size;
            var count = 0;
            do {
                size = size / 1024;
                count++;
            } while(size > 1024);
            rv = "(" + size.toFixed(1) + " " + desc[count % 4] + ")";
        }
        return rv;
    };

    self.init(file);
};

var file = "Hello.docx";
var documentHelper = new DocumentHelper(file);
console.log(file);
console.log(documentHelper.fileType());
