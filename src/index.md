---
layout: page.11ty.cjs
title: <guide-steps> ⌲ Home
---

# &lt;guide-steps>

`<guide-steps>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<guide-steps>` is just an HTML element. You can it anywhere you can use HTML!

```html
<guide-steps></guide-steps>
```

  </div>
  <div>

<guide-steps></guide-steps>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<guide-steps>` can be configured with attributed in plain HTML.

```html
<guide-steps name="HTML"></guide-steps>
```

  </div>
  <div>

<guide-steps name="HTML"></guide-steps>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<guide-steps>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;guide-steps&gt;</h2>
    <guide-steps .name=${name}></guide-steps>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;guide-steps&gt;</h2>
<tabs-element name="lit-html"></tabs-element>

  </div>
</section>
