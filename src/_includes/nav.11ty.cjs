const relative = require('./relative-path.cjs');

module.exports = function ({page}) {
  return `
<nav>
  <a href="${relative(page.url, '/')}">Guide</a>
</nav>`;
};
