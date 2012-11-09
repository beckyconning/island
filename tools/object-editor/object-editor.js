var ObjectEditor = function() {};

ObjectEditor.prototype.updateBackgroundImage = function(element, file) {
  if(typeof FileReader == "undefined") return true;
  
  
  if (file.type.match('image.*')) {
    var self = this;
    self.fileReader.onload = function(file) {
      var image = self.fileReader.result;
      element.css("backgroundImage", "url(" + image + ")");
    }(file);
    self.fileReader.readAsDataURL(file);
  }
};

ObjectEditor.prototype.fileReader = function() {
  this.prototype = new FileReader();
}

if (typeof(module) !== 'undefined') { module.exports = ObjectEditor; }
