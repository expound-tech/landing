const relative = require('./relative-path.cjs');

module.exports = function ({page}) {
  return `
<nav>
  <a href="${relative(page.url, '/')}">🚀 安装 <small> / Install</small></a>
  <a href="${relative(page.url, '/setting')}">🛠️ 配置 <small> / Setting</small></a>
  <a href="${relative(page.url, '/code')}">🦾 开发环境 <small> / Code</small></a>
  <a href="${relative(page.url, '/software')}">🍻 日常使用 <small> / Software</small></a>
</nav>`;
};
