var openDocument = app.activeDocument;

var fillLayer = openDocument.layers[0];

var newDocument = app.documents.add();
newDocument.name = "Testing Document Creation";

var pages = newDocument.pages;
var layers = newDocument.layers;

var pageItems = newDocument.pageItems;

var pageItemOne = pageItems[1];
$.writeln(pageItemOne);
var swatches = app.swatches;

for(var i = 0; i < swatches.length; i++) {
    $.writeln(swatches[i]);
    }
//pageItemOne.fillColor = swatches[0];

var newPage = pages.add();
var newLayer = newDocument.layers.add();
newLayer = "My new layer";

var rectangleLayer = newPage.rectangles.add(newLayer);

$.writeln(pages);
$.writeln(layers);

var titleTextFrame = newPage.textFrames.add(newLayer);
titleTextFrame.contents = "Page Title";
titleTextFrame.geometricBounds = [3, 3, 10, 50];

var contentTextFrame = newPage.textFrames.add(newLayer);
var generatedContents = generateContents(300);
contentTextFrame.contents = generatedContents;
contentTextFrame.geometricBounds = [10, 3, 50, 48];

//titleTextFrame.createPlainTextQRCode("0x63c70f3d0aB34F2de6afA872f2E1E39B73cBE794");


function generateContents(numWords) {
        var inputFile = File("~/Desktop/Louis the Pious reign as Emperor was unexpected.txt");
        
        var inputData;
        inputFile.open("r");
        inputData = inputFile.read().toString();
        inputFile.close();
        
        inputData = inputData.replace(/'/g, "");
        inputData = inputData.replace(/`/g, "");
        inputData = inputData.replace(/\./g, "");
        inputData = inputData.replace(/\,/g, "");
        inputData = inputData.replace(/-/g, "");
        inputData = inputData.replace(/\?/g, "");
        inputData = inputData.replace(/!/g, "");
        inputData = inputData.replace(/\[/g, "");
        inputData = inputData.replace(/]/g, "");
        inputData = inputData.replace(/0/g, "");
        inputData = inputData.replace(/1/g, "");
        inputData = inputData.replace(/2/g, "");
        inputData = inputData.replace(/3/g, "");
        inputData =  inputData.replace(/4/g, "");
        inputData = inputData.replace(/5/g, "");
        inputData = inputData.replace(/6/g, "");
        inputData = inputData.replace(/7/g, "");
        inputData = inputData.replace(/8/g, "");
        inputData = inputData.replace(/9/g, "");
        inputData = inputData.split(" ");
        
        var wordArray = [];
        
        for(var i = 1; i <= numWords; i++) {
            wordArray.push(inputData[Math.floor(Math.random() * inputData.length)]);
            }
        
        return wordArray.toString().replace(/\,/g, " ");
    }