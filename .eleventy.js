const CleanCSS = require("clean-css");
const postcss = require('postcss')
const precss = require('precss')

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("date", require("./filters/dates.js") );

  return {
    dir: {
      input: "site",
      output: "dist",
      data: "_data"
    },
    feed: process.env.MEDIUM_FEED ||'https://medium.com/feed/netlify'
  };
  
};


module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");
  
  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  eleventyConfig.addPassthroughCopy("css/fonts");
};
