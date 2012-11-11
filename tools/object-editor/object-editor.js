var ObjectEditor = function(FileReader) {
  var fileReader, elementToUpdate;

  if (typeof FileReader === "undefined") {
    return true;
  } else {
    fileReader = new FileReader();
  }

  var self = {
    updateBackgroundImage: function updateBackgroundImage(element, file) {
      if (file.type.match('image.*')) {
        elementToUpdate = element;
        fileReader.onload = self.onFileRead;
        fileReader.readAsDataURL(file);
      }
    },

    onFileRead: function onFileRead(file) {
      var image = fileReader.result;
      elementToUpdate.css("backgroundImage", "url(" + image + ")");
    },

    toString: function toString() {
      return "[object ObjectEditor]";
    }
  };

  return self;
};

//ObjectEditor.prototype.updateBackgroundImage = function(element, file) {
//  if(typeof FileReader == "undefined") return true;
//
//
//  if (file.type.match('image.*')) {
//    var self = this;
//    self.fileReader.onload = function(file) {
//      var image = self.fileReader.result;
//      element.css("backgroundImage", "url(" + image + ")");
//    }(file);
//    self.fileReader.readAsDataURL(file);
//  }
//};
//
//ObjectEditor.prototype.fileReader = function() {
//  this.prototype = new FileReader();
//}

if (typeof(module) !== 'undefined') { module.exports = ObjectEditor; }
