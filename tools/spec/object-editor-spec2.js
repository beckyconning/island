describe("ObjectEditor2", function() {
  var objectEditor, FileReaderObject, fileReader, file, element;
  jasmine.getFixtures().fixturesPath = 'fixtures';

  beforeEach(function () {
    FileReaderObject = jasmine.createSpy("FileReader");
    fileReader = jasmine.createSpy("fileReader instance");
    fileReader.readAsDataURL = jasmine.createSpy("readAsDataURL method");

    fileReader.result = fakeDataURL;
    element = jasmine.createSpy("element");
    element.css = jasmine.createSpy("css method");

    FileReaderObject.andReturn(fileReader);

    file = jasmine.createSpy("file");
    file.type = {};
    file.type.match = jasmine.createSpy("match method");

    objectEditor = ObjectEditor2(FileReaderObject);
  });

  describe("constructor", function () {
    describe("when FileReader object doesn't exist", function () {
      beforeEach(function () {
        FileReaderObject = undefined;
      });

      it("returns a true", function () {
        objectEditor = ObjectEditor2(FileReaderObject);

        expect(objectEditor).toBe(true);
      });
    });

    describe("when FileReader object exists", function () {
      beforeEach(function () {
        FileReaderObject = jasmine.createSpy("FileReader");
      });

      it("returns an ObjectEditor2", function () {
        objectEditor = ObjectEditor2(FileReaderObject);

        expect(objectEditor.toString()).toEqual("[object ObjectEditor2]");
      });
    });
  });

  describe("updateBackgroundImage()", function () {

    describe("when the match finds what its looking for", function () {
      beforeEach(function () {
        file.type.match.andReturn(true);
      });

      it("sets the onload of the FileReader instance to onFileRead method", function () {
        objectEditor.updateBackgroundImage(element, file);

        expect(fileReader.onload).toEqual(objectEditor.onFileRead);
      });

      it("tells the FileReader instance to read as data url", function () {
        objectEditor.updateBackgroundImage(element, file);

        expect(fileReader.readAsDataURL).toHaveBeenCalledWith(file);
      });
    });

    describe("when the match does not find what its looking for", function () {
      beforeEach(function () {
        file.type.match.andReturn(false);
      });

      it("does not set the onload callback of the FileReader instance", function () {
        objectEditor.updateBackgroundImage(element, file);

        expect(fileReader.onload).not.toEqual(objectEditor.onFileRead);
      });

      it("does not tell the FileReader instance to read as data url", function () {
        objectEditor.updateBackgroundImage(element, file);

        expect(fileReader.readAsDataURL).not.toHaveBeenCalled();
      });
    });
  });

  describe("onFileRead()", function () {
    beforeEach(function () {
    });

    it("sets the target element's backgroundImage css property to the url of the file it read", function () {
      file.type.match.andReturn(true);
      objectEditor.updateBackgroundImage(element, file);

      objectEditor.onFileRead(file);

      var expectedUrl = "url(" + fakeDataURL + ")";
      expect(element.css).toHaveBeenCalledWith("backgroundImage", expectedUrl);
    });
  });
});