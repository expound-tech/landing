const relative = require('./relative-path.cjs');

module.exports = function ({page}) {
  return `
<nav>
  <a href="${relative(page.url, '/')}">Install / 安装</a>
  <a href="${relative(page.url, '/setting')}">Setting / 配置</a>
  <a href="${relative(page.url, '/dev')}">Dev / 开发环境</a>
  <a href="${relative(page.url, '/software')}">Software / 日常使用</a>
</nav>`;
};
