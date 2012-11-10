describe("ObjectEditor", function() {  
  var objectEditor, element, file;
  jasmine.getFixtures().fixturesPath = 'fixtures';

  beforeEach(function () {
    objectEditor = new ObjectEditor();
  });

  describe("updateBackgroundImage()", function() {
    beforeEach(function() {
      loadFixtures('object-editor.html');
      element = $('div#element');
      file = new Blob();
      String.prototype.match = jasmine.createSpy().andReturn(true);

      objectEditor.fileReader.result = fakeDataURL;
      objectEditor.fileReader.readAsDataURL = jasmine.createSpy();
    });
    
    it("updates the given element's background image from a selected file", function() {
      objectEditor.updateBackgroundImage(element, file);

      var actualBgImage = $(element).css("background-image");
      var expectedBgImage = "url(" + fakeDataURL + ")";
      expect(actualBgImage).toEqual(expectedBgImage);
    });
  });
});