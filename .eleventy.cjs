const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy('site-src/index.css');
  eleventyConfig.addPassthroughCopy('site-src/.nojekyll');
  eleventyConfig.addPassthroughCopy(
    'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'
  );
  eleventyConfig.addPassthroughCopy('node_modules/lit/polyfill-support.js');
  return {
    dir: {
      input: 'site-src',
      output: 'site',
    },
    templateExtensionAliases: {
      '11ty.cjs': '11ty.js',
      '11tydata.cjs': '11tydata.js',
    },
  };
};
