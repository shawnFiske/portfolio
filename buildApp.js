var fs = require("fs");
var browserify = require("browserify");
browserify(["./src/Main.js"])
  .transform("babelify", {presets: ["es2015"]})
  .bundle()
  .pipe(fs.createWriteStream("build/bundle.js"));