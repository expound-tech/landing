const header = require('./header.11ty.cjs');
const footer = require('./footer.11ty.cjs');
const nav = require('./nav.11ty.cjs');
const relative = require('./relative-path.cjs');

module.exports = function (data) {
  const {title, page, content} = data;
  return `
<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>

    <!-- favicon files -->
    <link rel="apple-touch-icon" sizes="180x180" href="${relative(page.url, '/favicon/apple-touch-icon.png')}">
    <link rel="icon" type="image/png" sizes="32x32" href="${relative(page.url, '/favicon/favicon-32x32.png')}">
    <link rel="icon" type="image/png" sizes="16x16" href="${relative(page.url, '/favicon/favicon-16x16.png')}">
    <link rel="shortcut icon" href="${relative(page.url, '/favicon/favicon.ico')}">
    <link rel="manifest" href="${relative(page.url, '/favicon/site.webmanifest')}">

    <link rel="stylesheet" href="${relative(page.url, '/index.css')}">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Roboto+Mono">
    <script src="${relative(page.url, 
      '/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js')}"></script>
    <script src="${relative(page.url, 
      '/node_modules/lit/polyfill-support.js')}"></script>
    <script type="module" src="${relative(
      page.url,
      '/node_modules/guide-steps/docs/guide-steps.bundled.js'
    )}"></script>
  </head>
  <body>
    <div id="main-wrapper">
      <main>
        ${content}
      </main>
    </div>
    ${footer()}
  </body>
</html>`;
};
