var CukeStallSupport = function CukeStallSupport() {
  if (typeof window == 'undefined')
    return; // do not run outside of browsers

  // --- WORLD ---

  var CukeStallWorld = function CukeStallWorld(callback) {
    this.browser = new window.CukeStall.FrameBrowser('#cucumber-browser');
    this.runInSequence(
      this.cleanUp,
      callback
    );
  };

  this.World = CukeStallWorld;

  // DSL



module.exports = CukeStallSupport;