const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy('src/index.css');
  eleventyConfig.addPassthroughCopy(
    'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'
  );
  eleventyConfig.addPassthroughCopy('node_modules/lit/polyfill-support.js');
  eleventyConfig.addPassthroughCopy('node_modules/guide-steps/docs/guide-steps.bundled.js');
  return {
    dir: {
      input: 'src',
      output: 'static',
    },
    templateExtensionAliases: {
      '11ty.cjs': '11ty.js',
      '11tydata.cjs': '11tydata.js',
    },
  };
};
