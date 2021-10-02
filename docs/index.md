# css-device-frames

[![NPM](https://img.shields.io/npm/v/css-device-frames.svg?style=flat-square)](https://www.npmjs.com/package/css-device-frames)
[![GitHub Workflow Status (master)](https://img.shields.io/github/workflow/status/jhildenbiddle/css-device-frames/Build/master?label=checks&style=flat-square)](https://github.com/jhildenbiddle/css-device-frames/actions?query=branch%3Amaster+)
[![Codacy grade](https://img.shields.io/codacy/grade/250567c7cf2047999f0ff2bba69a45a6?style=flat-square)](https://app.codacy.com/gh/jhildenbiddle/css-device-frames/dashboard)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/jhildenbiddle/css-device-frames/blob/master/LICENSE)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/css-device-frames/badge)](https://www.jsdelivr.com/package/npm/css-device-frames)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fjhildenbiddle%2Fcss-device-frames&hashtags=css,developers,frontend)

A collection of single-element, CSS-only application and device frames with support for multiple themes, customization via CSS custom properties, grid-based layouts, `<iframe>` elements, and scrolling content.

- [Codepen Demo](https://codepen.io/jhildenbiddle/pen/zYzmzqX)

#### Examples

<div class="frame-grid">
  <figure>
    <div class="app-frame mac centered" data-title="Title"></div>
    <figcaption>macOS theme</figcaption>
  </figure>

  <figure>
    <div class="app-frame win" data-title="Title"></div>
    <figcaption>Windows theme</figcaption>
  </figure>

  <figure>
    <div class="app-frame dark mac centered" data-url="my-domain.com"></div>
    <figcaption>macOS dark theme</figcaption>
  </figure>

  <figure>
    <div class="app-frame custom win" data-url="my-domain.com"></div>
    <figcaption>Custom Windows dark theme</figcaption>
  </figure>

  <figure>
    <div class="padded-light">
      <div class="app-frame wireframe mac" data-url="my-domain.com"></div>
    </div>
    <figcaption>macOS wireframe theme<br>on light gradient background</figcaption>
  </figure>

  <figure>
    <div class="padded-custom">
      <div class="app-frame wireframe win custom" data-url="my-domain.com"></div>
    </div>
    <figcaption>Custom Windows wireframe theme<br>on dark gradient background</figcaption>
  </figure>
</div>

?> Additional frames for phone, tablet, laptop, and desktop may be added in the future based on interest in the project. See [roadmap](#roadmap) for details.

## Features

- Single-element application and device frames
- Multiple themes and style options
- Customization via [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- Fluid and responsive frames
- [CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) support for frame content
- Scrollable frame content
- `<iframe>` support for external frame content

#### Browser Support

<img src="assets/img/chrome.svg" style="margin-right: 0.4em; vertical-align: text-bottom;"> Chrome 71+
<br>
<img src="assets/img/edge.svg" style="margin-right: 0.4em; vertical-align: text-bottom;"> Edge 80+
<br>
<img src="assets/img/firefox.svg" style="margin-right: 0.4em; vertical-align: text-bottom;"> Firefox 64+
<br>
<img src="assets/img/safari.svg" style="margin-right: 0.4em; vertical-align: text-bottom;"> Safari 12.1+
<br>
<img src="assets/img/ie.svg" style="margin-right: 0.4em; vertical-align: text-bottom;"> Not supported

## Installation

#### NPM

```bash
npm install css-device-frames
```

#### CDN

Please note the `@1` version lock in the URL below. This prevents breaking changes in new versions from affecting your project. When a new major version is released, you will need to manually update your CDN URLs by changing the version after the `@` symbol.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/css-device-frames@1/dist/device-frames.css">
```

#### Git

```bash
# Clone repo
git clone https://github.com/jhildenbiddle/css-device-frames.git

# Change directory
cd css-device-frames

# Development (build & watch)
npm start
```

Project documentation is available at [http://localhost:3000](http://localhost:3000) during development.

## Usage

1. Add the CSS Device Frames stylesheet to project. See [Installation](#installation) for details on loading from a CDN.

   ```html
   <link rel="stylesheet" href="path/to/device-frames.css">
   ```

   ```css
   @import "path/to/device-frames.css";
   ```

   ```scss
   // Sass 1.2.3+
   @use "path/to/device-frames.css";
   ```

1. Apply the `app-frame` CSS class to any HTML element (excluding [replaced elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)).

   <div class="frame-grid">
     <div class="app-frame">
       Hello, World!
     </div>
     <figure class="app-frame">
       <img src="assets/img/picture.svg" loading="lazy" alt="Mountains and a sunny sky">
     </figure>
   </div>

   ```html
   <div class="app-frame">
     Hello, World!
   </div>

   <figure class="app-frame">
     <img src="assets/img/picture.svg" alt="Mountains and a sunny sky">
   </figure>
   ```

1. Apply additional [theme classes](#themes) to modify the frame style.

   <div class="frame-grid">
     <div class="app-frame mac dark">
       Hello, World!
     </div>
     <figure class="app-frame win borderless">
       <img src="assets/img/picture.svg" loading="lazy" alt="Mountains and a sunny sky">
     </figure>
   </div>

   ```html
   <!-- Apply "mac" and "dark" themes -->
   <div class="app-frame mac dark">
     Hello, World!
   </div>

   <!-- Apply "win" and "borderless" themes -->
   <figure class="app-frame win borderless">
     <img src="assets/img/picture.svg" alt="Mountains and a sunny sky">
   </figure>
   ```

1. Add a frame [title](#titles) or [URL](#urls) bar using `data-` attributes.

   <div class="frame-grid">
     <div class="app-frame mac dark" data-url="my-domain.com">
       Hello, World!
     </div>
     <figure class="app-frame win borderless" data-title="Borderless Image">
       <img src="assets/img/picture.svg" loading="lazy" alt="Mountains and a sunny sky">
     </figure>
   </div>

   ```html
   <!-- Title -->
   <div class="app-frame mac dark" data-url="my-domain.com">
     Hello, World!
   </div>

   <!-- URL -->
   <figure class="app-frame win borderless" data-title="Borderless Image">
     <img src="assets/img/picture.svg" alt="Mountains and a sunny sky">
   </figure>
   ```

1. Review the [Content](#content) for content alignment/justification, grid-based layouts, and scrolling content.

   <div class="frame-grid">
     <div class="app-frame mac dark scrolling" data-url="my-domain.com">
       <div style="height: 12em;">
          <p style="margin-top: 0;">Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every "superstar," every "supreme leader," every saint and sinner in the history of our species lived there--on a mote of dust suspended in a sunbeam.</p>
          <p>Carl Sagan - <em>Pale Blue Dot</em></p>
       </div>
     </div>
   </div>

   ```html
   <!-- Apply "scrolling" class and "height" value -->
   <div class="app-frame mac dark scrolling" data-url="my-domain.com">
     <div style="height: 12em;">
       ...
     </div>
   </div>
   ```

1. Customize frame styles using CSS custom properties (see [Customization](#customization) for details).

   <div class="frame-grid">
     <div class="app-frame mac custom scrolling" data-url="my-domain.com">
       <div style="height: 12em;">
          <p style="margin-top: 0;">Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every "superstar," every "supreme leader," every saint and sinner in the history of our species lived there--on a mote of dust suspended in a sunbeam.</p>
          <p>Carl Sagan - <em>Pale Blue Dot</em></p>
       </div>
     </div>
   </div>

   ```html
   <!-- Apply "custom" theme -->
   <div class="app-frame mac custom scrolling" data-url="my-domain.com">
     ...
   </div>
   ```

   ```css
   .app-frame.custom {
     --bar-background: #475569;
     --border-color  : #64748b;
     --button-color  : #94a3b8;
     --color         : #e2e8f0;
     --title-color   : #cbd5e1;
     --url-background: var(--border-color);
     --url-color     : #cbd5e1;
   }
   ```

## Application Frame

### Themes

#### Generic

<div class="frame-grid">
  <div class="app-frame"></div>
</div>

```html
<div class="app-frame"></div>
```

#### macOS / Windows

<div class="frame-grid">
  <figure>
    <div class="app-frame mac"></div>
    <figcaption>macOS theme</figcaption>
  </figure>
  <figure>
    <div class="app-frame win"></div>
    <figcaption>Windows theme</figcaption>
  </figure>
</div>

```html
<div class="app-frame mac"></div>
<div class="app-frame win"></div>
```

#### Wireframe

<div class="frame-grid">
  <figure>
    <div class="app-frame mac wireframe"></div>
    <figcaption>macOS + wireframe theme</figcaption>
  </figure>
  <figure>
    <div class="app-frame win wireframe"></div>
    <figcaption>Windows + wireframe theme</figcaption>
  </figure>
</div>

```html
<div class="app-frame mac wireframe"></div>
<div class="app-frame win wireframe"></div>
```

#### Dark Mode

<div class="frame-grid">
  <figure>
    <div class="app-frame mac dark"></div>
    <figcaption>macOS + dark theme</figcaption>
  </figure>
  <figure>
    <div class="app-frame win dark"></div>
    <figcaption>Windows + dark theme</figcaption>
  </figure>
  <figure>
    <div class="padded-dark">
      <div class="app-frame mac wireframe dark"></div>
    </div>
    <figcaption>macOS + dark + wireframe theme</figcaption>
  </figure>
  <figure>
    <div class="padded-dark">
      <div class="app-frame win wireframe dark"></div>
    </div>
    <figcaption>Windows + dark + wireframe theme</figcaption>
  </figure>
</div>

```html
<div class="app-frame mac dark"></div>
<div class="app-frame win dark"></div>
<div class="app-frame mac dark wireframe"></div>
<div class="app-frame win dark wireframe"></div>
```

#### Borderless

<div class="frame-grid">
  <div class="app-frame mac borderless" data-title="Borderless <img>" style="aspect-ratio: auto;">
    <img src="assets/img/picture.svg" loading="lazy">
  </div>

  <div class="app-frame mac borderless" data-title="Borderless <video>" style="aspect-ratio: auto;">
    <video controls>
      <source src="assets/video/flower.mp4" type="video/mp4">
      Your browser does not support embedded video.
    </video>
  </div>

  <div class="app-frame mac borderless centered" data-url="https://maps.google.com" style="aspect-ratio: auto; grid-column: 1 / -1;">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220448.69731409336!2d-97.89348304107021!3d30.307982706219175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1632940060066!5m2!1sen!2sus" width="100%" height="300" loading="lazy"></iframe>
  </div>
</div>

```html
<!-- Image -->
<div class="app-frame mac borderless" data-title="Borderless <img>">
  <img src="path/to/image.svg">
</div>

<!-- Video -->
<div class="app-frame mac borderless" data-title="Borderless <video>">
  <video controls>
    <source src="path/to/movie.mp4" type="video/mp4">
    Your browser does not support embedded video.
  </video>
</div>

<!-- Iframe -->
<div class="app-frame mac borderless" data-url="https://maps.google.com">
  <iframe src="..." width="100%" height="300" loading="lazy"></iframe>
</div>
```

### Titles

<div class="frame-grid">
  <figure>
    <div class="app-frame mac" data-title="Title"></div>
    <figcaption>macOS theme</figcaption>
  </figure>
  <figure>
    <div class="app-frame win" data-title="Title"></div>
    <figcaption>Windows theme</figcaption>
  </figure>
  <figure style="grid-column: 1 / -1;">
    <div class="app-frame mac centered" data-title="Title"></div>
    <figcaption>macOS theme + centered title</figcaption>
  </figure>
</div>

```html
<div class="app-frame mac" data-title="Title"></div>
<div class="app-frame win" data-title="Title"></div>
<div class="app-frame mac centered" data-title="Title"></div>
```

### URLs

<div class="frame-grid">
  <figure>
    <div class="app-frame mac" data-url="my-domain.com"></div>
    <figcaption>macOS theme</figcaption>
  </figure>
  <figure>
    <div class="app-frame win" data-url="my-domain.com"></div>
    <figcaption>Windows theme</figcaption>
  </figure>
  <figure style="grid-column: 1 / -1;">
    <div class="app-frame mac centered" data-url="my-domain.com"></div>
    <figcaption>macOS theme + centered URL</figcaption>
  </figure>
</div>

```html
<div class="app-frame mac" data-url="my-domain.com"></div>
<div class="app-frame win" data-url="my-domain.com"></div>
<div class="app-frame mac centered" data-url="my-domain.com"></div>
```

### Content

#### Grid

<div class="frame-grid">
  <figure>
    <div class="app-frame mac centered" data-title="Centered" style="
        display: grid;
        align-items: center;
        justify-items: center;
        min-height: 200px;
      ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 32 376.4 449.4" width="32" height="32" fill="rgba(0, 0, 0, 0.1)"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
    </div>
  </figure>
</div>

```css
.app-frame {
  display: grid;
  align-items: center;
  justify-items: center;
}
```

<div class="frame-grid">
  <figure>
    <div class="app-frame mac centered" data-title="Columns & Rows" style="
      --grid-columns: 1fr 1fr;
      --grid-rows: 1fr auto;
      display: grid;
      align-items: stretch;
      min-height: 200px;
      text-align: center;
    ">
      <div style="background: #f1f5f9;">Left</div>
      <div style="background: #e2e8f0;">Right</div>
      <div style="grid-column: 1/-1; background: #cbd5e1;">Bottom</div>
    </div>
  </figure>
</div>

```css
.app-frame {
  --grid-columns: 1fr 1fr;
  --grid-rows: 1fr auto;

  display: grid;
  align-items: stretch;
  min-height: 200px;
  text-align: center;
}
```

```html
<div class="app-frame mac centered" data-title="Columns & Rows">
  <div style="background: #f1f5f9;">Left</div>
  <div style="background: #e2e8f0;">Right</div>
  <div style="grid-column: 1/-1; background: #cbd5e1;">Bottom</div>
</div>
```

#### Scrolling

<div class="app-frame mac centered scrolling" data-title="Scrolling" style="height: 15em;">
  <div>
    <img src="assets/img/picture.svg" loading="lazy" style="float: right; width: 40%; margin: 0 0 1em 2em; border-radius: 5px;">
    <p style="margin-top: 0;">Assumenda iure accusamus. Debitis ad iste. Tempore dignissimos consequatur. Voluptatem ut reiciendis fugiat. Qui et cumque sit vel quis dolorem harum animi. Quaerat atque voluptatem consequatur quas sed omnis alias qui.</p>
    <p>Officiis assumenda magnam consectetur possimus atque. Earum repudiandae aliquam nesciunt  possimus ratione est distinctio dolores enim. Totam nisi praesentium est voluptatem velit quo.</p>
    <img src="assets/img/picture.svg" loading="lazy" style="float: left; width: 40%; margin: 0 2em 1em 0; border-radius: 5px;">
    <p>Voluptatibus totam omnis corrupti consequatur consequatur. Aut animi dignissimos quo numquam libero amet amet eos. Ducimus soluta corporis illo sapiente illo cumque voluptate voluptatem rerum. Voluptatem earum ratione tempore. Quam dolor sunt quo.</p>
    <p>A culpa esse dolores et qui. Dolores saepe rerum. In eos ut magnam eius. Sint dicta quidem nihil id ipsum ea repellendus ut. Quisquam ipsa labore veritatis quia occaecati temporibus ratione a. Nobis possimus pariatur perspiciatis. Eius tempora distinctio et et accusantium modi aliquid praesentium ut. Ut et quibusdam nesciunt labore.</p>
  </div>
</div>

```html
<div class="app-frame mac scrolling" style="height: 15em;">
  <div>
    ...
  </div>
</div>
```

```html
<div class="app-frame mac scrolling">
  <div style="height: 250px;">
    ...
  </div>
</div>
```

### Customization

<!-- [defaults.css](https://raw.githubusercontent.com/jhildenbiddle/css-device-frames/master/src/defaults.css ':include') -->

```css
/* Defaults
============================================================================= */
.app-frame {
  --background       : #fff;
  --bar-background   : #f7f7f7 linear-gradient(to bottom, #f7f7f7, #f2f2f2);
  --bar-height       : 44px;
  --border-color     : #e3e3e3;
  --border-radius    : 8px;
  --border-width     : 1px;
  --box-shadow       : rgba(0, 0, 0, 0.08) 0px 10px 15px -3px, rgba(0, 0, 0, 0.03) 0px 4px 6px -2px;
  --button-color     : initial;
  --color            : initial;
  --grid-columns     : auto;
  --grid-rows        : auto;
  --padding-h        : 20px;
  --padding-v        : 20px;
  --title            : initial;
  --title-color      : #222;
  --title-size       : 0.875em;
  --title-weight     : 600;
  --url              : initial;
  --url-background   : #fff;
  --url-border-radius: calc(var(--border-radius) * 0.6);
  --url-border-width : 1px;
  --url-color        : #999;
}
```

## Roadmap

?> Version 1.x includes support for application frames only. Additional frames (see below) may be added based on interest. Add a ⭐️ [star on GitHub](https://github.com/jhildenbiddle/css-device-frames), 🐦 [tweet](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fjhildenbiddle%2Fcss-device-frames&hashtags=css,developers,frontend) about the project, or create a 💬 [Github issue](https://github.com/jhildenbiddle/css-device-frames/issues) to support the project!

- [x] Application frames
  - [x] macOS theme
  - [x] Windows theme
  - [x] Dark theme
  - [x] Wireframe theme
  - [x] Borderless theme
  - [x] Title option
  - [x] URL option
  - [x] `<iframe>` support
  - [x] CSS Grid support
  - [ ] Web component
    - [ ] Detect and set OS theme (mac/win)
- [ ] Phone frame
- [ ] Tablet frame
- [ ] Laptop frame
- [ ] Desktop frame

## Support

- Create a 💬 [Github issue](https://github.com/jhildenbiddle/css-device-frames/issues) for bug reports, feature requests, or questions
- Follow [@jhildenbiddle](https://twitter.com/jhildenbiddle) for announcements
- Add a ⭐️ [star on GitHub](https://github.com/jhildenbiddle/css-device-frames) or 🐦 [tweet](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fjhildenbiddle%2Fcss-device-frames&hashtags=css,developers,frontend) to support the project!

## License

This project is licensed under the MIT License. See the [MIT LICENSE](https://github.com/jhildenbiddle/css-device-frames/blob/master/LICENSE) for details.

Copyright (c) John Hildenbiddle ([@jhildenbiddle](https://twitter.com/jhildenbiddle))
