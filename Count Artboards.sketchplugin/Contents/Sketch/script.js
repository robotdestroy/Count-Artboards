          var onRun = function(context) {
          var sketch = require('sketch');
var UI = require('sketch/ui');
const documentData = sketch.getSelectedDocument().sketchObject.documentData();
if (documentData.allArtboards().count() > 1) {
    UI.message("There are " + documentData.allArtboards().count() + " artboards in this document.");
} else if (documentData.allArtboards().count() == 1) {
    UI.message("You have one artboard in this document.");
} else if (documentData.allArtboards().count() == 0) {
    UI.message("You do not yet have any artboards in this document.");
} else {
    UI.message("Something unusual has happened.");
}
          };
          
