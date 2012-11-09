describe("ObjectEditor", function() {  
  var editor;
  jasmine.getFixtures().fixturesPath = 'fixtures';

  describe("#updateBackgroundImage", function() {
    beforeEach(function() {
      editor = new ObjectEditor();
    });
    
    it("updates the given element's background image", function() {      
      loadFixtures('object-editor.html');
      
      var element = $('div#element');
            
      var file = new Blob();
      
      String.prototype.match = jasmine.createSpy().andReturn(true);
                  
      var objectEditor = new ObjectEditor;
      objectEditor.fileReader.result = fakeDataURL;
      objectEditor.fileReader.readAsDataURL = jasmine.createSpy();
                  
      objectEditor.updateBackgroundImage(element, file);
            
      expect($(element).css("background-image"))
        .toEqual("url(" + fakeDataURL + ")");
    });
  });
});