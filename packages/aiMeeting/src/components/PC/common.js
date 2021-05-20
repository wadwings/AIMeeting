import { connect, Global, css, styled } from "frontity";
import React from "react";
import Detail from "./detail";
import Guide from "./guide";
import Organization from "./organization";
import Review from "./review";
import Intro from "./intro";
import Routine from "./routine";
import Guest from "./guest";
import Sponsor from "./sponsor";
import Broadcast from "./broadcast";
import backgroundType1 from "../../assets/img/backgroundType1.png";
import backgroundType2 from "../../assets/img/backgroundType2.png";

let cache = new Map();
//{url: {
//  status: 'pending' | 'fuifilled' | 'rejected'
//  req: actions.source.fetch(url)
//}}
function fetch(url) {
  if (cache.has(url)) {
    const cur = cache.get(url);
    if (cur.status === "pending") {
      return cur.req;
    }
    return Promise.resolve(cur.result);
  }

  let req = frontity.actions.source.fetch(url);
  cache.set(url, {
    status: "pending",
    req,
  });
  // 外部调用时执行
  return req
    .then((res) => {
      cache.set(url, {
        status: "fulfilled",
        result: res,
      });
      return Promise.resolve(res); // 此行是否必要？
    })
    .catch((err) => {
      cache.set(url, {
        status: "rejected",
        result: err,
      });
      Promise.reject(err);
    });
}

const Title = (props) => {
  const { word, png } = props;
  return (
    <TitleFrame>
      <TitleImg src={png}></TitleImg>
      <TitleText>{word}</TitleText>
    </TitleFrame>
  );
};

const TitleText = styled.p({
  whiteSpace: 'nowrap',
  fontSize: '1.5rem'
})

const TitleImg = styled.img`
  height: inherit;
  padding: 0 0.8rem 0 0.2rem;
`;

const TitleFrame = styled.div({
  height: "2rem",
  padding: "0.5rem",
  position: "relative",
  fontSize: "1.5rem",
  color: "white",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0.5rem auto",
  border: "2px solid #041c45",
  borderRadius: "3rem",
  background: '#041c45'
});

const UnderLine = styled.div`
  width: 80vw;
  margin: 0 auto 1rem auto;
  border: 0.04rem #041c45 solid;
`;

const Main = styled.div({
  position: "relative",
  display: "flex",
  flexFlow: "column",
  width: "100%",
  margin: '0 auto',
  height: "calc(100vw / 16 * 9)",
  overflow: "hidden",
  '@media screen and (min-width: 1000px)': {
    height: '562.5px',
    width: '1000px',
  },
  '@media screen and (min-width: 2000px)': {
    height: '843.75px',
    width: '1500px'
  },
  '@media screen and (min-width: 3000px)': {
    height: '1125px',
    width: '2000px'
  }
});

const BgImg = styled.img({
  position: "absolute",
  top: "0",
  width: "100%",
  height: "100%",
  opacity: 0.4,
  zIndex: -1,
});

const MainBg1 = () => {
  return <BgImg src={backgroundType1} />;
};

const MainBg2 = () => {
  return <BgImg src={backgroundType2} />;
};

const PostUnconnect = (props) => {
  const { url, state } = props;
  const data = state.source.get(url);
  const post = state.source[data.type][data.id];
  return (
    <PostFrame>
      <PostBlock dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </PostFrame>
  );
};
const PostBlock = styled.div`
@charset "UTF-8";

/*
Theme Name: Twenty Twenty-One
Theme URI: https://wordpress.org/themes/twentytwentyone/
Author: the WordPress team
Author URI: https://wordpress.org/
Description: Twenty Twenty-One is a blank canvas for your ideas and it makes the block editor your best brush. With new block patterns, which allow you to create a beautiful layout in a matter of seconds, this theme’s soft colors and eye-catching — yet timeless — design will let your work shine. Take it for a spin! See how Twenty Twenty-One elevates your portfolio, business website, or personal blog.
Requires at least: 5.3
Tested up to: 5.7
Requires PHP: 5.6
Version: 1.3
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: twentytwentyone
Tags: one-column, accessibility-ready, custom-colors, custom-menu, custom-logo, editor-style, featured-images, footer-widgets, block-patterns, rtl-language-support, sticky-post, threaded-comments, translation-ready

Twenty Twenty-One WordPress Theme, (C) 2020 WordPress.org
Twenty Twenty-One is distributed under the terms of the GNU GPL.
*/

/**
 * SETTINGS
 * File-header..........The file header for the themes style.css file.
 * Fonts................Any font files, if the project needs specific fonts.
 * Global...............Project-specific, globally available variables.
 *
 * TOOLS
 * Functions............Global functions.
 * Mixins...............Global mixins.
 *
 * GENERIC
 * Normalize.css........Normalise browser defaults.
 * Breakpoints..........Mixins and variables for responsive styles
 * Vertical-margins.....Vertical spacing for the main components.
 * Reset................Reset specific elements to make them easier to style in other contexts.
 * Clearings............Clearings for the main components.
 *
 * ELEMENTS
 * Blockquote...........Default blockquote.
 * Forms................Element-level form styling.
 * Headings.............H1–H6
 * Links................Default links.
 * Lists................Default lists.
 * Media................Images, Figure, Figcaption, Embed, iFrame, Objects, Video.
 *
 * BLOCKS
 * Audio................Specific styles for the audio block.
 * Button...............Specific styles for the button block.
 * Code.................Specific styles for the code block.
 * Columns..............Specific styles for the columns block.
 * Cover................Specific styles for the cover block.
 * File.................Specific styles for the file block.
 * Gallery..............Specific styles for the gallery block.
 * Group................Specific styles for the group block.
 * Heading..............Specific styles for the heading block.
 * Image................Specific styles for the image block.
 * Latest comments......Specific styles for the latest comments block.
 * Latest posts.........Specific styles for the latest posts block.
 * Legacy...............Specific styles for the legacy gallery.
 * List.................Specific styles for the list block.
 * Media text...........Specific styles for the media and text block.
 * Navigation...........Specific styles for the navigation block.
 * Paragraph............Specific styles for the paragraph block.
 * Pullquote............Specific styles for the pullquote block.
 * Quote................Specific styles for the quote block.
 * Search...............Specific styles for the search block.
 * Separator............Specific styles for the separator block.
 * Spacer...............Specific styles for the spacer block.
 * Table................Specific styles for the table block.
 * Verse................Specific styles for the verse block.
 * Video................Specific styles for the video block.
 * Utilities............Block alignments.
 *
 * COMPONENTS
 * Header...............Header styles.
 * Footer...............Footer styles.
 * Comments.............Comment styles.
 * Archives.............Archive styles.
 * 404..................404 styles.
 * Search...............Search styles.
 * Navigation...........Navigation styles.
 * Footer Navigation....Footer Navigation styles.
 * Pagination...........Pagination styles.
 * Single...............Single page and post styles.
 * Posts and pages......Misc, sticky post styles.
 * Entry................Entry, author biography.
 * Widget...............Widget styles.
 * Editor...............Editor styles.
 *
 * UTILITIES
 * A11y.................Screen reader text, prefers reduced motion etc.
 * Color Palette........Classes for the color palette colors.
 * Editor Font Sizes....Editor Font Sizes.
 * Measure..............The width of a line of text, in characters.
 */

/* Categories 01 to 03 are the basics. */

/* Variables */
:root {

	/* Font Family */
	--global--font-primary: var(--font-headings, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
	--global--font-secondary: var(--font-base, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);

	/* Font Size */
	--global--font-size-base: 1.25rem;
	--global--font-size-xs: 1rem;
	--global--font-size-sm: 1.125rem;
	--global--font-size-md: 1.25rem;
	--global--font-size-lg: 1.5rem;
	--global--font-size-xl: 2.25rem;
	--global--font-size-xxl: 4rem;
	--global--font-size-xxxl: 5rem;
	--global--font-size-page-title: var(--global--font-size-xxl);
	--global--letter-spacing: normal;

	/* Line Height */
	--global--line-height-body: 1.7;
	--global--line-height-heading: 1.3;
	--global--line-height-page-title: 1.1;

	/* Headings */
	--heading--font-family: var(--global--font-primary);
	--heading--font-size-h6: var(--global--font-size-xs);
	--heading--font-size-h5: var(--global--font-size-sm);
	--heading--font-size-h4: var(--global--font-size-lg);
	--heading--font-size-h3: calc(1.25 * var(--global--font-size-lg));
	--heading--font-size-h2: var(--global--font-size-xl);
	--heading--font-size-h1: var(--global--font-size-page-title);
	--heading--letter-spacing-h6: 0.05em;
	--heading--letter-spacing-h5: 0.05em;
	--heading--letter-spacing-h4: var(--global--letter-spacing);
	--heading--letter-spacing-h3: var(--global--letter-spacing);
	--heading--letter-spacing-h2: var(--global--letter-spacing);
	--heading--letter-spacing-h1: var(--global--letter-spacing);
	--heading--line-height-h6: var(--global--line-height-heading);
	--heading--line-height-h5: var(--global--line-height-heading);
	--heading--line-height-h4: var(--global--line-height-heading);
	--heading--line-height-h3: var(--global--line-height-heading);
	--heading--line-height-h2: var(--global--line-height-heading);
	--heading--line-height-h1: var(--global--line-height-page-title);
	--heading--font-weight: normal;
	--heading--font-weight-page-title: 300;
	--heading--font-weight-strong: 600;

	/* Block: Latest posts */
	--latest-posts--title-font-family: var(--heading--font-family);
	--latest-posts--title-font-size: var(--heading--font-size-h3);
	--latest-posts--description-font-family: var(--global--font-secondary);
	--latest-posts--description-font-size: var(--global--font-size-sm);
	--list--font-family: var(--global--font-secondary);
	--definition-term--font-family: var(--global--font-primary);

	/* Colors */
	--global--color-black: #000;
	--global--color-dark-gray: #28303d;
	--global--color-gray: #39414d;
	--global--color-light-gray: #f0f0f0;
	--global--color-green: #d1e4dd;
	--global--color-blue: #d1dfe4;
	--global--color-purple: #d1d1e4;
	--global--color-red: #e4d1d1;
	--global--color-orange: #e4dad1;
	--global--color-yellow: #eeeadd;
	--global--color-white: #fff;
	--global--color-white-50: rgba(255, 255, 255, 0.5);
	--global--color-white-90: rgba(255, 255, 255, 0.9);
	--global--color-primary: var(--global--color-dark-gray);

	/* Body text color, site title, footer text color. */
	--global--color-secondary: var(--global--color-gray);

	/* Headings */
	--global--color-primary-hover: var(--global--color-primary);
	--global--color-background: var(--global--color-green);

	/* Mint, default body background */
	--global--color-border: var(--global--color-primary);

	/* Used for borders (separators) */

	/* Spacing */
	--global--spacing-unit: 20px;
	--global--spacing-measure: unset;
	--global--spacing-horizontal: 25px;
	--global--spacing-vertical: 30px;

	/* Elevation */
	--global--elevation: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);

	/* Forms */
	--form--font-family: var(--global--font-secondary);
	--form--font-size: var(--global--font-size-sm);
	--form--line-height: var(--global--line-height-body);
	--form--color-text: var(--global--color-dark-gray);
	--form--color-ranged: var(--global--color-secondary);
	--form--label-weight: 500;
	--form--border-color: var(--global--color-secondary);
	--form--border-width: 3px;
	--form--border-radius: 0;
	--form--spacing-unit: calc(0.5 * var(--global--spacing-unit));

	/* Cover block */
	--cover--height: calc(15 * var(--global--spacing-vertical));
	--cover--color-foreground: var(--global--color-white);
	--cover--color-background: var(--global--color-black);

	/* Buttons */
	--button--color-text: var(--global--color-background);
	--button--color-text-hover: var(--global--color-secondary);
	--button--color-text-active: var(--global--color-secondary);
	--button--color-background: var(--global--color-secondary);
	--button--color-background-active: var(--global--color-background);
	--button--font-family: var(--global--font-primary);
	--button--font-size: var(--global--font-size-base);
	--button--font-weight: 500;
	--button--line-height: 1.5;
	--button--border-width: 3px;
	--button--border-radius: 0;
	--button--padding-vertical: 15px;
	--button--padding-horizontal: calc(2 * var(--button--padding-vertical));

	/* entry */
	--entry-header--color: var(--global--color-primary);
	--entry-header--color-link: currentColor;
	--entry-header--color-hover: var(--global--color-primary-hover);
	--entry-header--color-focus: var(--global--color-secondary);
	--entry-header--font-size: var(--heading--font-size-h2);
	--entry-content--font-family: var(--global--font-secondary);
	--entry-author-bio--font-family: var(--heading--font-family);
	--entry-author-bio--font-size: var(--heading--font-size-h4);

	/* Header */
	--branding--color-text: var(--global--color-primary);
	--branding--color-link: var(--global--color-primary);
	--branding--color-link-hover: var(--global--color-secondary);
	--branding--title--font-family: var(--global--font-primary);
	--branding--title--font-size: var(--global--font-size-lg);
	--branding--title--font-size-mobile: var(--heading--font-size-h4);
	--branding--title--font-weight: normal;
	--branding--title--text-transform: uppercase;
	--branding--description--font-family: var(--global--font-secondary);
	--branding--description--font-size: var(--global--font-size-sm);
	--branding--description--font-family: var(--global--font-secondary);
	--branding--logo--max-width: 300px;
	--branding--logo--max-height: 100px;
	--branding--logo--max-width-mobile: 96px;
	--branding--logo--max-height-mobile: 96px;

	/* Main navigation */
	--primary-nav--font-family: var(--global--font-secondary);
	--primary-nav--font-family-mobile: var(--global--font-primary);
	--primary-nav--font-size: var(--global--font-size-md);
	--primary-nav--font-size-sub-menu: var(--global--font-size-xs);
	--primary-nav--font-size-mobile: var(--global--font-size-sm);
	--primary-nav--font-size-sub-menu-mobile: var(--global--font-size-sm);
	--primary-nav--font-size-button: var(--global--font-size-xs);
	--primary-nav--font-style: normal;
	--primary-nav--font-style-sub-menu-mobile: normal;
	--primary-nav--font-weight: normal;
	--primary-nav--font-weight-button: 500;
	--primary-nav--color-link: var(--global--color-primary);
	--primary-nav--color-link-hover: var(--global--color-primary-hover);
	--primary-nav--color-text: var(--global--color-primary);
	--primary-nav--padding: calc(0.66 * var(--global--spacing-unit));
	--primary-nav--border-color: var(--global--color-primary);

	/* Pagination */
	--pagination--color-text: var(--global--color-primary);
	--pagination--color-link-hover: var(--global--color-primary-hover);
	--pagination--font-family: var(--global--font-secondary);
	--pagination--font-size: var(--global--font-size-lg);
	--pagination--font-weight: normal;
	--pagination--font-weight-strong: 600;

	/* Footer */
	--footer--color-text: var(--global--color-primary);
	--footer--color-link: var(--global--color-primary);
	--footer--color-link-hover: var(--global--color-primary-hover);
	--footer--font-family: var(--global--font-primary);
	--footer--font-size: var(--global--font-size-sm);

	/* Block: Pull quote */
	--pullquote--font-family: var(--global--font-primary);
	--pullquote--font-size: var(--heading--font-size-h3);
	--pullquote--font-style: normal;
	--pullquote--letter-spacing: var(--heading--letter-spacing-h4);
	--pullquote--line-height: var(--global--line-height-heading);
	--pullquote--border-width: 3px;
	--pullquote--border-color: var(--global--color-primary);
	--pullquote--color-foreground: var(--global--color-primary);
	--pullquote--color-background: var(--global--color-background);
	--quote--font-family: var(--global--font-secondary);
	--quote--font-size: var(--global--font-size-md);
	--quote--font-size-large: var(--global--font-size-xl);
	--quote--font-style: normal;
	--quote--font-weight: 700;
	--quote--font-weight-strong: bolder;
	--quote--font-style-large: normal;
	--quote--font-style-cite: normal;
	--quote--line-height: var(--global--line-height-body);
	--quote--line-height-large: 1.35;
	--separator--border-color: var(--global--color-border);
	--separator--height: 1px;

	/* Block: Table */
	--table--stripes-border-color: var(--global--color-light-gray);
	--table--stripes-background-color: var(--global--color-light-gray);
	--table--has-background-text-color: var(--global--color-dark-gray);

	/* Widgets */
	--widget--line-height-list: 1.9;
	--widget--line-height-title: 1.4;
	--widget--font-weight-title: 700;
	--widget--spacing-menu: calc(0.66 * var(--global--spacing-unit));

	/* Admin-bar height */
	--global--admin-bar--height: 0px;
}

.admin-bar {
	--global--admin-bar--height: 32px;
}
@media only screen and (max-width: 782px) {

	.admin-bar {
		--global--admin-bar--height: 46px;
	}
}

@media only screen and (min-width: 652px) {

	:root {
		--global--font-size-xl: 2.5rem;
		--global--font-size-xxl: 6rem;
		--global--font-size-xxxl: 9rem;
		--heading--font-size-h3: 2rem;
		--heading--font-size-h2: 3rem;
	}
}

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
	line-height: 1.15;

	/* 1 */
	-webkit-text-size-adjust: 100%;

	/* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */
body {
	margin: 0;
}

h1 {
	font-size: 2em;
	margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
	box-sizing: content-box;

	/* 1 */
	height: 0;

	/* 1 */
	overflow: visible;

	/* 2 */
}

pre {
	font-family: monospace;

	/* 1 */
	font-size: 1em;

	/* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */
a {
	background-color: transparent;
	text-decoration-thickness: 1px;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
	border-bottom: none;

	/* 1 */
	text-decoration: underline;

	/* 2 */
	text-decoration-style: dotted;

	/* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
	font-weight: bolder;
}

code,
kbd,
samp {
	font-family: monospace;

	/* 1 */
	font-size: 1em;

	/* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
	font-size: 80%;
}

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */
img {
	border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
	font-family: inherit;

	/* 1 */
	font-size: 100%;

	/* 1 */
	line-height: 1.15;

	/* 1 */
	margin: 0;

	/* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {

	/* 1 */
	overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {

	/* 1 */
	text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type=button],
[type=reset],
[type=submit] {
	-webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */
fieldset {
	padding: 0.35em 0.75em 0.625em;
}

legend {
	box-sizing: border-box;

	/* 1 */
	color: inherit;

	/* 2 */
	display: table;

	/* 1 */
	max-width: 100%;

	/* 1 */
	padding: 0;

	/* 3 */
	white-space: normal;

	/* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
	vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
	overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type=checkbox],
[type=radio] {
	box-sizing: border-box;

	/* 1 */
	padding: 0;

	/* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
	height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type=search] {
	-webkit-appearance: textfield;

	/* 1 */
	outline-offset: -2px;

	/* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
	-webkit-appearance: none;
}

::-webkit-file-upload-button {
	-webkit-appearance: button;

	/* 1 */
	font: inherit;

	/* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
	display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
	display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */
template {
	display: none;
}

/**
 * Add the correct display in IE 10.
 */
[hidden] {
	display: none;
}

/**
 * Responsive Styles
 */

/**
 * Required Variables
 */

/**
 * Root Media Query Variables
 */
:root {
	--responsive--spacing-horizontal: calc(2 * var(--global--spacing-horizontal) * 0.6);
	--responsive--aligndefault-width: calc(100vw - var(--responsive--spacing-horizontal));
	--responsive--alignwide-width: calc(100vw - var(--responsive--spacing-horizontal));
	--responsive--alignfull-width: 100%;
	--responsive--alignright-margin: var(--global--spacing-horizontal);
	--responsive--alignleft-margin: var(--global--spacing-horizontal);
}

@media only screen and (min-width: 482px) {

	:root {
		--responsive--aligndefault-width: min(calc(100vw - 4 * var(--global--spacing-horizontal)), 610px);
		--responsive--alignwide-width: calc(100vw - 4 * var(--global--spacing-horizontal));
		--responsive--alignright-margin: calc(0.5 * (100vw - var(--responsive--aligndefault-width)));
		--responsive--alignleft-margin: calc(0.5 * (100vw - var(--responsive--aligndefault-width)));
	}
}
@media only screen and (min-width: 822px) {

	:root {
		--responsive--aligndefault-width: min(calc(100vw - 8 * var(--global--spacing-horizontal)), 610px);
		--responsive--alignwide-width: min(calc(100vw - 8 * var(--global--spacing-horizontal)), 1240px);
	}
}

/**
 * Extends
 */
.post-thumbnail,
.entry-content .wp-audio-shortcode,
.entry-content > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.wp-block-separator):not(.woocommerce),
*[class*=inner-container] > *:not(.entry-content):not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.wp-block-separator):not(.woocommerce),
.default-max-width {
	max-width: var(--responsive--aligndefault-width);
	margin-left: auto;
	margin-right: auto;
}

.widget-area,
.pagination,
.comments-pagination,
.post-navigation,
.site-footer,
.site-header,
.alignwide,
.wide-max-width {
	max-width: var(--responsive--alignwide-width);
	margin-left: auto;
	margin-right: auto;
}

.alignfull,
.wp-block-group .wp-block-group__inner-container > *.alignfull,
.full-max-width {
	max-width: var(--responsive--alignfull-width);
	width: var(--responsive--alignfull-width);
	margin-left: auto;
	margin-right: auto;
}

@media only screen and (min-width: 482px) {

	.alignfull,
	.full-max-width {
		max-width: var(--responsive--alignfull-width);
		width: auto;
		margin-left: auto;
		margin-right: auto;
	}
}

.entry-header .post-thumbnail,
.singular .post-thumbnail,
.alignfull [class*=inner-container] > .alignwide,
.alignwide [class*=inner-container] > .alignwide {
	margin-left: auto;
	margin-right: auto;
	width: var(--responsive--alignwide-width);
	max-width: var(--responsive--alignfull-width);
}

@media only screen and (min-width: 482px) {

	.entry-content > .alignleft {

		/*rtl:ignore*/
		margin-left: var(--responsive--alignleft-margin);

		/*rtl:ignore*/
		margin-right: var(--global--spacing-horizontal);
	}
}
@media only screen and (min-width: 482px) {

	.entry-content > .alignright {

		/*rtl:ignore*/
		margin-left: var(--global--spacing-horizontal);

		/*rtl:ignore*/
		margin-right: var(--responsive--alignright-margin);
	}
}



/**
 * Top Level Wrappers (header, main, footer)
 * - Set vertical padding and horizontal margins
 */
.site-header,
.site-main,
.widget-area,
.site-footer {
	padding-top: var(--global--spacing-vertical);
	padding-bottom: var(--global--spacing-vertical);
	margin-left: auto;
	margin-right: auto;
}

.site-header {
	padding-top: calc(0.75 * var(--global--spacing-vertical));
	padding-bottom: calc(2 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.site-header {
		padding-bottom: calc(3 * var(--global--spacing-vertical));
	}
}

/**
 * Site-main children wrappers
 * - Add double vertical margins here for clearer hierarchy
 */
.site-main > * {
	margin-top: calc(3 * var(--global--spacing-vertical));
	margin-bottom: calc(3 * var(--global--spacing-vertical));
}

.site-main > *:first-child {
	margin-top: 0;
}

.site-main > *:last-child {
	margin-bottom: 0;
}

/**
 * Set the default maximum responsive content-width
 */

/**
 * Set the wide maximum responsive content-width
 */

/**
 * Set the full maximum responsive content-width
 */

/*
 * Block & non-gutenberg content wrappers
 * - Set margins
 */
.entry-header,
.post-thumbnail,
.entry-content,
.entry-footer,
.author-bio {
	margin-top: var(--global--spacing-vertical);
	margin-right: auto;
	margin-bottom: var(--global--spacing-vertical);
	margin-left: auto;
}

/*
 * Block & non-gutenberg content wrapper children
 * - Sets spacing-vertical margin logic
 */
.site-main > article > *,
.site-main > .not-found > *,
.entry-content > *,
[class*=inner-container] > *,
.wp-block-template-part > * {
	margin-top: calc(0.666 * var(--global--spacing-vertical));
	margin-bottom: calc(0.666 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.site-main > article > *,
	.site-main > .not-found > *,
	.entry-content > *,
	[class*=inner-container] > *,
	.wp-block-template-part > * {
		margin-top: var(--global--spacing-vertical);
		margin-bottom: var(--global--spacing-vertical);
	}
}

.site-main > article > *:first-child,
.site-main > .not-found > *:first-child,
.entry-content > *:first-child,
[class*=inner-container] > *:first-child,
.wp-block-template-part > *:first-child {
	margin-top: 0;
}

.site-main > article > *:last-child,
.site-main > .not-found > *:last-child,
.entry-content > *:last-child,
[class*=inner-container] > *:last-child,
.wp-block-template-part > *:last-child {
	margin-bottom: 0;
}

.site-footer > *,
.widget-area > * {
	margin-top: calc(0.666 * var(--global--spacing-vertical));
	margin-bottom: calc(0.666 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.site-footer > *,
	.widget-area > * {
		margin-top: var(--global--spacing-vertical);
		margin-bottom: var(--global--spacing-vertical);
	}
}

/*
 * Block & non-gutenberg content wrapper children
 * - Sets spacing-unit margins
 */
.entry-header > *,
.post-thumbnail > *,
.page-content > *,
.comment-content > *,
.widget > * {
	margin-top: var(--global--spacing-unit);
	margin-bottom: var(--global--spacing-unit);
}

.entry-header > *:first-child,
.post-thumbnail > *:first-child,
.page-content > *:first-child,
.comment-content > *:first-child,
.widget > *:first-child {
	margin-top: 0;
}

.entry-header > *:last-child,
.post-thumbnail > *:last-child,
.page-content > *:last-child,
.comment-content > *:last-child,
.widget > *:last-child {
	margin-bottom: 0;
}

/*
 * .entry-content children specific controls
 * - Adds special margin overrides for alignment utility classes
 */
.entry-content > * {

	/* Reset alignleft and alignright margins after alignfull */
}

.entry-content > *.alignleft,
.entry-content > *.alignright,
.entry-content > *.alignleft:first-child + *,
.entry-content > *.alignright:first-child + *,
.entry-content > *.alignfull.has-background {
	margin-top: 0;
}

.entry-content > *:last-child,
.entry-content > *.alignfull.has-background {
	margin-bottom: 0;
}

.entry-content > *.alignfull + .alignleft,
.entry-content > *.alignfull + .alignright {
	margin-top: var(--global--spacing-vertical);
}

/**
 * Reset specific elements to make them easier to style in other contexts.
 */
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
form,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
	padding: 0;
	margin: 0;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
}

/**
 * Apply generic border-box to all elements.
 * See:
 * https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
 */
html {

	/* Apply border-box across the entire page. */
	box-sizing: border-box;
	font-family: var(--global--font-secondary);
	line-height: var(--global--line-height-body);
}

/**
 * Relax the definition a bit, to allow components to override it manually.
 */
*,
*::before,
*::after {
	box-sizing: inherit;
}

body {
	font-size: var(--global--font-size-base);
	font-weight: normal;
	color: var(--global--color-primary);
	text-align: left;
	background-color: var(--global--color-background);
}

button {
	cursor: pointer;
}

.clear:before,
.clear:after,
.entry-content:before,
.entry-content:after,
.comment-content:before,
.comment-content:after,
.site-header:before,
.site-header:after,
.site-content:before,
.site-content:after,
.site-footer:before,
.site-footer:after {
	content: "";
	display: table;
	table-layout: fixed;
}

.clear:after,
.entry-content:after,
.comment-content:after,
.site-header:after,
.site-content:after,
.site-footer:after {
	clear: both;
}

/* Category 04 can contain any default HTML element. Do not add classes here, just give the elements some basic styles. */
blockquote {
	padding: 0;
	position: relative;
	margin: var(--global--spacing-vertical) 0 var(--global--spacing-vertical) var(--global--spacing-horizontal);
}

blockquote > * {
	margin-top: var(--global--spacing-unit);
	margin-bottom: var(--global--spacing-unit);
}

blockquote > *:first-child {
	margin-top: 0;
}

blockquote > *:last-child {
	margin-bottom: 0;
}

blockquote p {
	letter-spacing: var(--heading--letter-spacing-h4);
	font-family: var(--quote--font-family);
	font-size: var(--quote--font-size);
	font-style: var(--quote--font-style);
	font-weight: var(--quote--font-weight);
	line-height: var(--quote--line-height);
}

blockquote cite,
blockquote footer {
	font-weight: normal;
	color: var(--global--color-primary);
	font-size: var(--global--font-size-xs);
	letter-spacing: var(--global--letter-spacing);
}

blockquote.alignleft,
blockquote.alignright {
	padding-left: inherit;
}

blockquote.alignleft p,
blockquote.alignright p {
	font-size: var(--heading--font-size-h5);
	max-width: inherit;
	width: inherit;
}

blockquote.alignleft cite,
blockquote.alignleft footer,
blockquote.alignright cite,
blockquote.alignright footer {
	font-size: var(--global--font-size-xs);
	letter-spacing: var(--global--letter-spacing);
}

blockquote strong {
	font-weight: var(--quote--font-weight-strong);
}

blockquote:before {
	content: "“";
	font-size: var(--quote--font-size);
	line-height: var(--quote--line-height);
	position: absolute;
	left: calc(-0.5 * var(--global--spacing-horizontal));
}

blockquote .wp-block-quote__citation,
blockquote cite,
blockquote footer {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-xs);
	font-style: var(--quote--font-style-cite);
}
@media only screen and (max-width: 481px) {

	blockquote {
		padding-left: calc(0.5 * var(--global--spacing-horizontal));
	}

	blockquote:before {
		left: 0;
	}
}

input[type=text],
input[type=email],
input[type=url],
input[type=password],
input[type=search],
input[type=number],
input[type=tel],
input[type=date],
input[type=month],
input[type=week],
input[type=time],
input[type=datetime],
input[type=datetime-local],
input[type=color],
.site textarea {
	border: var(--form--border-width) solid var(--form--border-color);
	border-radius: var(--form--border-radius);
	color: var(--form--color-text);
	line-height: var(--global--line-height-body);
	padding: var(--form--spacing-unit);
	margin: 0 2px;
	max-width: 100%;
}

input[type=text]:focus,
input[type=email]:focus,
input[type=url]:focus,
input[type=password]:focus,
input[type=search]:focus,
input[type=number]:focus,
input[type=tel]:focus,
input[type=date]:focus,
input[type=month]:focus,
input[type=week]:focus,
input[type=time]:focus,
input[type=datetime]:focus,
input[type=datetime-local]:focus,
input[type=color]:focus,
.site textarea:focus {
	color: var(--form--color-text);
	outline-offset: 2px;
	outline: 2px dotted var(--form--border-color);
}

input[type=text]:disabled,
input[type=email]:disabled,
input[type=url]:disabled,
input[type=password]:disabled,
input[type=search]:disabled,
input[type=number]:disabled,
input[type=tel]:disabled,
input[type=date]:disabled,
input[type=month]:disabled,
input[type=week]:disabled,
input[type=time]:disabled,
input[type=datetime]:disabled,
input[type=datetime-local]:disabled,
input[type=color]:disabled,
.site textarea:disabled {
	opacity: 0.7;
}

.is-dark-theme input[type=text],
.is-dark-theme input[type=email],
.is-dark-theme input[type=url],
.is-dark-theme input[type=password],
.is-dark-theme input[type=search],
.is-dark-theme input[type=number],
.is-dark-theme input[type=tel],
.is-dark-theme input[type=date],
.is-dark-theme input[type=month],
.is-dark-theme input[type=week],
.is-dark-theme input[type=time],
.is-dark-theme input[type=datetime],
.is-dark-theme input[type=datetime-local],
.is-dark-theme input[type=color],
.is-dark-theme .site textarea {
	background: var(--global--color-white-90);
}

input[type=search]:focus {
	outline-offset: -7px;
}

.is-dark-theme input[type=search]:focus {
	outline-color: var(--global--color-background);
}

input[type=color] {
	padding: calc(var(--form--spacing-unit) / 2);
	height: calc(4 * var(--form--spacing-unit));
}

input[type=email],
input[type=url] {

	/*rtl:ignore*/
	direction: ltr;
}

select {
	border: var(--form--border-width) solid var(--form--border-color);
	color: var(--form--color-text);
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	line-height: var(--global--line-height-body);
	padding: var(--form--spacing-unit) calc(3 * var(--form--spacing-unit)) var(--form--spacing-unit) var(--form--spacing-unit);
	background: var(--global--color-white) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' fill='%2328303d'><polygon points='0,0 10,0 5,5'/></svg>") no-repeat;
	background-position: right var(--form--spacing-unit) top 60%;
}

select:focus {
	outline-offset: 2px;
	outline: 2px dotted var(--form--border-color);
}

.is-dark-theme select {
	background: var(--global--color-white-90) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' fill='%2328303d'><polygon points='0,0 10,0 5,5'/></svg>") no-repeat;
	background-position: right var(--form--spacing-unit) top 60%;
}

textarea {
	width: 100%;
}

label {
	font-size: var(--form--font-size);
	font-weight: var(--form--label-weight);
	margin-bottom: calc(var(--global--spacing-vertical) / 3);
}

/**
https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/
https://codepen.io/aaroniker/pen/ZEYoxEY by Aaron Iker.
License: MIT.
*/
@supports (-webkit-appearance: none) or (-moz-appearance: none) {

	input[type=checkbox],
	input[type=radio] {
		-webkit-appearance: none;
		-moz-appearance: none;
		position: relative;
		width: 25px;
		height: 25px;
		border: var(--form--border-width) solid var(--form--border-color);
		background: var(--global--color-white);
	}

	input[type=checkbox]:disabled,
	input[type=radio]:disabled {
		opacity: 0.7;
	}

	.is-dark-theme input[type=checkbox],
	.is-dark-theme input[type=radio] {
		background: var(--global--color-white-90);
	}

	input[type=checkbox]:focus {
		outline-offset: 2px;
		outline: 2px dotted var(--form--border-color);
	}

	input[type=checkbox]:after {
		content: "";
		opacity: 0;
		display: block;
		left: 5px;
		top: 2px;
		position: absolute;
		width: 7px;
		height: 13px;
		border: 3px solid var(--form--color-text);
		border-top: 0;
		border-left: 0;
		transform: rotate(30deg);
	}

	input[type=checkbox]:checked {
		color: var(--form--color-text);
	}

	input[type=checkbox]:checked:after {
		opacity: 1;
	}

	input[type=radio] {
		border-radius: 50%;
	}

	input[type=radio]:focus {
		outline-offset: 2px;
		outline: 2px dotted var(--form--border-color);
	}

	input[type=radio]:after {
		content: "";
		opacity: 0;
		display: block;
		left: 3px;
		top: 3px;
		position: absolute;
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background: var(--form--color-text);
	}

	input[type=radio]:checked {
		border: 4px solid var(--form--border-color);
	}

	input[type=radio]:checked:after {
		opacity: 1;
	}

	input[type=radio]:checked:focus {
		outline-offset: 4px;
		outline: 2px dotted var(--form--border-color);
	}
}

input[type=checkbox] + label,
input[type=radio] + label {
	display: inline-block;
	padding-left: 10px;
	font-size: var(--global--font-size-xs);
	vertical-align: top;
}

/**
 * https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
*/
@supports (-webkit-appearance: none) or (-moz-appearance: none) {

	input[type=range] {
		-webkit-appearance: none;

		/* Hides the slider so that custom slider can be made */
		width: 100%;

		/* Specific width is required for Firefox. */
		height: 6px;
		background: var(--form--color-ranged);
		border-radius: 6px;
		outline-offset: 10px;
	}

	input[type=range]:disabled {
		opacity: 0.7;
	}

	input[type=range]::-webkit-slider-thumb {
		-webkit-appearance: none;
		border: 3px solid var(--form--color-ranged);
		height: 44px;
		width: 44px;
		border-radius: 50%;
		background: var(--global--color-background);
		cursor: pointer;
	}

	input[type=range]::-moz-range-thumb {
		border: 3px solid var(--form--color-ranged);
		height: 44px;
		width: 44px;
		border-radius: 50%;
		background: var(--global--color-background);
		cursor: pointer;
		box-sizing: border-box;
	}
}

input[type=range]::-ms-track {
	width: 100%;
	height: 6px;
	border-radius: 6px;
	border-width: 19px 0;
	border-color: var(--global--color-background);
	background: transparent;
	color: transparent;
	cursor: pointer;
}

input[type=range]::-ms-fill-upper {
	background: var(--form--color-ranged);
	border-radius: 6px;
}

input[type=range]::-ms-fill-lower {
	background: var(--form--color-ranged);
	border-radius: 6px;
}

input[type=range]::-ms-thumb {
	border: 3px solid var(--form--color-ranged);
	height: 44px;
	width: 44px;
	border-radius: 50%;
	background: var(--global--color-background);
	cursor: pointer;
}

fieldset {
	display: grid;
	border-color: var(--global--color-secondary);
	padding: var(--global--spacing-horizontal);
}

fieldset legend {
	font-size: var(--global--font-size-lg);
}

fieldset input[type=submit] {
	max-width: max-content;
}

fieldset input:not([type=submit]) {
	margin-bottom: var(--global--spacing-unit);
}

fieldset input[type=radio],
fieldset input[type=checkbox] {
	margin-bottom: 0;
}

fieldset input[type=radio] + label,
fieldset input[type=checkbox] + label {
	font-size: var(--form--font-size);
	padding-left: 0;
	margin-bottom: var(--global--spacing-unit);
}

::-moz-placeholder {
	opacity: 1;
}

.post-password-message {
	font-size: var(--global--font-size-lg);
}

.post-password-form {
	display: flex;
	flex-wrap: wrap;
}

.post-password-form__label {
	width: 100%;
	margin-bottom: 0;
}

.post-password-form input[type=password] {
	flex-grow: 1;
	margin-top: calc(var(--global--spacing-vertical) / 3);
	margin-right: calc(0.66 * var(--global--spacing-horizontal));
}

.post-password-form__submit {
	margin-top: calc(var(--global--spacing-vertical) / 3);
}
@media only screen and (min-width: 592px) {

	.post-password-form__submit {
		margin-left: calc(0.4 * var(--global--spacing-horizontal));
	}
}

img {
	height: auto;
	max-width: 100%;
	vertical-align: middle;
}

/* Classic editor images */
.entry-content img {
	max-width: 100%;
}

/* Make sure embeds and iframes fit their containers. */
embed,
iframe,
object,
video {
	max-width: 100%;
}

/* Media captions */
figcaption,
.wp-caption,
.wp-caption-text,
.wp-block-embed figcaption {
	color: currentColor;
	font-size: var(--global--font-size-xs);
	line-height: var(--global--line-height-body);
	margin-top: calc(0.5 * var(--global--spacing-unit));
	margin-bottom: var(--global--spacing-unit);
	text-align: center;
}

.alignleft figcaption,
.alignright figcaption,
.alignleft .wp-caption,
.alignright .wp-caption,
.alignleft .wp-caption-text,
.alignright .wp-caption-text,
.alignleft .wp-block-embed figcaption,
.alignright .wp-block-embed figcaption {
	margin-bottom: 0;
}

/* WP Smiley */
.page-content .wp-smiley,
.entry-content .wp-smiley,
.comment-content .wp-smiley {
	border: none;
	margin-bottom: 0;
	margin-top: 0;
	padding: 0;
}

/* Over here, place any elements that do not need to have their own file. */
b,
strong {
	font-weight: 700;
}

dfn,
cite,
em,
i {
	font-style: italic;
}

pre {
	white-space: pre;
	overflow-x: auto;
}

/*
 * text-underline-offset doesn't work in Chrome at all 👎
 * But looks nice in Safari/Firefox, so let's keep it and
 * maybe Chrome will support it soon.
 */
a {
	cursor: pointer;
	color: var(--wp--style--color--link, var(--global--color-primary));
	text-underline-offset: 3px;
	text-decoration-skip-ink: all;
}

a:hover {
	text-decoration-style: dotted;
	text-decoration-skip-ink: none;
}

.site a:focus:not(.wp-block-button__link):not(.wp-block-file__button) {

	/* Only visible in Windows High Contrast mode */
	outline: 2px solid transparent;
	text-decoration: underline 1px dotted currentColor;
	text-decoration-skip-ink: none;
	background: rgba(255, 255, 255, 0.9);
}

.is-dark-theme .site a:focus:not(.wp-block-button__link):not(.wp-block-file__button) {
	background: var(--global--color-black);
	color: var(--global--color-white);
	text-decoration: none;
}

.is-dark-theme .site a:focus:not(.wp-block-button__link):not(.wp-block-file__button) .meta-nav {
	color: var(--wp--style--color--link, var(--global--color-white));
}

.has-background-white .site a:focus:not(.wp-block-button__link):not(.wp-block-file__button) {
	background: rgba(0, 0, 0, 0.9);
	color: var(--wp--style--color--link, var(--global--color-white));
}

.has-background-white .site a:focus:not(.wp-block-button__link):not(.wp-block-file__button) .meta-nav {
	color: var(--wp--style--color--link, var(--global--color-white));
}

.site a:focus:not(.wp-block-button__link):not(.wp-block-file__button).skip-link {

	/* Only visible in Windows High Contrast mode */
	outline: 2px solid transparent;
	outline-offset: -2px;
}

.site a:focus:not(.wp-block-button__link):not(.wp-block-file__button).skip-link:focus {
	color: #21759b;
	background-color: #f1f1f1;
}

.site a:focus:not(.wp-block-button__link):not(.wp-block-file__button).custom-logo-link {
	background: none;
}

.site a:focus:not(.wp-block-button__link):not(.wp-block-file__button) img {
	outline: 2px dotted var(--wp--style--color--link, var(--global--color-primary));
}

.has-background .has-link-color a,
.has-background.has-link-color a {
	color: var(--wp--style--color--link, var(--global--color-primary));
}

/* Category 05 is all about adjusting the default block styles to the given layout. I only added three blocks as examples. */
.wp-block-audio audio:focus {
	outline-offset: 5px;
	outline: 2px solid var(--global--color-primary);
}

/**
 * Button
 */
.site .button,
button,
input[type=submit],
input[type=reset],
.wp-block-search .wp-block-search__button,
.wp-block-button .wp-block-button__link,
.wp-block-file a.wp-block-file__button {
	border: var(--button--border-width) solid transparent;
	border-radius: var(--button--border-radius);
	cursor: pointer;
	font-weight: var(--button--font-weight);
	font-family: var(--button--font-family);
	font-size: var(--button--font-size);
	line-height: var(--button--line-height);
	padding: var(--button--padding-vertical) var(--button--padding-horizontal);
	text-decoration: none;
}

.site .button:not(:hover):not(:active):not(.has-text-color),
button:not(:hover):not(:active):not(.has-text-color),
input[type=submit]:not(:hover):not(:active):not(.has-text-color),
input[type=reset]:not(:hover):not(:active):not(.has-text-color),
.wp-block-search .wp-block-search__button:not(:hover):not(:active):not(.has-text-color),
.wp-block-button .wp-block-button__link:not(:hover):not(:active):not(.has-text-color),
.wp-block-file a.wp-block-file__button:not(:hover):not(:active):not(.has-text-color) {
	color: var(--global--color-background);
}

.has-background .site .button:not(:hover):not(:active):not(.has-text-color),
.has-background button:not(:hover):not(:active):not(.has-text-color),
.has-background input[type=submit]:not(:hover):not(:active):not(.has-text-color),
.has-background input[type=reset]:not(:hover):not(:active):not(.has-text-color),
.has-background .wp-block-search .wp-block-search__button:not(:hover):not(:active):not(.has-text-color),
.has-background .wp-block-button .wp-block-button__link:not(:hover):not(:active):not(.has-text-color),
.has-background .wp-block-file a.wp-block-file__button:not(:hover):not(:active):not(.has-text-color) {
	color: var(--local--color-background, var(--global--color-primary));
}

.has-background .site .button:not(:hover):not(:active):not(.has-text-color).has-background,
.has-background button:not(:hover):not(:active):not(.has-text-color).has-background,
.has-background input[type=submit]:not(:hover):not(:active):not(.has-text-color).has-background,
.has-background input[type=reset]:not(:hover):not(:active):not(.has-text-color).has-background,
.has-background .wp-block-search .wp-block-search__button:not(:hover):not(:active):not(.has-text-color).has-background,
.has-background .wp-block-button .wp-block-button__link:not(:hover):not(:active):not(.has-text-color).has-background,
.has-background .wp-block-file a.wp-block-file__button:not(:hover):not(:active):not(.has-text-color).has-background {
	color: var(--global--color-primary);
}

.site .button:not(:hover):not(:active):not(.has-background),
button:not(:hover):not(:active):not(.has-background),
input[type=submit]:not(:hover):not(:active):not(.has-background),
input[type=reset]:not(:hover):not(:active):not(.has-background),
.wp-block-search .wp-block-search__button:not(:hover):not(:active):not(.has-background),
.wp-block-button .wp-block-button__link:not(:hover):not(:active):not(.has-background),
.wp-block-file a.wp-block-file__button:not(:hover):not(:active):not(.has-background) {
	background-color: var(--global--color-primary);
}

.has-background .site .button:not(:hover):not(:active):not(.has-background),
.has-background button:not(:hover):not(:active):not(.has-background),
.has-background input[type=submit]:not(:hover):not(:active):not(.has-background),
.has-background input[type=reset]:not(:hover):not(:active):not(.has-background),
.has-background .wp-block-search .wp-block-search__button:not(:hover):not(:active):not(.has-background),
.has-background .wp-block-button .wp-block-button__link:not(:hover):not(:active):not(.has-background),
.has-background .wp-block-file a.wp-block-file__button:not(:hover):not(:active):not(.has-background) {
	background-color: var(--local--color-primary, var(--global--color-primary));
}

.site .button:hover,
.site .button:active,
button:hover,
button:active,
input[type=submit]:hover,
input[type=submit]:active,
input[type=reset]:hover,
input[type=reset]:active,
.wp-block-search .wp-block-search__button:hover,
.wp-block-search .wp-block-search__button:active,
.wp-block-button .wp-block-button__link:hover,
.wp-block-button .wp-block-button__link:active,
.wp-block-file a.wp-block-file__button:hover,
.wp-block-file a.wp-block-file__button:active {
	background-color: transparent;
	border-color: currentColor;
	color: inherit;
}

.site .button:focus,
button:focus,
input[type=submit]:focus,
input[type=reset]:focus,
.wp-block-search .wp-block-search__button:focus,
.wp-block-button .wp-block-button__link:focus,
.wp-block-file a.wp-block-file__button:focus {
	outline-offset: -6px;
	outline: 2px dotted currentColor;
}

.site .button:disabled,
button:disabled,
input[type=submit]:disabled,
input[type=reset]:disabled,
.wp-block-search .wp-block-search__button:disabled,
.wp-block-button .wp-block-button__link:disabled,
.wp-block-file a.wp-block-file__button:disabled {
	background-color: var(--global--color-white-50);
	border-color: var(--global--color-white-50);
	color: var(--button--color-text-active);
}

/**
 * Block Options
 */
.wp-block-button:not(.is-style-outline) .wp-block-button__link:not(:hover):not(:active):not(.has-text-color) {
	color: var(--global--color-background);
}

.has-background .wp-block-button:not(.is-style-outline) .wp-block-button__link:not(:hover):not(:active):not(.has-text-color) {
	color: var(--local--color-background, var(--global--color-background));
}

.has-background .wp-block-button:not(.is-style-outline) .wp-block-button__link:not(:hover):not(:active):not(.has-text-color).has-background {
	color: var(--global--color-primary);
}

.wp-block-button:not(.is-style-outline) .wp-block-button__link:not(:hover):not(:active):not(.has-background) {
	background-color: var(--global--color-primary);
}

.has-background .wp-block-button:not(.is-style-outline) .wp-block-button__link:not(:hover):not(:active):not(.has-background) {
	background-color: var(--local--color-primary, var(--global--color-primary));
}

.wp-block-button:not(.is-style-outline) .wp-block-button__link:hover,
.wp-block-button:not(.is-style-outline) .wp-block-button__link:active {
	border-color: currentColor !important;
	background-color: transparent !important;
	color: inherit !important;
}

.wp-block-button.is-style-outline .wp-block-button__link:not(:hover):not(:active):not(.has-text-color),
.wp-block-button.is-style-outline .wp-block-button__link:not(:hover):not(:active):not(.has-background),
.wp-block-button.is-style-outline .wp-block-button__link:not(:hover):not(:active).has-background {
	border-color: currentColor;
}

.wp-block-button.is-style-outline .wp-block-button__link:not(:hover):not(:active):not(.has-text-color) {
	color: var(--global--color-primary);
}

.has-background .wp-block-button.is-style-outline .wp-block-button__link:not(:hover):not(:active):not(.has-text-color) {
	color: var(--local--color-primary, var(--global--color-primary));
}

.has-background .wp-block-button.is-style-outline .wp-block-button__link:not(:hover):not(:active).has-background:not(.has-text-color) {
	color: inherit;
}

.wp-block-button.is-style-outline .wp-block-button__link:not(:hover):not(:active):not(.has-background) {
	background-color: transparent;
}

.wp-block-button.is-style-outline .wp-block-button__link:hover,
.wp-block-button.is-style-outline .wp-block-button__link:active {
	border-color: transparent !important;
	background-color: var(--global--color-primary) !important;
	color: var(--global--color-background) !important;
}

.has-background .wp-block-button.is-style-outline .wp-block-button__link:hover,
.has-background .wp-block-button.is-style-outline .wp-block-button__link:active {
	background-color: var(--local--color-primary, var(--global--color-primary)) !important;
	color: var(--local--color-background, var(--global--color-background)) !important;
}

.has-text-color .wp-block-button.is-style-outline .wp-block-button__link:hover,
.has-text-color .wp-block-button.is-style-outline .wp-block-button__link:active {
	color: var(--local--color-background, var(--global--color-background)) !important;
}

.wp-block-button .is-style-squared .wp-block-button__link {
	border-radius: 0;
}

.is-style-outline .wp-block-button__link[style*=radius]:focus,
.wp-block-button a.wp-block-button__link[style*=radius]:focus {
	outline-offset: 2px;
	outline: 2px dotted var(--button--color-background);
}

.wp-block-code {
	border-color: var(--global--color-border);
	border-radius: 0;
	border-style: solid;
	border-width: 0.1rem;
	padding: var(--global--spacing-unit);
}

.wp-block-code code {
	color: var(--global--color-primary);
	white-space: pre;
	overflow-x: auto;
	display: block;
}

.wp-block-columns:not(.alignwide):not(.alignfull) {
	clear: both;
}

.wp-block-columns .wp-block-column > * {
	margin-top: calc(0.66 * var(--global--spacing-vertical));
	margin-bottom: calc(0.66 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.wp-block-columns .wp-block-column > * {
		margin-top: var(--global--spacing-vertical);
		margin-bottom: var(--global--spacing-vertical);
	}
}

.wp-block-columns .wp-block-column > *:first-child {
	margin-top: 0;
}

.wp-block-columns .wp-block-column > *:last-child {
	margin-bottom: 0;
}

.wp-block-columns .wp-block-column:last-child {
	margin-bottom: 0;
}

.wp-block-columns .wp-block-column:not(:last-child) {
	margin-bottom: calc(0.66 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.wp-block-columns .wp-block-column:not(:last-child) {
		margin-bottom: var(--global--spacing-vertical);
	}
}
@media only screen and (min-width: 822px) {

	.wp-block-columns .wp-block-column:not(:last-child) {
		margin-bottom: 0;
	}
}

.wp-block-columns.is-style-twentytwentyone-columns-overlap {
	justify-content: space-around;
}
@media only screen and (min-width: 652px) {

	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) {
		margin-left: calc(-2 * var(--global--spacing-horizontal));
		margin-top: calc(2.5 * var(--global--spacing-horizontal));
		z-index: 2;
	}

	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > p:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > h1:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > h2:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > h3:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > h4:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > h5:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > h6:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > ul:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > ol:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > pre:not(.has-background) {
		background-color: var(--global--color-background);
		padding: var(--global--spacing-unit);
	}

	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > ul:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > ol:not(.has-background) {
		padding-left: calc(2 * var(--global--spacing-horizontal));
	}

	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n).is-vertically-aligned-center {
		margin-top: 0;
	}
}

.wp-block-columns.alignfull .wp-block-column p:not(.has-background),
.wp-block-columns.alignfull .wp-block-column h1:not(.has-background),
.wp-block-columns.alignfull .wp-block-column h2:not(.has-background),
.wp-block-columns.alignfull .wp-block-column h3:not(.has-background),
.wp-block-columns.alignfull .wp-block-column h4:not(.has-background),
.wp-block-columns.alignfull .wp-block-column h5:not(.has-background),
.wp-block-columns.alignfull .wp-block-column h6:not(.has-background) {
	padding-left: var(--global--spacing-unit);
	padding-right: var(--global--spacing-unit);
}

.wp-block-cover,
.wp-block-cover-image {
	background-color: var(--cover--color-background);
	min-height: var(--cover--height);
	margin-top: inherit;
	margin-bottom: inherit;

	/* default & custom background-color */

	/* Treating H2 separately to account for legacy /core styles */

	/* Block Styles */

	/* The background color class is used just for the overlay, and does not need to be applied to the inner container. */
}

.wp-block-cover:not(.alignwide):not(.alignfull),
.wp-block-cover-image:not(.alignwide):not(.alignfull) {
	clear: both;
}

.wp-block-cover.alignfull,
.wp-block-cover-image.alignfull {
	margin-top: 0;
	margin-bottom: 0;
}

.wp-block-cover .wp-block-cover__inner-container,
.wp-block-cover .wp-block-cover-image-text,
.wp-block-cover .wp-block-cover-text,
.wp-block-cover-image .wp-block-cover__inner-container,
.wp-block-cover-image .wp-block-cover-image-text,
.wp-block-cover-image .wp-block-cover-text {
	color: currentColor;
	margin-top: var(--global--spacing-vertical);
	margin-bottom: var(--global--spacing-vertical);
}

.wp-block-cover .wp-block-cover__inner-container a:not(.wp-block-button__link):not(.wp-block-file__button),
.wp-block-cover .wp-block-cover-image-text a:not(.wp-block-button__link):not(.wp-block-file__button),
.wp-block-cover .wp-block-cover-text a:not(.wp-block-button__link):not(.wp-block-file__button),
.wp-block-cover-image .wp-block-cover__inner-container a:not(.wp-block-button__link):not(.wp-block-file__button),
.wp-block-cover-image .wp-block-cover-image-text a:not(.wp-block-button__link):not(.wp-block-file__button),
.wp-block-cover-image .wp-block-cover-text a:not(.wp-block-button__link):not(.wp-block-file__button) {
	color: currentColor;
}

.wp-block-cover .wp-block-cover__inner-container .has-link-color a,
.wp-block-cover .wp-block-cover-image-text .has-link-color a,
.wp-block-cover .wp-block-cover-text .has-link-color a,
.wp-block-cover-image .wp-block-cover__inner-container .has-link-color a,
.wp-block-cover-image .wp-block-cover-image-text .has-link-color a,
.wp-block-cover-image .wp-block-cover-text .has-link-color a {
	color: var(--wp--style--color--link, var(--global--color-primary));
}

.wp-block-cover:not([class*=background-color]) .wp-block-cover__inner-container,
.wp-block-cover:not([class*=background-color]) .wp-block-cover-image-text,
.wp-block-cover:not([class*=background-color]) .wp-block-cover-text,
.wp-block-cover-image:not([class*=background-color]) .wp-block-cover__inner-container,
.wp-block-cover-image:not([class*=background-color]) .wp-block-cover-image-text,
.wp-block-cover-image:not([class*=background-color]) .wp-block-cover-text {
	color: var(--cover--color-foreground);
}

.wp-block-cover h2,
.wp-block-cover-image h2 {
	font-size: var(--heading--font-size-h2);
	letter-spacing: var(--heading--letter-spacing-h2);
	line-height: var(--heading--line-height-h2);
	max-width: inherit;
	text-align: inherit;
	padding: 0;
}

.wp-block-cover h2.has-text-align-left,
.wp-block-cover-image h2.has-text-align-left {
	text-align: left;
}

.wp-block-cover h2.has-text-align-center,
.wp-block-cover-image h2.has-text-align-center {
	text-align: center;
}

.wp-block-cover h2.has-text-align-right,
.wp-block-cover-image h2.has-text-align-right {
	text-align: right;
}

.wp-block-cover .wp-block-cover__inner-container,
.wp-block-cover-image .wp-block-cover__inner-container {
	width: calc(100% - calc(2 * var(--global--spacing-vertical)));
}

.wp-block-cover .wp-block-cover__inner-container > *,
.wp-block-cover-image .wp-block-cover__inner-container > * {
	margin-top: calc(0.666 * var(--global--spacing-vertical));
	margin-bottom: calc(0.666 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.wp-block-cover .wp-block-cover__inner-container > *,
	.wp-block-cover-image .wp-block-cover__inner-container > * {
		margin-top: var(--global--spacing-vertical);
		margin-bottom: var(--global--spacing-vertical);
	}
}

.wp-block-cover .wp-block-cover__inner-container > *:first-child,
.wp-block-cover-image .wp-block-cover__inner-container > *:first-child {
	margin-top: 0;
}

.wp-block-cover .wp-block-cover__inner-container > *:last-child,
.wp-block-cover-image .wp-block-cover__inner-container > *:last-child {
	margin-bottom: 0;
}

.wp-block-cover.alignleft,
.wp-block-cover.alignright,
.wp-block-cover-image.alignleft,
.wp-block-cover-image.alignright {
	margin-top: 0;
}

.wp-block-cover.alignleft > *,
.wp-block-cover.alignright > *,
.wp-block-cover-image.alignleft > *,
.wp-block-cover-image.alignright > * {
	margin-top: calc(2 * var(--global--spacing-vertical));
	margin-bottom: calc(2 * var(--global--spacing-vertical));
	padding-left: var(--global--spacing-horizontal);
	padding-right: var(--global--spacing-horizontal);
	width: 100%;
}

.wp-block-cover.has-left-content,
.wp-block-cover.has-right-content,
.wp-block-cover-image.has-left-content,
.wp-block-cover-image.has-right-content {
	justify-content: center;
}

.wp-block-cover.is-style-twentytwentyone-border,
.wp-block-cover-image.is-style-twentytwentyone-border {
	border: calc(3 * var(--separator--height)) solid var(--global--color-border);
}

.wp-block-cover[class*=-background-color][class] .wp-block-cover__inner-container,
.wp-block-cover-image[class*=-background-color][class] .wp-block-cover__inner-container {
	background-color: unset;
}

.wp-block-file a.wp-block-file__button:active,
.wp-block-file a.wp-block-file__button:focus,
.wp-block-file a.wp-block-file__button:hover {
	opacity: inherit;
}

.wp-block-file a.wp-block-file__button {
	display: inline-block;
}

.wp-block-gallery {
	margin: 0 auto;
}

.wp-block-gallery .blocks-gallery-image,
.wp-block-gallery .blocks-gallery-item {
	width: calc((100% - var(--global--spacing-unit)) / 2);
}

.wp-block-gallery .blocks-gallery-image figcaption,
.wp-block-gallery .blocks-gallery-item figcaption {
	margin: 0;
	color: var(--global--color-white);
	font-size: var(--global--font-size-xs);
}

.wp-block-gallery .blocks-gallery-image figcaption a,
.wp-block-gallery .blocks-gallery-item figcaption a {
	color: var(--global--color-white);
}

.wp-block-gallery .blocks-gallery-image figcaption a:focus,
.wp-block-gallery .blocks-gallery-item figcaption a:focus {
	background-color: transparent;
	outline: 2px solid var(--wp--style--color--link, var(--global--color-primary));
	text-decoration: none;
}

.wp-block-gallery .blocks-gallery-image a:focus img,
.wp-block-gallery .blocks-gallery-item a:focus img {
	outline-offset: 2px;
}

.wp-block-group {
	display: block;
	clear: both;
	display: flow-root;
}

.wp-block-group:before,
.wp-block-group:after {
	content: "";
	display: block;
	clear: both;
}

.wp-block-group .wp-block-group__inner-container {
	margin-left: auto;
	margin-right: auto;
}

.wp-block-group .wp-block-group__inner-container > * {
	margin-top: calc(0.666 * var(--global--spacing-vertical));
	margin-bottom: calc(0.666 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.wp-block-group .wp-block-group__inner-container > * {
		margin-top: var(--global--spacing-vertical);
		margin-bottom: var(--global--spacing-vertical);
	}
}

.wp-block-group .wp-block-group__inner-container > *:first-child {
	margin-top: 0;
}

.wp-block-group .wp-block-group__inner-container > *:last-child {
	margin-bottom: 0;
}

.wp-block-group.has-background {
	padding: calc(0.666 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.wp-block-group.has-background {
		padding: var(--global--spacing-vertical);
	}
}

.wp-block-group.is-style-twentytwentyone-border {
	border: calc(3 * var(--separator--height)) solid var(--global--color-border);
	padding: var(--global--spacing-vertical);
}

.wp-block-group.has-background .wp-block-group__inner-container > .alignfull,
.wp-block-group.has-background .wp-block-group__inner-container > hr.wp-block-separator:not(.is-style-dots):not(.alignwide).alignfull,
.wp-block-group.is-style-twentytwentyone-border .wp-block-group__inner-container > .alignfull,
.wp-block-group.is-style-twentytwentyone-border .wp-block-group__inner-container > hr.wp-block-separator:not(.is-style-dots):not(.alignwide).alignfull {
	max-width: calc(var(--responsive--alignfull-width) + (2 * var(--global--spacing-vertical)));
	width: calc(var(--responsive--alignfull-width) + (2 * var(--global--spacing-vertical)));
	margin-left: calc(-1 * var(--global--spacing-vertical));
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6 {
	clear: both;
	font-family: var(--heading--font-family);
	font-weight: var(--heading--font-weight);
}

h1 strong,
.h1 strong,
h2 strong,
.h2 strong,
h3 strong,
.h3 strong,
h4 strong,
.h4 strong,
h5 strong,
.h5 strong,
h6 strong,
.h6 strong {
	font-weight: var(--heading--font-weight-strong);
}

h1,
.h1 {
	font-size: var(--heading--font-size-h1);
	letter-spacing: var(--heading--letter-spacing-h1);
	line-height: var(--heading--line-height-h1);
}

h2,
.h2 {
	font-size: var(--heading--font-size-h2);
	letter-spacing: var(--heading--letter-spacing-h2);
	line-height: var(--heading--line-height-h2);
}

h3,
.h3 {
	font-size: var(--heading--font-size-h3);
	letter-spacing: var(--heading--letter-spacing-h3);
	line-height: var(--heading--line-height-h3);
}

h4,
.h4 {
	font-size: var(--heading--font-size-h4);
	font-weight: var(--heading--font-weight-strong);
	letter-spacing: var(--heading--letter-spacing-h4);
	line-height: var(--heading--line-height-h4);
}

h5,
.h5 {
	font-size: var(--heading--font-size-h5);
	font-weight: var(--heading--font-weight-strong);
	letter-spacing: var(--heading--letter-spacing-h5);
	line-height: var(--heading--line-height-h5);
}

h6,
.h6 {
	font-size: var(--heading--font-size-h6);
	font-weight: var(--heading--font-weight-strong);
	letter-spacing: var(--heading--letter-spacing-h6);
	line-height: var(--heading--line-height-h6);
}

.wp-block-image {
	text-align: center;
}

.wp-block-image figcaption {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-xs);
	line-height: var(--global--line-height-body);
	margin-top: calc(0.5 * var(--global--spacing-unit));
	margin-bottom: var(--global--spacing-unit);
	text-align: center;
}

.wp-block-image .alignright {
	margin-left: var(--global--spacing-horizontal);
}

.wp-block-image .alignleft {
	margin-right: var(--global--spacing-horizontal);
}

.wp-block-image a:focus img {
	outline-offset: 2px;
}

.entry-content > *[class=wp-block-image],
.entry-content [class*=inner-container] > *[class=wp-block-image] {
	margin-top: 0;
	margin-bottom: 0;
}

.entry-content > *[class=wp-block-image] + *,
.entry-content [class*=inner-container] > *[class=wp-block-image] + * {
	margin-top: 0;
}

.wp-block-image.is-style-twentytwentyone-border img,
.wp-block-image.is-style-twentytwentyone-image-frame img {
	border: calc(3 * var(--separator--height)) solid var(--global--color-border);
}

.wp-block-image.is-style-twentytwentyone-image-frame img {
	padding: var(--global--spacing-unit);
}

@media only screen and (min-width: 482px) {

	.entry-content > .wp-block-image > .alignleft,
	.entry-content > .wp-block-image > .alignright {
		max-width: 50%;
	}
}
@media only screen and (max-width: 481px) {

	.entry-content > .wp-block-image > .alignleft,
	.entry-content > .wp-block-image > .alignright {
		margin-left: 0;
		margin-right: 0;
	}
}

.wp-block-latest-comments {
	padding-left: 0;
}

.wp-block-latest-comments .wp-block-latest-comments__comment {
	font-size: var(--global--font-size-sm);
	line-height: var(--global--line-height-body);

	/* Vertical margins logic */
	margin-top: var(--global--spacing-vertical);
	margin-bottom: var(--global--spacing-vertical);
}

.wp-block-latest-comments .wp-block-latest-comments__comment:first-child {
	margin-top: 0;
}

.wp-block-latest-comments .wp-block-latest-comments__comment:last-child {
	margin-bottom: 0;
}

.wp-block-latest-comments .wp-block-latest-comments__comment-meta {
	font-family: var(--heading--font-family);
}

.wp-block-latest-comments .wp-block-latest-comments__comment-date {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-sm);
}

.wp-block-latest-comments .wp-block-latest-comments__comment-excerpt p {
	font-size: var(--global--font-size-sm);
	line-height: var(--global--line-height-body);
	margin: 0;
}

.wp-block-latest-posts {
	padding-left: 0;
}

.wp-block-latest-posts:not(.is-grid) > li {
	margin-top: calc(1.666 * var(--global--spacing-vertical));
	margin-bottom: calc(1.666 * var(--global--spacing-vertical));
}

.wp-block-latest-posts:not(.is-grid) > li:first-child {
	margin-top: 0;
}

.wp-block-latest-posts:not(.is-grid) > li:last-child {
	margin-bottom: 0;
}

.wp-block-latest-posts.is-grid {
	word-wrap: break-word;
	word-break: break-word;
}

.wp-block-latest-posts.is-grid > li {
	margin-bottom: var(--global--spacing-vertical);
}

.wp-block-latest-posts.is-grid > li:last-child {
	margin-bottom: 0;
}

.wp-block-latest-posts.is-grid.columns-2 > li:nth-last-child(-n+2):nth-child(2n+1),
.wp-block-latest-posts.is-grid.columns-2 > li:nth-last-child(-n+2):nth-child(2n+1) ~ li,
.wp-block-latest-posts.is-grid.columns-3 > li:nth-last-child(-n+3):nth-child(3n+1),
.wp-block-latest-posts.is-grid.columns-3 > li:nth-last-child(-n+3):nth-child(3n+1) ~ li,
.wp-block-latest-posts.is-grid.columns-4 > li:nth-last-child(-n+4):nth-child(4n+1),
.wp-block-latest-posts.is-grid.columns-4 > li:nth-last-child(-n+4):nth-child(4n+1) ~ li,
.wp-block-latest-posts.is-grid.columns-5 > li:nth-last-child(-n+5):nth-child(5n+1),
.wp-block-latest-posts.is-grid.columns-5 > li:nth-last-child(-n+5):nth-child(5n+1) ~ li,
.wp-block-latest-posts.is-grid.columns-6 > li:nth-last-child(-n+6):nth-child(6n+1),
.wp-block-latest-posts.is-grid.columns-6 > li:nth-last-child(-n+6):nth-child(6n+1) ~ li {
	margin-bottom: 0;
}

.wp-block-latest-posts > li > * {
	margin-top: calc(0.333 * var(--global--spacing-vertical));
	margin-bottom: calc(0.333 * var(--global--spacing-vertical));
}

.wp-block-latest-posts > li > *:first-child {
	margin-top: 0;
}

.wp-block-latest-posts > li > *:last-child {
	margin-bottom: 0;
}

.wp-block-latest-posts > li > a {
	display: inline-block;
	font-family: var(--latest-posts--title-font-family);
	font-size: var(--latest-posts--title-font-size);
	font-weight: var(--heading--font-weight);
	line-height: var(--global--line-height-heading);
	margin-bottom: calc(0.333 * var(--global--spacing-vertical));
}

.wp-block-latest-posts .wp-block-latest-posts__post-author {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-md);
	line-height: var(--global--line-height-body);
}

.wp-block-latest-posts .wp-block-latest-posts__post-date {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-xs);
	line-height: var(--global--line-height-body);
}

[class*=inner-container] .wp-block-latest-posts .wp-block-latest-posts__post-date,
.has-background .wp-block-latest-posts .wp-block-latest-posts__post-date {
	color: currentColor;
}

.wp-block-latest-posts .wp-block-latest-posts__post-excerpt,
.wp-block-latest-posts .wp-block-latest-posts__post-full-content {
	font-family: var(--latest-posts--description-font-family);
	font-size: var(--latest-posts--description-font-size);
	line-height: var(--global--line-height-body);
	margin-top: calc(0.666 * var(--global--spacing-vertical));
}

.wp-block-latest-posts.alignfull {
	padding-left: var(--global--spacing-unit);
	padding-right: var(--global--spacing-unit);
}

.entry-content [class*=inner-container] .wp-block-latest-posts.alignfull,
.entry-content .has-background .wp-block-latest-posts.alignfull {
	padding-left: 0;
	padding-right: 0;
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers {
	border-top: calc(3 * var(--separator--height)) solid var(--global--color-border);
	border-bottom: calc(3 * var(--separator--height)) solid var(--global--color-border);
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers:not(.is-grid) > li,
.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers > li {
	padding-bottom: var(--global--spacing-vertical);
	border-bottom: var(--separator--height) solid var(--global--color-border);
	margin-top: var(--global--spacing-vertical);
	margin-bottom: var(--global--spacing-vertical);
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers:not(.is-grid) > li:last-child,
.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers > li:last-child {
	padding-bottom: 0;
	border-bottom: none;
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid {
	box-shadow: inset 0 -1px 0 0 var(--global--color-border);
	border-bottom: calc(2 * var(--separator--height)) solid var(--global--color-border);
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid li {
	margin: 0;
	padding-top: var(--global--spacing-vertical);
	padding-right: var(--global--spacing-horizontal);
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid li:last-child {
	padding-bottom: var(--global--spacing-vertical);
}
@media screen and (min-width: 600px) {

	.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid.columns-2 li {
		width: calc((100% / 2));
	}

	.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid.columns-3 li {
		width: calc((100% / 3));
	}

	.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid.columns-4 li {
		width: calc((100% / 4));
	}

	.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid.columns-5 li {
		width: calc((100% / 5));
	}

	.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid.columns-6 li {
		width: calc((100% / 6));
	}
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-borders li {
	border: calc(3 * var(--separator--height)) solid var(--global--color-border);
	padding: var(--global--spacing-vertical) var(--global--spacing-horizontal);
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-borders li:last-child {
	padding-bottom: var(--global--spacing-vertical);
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-borders:not(.is-grid) li {
	margin-top: var(--global--spacing-horizontal);
	margin-bottom: var(--global--spacing-horizontal);
}

.gallery-item {
	display: inline-block;
	text-align: center;
	vertical-align: top;
	width: 100%;
}

.gallery-item a {
	display: block;
}

.gallery-item a:focus img {
	outline-offset: -2px;
}

.gallery-columns-2 .gallery-item {
	max-width: 50%;
}

.gallery-columns-3 .gallery-item {
	max-width: 33.33%;
}

.gallery-columns-4 .gallery-item {
	max-width: 25%;
}

.gallery-columns-5 .gallery-item {
	max-width: 20%;
}

.gallery-columns-6 .gallery-item {
	max-width: 16.66%;
}

.gallery-columns-7 .gallery-item {
	max-width: 14.28%;
}

.gallery-columns-8 .gallery-item {
	max-width: 12.5%;
}

.gallery-columns-9 .gallery-item {
	max-width: 11.11%;
}

.gallery-caption {
	display: block;
}

figure.wp-caption a:focus img {
	outline-offset: 2px;
}

ul,
ol {
	font-family: var(--list--font-family);
	margin: 0;
	padding-left: calc(2 * var(--global--spacing-horizontal));
}

ul.aligncenter,
ol.aligncenter {
	list-style-position: inside;
	padding: 0;
}

ul.alignright,
ol.alignright {
	list-style-position: inside;
	text-align: right;
	padding: 0;
}

ul {
	list-style-type: disc;
}

ul ul {
	list-style-type: circle;
}

ol {
	list-style-type: decimal;
}

ol ul {
	list-style-type: circle;
}

dt {
	font-family: var(--definition-term--font-family);
	font-weight: bold;
}

dd {
	margin: 0;
	padding-left: calc(2 * var(--global--spacing-horizontal));
}

.wp-block-media-text {

	/**
   * Block Options
   */
}

.wp-block-media-text.alignfull {
	margin-top: 0;
	margin-bottom: 0;
}

.wp-block-media-text a:focus img {
	outline-offset: -1px;
}

.wp-block-media-text .wp-block-media-text__content {
	padding: var(--global--spacing-horizontal);
}
@media only screen and (min-width: 592px) {

	.wp-block-media-text .wp-block-media-text__content {
		padding: var(--global--spacing-vertical);
	}
}

.wp-block-media-text .wp-block-media-text__content > * {
	margin-top: calc(0.666 * var(--global--spacing-vertical));
	margin-bottom: calc(0.666 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.wp-block-media-text .wp-block-media-text__content > * {
		margin-top: var(--global--spacing-vertical);
		margin-bottom: var(--global--spacing-vertical);
	}
}

.wp-block-media-text .wp-block-media-text__content > *:first-child {
	margin-top: 0;
}

.wp-block-media-text .wp-block-media-text__content > *:last-child {
	margin-bottom: 0;
}
@media only screen and (min-width: 482px) {

	.wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__content {
		padding-top: var(--global--spacing-vertical);
		padding-bottom: var(--global--spacing-vertical);
	}
}

.wp-block-media-text.is-style-twentytwentyone-border {
	border: calc(3 * var(--separator--height)) solid var(--global--color-border);
}

.wp-block-navigation .wp-block-navigation-link {
	padding: 0;
}

.wp-block-navigation .wp-block-navigation-link .wp-block-navigation-link__content {
	padding: var(--primary-nav--padding);
}

.wp-block-navigation .wp-block-navigation-link .wp-block-navigation-link__label {
	font-family: var(--primary-nav--font-family);
	font-size: var(--primary-nav--font-size);
	font-weight: var(--primary-nav--font-weight);
}

.wp-block-navigation .wp-block-navigation-link__submenu-icon {
	padding: 0;
}

.wp-block-navigation > .wp-block-navigation__container .has-child .wp-block-navigation-link {
	display: inherit;
}

.wp-block-navigation > .wp-block-navigation__container .has-child .wp-block-navigation__container {
	border: none;
	left: 0;
	margin-left: var(--primary-nav--padding);
	min-width: max-content;
	opacity: 0;
	padding: 0;
	position: inherit;
	top: inherit;
}

.wp-block-navigation > .wp-block-navigation__container .has-child .wp-block-navigation__container .wp-block-navigation-link .wp-block-navigation-link__content {
	display: inline-block;
	padding: calc(0.5 * var(--primary-nav--padding)) var(--primary-nav--padding);
}

.wp-block-navigation > .wp-block-navigation__container .has-child .wp-block-navigation__container .wp-block-navigation-link__submenu-icon {
	display: none;
}

.wp-block-navigation > .wp-block-navigation__container .has-child:hover .wp-block-navigation__container,
.wp-block-navigation > .wp-block-navigation__container .has-child:focus-within .wp-block-navigation__container {
	display: block;
	opacity: 1;
	visibility: visible;
}

.wp-block-navigation > .wp-block-navigation__container > .has-child > .wp-block-navigation__container {
	background: var(--global--color-background);
	margin: 0;
	padding: 0;
	position: absolute;
	top: 100%;
	border: 1px solid var(--primary-nav--border-color);
}

.wp-block-navigation > .wp-block-navigation__container > .has-child > .wp-block-navigation__container:before,
.wp-block-navigation > .wp-block-navigation__container > .has-child > .wp-block-navigation__container:after {
	content: "";
	display: block;
	position: absolute;
	width: 0;
	top: -10px;
	left: var(--global--spacing-horizontal);
	border-style: solid;
	border-color: var(--primary-nav--border-color) transparent;
	border-width: 0 7px 10px 7px;
}

.wp-block-navigation > .wp-block-navigation__container > .has-child > .wp-block-navigation__container:after {
	top: -9px;
	border-color: var(--global--color-background) transparent;
}

.wp-block-navigation:not(.has-background) .wp-block-navigation__container {
	background: var(--global--color-background);
}

.wp-block-navigation:not(.has-background) .wp-block-navigation__container .wp-block-navigation__container {
	background: var(--global--color-background);
}

.wp-block-navigation:not(.has-text-color) .wp-block-navigation-link > a:hover,
.wp-block-navigation:not(.has-text-color) .wp-block-navigation-link > a:focus {
	color: var(--primary-nav--color-link-hover);
}

.wp-block-navigation:not(.has-text-color) .wp-block-navigation-link > a:hover {
	text-decoration: underline;
	text-decoration-style: dotted;
}

.wp-block-navigation:not(.has-text-color) .wp-block-navigation-link__content {
	color: currentColor;
}

p {
	line-height: var(--wp--typography--line-height, var(--global--line-height-body));
}

p.has-background {
	padding: var(--global--spacing-unit);
}

p.has-text-color a {
	color: var(--wp--style--color--link, var(--global--color-primary));
}

pre.wp-block-preformatted {
	overflow-x: auto;
	white-space: pre;
}

.wp-block-pullquote {
	padding: calc(2 * var(--global--spacing-unit)) 0;
	text-align: center;
	border-width: var(--pullquote--border-width);
	border-bottom-style: solid;
	border-top-style: solid;
	color: currentColor;
	border-color: currentColor;
	position: relative;

	/**
   * Block Options
   */
}

.wp-block-pullquote blockquote::before {
	color: currentColor;
	content: "“";
	display: block;
	position: relative;
	left: 0;
	font-size: 3rem;
	font-weight: 500;
	line-height: 1;
}

.wp-block-pullquote p {
	font-family: var(--pullquote--font-family);
	font-size: var(--pullquote--font-size);
	font-style: var(--pullquote--font-style);
	font-weight: 700;
	letter-spacing: var(--pullquote--letter-spacing);
	line-height: var(--pullquote--line-height);
	margin: 0;
}

.wp-block-pullquote a {
	color: currentColor;
}

.wp-block-pullquote .wp-block-pullquote__citation,
.wp-block-pullquote cite,
.wp-block-pullquote footer {
	color: currentColor;
	display: block;
	font-size: var(--global--font-size-xs);
	font-style: var(--pullquote--font-style);
	text-transform: none;
}

.wp-block-pullquote:not(.is-style-solid-color) {
	background: none;
}

.wp-block-pullquote.alignleft:not(.is-style-solid-color) blockquote:before,
.wp-block-pullquote.alignleft:not(.is-style-solid-color) cite {
	text-align: center;
}

.wp-block-pullquote.alignwide > p,
.wp-block-pullquote.alignwide blockquote {
	max-width: var(--responsive--alignwide-width);
}

.wp-block-pullquote.alignfull:not(.is-style-solid-color) > p,
.wp-block-pullquote.alignfull:not(.is-style-solid-color) blockquote {
	padding: 0 calc(2 * var(--global--spacing-unit));
}

.wp-block-pullquote.is-style-solid-color {
	color: var(--pullquote--color-foreground);
	padding: calc(2.5 * var(--global--spacing-unit));
	border-width: var(--pullquote--border-width);
	border-style: solid;
	border-color: var(--pullquote--border-color);
}
@media (min-width: 600px) {

	.wp-block-pullquote.is-style-solid-color {
		padding: calc(5 * var(--global--spacing-unit));
	}
}

.wp-block-pullquote.is-style-solid-color blockquote::before {
	text-align: left;
}

.wp-block-pullquote.is-style-solid-color blockquote {
	margin: 0;
	max-width: inherit;
}

.wp-block-pullquote.is-style-solid-color blockquote p {
	font-size: var(--pullquote--font-size);
}

.wp-block-pullquote.is-style-solid-color .wp-block-pullquote__citation,
.wp-block-pullquote.is-style-solid-color cite,
.wp-block-pullquote.is-style-solid-color footer {
	color: currentColor;
}

.wp-block-pullquote.is-style-solid-color.alignleft,
.wp-block-pullquote.is-style-solid-color.alignright {
	padding: var(--global--spacing-unit);
}

.wp-block-pullquote.is-style-solid-color.alignleft blockquote,
.wp-block-pullquote.is-style-solid-color.alignright blockquote {
	max-width: initial;
}

.wp-block-quote {
	border-left: none;

	/**
   * Block Options
   */
}

.wp-block-quote:before {
	content: "“";
	font-size: var(--quote--font-size);
	line-height: var(--quote--line-height);
	left: 8px;
}

.has-background .wp-block-quote .wp-block-quote__citation,
[class*=background-color] .wp-block-quote .wp-block-quote__citation,
[style*=background-color] .wp-block-quote .wp-block-quote__citation,
.wp-block-cover[style*=background-image] .wp-block-quote .wp-block-quote__citation,
.has-background .wp-block-quote cite,
[class*=background-color] .wp-block-quote cite,
[style*=background-color] .wp-block-quote cite,
.wp-block-cover[style*=background-image] .wp-block-quote cite,
.has-background .wp-block-quote footer,
[class*=background-color] .wp-block-quote footer,
[style*=background-color] .wp-block-quote footer,
.wp-block-cover[style*=background-image] .wp-block-quote footer {
	color: currentColor;
}

.wp-block-quote.has-text-align-right {
	margin: var(--global--spacing-vertical) var(--global--spacing-horizontal) var(--global--spacing-vertical) auto;
	padding-right: 0;
	border-right: none;
}

.wp-block-quote.has-text-align-right:before {
	display: none;
}

.wp-block-quote.has-text-align-right p:before {
	content: "”";
	font-size: var(--quote--font-size);
	font-weight: normal;
	line-height: var(--quote--line-height);
	margin-right: 5px;
}

.wp-block-quote.has-text-align-center {
	margin: var(--global--spacing-vertical) auto;
}

.wp-block-quote.has-text-align-center:before {
	display: none;
}

.wp-block-quote.is-large,
.wp-block-quote.is-style-large {
	padding-left: 0;
	padding-right: 0;

	/* Resetting margins to match _block-container.scss */
	margin-top: var(--global--spacing-vertical);
	margin-bottom: var(--global--spacing-vertical);
}

.wp-block-quote.is-large p,
.wp-block-quote.is-style-large p {
	font-size: var(--quote--font-size-large);
	font-style: var(--quote--font-style-large);
	line-height: var(--quote--line-height-large);
}

.wp-block-quote.is-large:before,
.wp-block-quote.is-style-large:before {
	font-size: var(--quote--font-size-large);
	line-height: var(--quote--line-height-large);
	left: calc(-1 * var(--global--spacing-horizontal));
}

.wp-block-quote.is-large.has-text-align-right:before,
.wp-block-quote.is-style-large.has-text-align-right:before {
	display: none;
}

.wp-block-quote.is-large.has-text-align-right p:before,
.wp-block-quote.is-style-large.has-text-align-right p:before {
	content: "”";
	font-size: var(--quote--font-size-large);
	font-weight: normal;
	line-height: var(--quote--line-height-large);
	margin-right: 10px;
}

.wp-block-quote.is-large .wp-block-quote__citation,
.wp-block-quote.is-large cite,
.wp-block-quote.is-large footer,
.wp-block-quote.is-style-large .wp-block-quote__citation,
.wp-block-quote.is-style-large cite,
.wp-block-quote.is-style-large footer {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-sm);
}
@media only screen and (max-width: 481px) {

	.wp-block-quote.is-large,
	.wp-block-quote.is-style-large {
		padding-left: var(--global--spacing-horizontal);
	}

	.wp-block-quote.is-large:before,
	.wp-block-quote.is-style-large:before {
		left: 0;
	}

	.wp-block-quote.is-large.has-text-align-right,
	.wp-block-quote.is-style-large.has-text-align-right {
		padding-left: 0;
		padding-right: var(--global--spacing-horizontal);
	}

	.wp-block-quote.is-large.has-text-align-right:before,
	.wp-block-quote.is-style-large.has-text-align-right:before {
		right: 0;
	}

	.wp-block-quote.is-large.has-text-align-center,
	.wp-block-quote.is-style-large.has-text-align-center {
		padding-left: 0;
		padding-right: 0;
	}
}
@media only screen and (max-width: 481px) {

	.wp-block-quote.has-text-align-right {
		padding-left: 0;
		padding-right: calc(0.5 * var(--global--spacing-horizontal));
	}

	.wp-block-quote.has-text-align-right:before {
		right: 0;
	}

	.wp-block-quote.has-text-align-center {
		padding-left: 0;
		padding-right: 0;
	}
}

.wp-block-rss {
	padding-left: 0;
}

.wp-block-rss > li {
	list-style: none;
}

.wp-block-rss:not(.is-grid) > li {
	margin-top: calc(1.666 * var(--global--spacing-vertical));
	margin-bottom: calc(1.666 * var(--global--spacing-vertical));
}

.wp-block-rss:not(.is-grid) > li:first-child {
	margin-top: 0;
}

.wp-block-rss:not(.is-grid) > li:last-child {
	margin-bottom: 0;
}

.wp-block-rss.is-grid > li {
	margin-bottom: var(--global--spacing-vertical);
}

.wp-block-rss.is-grid > li:last-child {
	margin-bottom: 0;
}

.wp-block-rss.is-grid.columns-2 > li:nth-last-child(-n+2):nth-child(2n+1),
.wp-block-rss.is-grid.columns-2 > li:nth-last-child(-n+2):nth-child(2n+1) ~ li,
.wp-block-rss.is-grid.columns-3 > li:nth-last-child(-n+3):nth-child(3n+1),
.wp-block-rss.is-grid.columns-3 > li:nth-last-child(-n+3):nth-child(3n+1) ~ li,
.wp-block-rss.is-grid.columns-4 > li:nth-last-child(-n+4):nth-child(4n+1),
.wp-block-rss.is-grid.columns-4 > li:nth-last-child(-n+4):nth-child(4n+1) ~ li,
.wp-block-rss.is-grid.columns-5 > li:nth-last-child(-n+5):nth-child(5n+1),
.wp-block-rss.is-grid.columns-5 > li:nth-last-child(-n+5):nth-child(5n+1) ~ li,
.wp-block-rss.is-grid.columns-6 > li:nth-last-child(-n+6):nth-child(6n+1),
.wp-block-rss.is-grid.columns-6 > li:nth-last-child(-n+6):nth-child(6n+1) ~ li {
	margin-bottom: 0;
}

.wp-block-rss > li > * {
	margin-top: calc(0.333 * var(--global--spacing-vertical));
	margin-bottom: calc(0.333 * var(--global--spacing-vertical));
}

.wp-block-rss > li > *:first-child {
	margin-top: 0;
}

.wp-block-rss > li > *:last-child {
	margin-bottom: 0;
}

.wp-block-rss .wp-block-rss__item-title > a {
	display: inline-block;
	font-family: var(--latest-posts--title-font-family);
	font-size: var(--latest-posts--title-font-size);
	font-weight: var(--heading--font-weight);
	line-height: var(--global--line-height-heading);
	margin-bottom: calc(0.333 * var(--global--spacing-vertical));
}

.wp-block-rss .wp-block-rss__item-author {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-md);
	line-height: var(--global--line-height-body);
}

.wp-block-rss .wp-block-rss__item-publish-date {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-xs);
	line-height: var(--global--line-height-body);
}

[class*=inner-container] .wp-block-rss .wp-block-rss__item-publish-date,
.has-background .wp-block-rss .wp-block-rss__item-publish-date {
	color: currentColor;
}

.wp-block-rss .wp-block-rss__item-excerpt,
.wp-block-rss .wp-block-rss__item-full-content {
	font-family: var(--latest-posts--description-font-family);
	font-size: var(--latest-posts--description-font-size);
	line-height: var(--global--line-height-body);
	margin-top: calc(0.666 * var(--global--spacing-vertical));
}

.wp-block-rss.alignfull {
	padding-left: var(--global--spacing-unit);
	padding-right: var(--global--spacing-unit);
}

.entry-content [class*=inner-container] .wp-block-rss.alignfull,
.entry-content .has-background .wp-block-rss.alignfull {
	padding-left: 0;
	padding-right: 0;
}

.wp-block-search {
	max-width: var(--responsive--aligndefault-width);
}

.wp-block-search__button-only.aligncenter .wp-block-search__inside-wrapper {
	justify-content: center;
}

.wp-block-search .wp-block-search__label {
	font-size: var(--form--font-size);
	font-weight: var(--form--label-weight);
	margin-bottom: calc(var(--global--spacing-vertical) / 3);
}

.wp-block-search .wp-block-search__input {
	border: var(--form--border-width) solid var(--form--border-color);
	border-radius: var(--form--border-radius);
	color: var(--form--color-text);
	line-height: var(--form--line-height);
	max-width: inherit;
	margin-right: calc(-1 * var(--button--border-width));
	padding: var(--form--spacing-unit);
}

.wp-block-search .wp-block-search__input:focus {
	color: var(--form--color-text);
	border-color: var(--form--border-color);
}

.has-background .wp-block-search .wp-block-search__input {
	border-color: var(--local--color-primary, var(--global--color-primary)) !important;
}

.wp-block-search button.wp-block-search__button {
	margin-left: 0;
	line-height: 1;
}

.wp-block-search button.wp-block-search__button.has-icon {
	padding: 6px calc(0.5 * var(--button--padding-horizontal));
}

.wp-block-search button.wp-block-search__button.has-icon svg {
	width: 40px;
	height: 40px;
	fill: currentColor;
}

.has-background .wp-block-search button.wp-block-search__button:hover,
.has-background .wp-block-search button.wp-block-search__button:active {
	background-color: var(--local--color-background, var(--global--color-background)) !important;
	color: var(--local--color-primary, var(--global--color-primary)) !important;
}

.has-text-color .wp-block-search button.wp-block-search__button:hover,
.has-text-color .wp-block-search button.wp-block-search__button:active {
	color: var(--local--color-primary, var(--global--color-primary)) !important;
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper {
	background-color: var(--global--color-white);
	border: var(--form--border-width) solid var(--form--border-color);
	border-radius: var(--form--border-radius);
	padding: var(--form--border-width);
}

.has-background .wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper {
	border-color: var(--local--color-primary, var(--global--color-primary)) !important;
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__input {
	margin-left: 0;
	margin-right: 0;
	padding-left: var(--form--spacing-unit);
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__input:focus {
	color: var(--form--color-text);
	outline-offset: -2px;
	outline: 2px dotted var(--form--border-color);
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper button.wp-block-search__button {
	padding: var(--button--padding-vertical) var(--button--padding-horizontal);
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper button.wp-block-search__button:hover {
	color: var(--global--color-dark-gray);
}

.is-dark-theme .wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper button.wp-block-search__button {
	color: var(--global--color-dark-gray);
}

.is-dark-theme .wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper button.wp-block-search__button:hover {
	background-color: var(--global--color-dark-gray);
	color: var(--global--color-white);
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper button.wp-block-search__button.has-icon {
	padding: 6px calc(0.5 * var(--button--padding-horizontal));
}

.wp-block-search__button {
	box-shadow: none;
}

hr {
	border-style: none;
	border-bottom: var(--separator--height) solid var(--separator--border-color);
	clear: both;
	margin-left: auto;
	margin-right: auto;
}

hr.wp-block-separator {
	border-bottom: var(--separator--height) solid var(--separator--border-color);
	opacity: 1;

	/**
   * Block Options
   */
}

hr.wp-block-separator:not(.is-style-dots):not(.alignwide) {
	max-width: var(--responsive--aligndefault-width);
}

hr.wp-block-separator:not(.is-style-dots).alignwide {
	max-width: var(--responsive--alignwide-width);
}

hr.wp-block-separator:not(.is-style-dots).alignfull {
	max-width: var(--responsive--alignfull-width);
}

hr.wp-block-separator.is-style-twentytwentyone-separator-thick {
	border-bottom-width: calc(3 * var(--separator--height));
}

hr.wp-block-separator.is-style-dots.has-background,
hr.wp-block-separator.is-style-dots.has-text-color {
	background-color: transparent !important;
}

hr.wp-block-separator.is-style-dots.has-background:before,
hr.wp-block-separator.is-style-dots.has-text-color:before {
	color: currentColor !important;
}

hr.wp-block-separator.is-style-dots:before {
	color: var(--separator--border-color);
	font-size: var(--global--font-size-xl);
	letter-spacing: var(--global--font-size-sm);
	padding-left: var(--global--font-size-sm);
}

.has-background hr.wp-block-separator,
[class*=background-color] hr.wp-block-separator,
[style*=background-color] hr.wp-block-separator,
.wp-block-cover[style*=background-image] hr.wp-block-separator {
	border-color: currentColor;
}

.wp-block-social-links a:focus {
	color: var(--global--color-primary);
}

.wp-block-social-links.is-style-twentytwentyone-social-icons-color a {
	color: var(--global--color-primary);
}

.wp-block-social-links.is-style-twentytwentyone-social-icons-color .wp-social-link,
.wp-block-social-links.is-style-twentytwentyone-social-icons-color.has-icon-background-color.has-icon-background-color .wp-social-link {
	background: none;
}

.wp-block-spacer {
	display: block;
	margin-bottom: 0 !important;
	margin-top: 0 !important;
}
@media only screen and (max-width: 481px) {

	.wp-block-spacer[style] {
		height: var(--global--spacing-unit) !important;
	}
}

table,
.wp-block-table {
	width: 100%;
	min-width: 240px;
	border-collapse: collapse;
}

table thead,
table tfoot,
.wp-block-table thead,
.wp-block-table tfoot {
	text-align: center;
}

table th,
.wp-block-table th {
	font-family: var(--heading--font-family);
}

table td,
table th,
.wp-block-table td,
.wp-block-table th {
	padding: calc(0.5 * var(--global--spacing-unit));
	border: 1px solid;
}

table figcaption,
.wp-block-table figcaption {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-xs);
}

table.is-style-regular .has-background,
table.is-style-stripes .has-background,
table.is-style-stripes .has-background thead tr,
table.is-style-stripes .has-background tfoot tr,
table.is-style-stripes .has-background tbody tr,
.wp-block-table.is-style-regular .has-background,
.wp-block-table.is-style-stripes .has-background,
.wp-block-table.is-style-stripes .has-background thead tr,
.wp-block-table.is-style-stripes .has-background tfoot tr,
.wp-block-table.is-style-stripes .has-background tbody tr {
	color: var(--table--has-background-text-color);
}

table.is-style-stripes,
.wp-block-table.is-style-stripes {
	border-color: var(--table--stripes-border-color);
}

table.is-style-stripes th,
table.is-style-stripes td,
.wp-block-table.is-style-stripes th,
.wp-block-table.is-style-stripes td {
	border-width: 0;
}

table.is-style-stripes tbody tr:nth-child(odd),
.wp-block-table.is-style-stripes tbody tr:nth-child(odd) {
	background-color: var(--table--stripes-background-color);
}

table.is-style-stripes .has-background tbody tr:nth-child(odd),
.wp-block-table.is-style-stripes .has-background tbody tr:nth-child(odd) {
	background-color: var(--global--color-white-90);
}

table.wp-calendar-table td,
table.wp-calendar-table th {
	background: transparent;
	border: 0;
	text-align: center;
	line-height: 2;
	vertical-align: middle;
	word-break: normal;
}

table.wp-calendar-table th {
	font-weight: bold;
}

table.wp-calendar-table thead,
table.wp-calendar-table tbody {
	color: currentColor;
	border: 1px solid;
}

table.wp-calendar-table caption {
	font-weight: bold;
	text-align: left;
	margin-bottom: var(--global--spacing-unit);
	color: currentColor;
}

.wp-calendar-nav {
	text-align: left;
	margin-top: calc(var(--global--spacing-unit) / 2);
}

.wp-calendar-nav svg {
	height: 1em;
	vertical-align: middle;
}

.wp-calendar-nav svg path {
	fill: currentColor;
}

.wp-calendar-nav .wp-calendar-nav-next {
	float: right;
}

.wp-block-tag-cloud.alignfull {
	padding-left: var(--global--spacing-unit);
	padding-right: var(--global--spacing-unit);
}

.wp-block-verse {
	font-family: var(--entry-content--font-family);
}

.wp-block-video figcaption {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-xs);
	margin-top: calc(0.5 * var(--global--spacing-unit));
	margin-bottom: var(--global--spacing-unit);
	text-align: center;
}

* > figure > video {
	max-width: unset;
	width: 100%;
	vertical-align: middle;
}

:root .is-extra-small-text,
:root .has-extra-small-font-size {
	font-size: var(--global--font-size-xs);
}

:root .is-small-text,
:root .has-small-font-size {
	font-size: var(--global--font-size-sm);
}

:root .is-regular-text,
:root .has-regular-font-size,
:root .is-normal-font-size,
:root .has-normal-font-size,
:root .has-medium-font-size {
	font-size: var(--global--font-size-base);
}

:root .is-large-text,
:root .has-large-font-size {
	font-size: var(--global--font-size-lg);
	line-height: var(--global--line-height-heading);
}

:root .is-larger-text,
:root .has-larger-font-size,
:root .is-extra-large-text,
:root .has-extra-large-font-size {
	font-size: var(--global--font-size-xl);
	line-height: var(--global--line-height-heading);
}

:root .is-huge-text,
:root .has-huge-font-size {
	font-size: var(--global--font-size-xxl);
	line-height: var(--global--line-height-heading);
	font-weight: var(--heading--font-weight-page-title);
}

:root .is-gigantic-text,
:root .has-gigantic-font-size {
	font-size: var(--global--font-size-xxxl);
	line-height: var(--global--line-height-heading);
	font-weight: var(--heading--font-weight-page-title);
}

/* Block Alignments */

/**
 * These selectors set the default max width for content appearing inside a post or page.
 */

/**
 * .alignleft
 */
.alignleft {

	/*rtl:ignore*/
	text-align: left;
	margin-top: 0;
}

.entry-content > .alignleft {
	max-width: var(--responsive--aligndefault-width);
}

@media only screen and (min-width: 482px) {

	.alignleft {

		/*rtl:ignore*/
		float: left;

		/*rtl:ignore*/
		margin-right: var(--global--spacing-horizontal);
		margin-bottom: var(--global--spacing-vertical);
	}

	.entry-content > .alignleft {
		max-width: calc(50% - var(--responsive--alignleft-margin));
	}
}

/**
 * .aligncenter
 */
.aligncenter {
	clear: both;
	display: block;
	float: none;
	margin-right: auto;
	margin-left: auto;
	text-align: center;
}

/**
 * .alignright
 */
.alignright {
	margin-top: 0;
	margin-bottom: var(--global--spacing-vertical);
}

.entry-content > .alignright {
	max-width: var(--responsive--aligndefault-width);
}

@media only screen and (min-width: 482px) {

	.alignright {

		/*rtl:ignore*/
		float: right;

		/*rtl:ignore*/
		margin-left: var(--global--spacing-horizontal);
	}

	.entry-content > .alignright {
		max-width: calc(50% - var(--responsive--alignright-margin));
	}
}

[class*=inner-container] > .alignleft + *,
[class*=inner-container] > .alignright + * {
	margin-top: 0;
}

/**
 * .alignwide
 */
.alignwide {
	clear: both;
}

/**
 * .alignfull
 */
.alignfull {
	clear: both;
}

.has-left-content {
	justify-content: flex-start;
}

.has-right-content {
	justify-content: flex-end;
}

.has-parallax {
	background-attachment: fixed;
}

.has-drop-cap:not(:focus)::first-letter {
	font-family: var(--heading--font-family);
	font-weight: var(--heading--font-weight);
	line-height: 0.66;
	text-transform: uppercase;
	font-style: normal;
	float: left;
	margin: 0.1em 0.1em 0 0;
	font-size: calc(1.2 * var(--heading--font-size-h1));
}

.has-drop-cap:not(:focus)::after {
	content: "";
	display: table;
	clear: both;
	padding-top: 14px;
}

.desktop-only {
	display: none;
}
@media only screen and (min-width: 482px) {

	.desktop-only {
		display: block;
	}
}

/* Category 06 contains all "bigger" components which contain elements of the previous two categories like header, footer, page template, single template, comments section, archives, ... */
.site-header {
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	row-gap: var(--global--spacing-vertical);
}

.wp-custom-logo .site-header {
	align-items: center;
}
@media only screen and (min-width: 482px) {

	.site-header {
		padding-top: calc(var(--global--spacing-vertical) / 0.75);
	}
}
@media only screen and (min-width: 822px) {

	.site-header {
		padding-top: calc(2.4 * var(--global--spacing-vertical));
	}
}

.site-branding {
	color: var(--branding--color-text);
	margin-right: 140px;
}

.site-branding:last-child {
	margin-right: 0;
	width: 100%;
	text-align: center;
}
@media only screen and (min-width: 482px) {

	.site-branding {
		margin-right: initial;
		margin-top: 4px;
	}
}

.site-title {
	color: var(--branding--color-link);
	font-family: var(--branding--title--font-family);
	font-size: var(--branding--title--font-size-mobile);
	letter-spacing: normal;
	text-transform: var(--branding--title--text-transform);
	line-height: var(--global--line-height-heading);
	margin-bottom: calc(var(--global--spacing-vertical) / 6);
}

.site-title a {
	color: currentColor;
	font-weight: var(--branding--title--font-weight);
}

.site-title a:link,
.site-title a:visited,
.site-title a:active {
	color: currentColor;
}

.site-title a:hover,
.site-title a:focus {
	color: var(--branding--color-link-hover);
}
@media only screen and (min-width: 482px) {

	.site-title {
		font-size: var(--branding--title--font-size);
	}
}

.site-description {
	color: currentColor;
	font-family: var(--branding--description--font-family);
	font-size: var(--branding--description--font-size);
	line-height: 1.4;
}

.site-title > a {
	text-decoration-color: var(--global--color-secondary);
}

.site-logo {
	margin: calc(var(--global--spacing-vertical) / 2) 0;
}

.site-header > .site-logo {
	width: 100%;
	padding-bottom: calc(var(--global--spacing-vertical) * 1.5);
	border-bottom: 1px solid;
	text-align: center;
}

.site-logo .custom-logo {
	margin-left: auto;
	margin-right: auto;
	max-width: var(--branding--logo--max-width-mobile);
	max-height: var(--branding--logo--max-height-mobile);
	height: auto;
	display: inline-block;
	width: auto;
}
@media only screen and (min-width: 482px) {

	.site-logo .custom-logo {
		max-width: var(--branding--logo--max-width);
		max-height: var(--branding--logo--max-height);
		height: auto;
		width: auto;
	}
}

@media only screen and (max-width: 481px) {

	.site-header.has-logo:not(.has-title-and-tagline).has-menu .site-logo {
		position: absolute;
		padding-top: calc(0.5 * var(--global--spacing-vertical));
		margin-top: 0;
		top: var(--global--admin-bar--height);
	}

	.primary-navigation-open .site-header.has-logo:not(.has-title-and-tagline).has-menu .site-logo {
		display: none;
	}

	.site-header.has-logo:not(.has-title-and-tagline).has-menu .site-logo img {
		max-height: calc(var(--button--padding-vertical) - (0.25 * var(--global--spacing-unit)) + 1.7em);
	}

	.site-header.has-logo.has-title-and-tagline {
		align-items: flex-start;
	}

	.site-header.has-logo.has-title-and-tagline.has-menu {
		justify-content: space-between;
	}

	.site-header.has-logo.has-title-and-tagline.has-menu .site-branding {
		max-width: calc(100% - 160px);
	}

	.site-header.has-logo.has-title-and-tagline .site-branding {
		margin-right: 0;
	}

	body:not(.primary-navigation-open) .site-header.has-logo.has-title-and-tagline:after {
		display: none;
	}

	body:not(.primary-navigation-open) .site-header.has-logo.has-title-and-tagline .primary-navigation {
		position: relative;
		top: 0;
	}

	body:not(.primary-navigation-open) .site-header.has-logo.has-title-and-tagline .menu-button-container {
		position: relative;
		padding-top: 0;
		margin-top: calc(0px - var(--button--padding-vertical) + (0.25 * var(--global--spacing-unit)));
	}

	body:not(.primary-navigation-open) .site-header.has-logo.has-title-and-tagline .menu-button-container #primary-mobile-menu {
		padding-left: calc(var(--global--spacing-horizontal) * 0.6 - 4.5px);
		padding-right: calc(var(--global--spacing-horizontal) * 0.6 - 4.5px);
		margin-right: calc(0px - var(--global--spacing-horizontal) * 0.6);
	}

	.site-header:not(.has-logo).has-title-and-tagline .site-branding {
		margin-right: 0;
		max-width: calc(100% - 160px);
	}

	.site-header:not(.has-menu) {
		justify-content: center;
	}
}

.site-footer {
	padding-top: 0;
	padding-bottom: calc(1.7 * var(--global--spacing-vertical));
}

.no-widgets .site-footer {
	margin-top: calc(6 * var(--global--spacing-vertical));
}
@media only screen and (max-width: 481px) {

	.no-widgets .site-footer {
		margin-top: calc(3 * var(--global--spacing-vertical));
	}
}

.site-footer > .site-info {
	padding-top: var(--global--spacing-vertical);
	color: var(--footer--color-text);
	font-family: var(--footer--font-family);
	font-size: var(--footer--font-size);
	line-height: var(--global--line-height-body);
	border-top: 3px solid var(--global--color-border);
}

.site-footer > .site-info .site-name {
	text-transform: var(--branding--title--text-transform);
	font-size: var(--branding--title--font-size);
}

.site-footer > .site-info .powered-by {
	margin-top: calc(0.5 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 822px) {

	.site-footer > .site-info {
		display: flex;
		align-items: center;
	}

	.site-footer > .site-info .powered-by {
		margin-top: initial;
		margin-left: auto;
	}
}

.site-footer > .site-info a {
	color: var(--footer--color-link);
}

.site-footer > .site-info a:link,
.site-footer > .site-info a:visited,
.site-footer > .site-info a:active {
	color: var(--footer--color-link);
}

.site-footer > .site-info a:hover {
	color: var(--footer--color-link-hover);
}

.site-footer > .site-info a:focus {
	color: var(--footer--color-link-hover);
}

.is-dark-theme .site-footer > .site-info a:focus {
	color: var(--wp--style--color--link, var(--global--color-background));
}

.has-background-white .site-footer > .site-info a:focus {
	color: var(--wp--style--color--link, var(--global--color-white));
}

.singular .entry-header {
	border-bottom: 3px solid var(--global--color-border);
	padding-bottom: calc(2 * var(--global--spacing-vertical));
	margin-bottom: calc(3 * var(--global--spacing-vertical));
}

.home .entry-header {
	border-bottom: none;
	padding-bottom: 0;
	margin-bottom: 0;
}

.singular .has-post-thumbnail .entry-header {
	border-bottom: none;
	padding-bottom: calc(1.3 * var(--global--spacing-vertical));
	margin-bottom: 0;
}

.no-results.not-found > *:first-child {
	margin-bottom: calc(3 * var(--global--spacing-vertical));
}

.page-links {
	clear: both;
}

.page-links .post-page-numbers {
	display: inline-block;
	margin-left: calc(0.66 * var(--global--spacing-unit));
	margin-right: calc(0.66 * var(--global--spacing-unit));
	min-width: 44px;
	min-height: 44px;
}

.page-links .post-page-numbers:first-child {
	margin-left: 0;
}

.entry-title {
	color: var(--entry-header--color);
	font-size: var(--entry-header--font-size);
	letter-spacing: var(--heading--letter-spacing-h2);
	line-height: var(--heading--line-height-h2);
	overflow-wrap: break-word;
}

.entry-title a {
	color: var(--entry-header--color-link);
	text-underline-offset: 0.15em;
}

.entry-title a:hover {
	color: var(--entry-header--color-hover);
}

.entry-title a:focus {
	color: var(--entry-header--color-focus);
}

.entry-title a:active {
	color: var(--entry-header--color-link);
}

.singular .entry-title {
	font-size: var(--global--font-size-page-title);
}

h1.entry-title {
	line-height: var(--heading--line-height-h1);
	font-weight: var(--heading--font-weight-page-title);
}

/**
 * Entry Content
 */
.entry-content,
.entry-summary {
	font-family: var(--entry-content--font-family);
}

.entry-content p {
	word-wrap: break-word;
}

.entry-content > iframe[style] {
	margin: var(--global--spacing-vertical) 0 !important;
	max-width: 100% !important;
}

.entry-footer {
	color: var(--global--color-primary);
	clear: both;
	float: none;
	font-size: var(--global--font-size-xs);
	display: block;
}

.entry-footer > span {
	display: inline-block;
}

.entry-footer a {
	color: currentColor;
}

.entry-footer a:hover,
.entry-footer a:focus {
	color: var(--global--color-primary-hover);
}

.entry-footer a:active {
	color: currentColor;
}

.site-main > article > .entry-footer {
	margin-top: var(--global--spacing-vertical);
	padding-top: var(--global--spacing-unit);
	padding-bottom: calc(3 * var(--global--spacing-vertical));
	border-bottom: var(--separator--height) solid var(--separator--border-color);
}

body:not(.single) .site-main > article:last-of-type .entry-footer {
	border-bottom: var(--separator--height) solid transparent;
}

.single .site-main > article > .entry-footer {
	margin-top: calc(3.4 * var(--global--spacing-vertical));
	margin-bottom: calc(3.4 * var(--global--spacing-vertical));
	padding-bottom: 0;
	padding-top: calc(0.8 * var(--global--spacing-vertical));
	border-top: 3px solid var(--separator--border-color);
	border-bottom: var(--separator--height) solid transparent;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: calc(2 * var(--global--spacing-horizontal));
}

.single .site-main > article > .entry-footer .post-taxonomies,
.single .site-main > article > .entry-footer .full-size-link {
	justify-content: flex-end;
	text-align: right;
}

.single .site-main > article > .entry-footer .full-size-link:first-child:last-child {
	grid-column: span 2;
}

.single .site-main > article > .entry-footer .posted-on,
.single .site-main > article > .entry-footer .byline,
.single .site-main > article > .entry-footer .cat-links,
.single .site-main > article > .entry-footer .tags-links {
	display: block;
}
@media only screen and (max-width: 481px) {

	.single .site-main > article > .entry-footer {
		display: block;
	}

	.single .site-main > article > .entry-footer .full-size-link {
		display: block;
	}

	.single .site-main > article > .entry-footer .post-taxonomies,
	.single .site-main > article > .entry-footer .full-size-link {
		text-align: left;
	}
}

/**
 * Post Thumbnails
 */
.post-thumbnail {
	text-align: center;
}

.post-thumbnail .wp-post-image {
	display: block;
	width: auto;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
	margin-top: calc(2 * var(--global--spacing-vertical));
}

/**
 * Author
 */
.author-bio {
	position: relative;
	font-size: var(--global--font-size-xs);
	max-width: var(--responsive--aligndefault-width);
}

.site-main > article > .author-bio {
	margin-top: calc(2 * var(--global--spacing-vertical));
}

.author-bio.show-avatars .avatar {
	display: inline-block;
	vertical-align: top;
	border-radius: 50%;
}

.author-bio.show-avatars .author-bio-content {
	display: inline-block;
	padding-left: var(--global--spacing-horizontal);
	max-width: calc(var(--responsive--aligndefault-width) - 90px);
}

.author-bio .author-bio-content .author-title {
	font-family: var(--entry-author-bio--font-family);
	font-size: var(--entry-author-bio--font-size);
	display: inline;
}

.author-bio .author-bio-content .author-description {
	font-size: var(--global--font-size-xs);
	margin-top: calc(0.5 * var(--global--spacing-vertical));
	margin-bottom: calc(0.5 * var(--global--spacing-vertical));
}

.page-title {
	font-size: var(--global--font-size-page-title);
}

h1.page-title,
h2.page-title {
	font-weight: var(--heading--font-weight-page-title);
}

h1.page-title {
	line-height: var(--heading--line-height-h1);
}

.page-header {
	border-bottom: 3px solid var(--global--color-border);
	padding-bottom: calc(2 * var(--global--spacing-vertical));
}

.archive .content-area .format-aside .entry-content,
.archive .content-area .format-status .entry-content,
.archive .content-area .format-link .entry-content,
.search .content-area .format-aside .entry-content,
.search .content-area .format-status .entry-content,
.search .content-area .format-link .entry-content,
.blog .content-area .format-aside .entry-content,
.blog .content-area .format-status .entry-content,
.blog .content-area .format-link .entry-content {
	font-size: var(--global--font-size-lg);
}

.archive .format-image .entry-content,
.archive .format-gallery .entry-content,
.archive .format-video .entry-content,
.search .format-image .entry-content,
.search .format-gallery .entry-content,
.search .format-video .entry-content,
.blog .format-image .entry-content,
.blog .format-gallery .entry-content,
.blog .format-video .entry-content {
	margin-top: calc(2 * var(--global--spacing-vertical));
}

.archive .entry-footer .cat-links,
.archive .entry-footer .tags-links,
.search .entry-footer .cat-links,
.search .entry-footer .tags-links,
.blog .entry-footer .cat-links,
.blog .entry-footer .tags-links {
	display: block;
}

.archive.logged-in .entry-footer .posted-on,
.search.logged-in .entry-footer .posted-on,
.blog.logged-in .entry-footer .posted-on {
	margin-right: calc(0.5 * var(--global--spacing-unit));
}

.archive-description {
	margin-top: var(--global--spacing-vertical);
	font-size: var(--global--font-size-xl);
	line-height: var(--global--line-height-heading);
}

.error404 main p {
	font-size: var(--global--font-size-lg);
	margin-bottom: calc(var(--global--spacing-vertical) * 1.6666666667);
}

.search-no-results .page-content {
	margin-top: calc(3 * var(--global--spacing-vertical));
}

/**
 * Comments Wrapper
 */
.comments-area > * {
	margin-top: var(--global--spacing-vertical);
	margin-bottom: var(--global--spacing-vertical);
}

.comments-area > *:first-child {
	margin-top: 0;
}

.comments-area > *:last-child {
	margin-bottom: 0;
}

.comments-area.show-avatars .avatar {
	border-radius: 50%;
	position: absolute;
	top: 10px;
}

.comments-area.show-avatars .fn {
	display: inline-block;
	padding-left: 85px;
}

.comments-area.show-avatars .comment-metadata {
	padding: 8px 0 9px 85px;
}

/**
 * Comment Title
 */
.comments-title,
.comment-reply-title {
	font-size: var(--heading--font-size-h2);
	letter-spacing: var(--heading--letter-spacing-h2);
}

.comment-reply-title {
	display: flex;
	justify-content: space-between;
}

.comment-reply-title small a {
	font-family: var(--global--font-secondary);
	font-size: var(--global--font-size-xs);
	font-style: normal;
	font-weight: normal;
	letter-spacing: normal;
}

/* Nested comment reply title*/
.comment .comment-respond .comment-reply-title {
	font-size: var(--global--font-size-lg);
}

/**
 * Comment Lists
 */
.comment-list {
	padding-left: 0;
	list-style: none;
}

.comment-list > li {
	margin-top: var(--global--spacing-vertical);
	margin-bottom: var(--global--spacing-vertical);
}

.comment-list .children {
	list-style: none;
	padding-left: 0;
}

.comment-list .children > li {
	margin-top: var(--global--spacing-vertical);
	margin-bottom: var(--global--spacing-vertical);
}

@media only screen and (min-width: 482px) {

	.comment-list .depth-2,
	.comment-list .depth-3 {
		padding-left: calc(4 * var(--global--spacing-horizontal));
	}
}

/**
 * Comment Meta
 */
.comment-meta .comment-author {
	line-height: var(--global--line-height-heading);
	margin-bottom: calc(0.25 * var(--global--spacing-unit));
}
@media only screen and (min-width: 482px) {

	.comment-meta .comment-author {
		margin-bottom: 0;
		padding-right: 0;
	}
}

.comment-meta .comment-author .fn {
	font-family: var(--global--font-secondary);
	font-weight: normal;
	font-size: var(--global--font-size-lg);
	hyphens: auto;
	word-wrap: break-word;
	word-break: break-word;
}

.comment-meta .comment-metadata {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-xs);
	padding: 8px 0 9px 0;
}

.comment-meta .comment-metadata .edit-link {
	margin-left: var(--global--spacing-horizontal);
}
@media only screen and (min-width: 482px) {

	.comment-meta {
		margin-right: inherit;
	}

	.comment-meta .comment-author {
		max-width: inherit;
	}
}

.reply {
	font-size: var(--global--font-size-sm);
	line-height: var(--global--line-height-heading);
}

.bypostauthor {
	display: block;
}

.says {
	display: none;
}

.pingback .url,
.trackback .url {
	font-family: var(--global--font-primary);
}

.comment-body {
	position: relative;
	margin-bottom: calc(1.7 * var(--global--spacing-vertical));
}

.comment-body > * {
	margin-top: var(--global--spacing-vertical);
	margin-bottom: var(--global--spacing-vertical);
}

.comment-body .reply {
	margin: 0;
}

.comment-content {
	word-wrap: break-word;
}

.pingback .comment-body,
.trackback .comment-body {
	margin-top: var(--global--spacing-vertical);
	margin-bottom: var(--global--spacing-vertical);
}

.comment-respond {
	margin-top: var(--global--spacing-vertical);
}

.comment-respond > * {
	margin-top: var(--global--spacing-unit);
	margin-bottom: var(--global--spacing-unit);
}

.comment-respond > *:first-child {
	margin-top: 0;
}

.comment-respond > *:last-child {
	margin-bottom: 0;
}

.comment-respond > *:last-child.comment-form {
	margin-bottom: var(--global--spacing-vertical);
}

.comment-author {
	padding-top: 3px;
}

.comment-author .url {
	color: currentColor;
}

.comment-form {
	display: flex;
	flex-wrap: wrap;
}

.comment-form > * {
	flex-basis: 100%;
}

.comment-form .comment-notes {
	font-size: var(--global--font-size-sm);
}

.comment-form .comment-form-url,
.comment-form .comment-form-comment {
	width: 100%;
}

.comment-form .comment-form-author,
.comment-form .comment-form-email {
	flex-basis: 0;
	flex-grow: 1;
}
@media only screen and (max-width: 481px) {

	.comment-form .comment-form-author,
	.comment-form .comment-form-email {
		flex-basis: 100%;
	}
}

.comment-form .comment-form-cookies-consent > label,
.comment-form .comment-notes {
	font-size: var(--global--font-size-xs);
	font-weight: normal;
}

.comment-form > p {
	margin-bottom: var(--global--spacing-unit);
}

.comment-form > p:first-of-type {
	margin-top: 0;
}

.comment-form > p:last-of-type {
	margin-bottom: 0;
}

.comment-form > p label,
.comment-form > p input[type=email],
.comment-form > p input[type=text],
.comment-form > p input[type=url],
.comment-form > p textarea {
	display: block;
	font-size: var(--global--font-size-sm);
	margin-bottom: calc(.5 * var(--global--spacing-unit));
	width: 100%;
	font-weight: var(--form--label-weight);
}

.comment-form > p.comment-form-cookies-consent {
	display: flex;
}
@media only screen and (min-width: 482px) {

	.comment-form > p.comment-form-author {
		margin-right: calc(1.5 * var(--global--spacing-horizontal));
	}

	.comment-form > p.comment-notes,
	.comment-form > p.logged-in-as {
		display: block;
	}
}

.menu-button-container {
	display: none;
	justify-content: space-between;
	position: absolute;
	right: 0;
	padding-top: calc(0.5 * var(--global--spacing-vertical));
	padding-bottom: calc(0.25 * var(--global--spacing-vertical));
}
@media only screen and (max-width: 481px) {

	.menu-button-container {
		display: flex;
	}
}

.menu-button-container #primary-mobile-menu {
	display: flex;
	margin-left: auto;
	padding: calc(var(--button--padding-vertical) - (0.25 * var(--global--spacing-unit))) calc(0.5 * var(--button--padding-horizontal));
	font-size: var(--primary-nav--font-size-button);
	font-weight: var(--primary-nav--font-weight-button);
	background-color: transparent;
	border: none;
	color: var(--primary-nav--color-link);
}

.menu-button-container #primary-mobile-menu .dropdown-icon {
	display: flex;
	align-items: center;
}

.menu-button-container #primary-mobile-menu .dropdown-icon .svg-icon {
	margin-left: calc(0.25 * var(--global--spacing-unit));
}

.menu-button-container #primary-mobile-menu .dropdown-icon.open .svg-icon {
	position: relative;
	top: -1px;
}

.menu-button-container #primary-mobile-menu .dropdown-icon.close {
	display: none;
}

.menu-button-container #primary-mobile-menu[aria-expanded*=true] .dropdown-icon.open {
	display: none;
}

.menu-button-container #primary-mobile-menu[aria-expanded*=true] .dropdown-icon.close {
	display: flex;
}

.has-logo.has-title-and-tagline .menu-button-container #primary-mobile-menu[aria-expanded*=true] .dropdown-icon.close {
	animation-name: twentytwentyone-close-button-transition;
	animation-duration: 0.3s;
}

.primary-navigation-open .menu-button-container {
	width: 100%;
	z-index: 500;
	background-color: var(--global--color-background);
}

.primary-navigation-open .menu-button-container #primary-mobile-menu {
	position: static;
}

.primary-navigation {
	position: absolute;
	top: var(--global--admin-bar--height);
	right: 0;
	color: var(--primary-nav--color-text);
	font-size: var(--primary-nav--font-size);
	line-height: 1.15;
	margin-top: 0;
	margin-bottom: 0;
}

.primary-navigation > .primary-menu-container {
	position: fixed;
	visibility: hidden;
	opacity: 0;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding-top: calc(var(--button--line-height) * var(--primary-nav--font-size-button) + 42px + 5px);
	padding-left: var(--global--spacing-unit);
	padding-right: var(--global--spacing-unit);
	padding-bottom: var(--global--spacing-horizontal);
	background-color: var(--global--color-background);
	transition: all 0.15s ease-in-out;
	transform: translateY(var(--global--spacing-vertical));
}
@media only screen and (max-width: 481px) {

	.primary-navigation > .primary-menu-container {
		height: 100vh;
		z-index: 499;
		overflow-x: hidden;
		overflow-y: auto;
		border: 2px solid transparent;
	}

	.has-logo.has-title-and-tagline .primary-navigation > .primary-menu-container {
		position: fixed;
		transform: translateY(0) translateX(100%);
	}

	.admin-bar .has-logo.has-title-and-tagline .primary-navigation > .primary-menu-container {
		top: var(--global--admin-bar--height);
	}

	.admin-bar .primary-navigation > .primary-menu-container {
		height: calc(100vh - var(--global--admin-bar--height));
	}

	.primary-navigation > .primary-menu-container:focus {
		border: 2px solid var(--global--color-primary);
	}
}
@media only screen and (max-width: 481px) {

	.primary-navigation-open .primary-navigation {
		width: 100%;
		position: fixed;
		z-index: 2;
	}
}

.primary-navigation-open .primary-navigation > .primary-menu-container {
	position: absolute;
	visibility: visible;
	opacity: 1;
	transform: translateY(0);
}
@media only screen and (max-width: 481px) {

	.primary-navigation-open .has-logo.has-title-and-tagline .primary-navigation > .primary-menu-container {
		transform: translateX(0) translateY(0);
	}
}
@media only screen and (min-width: 482px) {

	.primary-navigation {
		position: relative;
		margin-left: auto;
	}

	.primary-navigation > .primary-menu-container {
		visibility: visible;
		opacity: 1;
		position: relative;
		padding: 0;
		background-color: transparent;
		overflow: initial;
		transform: none;
	}

	.primary-navigation #toggle-menu {
		display: none;
	}

	.primary-navigation > .primary-menu-container ul > li .sub-menu-toggle[aria-expanded=false] ~ ul {
		display: none;
	}

	.admin-bar .primary-navigation {
		top: initial;
	}

	.admin-bar .primary-navigation > .primary-menu-container {
		top: initial;
	}
}

.primary-navigation > div > .menu-wrapper {
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	list-style: none;
	margin: 0;
	max-width: none;
	padding-left: 0;
	position: relative;
}
@media only screen and (max-width: 481px) {

	.primary-navigation > div > .menu-wrapper {
		padding-bottom: 100px;
	}

	.primary-navigation > div > .menu-wrapper ul {
		padding-left: 0;
	}
}

.primary-navigation > div > .menu-wrapper li {
	display: block;
	position: relative;
	width: 100%;
}
@media only screen and (min-width: 482px) {

	.primary-navigation > div > .menu-wrapper li {
		margin: 0;
		width: inherit;
	}

	.primary-navigation > div > .menu-wrapper li:last-child {
		margin-right: 0;
	}
}

.primary-navigation > div > .menu-wrapper .sub-menu-toggle {
	display: flex;
	height: calc(2 * var(--primary-nav--padding) + 1.15em + 1px);
	width: 44px;
	padding: 0;
	justify-content: center;
	align-items: center;
	background: transparent;
	color: currentColor;
	border: none;
}

.primary-navigation > div > .menu-wrapper .sub-menu-toggle:focus {
	outline: 2px solid var(--wp--style--color--link, var(--global--color-primary));
}
@media only screen and (max-width: 481px) {

	.primary-navigation > div > .menu-wrapper .sub-menu-toggle {
		display: none;
	}
}

.primary-navigation > div > .menu-wrapper .sub-menu-toggle .icon-plus,
.primary-navigation > div > .menu-wrapper .sub-menu-toggle .icon-minus {
	height: 100%;
	display: flex;
	align-items: center;
}

.primary-navigation > div > .menu-wrapper .sub-menu-toggle .icon-plus svg,
.primary-navigation > div > .menu-wrapper .sub-menu-toggle .icon-minus svg {
	margin-top: -1px;
}

.primary-navigation > div > .menu-wrapper .sub-menu-toggle .icon-minus {
	display: none;
}

.primary-navigation > div > .menu-wrapper .sub-menu-toggle[aria-expanded=true] .icon-minus {
	display: flex;
}

.primary-navigation > div > .menu-wrapper .sub-menu-toggle[aria-expanded=true] .icon-plus {
	display: none;
}

.primary-navigation > div > .menu-wrapper > li > .sub-menu {
	position: relative;
}
@media only screen and (min-width: 482px) {

	.primary-navigation > div > .menu-wrapper > li > .sub-menu {
		left: 0;
		margin: 0;
		min-width: max-content;
		position: absolute;
		top: 100%;
		padding-top: 3px;
		transition: all 0.5s ease;
		z-index: 88888;
	}

	.primary-navigation > div > .menu-wrapper > li > .sub-menu:before,
	.primary-navigation > div > .menu-wrapper > li > .sub-menu:after {
		content: "";
		display: block;
		position: absolute;
		width: 0;
		top: -10px;
		left: var(--global--spacing-horizontal);
		border-style: solid;
		border-color: var(--primary-nav--border-color) transparent;
		border-width: 0 7px 10px 7px;
	}

	.primary-navigation > div > .menu-wrapper > li > .sub-menu:after {
		top: -9px;
		border-color: var(--global--color-background) transparent;
	}

	.primary-navigation > div > .menu-wrapper > li > .sub-menu li {
		background: var(--global--color-background);
	}

	.primary-navigation > div > .menu-wrapper > li > .sub-menu.submenu-reposition-left {

		/* rtl:ignore */
		left: 0;

		/* rtl:ignore */
		right: auto;
	}

	.primary-navigation > div > .menu-wrapper > li > .sub-menu.submenu-reposition-left:before,
	.primary-navigation > div > .menu-wrapper > li > .sub-menu.submenu-reposition-left:after {

		/* rtl:ignore */
		left: var(--global--spacing-horizontal);

		/* rtl:ignore */
		right: auto;
	}

	.primary-navigation > div > .menu-wrapper > li > .sub-menu.submenu-reposition-right {

		/* rtl:ignore */
		right: 0;

		/* rtl:ignore */
		left: auto;
	}

	.primary-navigation > div > .menu-wrapper > li > .sub-menu.submenu-reposition-right:before,
	.primary-navigation > div > .menu-wrapper > li > .sub-menu.submenu-reposition-right:after {

		/* rtl:ignore */
		left: auto;

		/* rtl:ignore */
		right: var(--global--spacing-horizontal);
	}
}

.primary-navigation .primary-menu > .menu-item:hover > a {
	color: var(--primary-nav--color-link-hover);
}
@media only screen and (min-width: 482px) {

	.primary-navigation .primary-menu-container {
		margin-right: calc(0px - var(--primary-nav--padding));
		margin-left: calc(0px - var(--primary-nav--padding));
	}

	.primary-navigation .primary-menu-container > ul > .menu-item {
		display: flex;
	}

	.primary-navigation .primary-menu-container > ul > .menu-item > a {
		padding-left: var(--primary-nav--padding);
		padding-right: var(--primary-nav--padding);
	}

	.primary-navigation .primary-menu-container > ul > .menu-item > a + .sub-menu-toggle {
		margin-left: calc(5px - var(--primary-nav--padding));
	}
}

.primary-navigation a {
	display: block;
	font-family: var(--primary-nav--font-family-mobile);
	font-size: var(--primary-nav--font-size-mobile);
	font-weight: var(--primary-nav--font-weight);
	padding: var(--primary-nav--padding) 0;
	text-decoration: none;
}
@media only screen and (min-width: 482px) {

	.primary-navigation a {
		display: block;
		font-family: var(--primary-nav--font-family);
		font-size: var(--primary-nav--font-size);
		font-weight: var(--primary-nav--font-weight);
	}
}

.primary-navigation a + svg {
	fill: var(--primary-nav--color-text);
}

.primary-navigation a:hover,
.primary-navigation a:link,
.primary-navigation a:visited {
	color: var(--primary-nav--color-link-hover);
}

.primary-navigation a:hover {
	text-decoration: underline;
	text-decoration-style: dotted;
}

.primary-navigation a:focus {
	position: relative;
	z-index: 99999;
	outline-offset: 0;
	text-decoration-thickness: 2px;
}

.primary-navigation .current-menu-item > a:first-child,
.primary-navigation .current_page_item > a:first-child {
	text-decoration: underline;
	text-decoration-style: solid;
}

.primary-navigation .current-menu-item > a:first-child:hover,
.primary-navigation .current_page_item > a:first-child:hover {
	text-decoration: underline;
	text-decoration-style: dotted;
}

.primary-navigation .sub-menu {
	margin: 0;
	padding: 0;
	list-style: none;
	margin-left: var(--primary-nav--padding);
	border: 1px solid var(--primary-nav--border-color);
}

.primary-navigation .sub-menu .sub-menu {
	border: none;
}
@media only screen and (min-width: 482px) {

	.primary-navigation .sub-menu > .menu-item > .sub-menu {
		padding: 0;
	}
}
@media only screen and (max-width: 481px) {

	.primary-navigation .sub-menu .menu-item:last-child {
		margin-bottom: 0;
	}
}

.primary-navigation .sub-menu .menu-item > a {
	padding: calc(1.25 * var(--primary-nav--padding)) var(--primary-nav--padding);
	display: block;
	font-size: var(--primary-nav--font-size-sub-menu-mobile);
	font-style: var(--primary-nav--font-style-sub-menu-mobile);
}
@media only screen and (min-width: 482px) {

	.primary-navigation .sub-menu .menu-item > a {
		font-size: var(--primary-nav--font-size-sub-menu);
		font-style: var(--primary-nav--font-style);
	}
}

.primary-navigation .menu-item-has-children > .svg-icon {
	display: none;
}
@media only screen and (min-width: 482px) {

	.primary-navigation .menu-item-has-children > .svg-icon {
		display: inline-block;
		height: 100%;
	}

	.primary-navigation .menu-item-has-children .sub-menu .svg-icon {
		display: none;
	}
}

.primary-navigation .menu-item-description {
	display: block;
	clear: both;
	font-size: var(--global--font-size-xs);
	text-transform: none;
	line-height: 1.7;
}

.primary-navigation .menu-item-description > span {
	display: inline-block;
}

@media only screen and (max-width: 481px) {

	.lock-scrolling .site {
		position: fixed;
		max-width: 100%;
		width: 100%;
	}
}
@keyframes twentytwentyone-close-button-transition {

	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

.footer-navigation {
	margin-top: calc(2 * var(--global--spacing-vertical));
	margin-bottom: var(--global--spacing-vertical);
	color: var(--footer--color-text);
	font-size: var(--global--font-size-xs);
	font-family: var(--footer--font-family);
}

.footer-navigation-wrapper {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	list-style: none;
	padding-left: 0;
}

.footer-navigation-wrapper li {
	display: inline;
	line-height: 3;
}

.footer-navigation-wrapper li a {
	padding: calc(1.25 * var(--primary-nav--padding)) var(--primary-nav--padding);
	transition: transform 0.1s ease;
	color: var(--footer--color-link);
}

.footer-navigation-wrapper li a:link,
.footer-navigation-wrapper li a:visited,
.footer-navigation-wrapper li a:active {
	color: var(--footer--color-link);
}

.footer-navigation-wrapper li a:hover {
	text-decoration: underline;
	text-decoration-style: dotted;
	text-decoration-skip-ink: none;
	color: var(--footer--color-link-hover);
}

.is-dark-theme .footer-navigation-wrapper li a:focus .svg-icon {
	fill: var(--wp--style--color--link, var(--global--color-background));
}

.has-background-white .footer-navigation-wrapper li a:focus .svg-icon {
	fill: var(--wp--style--color--link, var(--global--color-white));
}

.footer-navigation-wrapper li .svg-icon {
	vertical-align: middle;
	fill: var(--footer--color-link);
}

.footer-navigation-wrapper li .svg-icon:hover {
	transform: scale(1.1);
}

.footer-navigation-wrapper .sub-menu-toggle,
.footer-navigation-wrapper .menu-item-description {
	display: none;
}

/* Next/Previous navigation */
.navigation {
	color: var(--global--color-primary);
}

.navigation a {
	color: var(--global--color-primary);
	text-decoration: none;
}

.navigation a:hover {
	color: var(--global--color-primary-hover);
	text-decoration: underline;
	text-decoration-style: dotted;
}

.navigation a:focus {
	color: var(--global--color-secondary);
}

.navigation a:active {
	color: var(--global--color-primary);
}

.navigation .nav-links > * {
	min-width: 44px;
	min-height: 44px;
}

.navigation .nav-links .nav-next a,
.navigation .nav-links .nav-previous a {
	display: flex;
	flex-direction: column;
}

.navigation .nav-links .dots {
	text-align: center;
}
@media only screen and (min-width: 592px) {

	.navigation .nav-links {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.navigation .nav-links .nav-next,
	.navigation .nav-links .nav-previous {
		flex: 0 1 auto;
		margin-bottom: inherit;
		margin-top: inherit;
		max-width: calc(50% - (0.5 * var(--global--spacing-unit)));
	}

	.navigation .nav-links .nav-next {
		text-align: right;
	}
}

.navigation .svg-icon {
	display: inline-block;
	fill: currentColor;
	vertical-align: middle;
	position: relative;
}

.navigation .nav-previous .svg-icon,
.navigation .prev .svg-icon {
	top: -2px;
	margin-right: calc(0.25 * var(--global--spacing-unit));
}

.navigation .nav-next .svg-icon,
.navigation .next .svg-icon {
	top: -1px;
	margin-left: calc(0.25 * var(--global--spacing-unit));
}

.post-navigation {
	margin: var(--global--spacing-vertical) auto;
}
@media only screen and (min-width: 822px) {

	.post-navigation {
		margin: var(--global--spacing-vertical) auto;
	}
}

.post-navigation .meta-nav {
	line-height: var(--global--line-height-body);
	color: var(--global--color-primary);
}

.post-navigation .post-title {
	display: inline-block;
	font-family: var(--global--font-primary);
	font-size: var(--global--font-size-lg);
	font-weight: var(--pagination--font-weight-strong);
	line-height: var(--global--line-height-heading);
}
@media only screen and (min-width: 822px) {

	.post-navigation .post-title {
		margin: 5px calc(24px + (0.25 * var(--global--spacing-unit))) 0;
	}
}
@media only screen and (min-width: 482px) {

	.post-navigation .nav-links {
		justify-content: space-between;
	}
}

.post-navigation .nav-next,
.post-navigation .nav-previous {
	margin-top: var(--global--spacing-vertical);
	margin-bottom: var(--global--spacing-vertical);
}

.post-navigation .nav-next:first-child,
.post-navigation .nav-previous:first-child {
	margin-top: 0;
}

.post-navigation .nav-next:last-child,
.post-navigation .nav-previous:last-child {
	margin-bottom: 0;
}

.pagination,
.comments-pagination {
	border-top: 3px solid var(--global--color-border);
	padding-top: var(--global--spacing-vertical);
	margin: var(--global--spacing-vertical) auto;
}
@media only screen and (min-width: 822px) {

	.pagination,
	.comments-pagination {
		margin: var(--global--spacing-vertical) auto;
	}
}

.pagination .nav-links,
.comments-pagination .nav-links {
	margin-top: calc(-1 * var(--global--spacing-vertical));
}

.pagination .nav-links a:hover,
.comments-pagination .nav-links a:hover {
	color: var(--pagination--color-link-hover);
}

.is-dark-theme .pagination .nav-links a:active,
.is-dark-theme .pagination .nav-links a:hover:active,
.is-dark-theme .pagination .nav-links a:hover:focus,
.is-dark-theme .comments-pagination .nav-links a:active,
.is-dark-theme .comments-pagination .nav-links a:hover:active,
.is-dark-theme .comments-pagination .nav-links a:hover:focus {
	color: var(--global--color-background);
}

.has-background-white .pagination .nav-links a:active,
.has-background-white .pagination .nav-links a:hover:active,
.has-background-white .pagination .nav-links a:hover:focus,
.has-background-white .comments-pagination .nav-links a:active,
.has-background-white .comments-pagination .nav-links a:hover:active,
.has-background-white .comments-pagination .nav-links a:hover:focus {
	color: var(--global--color-white);
}

.pagination .nav-links > *,
.comments-pagination .nav-links > * {
	color: var(--pagination--color-text);
	font-family: var(--pagination--font-family);
	font-size: var(--pagination--font-size);
	font-weight: var(--pagination--font-weight);
	margin-top: var(--global--spacing-vertical);
	margin-left: calc(0.66 * var(--global--spacing-unit));
	margin-right: calc(0.66 * var(--global--spacing-unit));
}

.pagination .nav-links > *.current,
.comments-pagination .nav-links > *.current {
	text-decoration: underline;
}

.pagination .nav-links > *:not(.dots):not(.current):hover,
.comments-pagination .nav-links > *:not(.dots):not(.current):hover {
	text-decoration-style: dotted;
}

.pagination .nav-links > *:first-child,
.comments-pagination .nav-links > *:first-child {
	margin-left: 0;
}

.pagination .nav-links > *:last-child,
.comments-pagination .nav-links > *:last-child {
	margin-right: 0;
}

.pagination .nav-links > *.next,
.comments-pagination .nav-links > *.next {
	margin-left: auto;
}

.pagination .nav-links > *.prev,
.comments-pagination .nav-links > *.prev {
	margin-right: auto;
}
@media only screen and (max-width: 821px) {

	.pagination .nav-links,
	.comments-pagination .nav-links {
		display: flex;
		flex-wrap: wrap;
	}

	.pagination .page-numbers,
	.comments-pagination .page-numbers {
		display: none;
	}

	.pagination .page-numbers.prev,
	.pagination .page-numbers.next,
	.comments-pagination .page-numbers.prev,
	.comments-pagination .page-numbers.next {
		display: inline-block;
		flex: 0 1 auto;
	}
}
@media only screen and (max-width: 481px) {

	.pagination .nav-short,
	.comments-pagination .nav-short {
		display: none;
	}
}

.comments-pagination {
	padding-top: calc(0.66 * var(--global--spacing-vertical));
	margin: calc(3 * var(--global--spacing-vertical)) auto;
}
@media only screen and (min-width: 822px) {

	.comments-pagination {
		margin: calc(3 * var(--global--spacing-vertical)) auto calc(4 * var(--global--spacing-vertical)) auto;
	}
}

.comments-pagination .nav-links > * {
	font-size: var(--global--font-size-md);
}

.widget-area {
	margin-top: calc(6 * var(--global--spacing-vertical));
	padding-bottom: calc(var(--global--spacing-vertical) / 3);
	color: var(--footer--color-text);
	font-size: var(--footer--font-size);
	font-family: var(--footer--font-family);
}
@media only screen and (min-width: 652px) {

	.widget-area {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: calc(2 * var(--global--spacing-horizontal));
	}
}
@media only screen and (min-width: 1024px) {

	.widget-area {
		grid-template-columns: repeat(3, 1fr);
	}
}
@media only screen and (max-width: 481px) {

	.widget-area {
		margin-top: calc(3 * var(--global--spacing-vertical));
	}
}

.widget-area ul {
	list-style-type: none;
	padding: 0;
}

.widget-area ul li {
	line-height: var(--widget--line-height-list);
}

.widget-area ul.sub-menu,
.widget-area ul.children {
	margin-left: var(--widget--spacing-menu);
}

.widget-area ul .sub-menu-toggle {
	display: none;
}

.widget-area a {
	color: var(--footer--color-link);
	text-decoration: underline;
	text-decoration-style: solid;
	text-decoration-color: currentColor;
}

.widget-area a:link,
.widget-area a:visited,
.widget-area a:active {
	color: var(--footer--color-link);
}

.widget-area a:hover {
	color: var(--footer--color-link-hover);
	text-decoration-style: dotted;
}

.widget-area .wp-block-social-links.alignright {
	margin-top: var(--global--spacing-vertical);
	justify-content: flex-end;
}

.widget-area .wp-block-social-links.alignleft {
	margin-top: var(--global--spacing-vertical);
}

.widget-area:after {
	content: "";
	display: table;
	clear: both;
}

.widget-title {
	font-size: var(--global--font-size-sm);
	font-weight: var(--widget--font-weight-title);
	line-height: var(--widget--line-height-title);
}

.search-form {
	display: flex;
	flex-wrap: wrap;
	margin: auto;
	max-width: var(--responsive--aligndefault-width);
}

.search-form > label {
	width: 100%;
	margin-bottom: 0;
	font-weight: var(--form--label-weight);
}

.search-form .search-field {
	flex-grow: 1;
	max-width: inherit;
	margin-top: calc(var(--global--spacing-vertical) / 3);
	margin-right: calc(0.66 * var(--global--spacing-horizontal));
}

.search-form .search-submit {
	margin-top: calc(var(--global--spacing-vertical) / 3);
	margin-left: 10px;
}

.widget_search > .search-form .search-field {
	margin-right: calc(-1 * var(--button--border-width));
	-webkit-appearance: none;
	margin-bottom: calc(0.5 * var(--global--spacing-vertical));
}

.widget_search > .search-form .search-submit {
	margin-left: 0;
	margin-bottom: calc(0.5 * var(--global--spacing-vertical));
}

.widget_rss a.rsswidget .rss-widget-icon {
	display: none;
}

/* Category 07 is for any utility classes that are not assigned to a specific component. */
.screen-reader-text {
	border: 0;
	clip: rect(1px, 1px, 1px, 1px);
	-webkit-clip-path: inset(50%);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute !important;
	width: 1px;
	word-wrap: normal !important;
	word-break: normal;
}

.skip-link:focus {
	background-color: #f1f1f1;
	border-radius: 3px;
	box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
	clip: auto !important;
	-webkit-clip-path: none;
	clip-path: none;
	color: #21759b;
	display: block;
	font-size: 0.875rem;
	font-weight: 700;
	height: auto;
	left: 5px;
	line-height: normal;
	padding: 15px 23px 14px;
	text-decoration: none;
	top: 5px;
	width: auto;
	z-index: 100000;
}

/* Do not show the outline on the skip link target. */
#content[tabindex="-1"]:focus {
	outline: 0;
}

@media (prefers-reduced-motion) {

	* {
		transition-delay: 0s !important;
		transition-duration: 0s !important;
	}
}

.has-black-color[class] {
	color: var(--global--color-black);
}

.has-black-color[class] > [class*=__inner-container] {
	--local--color-primary: var(--global--color-black, #000);
	color: var(--local--color-primary);
}

.has-gray-color[class] {
	color: var(--global--color-gray);
}

.has-gray-color[class] > [class*=__inner-container] {
	--local--color-primary: var(--global--color-gray, #000);
	color: var(--local--color-primary);
}

.has-dark-gray-color[class] {
	color: var(--global--color-dark-gray);
}

.has-dark-gray-color[class] > [class*=__inner-container] {
	--local--color-primary: var(--global--color-dark-gray, #000);
	color: var(--local--color-primary);
}

.has-green-color[class] {
	color: var(--global--color-green);
}

.has-green-color[class] > [class*=__inner-container] {
	--local--color-primary: var(--global--color-green, #fff);
	color: var(--local--color-primary);
}

.has-blue-color[class] {
	color: var(--global--color-blue);
}

.has-blue-color[class] > [class*=__inner-container] {
	--local--color-primary: var(--global--color-blue, #fff);
	color: var(--local--color-primary);
}

.has-purple-color[class] {
	color: var(--global--color-purple);
}

.has-purple-color[class] > [class*=__inner-container] {
	--local--color-primary: var(--global--color-purple, #fff);
	color: var(--local--color-primary);
}

.has-red-color[class] {
	color: var(--global--color-red);
}

.has-red-color[class] > [class*=__inner-container] {
	--local--color-primary: var(--global--color-red, #fff);
	color: var(--local--color-primary);
}

.has-orange-color[class] {
	color: var(--global--color-orange);
}

.has-orange-color[class] > [class*=__inner-container] {
	--local--color-primary: var(--global--color-orange, #fff);
	color: var(--local--color-primary);
}

.has-yellow-color[class] {
	color: var(--global--color-yellow);
}

.has-yellow-color[class] > [class*=__inner-container] {
	--local--color-primary: var(--global--color-yellow, #fff);
	color: var(--local--color-primary);
}

.has-white-color[class] {
	color: var(--global--color-white);
}

.has-white-color[class] > [class*=__inner-container] {
	--local--color-primary: var(--global--color-white, #fff);
	color: var(--local--color-primary);
}

.has-background a,
.has-background p,
.has-background h1,
.has-background h2,
.has-background h3,
.has-background h4,
.has-background h5,
.has-background h6 {
	color: currentColor;
}

.has-black-background-color[class] {
	background-color: var(--global--color-black);
}

.has-black-background-color[class] > [class*=__inner-container] {
	--local--color-background: var(--global--color-black, #000);
	background-color: var(--local--color-background);
}

.has-dark-gray-background-color[class] {
	background-color: var(--global--color-dark-gray);
}

.has-dark-gray-background-color[class] > [class*=__inner-container] {
	--local--color-background: var(--global--color-dark-gray, #000);
	background-color: var(--local--color-background);
}

.has-gray-background-color[class] {
	background-color: var(--global--color-gray);
}

.has-gray-background-color[class] > [class*=__inner-container] {
	--local--color-background: var(--global--color-gray, #000);
	background-color: var(--local--color-background);
}

.has-light-gray-background-color[class] {
	background-color: var(--global--color-light-gray);
}

.has-light-gray-background-color[class] > [class*=__inner-container] {
	--local--color-background: var(--global--color-light-gray, #fff);
	background-color: var(--local--color-background);
}

.has-green-background-color[class] {
	background-color: var(--global--color-green);
}

.has-green-background-color[class] > [class*=__inner-container] {
	--local--color-background: var(--global--color-green, #fff);
	background-color: var(--local--color-background);
}

.has-blue-background-color[class] {
	background-color: var(--global--color-blue);
}

.has-blue-background-color[class] > [class*=__inner-container] {
	--local--color-background: var(--global--color-blue, #fff);
	background-color: var(--local--color-background);
}

.has-purple-background-color[class] {
	background-color: var(--global--color-purple);
}

.has-purple-background-color[class] > [class*=__inner-container] {
	--local--color-background: var(--global--color-purple, #fff);
	background-color: var(--local--color-background);
}

.has-red-background-color[class] {
	background-color: var(--global--color-red);
}

.has-red-background-color[class] > [class*=__inner-container] {
	--local--color-background: var(--global--color-red, #fff);
	background-color: var(--local--color-background);
}

.has-orange-background-color[class] {
	background-color: var(--global--color-orange);
}

.has-orange-background-color[class] > [class*=__inner-container] {
	--local--color-background: var(--global--color-orange, #fff);
	background-color: var(--local--color-background);
}

.has-yellow-background-color[class] {
	background-color: var(--global--color-yellow);
}

.has-yellow-background-color[class] > [class*=__inner-container] {
	--local--color-background: var(--global--color-yellow, #fff);
	background-color: var(--local--color-background);
}

.has-white-background-color[class] {
	background-color: var(--global--color-white);
}

.has-white-background-color[class] > [class*=__inner-container] {
	--local--color-background: var(--global--color-white, #fff);
	background-color: var(--local--color-background);
}

.has-background:not(.has-text-color).has-black-background-color[class],
.has-background:not(.has-text-color).has-gray-background-color[class],
.has-background:not(.has-text-color).has-dark-gray-background-color[class] {
	color: var(--global--color-white);
}

.has-background:not(.has-text-color).has-black-background-color[class] > [class*=__inner-container],
.has-background:not(.has-text-color).has-gray-background-color[class] > [class*=__inner-container],
.has-background:not(.has-text-color).has-dark-gray-background-color[class] > [class*=__inner-container] {
	--local--color-primary: var(--global--color-background, #fff);
	color: var(--local--color-primary, var(--global--color-primary));
}

.is-dark-theme .has-background:not(.has-text-color).has-black-background-color[class] > [class*=__inner-container],
.is-dark-theme .has-background:not(.has-text-color).has-gray-background-color[class] > [class*=__inner-container],
.is-dark-theme .has-background:not(.has-text-color).has-dark-gray-background-color[class] > [class*=__inner-container] {
	--local--color-primary: var(--global--color-primary, #000);
}

.has-background:not(.has-text-color).has-green-background-color[class],
.has-background:not(.has-text-color).has-blue-background-color[class],
.has-background:not(.has-text-color).has-purple-background-color[class],
.has-background:not(.has-text-color).has-red-background-color[class],
.has-background:not(.has-text-color).has-orange-background-color[class],
.has-background:not(.has-text-color).has-yellow-background-color[class],
.has-background:not(.has-text-color).has-white-background-color[class] {
	color: var(--global--color-dark-gray);
}

.has-background:not(.has-text-color).has-green-background-color[class] > [class*=__inner-container],
.has-background:not(.has-text-color).has-blue-background-color[class] > [class*=__inner-container],
.has-background:not(.has-text-color).has-purple-background-color[class] > [class*=__inner-container],
.has-background:not(.has-text-color).has-red-background-color[class] > [class*=__inner-container],
.has-background:not(.has-text-color).has-orange-background-color[class] > [class*=__inner-container],
.has-background:not(.has-text-color).has-yellow-background-color[class] > [class*=__inner-container],
.has-background:not(.has-text-color).has-white-background-color[class] > [class*=__inner-container] {
	--local--color-primary: var(--global--color-primary, #000);
	color: var(--local--color-primary, var(--global--color-primary));
}

.is-dark-theme .has-background:not(.has-text-color).has-green-background-color[class] > [class*=__inner-container],
.is-dark-theme .has-background:not(.has-text-color).has-blue-background-color[class] > [class*=__inner-container],
.is-dark-theme .has-background:not(.has-text-color).has-purple-background-color[class] > [class*=__inner-container],
.is-dark-theme .has-background:not(.has-text-color).has-red-background-color[class] > [class*=__inner-container],
.is-dark-theme .has-background:not(.has-text-color).has-orange-background-color[class] > [class*=__inner-container],
.is-dark-theme .has-background:not(.has-text-color).has-yellow-background-color[class] > [class*=__inner-container],
.is-dark-theme .has-background:not(.has-text-color).has-white-background-color[class] > [class*=__inner-container] {
	--local--color-primary: var(--global--color-background, #fff);
}

.has-purple-to-yellow-gradient-background {
	background: linear-gradient(160deg, var(--global--color-purple), var(--global--color-yellow));
}

.has-yellow-to-purple-gradient-background {
	background: linear-gradient(160deg, var(--global--color-yellow), var(--global--color-purple));
}

.has-green-to-yellow-gradient-background {
	background: linear-gradient(160deg, var(--global--color-green), var(--global--color-yellow));
}

.has-yellow-to-green-gradient-background {
	background: linear-gradient(160deg, var(--global--color-yellow), var(--global--color-green));
}

.has-red-to-yellow-gradient-background {
	background: linear-gradient(160deg, var(--global--color-red), var(--global--color-yellow));
}

.has-yellow-to-red-gradient-background {
	background: linear-gradient(160deg, var(--global--color-yellow), var(--global--color-red));
}

.has-purple-to-red-gradient-background {
	background: linear-gradient(160deg, var(--global--color-purple), var(--global--color-red));
}

.has-red-to-purple-gradient-background {
	background: linear-gradient(160deg, var(--global--color-red), var(--global--color-purple));
}

header *,
main *,
footer * {
	max-width: var(--global--spacing-measure);
}

html,
body,
div,
header,
nav,
article,
figure,
hr,
main,
section,
footer {
	max-width: none;
}

.is-IE.is-dark-theme {
	color: #fff;
}

.is-IE.is-dark-theme *,
.is-IE.is-dark-theme a,
.is-IE.is-dark-theme .site-description,
.is-IE.is-dark-theme .entry-title,
.is-IE.is-dark-theme .entry-footer,
.is-IE.is-dark-theme .widget-area,
.is-IE.is-dark-theme .post-navigation .meta-nav,
.is-IE.is-dark-theme .footer-navigation-wrapper li a:link,
.is-IE.is-dark-theme .site-footer > .site-info,
.is-IE.is-dark-theme .site-footer > .site-info a,
.is-IE.is-dark-theme .site-footer > .site-info a:visited {
	color: #fff;
}

.is-IE.is-dark-theme .sub-menu-toggle svg,
.is-IE.is-dark-theme .sub-menu-toggle path,
.is-IE.is-dark-theme .post-navigation .meta-nav svg,
.is-IE.is-dark-theme .post-navigation .meta-nav path {
	fill: #fff;
}

.is-IE.is-dark-theme .primary-navigation > div > .menu-wrapper > li > .sub-menu li {
	background: #000;
}
@media only screen and (max-width: 481px) {

	.is-IE.is-dark-theme.primary-navigation-open .primary-navigation > .primary-menu-container,
	.is-IE.is-dark-theme.primary-navigation-open .menu-button-container {
		background-color: #000;
	}
}

.is-IE.is-dark-theme .skip-link:focus {
	color: #21759b;
}

.is-IE .navigation .nav-links {
	display: block;
}

.is-IE .post-thumbnail .wp-post-image {
	min-width: auto;
}

@charset "UTF-8";
#start-resizable-editor-section {
    display:none
}

.wp-block-audio figcaption {
    margin-top: .5em;
    margin-bottom:1em
}

.wp-block-audio audio {
    width: 100%;
    min-width:300px
}

.wp-block-button__link {
    color: #fff;
    background-color: #32373c;
    border: none;
    border-radius: 1.55em;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
    font-size: 1.125em;
    padding: .667em 1.333em;
    text-align: center;
    text-decoration: none;
    overflow-wrap:break-word
}

.wp-block-button__link:active, .wp-block-button__link:focus, .wp-block-button__link:hover, .wp-block-button__link:visited {
    color:#fff
}

.wp-block-button__link.aligncenter {
    text-align:center
}

.wp-block-button__link.alignright {
    text-align:right
}

.wp-block-buttons > .wp-block-button.has-custom-width {
    max-width:none
}

.wp-block-buttons > .wp-block-button.has-custom-width .wp-block-button__link {
    width:100%
}

.wp-block-buttons > .wp-block-button.wp-block-button__width-25 {
    width:calc(25% - .5em)
}

.wp-block-buttons > .wp-block-button.wp-block-button__width-50 {
    width:calc(50% - .5em)
}

.wp-block-buttons > .wp-block-button.wp-block-button__width-75 {
    width:calc(75% - .5em)
}

.wp-block-buttons > .wp-block-button.wp-block-button__width-100 {
    margin-right: 0;
    width:100%
}

.wp-block-button.is-style-squared, .wp-block-button__link.wp-block-button.is-style-squared {
    border-radius:0
}

.wp-block-button.no-border-radius, .wp-block-button__link.no-border-radius {
    border-radius:0 !important
}

.is-style-outline > .wp-block-button__link, .wp-block-button__link.is-style-outline {
    border:2px solid
}

.is-style-outline > .wp-block-button__link:not(.has-text-color), .wp-block-button__link.is-style-outline:not(.has-text-color) {
    color:#32373c
}

.is-style-outline > .wp-block-button__link:not(.has-background), .wp-block-button__link.is-style-outline:not(.has-background) {
    background-color:transparent
}

.wp-block-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap:wrap
}

.wp-block-buttons.is-vertical {
    flex-direction:column
}

.wp-block-buttons.is-vertical > .wp-block-button {
    margin-right:0
}

.wp-block-buttons.is-vertical > .wp-block-button:last-child {
    margin-bottom:0
}

.wp-block-buttons > .wp-block-button {
    display: inline-block;
    margin-left: 0;
    margin-right: .5em;
    margin-bottom:.5em
}

.wp-block-buttons > .wp-block-button:last-child {
    margin-right:0
}

.wp-block-buttons.is-content-justification-left {
    justify-content:flex-start
}

.wp-block-buttons.is-content-justification-left.is-vertical {
    align-items:flex-start
}

.wp-block-buttons.is-content-justification-center {
    justify-content:center
}

.wp-block-buttons.is-content-justification-center.is-vertical {
    align-items:center
}

.wp-block-buttons.is-content-justification-right {
    justify-content:flex-end
}

.wp-block-buttons.is-content-justification-right > .wp-block-button {
    margin-left: .5em;
    margin-right:0
}

.wp-block-buttons.is-content-justification-right > .wp-block-button:first-child {
    margin-left:0
}

.wp-block-buttons.is-content-justification-right.is-vertical {
    align-items:flex-end
}

.wp-block-buttons.is-content-justification-space-between {
    justify-content:space-between
}

.wp-block-buttons.aligncenter {
    text-align:center
}

.wp-block-buttons.alignleft .wp-block-button {
    margin-left: 0;
    margin-right:.5em
}

.wp-block-buttons.alignleft .wp-block-button:last-child {
    margin-right:0
}

.wp-block-buttons.alignright .wp-block-button {
    margin-right: 0;
    margin-left:.5em
}

.wp-block-buttons.alignright .wp-block-button:first-child {
    margin-left:0
}

.wp-block-buttons:not(.is-content-justification-space-between, .is-content-justification-right, .is-content-justification-left, .is-content-justification-center) .wp-block-button.aligncenter {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: .5em;
    width:100%
}

.wp-block-calendar {
    text-align:center
}

.wp-block-calendar tbody td, .wp-block-calendar th {
    padding: .25em;
    border:1px solid #ddd
}

.wp-block-calendar tfoot td {
    border:none
}

.wp-block-calendar table {
    width: 100%;
    border-collapse:collapse
}

.wp-block-calendar table th {
    font-weight: 400;
    background:#ddd
}

.wp-block-calendar a {
    text-decoration:underline
}

.wp-block-calendar table caption, .wp-block-calendar table tbody {
    color:#40464d
}

.wp-block-categories.alignleft {
    margin-right:2em
}

.wp-block-categories.alignright {
    margin-left:2em
}

.wp-block-code code {
    display: block;
    white-space: pre-wrap;
    overflow-wrap:break-word
}

.wp-block-columns {
    display: flex;
    margin-bottom: 1.75em;
    flex-wrap:wrap
}

@media (min-width: 782px) {
    .wp-block-columns {
        flex-wrap:nowrap
    }
}

.wp-block-columns.has-background {
    padding:1.25em 2.375em
}

.wp-block-columns.are-vertically-aligned-top {
    align-items:flex-start
}

.wp-block-columns.are-vertically-aligned-center {
    align-items:center
}

.wp-block-columns.are-vertically-aligned-bottom {
    align-items:flex-end
}

.wp-block-column {
    flex-grow: 1;
    min-width: 0;
    word-break: break-word;
    overflow-wrap:break-word
}

@media (max-width: 599px) {
    .wp-block-column {
        flex-basis:100% !important
    }
}

@media (min-width: 600px) and(max-width: 781px) {
    .wp-block-column:not(:only-child) {
        flex-basis: calc(50% - 1em) !important;
        flex-grow:0
    }

    .wp-block-column:nth-child(2n) {
        margin-left:2em
    }
}

@media (min-width: 782px) {
    .wp-block-column {
        flex-basis: 0;
        flex-grow:1
    }

    .wp-block-column[style * =flex-basis] {
        flex-grow:0
    }

    .wp-block-column:not(:first-child) {
        margin-left:2em
    }
}

.wp-block-column.is-vertically-aligned-top {
    align-self:flex-start
}

.wp-block-column.is-vertically-aligned-center {
    -ms-grid-row-align: center;
    align-self:center
}

.wp-block-column.is-vertically-aligned-bottom {
    align-self:flex-end
}

.wp-block-column.is-vertically-aligned-bottom, .wp-block-column.is-vertically-aligned-center, .wp-block-column.is-vertically-aligned-top {
    width:100%
}

.wp-block-cover, .wp-block-cover-image {
    position: relative;
    background-size: cover;
    background-position: 50%;
    min-height: 430px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    box-sizing:border-box
}

.wp-block-cover-image.has-parallax, .wp-block-cover.has-parallax {
    background-attachment:fixed
}

@supports (-webkit-overflow-scrolling: touch) {
    .wp-block-cover-image.has-parallax, .wp-block-cover.has-parallax {
        background-attachment:scroll
    }
}

@media (prefers-reduced-motion: reduce) {
    .wp-block-cover-image.has-parallax, .wp-block-cover.has-parallax {
        background-attachment:scroll
    }
}

.wp-block-cover-image.is-repeated, .wp-block-cover.is-repeated {
    background-repeat: repeat;
    background-size:auto
}

.wp-block-cover-image.has-background-dim:not([class * =-background-color]), .wp-block-cover.has-background-dim:not([class * =-background-color]) {
    background-color:#000
}

.wp-block-cover-image.has-background-dim:before, .wp-block-cover.has-background-dim:before {
    content: "";
    background-color:inherit
}

.wp-block-cover-image.has-background-dim:not(.has-background-gradient):before, .wp-block-cover-image .wp-block-cover__gradient-background, .wp-block-cover.has-background-dim:not(.has-background-gradient):before, .wp-block-cover .wp-block-cover__gradient-background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    opacity:.5
}

.wp-block-cover-image.has-background-dim.has-background-dim-10 .wp-block-cover__gradient-background, .wp-block-cover-image.has-background-dim.has-background-dim-10:not(.has-background-gradient):before, .wp-block-cover.has-background-dim.has-background-dim-10 .wp-block-cover__gradient-background, .wp-block-cover.has-background-dim.has-background-dim-10:not(.has-background-gradient):before {
    opacity:.1
}

.wp-block-cover-image.has-background-dim.has-background-dim-20 .wp-block-cover__gradient-background, .wp-block-cover-image.has-background-dim.has-background-dim-20:not(.has-background-gradient):before, .wp-block-cover.has-background-dim.has-background-dim-20 .wp-block-cover__gradient-background, .wp-block-cover.has-background-dim.has-background-dim-20:not(.has-background-gradient):before {
    opacity:.2
}

.wp-block-cover-image.has-background-dim.has-background-dim-30 .wp-block-cover__gradient-background, .wp-block-cover-image.has-background-dim.has-background-dim-30:not(.has-background-gradient):before, .wp-block-cover.has-background-dim.has-background-dim-30 .wp-block-cover__gradient-background, .wp-block-cover.has-background-dim.has-background-dim-30:not(.has-background-gradient):before {
    opacity:.3
}

.wp-block-cover-image.has-background-dim.has-background-dim-40 .wp-block-cover__gradient-background, .wp-block-cover-image.has-background-dim.has-background-dim-40:not(.has-background-gradient):before, .wp-block-cover.has-background-dim.has-background-dim-40 .wp-block-cover__gradient-background, .wp-block-cover.has-background-dim.has-background-dim-40:not(.has-background-gradient):before {
    opacity:.4
}

.wp-block-cover-image.has-background-dim.has-background-dim-50 .wp-block-cover__gradient-background, .wp-block-cover-image.has-background-dim.has-background-dim-50:not(.has-background-gradient):before, .wp-block-cover.has-background-dim.has-background-dim-50 .wp-block-cover__gradient-background, .wp-block-cover.has-background-dim.has-background-dim-50:not(.has-background-gradient):before {
    opacity:.5
}

.wp-block-cover-image.has-background-dim.has-background-dim-60 .wp-block-cover__gradient-background, .wp-block-cover-image.has-background-dim.has-background-dim-60:not(.has-background-gradient):before, .wp-block-cover.has-background-dim.has-background-dim-60 .wp-block-cover__gradient-background, .wp-block-cover.has-background-dim.has-background-dim-60:not(.has-background-gradient):before {
    opacity:.6
}

.wp-block-cover-image.has-background-dim.has-background-dim-70 .wp-block-cover__gradient-background, .wp-block-cover-image.has-background-dim.has-background-dim-70:not(.has-background-gradient):before, .wp-block-cover.has-background-dim.has-background-dim-70 .wp-block-cover__gradient-background, .wp-block-cover.has-background-dim.has-background-dim-70:not(.has-background-gradient):before {
    opacity:.7
}

.wp-block-cover-image.has-background-dim.has-background-dim-80 .wp-block-cover__gradient-background, .wp-block-cover-image.has-background-dim.has-background-dim-80:not(.has-background-gradient):before, .wp-block-cover.has-background-dim.has-background-dim-80 .wp-block-cover__gradient-background, .wp-block-cover.has-background-dim.has-background-dim-80:not(.has-background-gradient):before {
    opacity:.8
}

.wp-block-cover-image.has-background-dim.has-background-dim-90 .wp-block-cover__gradient-background, .wp-block-cover-image.has-background-dim.has-background-dim-90:not(.has-background-gradient):before, .wp-block-cover.has-background-dim.has-background-dim-90 .wp-block-cover__gradient-background, .wp-block-cover.has-background-dim.has-background-dim-90:not(.has-background-gradient):before {
    opacity:.9
}

.wp-block-cover-image.has-background-dim.has-background-dim-100 .wp-block-cover__gradient-background, .wp-block-cover-image.has-background-dim.has-background-dim-100:not(.has-background-gradient):before, .wp-block-cover.has-background-dim.has-background-dim-100 .wp-block-cover__gradient-background, .wp-block-cover.has-background-dim.has-background-dim-100:not(.has-background-gradient):before {
    opacity:1
}

.wp-block-cover-image.alignleft, .wp-block-cover-image.alignright, .wp-block-cover.alignleft, .wp-block-cover.alignright {
    max-width: 420px;
    width:100%
}

.wp-block-cover-image:after, .wp-block-cover:after {
    display: block;
    content: "";
    font-size: 0;
    min-height:inherit
}

@supports ((position: -webkit-sticky) or(position: sticky)) {
    .wp-block-cover-image:after, .wp-block-cover:after {
        content:none
    }
}

.wp-block-cover-image.aligncenter, .wp-block-cover-image.alignleft, .wp-block-cover-image.alignright, .wp-block-cover.aligncenter, .wp-block-cover.alignleft, .wp-block-cover.alignright {
    display:flex
}

.wp-block-cover-image .wp-block-cover__inner-container, .wp-block-cover .wp-block-cover__inner-container {
    width: 100%;
    z-index: 1;
    color:#fff
}

.wp-block-cover-image .wp-block-subhead:not(.has-text-color), .wp-block-cover-image h1:not(.has-text-color), .wp-block-cover-image h2:not(.has-text-color), .wp-block-cover-image h3:not(.has-text-color), .wp-block-cover-image h4:not(.has-text-color), .wp-block-cover-image h5:not(.has-text-color), .wp-block-cover-image h6:not(.has-text-color), .wp-block-cover-image p:not(.has-text-color), .wp-block-cover .wp-block-subhead:not(.has-text-color), .wp-block-cover h1:not(.has-text-color), .wp-block-cover h2:not(.has-text-color), .wp-block-cover h3:not(.has-text-color), .wp-block-cover h4:not(.has-text-color), .wp-block-cover h5:not(.has-text-color), .wp-block-cover h6:not(.has-text-color), .wp-block-cover p:not(.has-text-color) {
    color:inherit
}

.wp-block-cover-image.is-position-top-left, .wp-block-cover.is-position-top-left {
    align-items: flex-start;
    justify-content:flex-start
}

.wp-block-cover-image.is-position-top-center, .wp-block-cover.is-position-top-center {
    align-items: flex-start;
    justify-content:center
}

.wp-block-cover-image.is-position-top-right, .wp-block-cover.is-position-top-right {
    align-items: flex-start;
    justify-content:flex-end
}

.wp-block-cover-image.is-position-center-left, .wp-block-cover.is-position-center-left {
    align-items: center;
    justify-content:flex-start
}

.wp-block-cover-image.is-position-center-center, .wp-block-cover.is-position-center-center {
    align-items: center;
    justify-content:center
}

.wp-block-cover-image.is-position-center-right, .wp-block-cover.is-position-center-right {
    align-items: center;
    justify-content:flex-end
}

.wp-block-cover-image.is-position-bottom-left, .wp-block-cover.is-position-bottom-left {
    align-items: flex-end;
    justify-content:flex-start
}

.wp-block-cover-image.is-position-bottom-center, .wp-block-cover.is-position-bottom-center {
    align-items: flex-end;
    justify-content:center
}

.wp-block-cover-image.is-position-bottom-right, .wp-block-cover.is-position-bottom-right {
    align-items: flex-end;
    justify-content:flex-end
}

.wp-block-cover-image.has-custom-content-position.has-custom-content-position .wp-block-cover__inner-container, .wp-block-cover.has-custom-content-position.has-custom-content-position .wp-block-cover__inner-container {
    margin: 0;
    width:auto
}

.wp-block-cover-image img.wp-block-cover__image-background, .wp-block-cover-image video.wp-block-cover__video-background, .wp-block-cover img.wp-block-cover__image-background, .wp-block-cover video.wp-block-cover__video-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    -o-object-fit: cover;
    object-fit: cover;
    outline: none;
    border: none;
    box-shadow:none
}

.wp-block-cover__image-background, .wp-block-cover__video-background {
    z-index:0
}

.wp-block-cover-image-text, .wp-block-cover-image-text a, .wp-block-cover-image-text a:active, .wp-block-cover-image-text a:focus, .wp-block-cover-image-text a:hover, .wp-block-cover-text, .wp-block-cover-text a, .wp-block-cover-text a:active, .wp-block-cover-text a:focus, .wp-block-cover-text a:hover, section.wp-block-cover-image h2, section.wp-block-cover-image h2 a, section.wp-block-cover-image h2 a:active, section.wp-block-cover-image h2 a:focus, section.wp-block-cover-image h2 a:hover {
    color:#fff
}

.wp-block-cover-image .wp-block-cover.has-left-content {
    justify-content:flex-start
}

.wp-block-cover-image .wp-block-cover.has-right-content {
    justify-content:flex-end
}

.wp-block-cover-image.has-left-content .wp-block-cover-image-text, .wp-block-cover.has-left-content .wp-block-cover-text, section.wp-block-cover-image.has-left-content > h2 {
    margin-left: 0;
    text-align:left
}

.wp-block-cover-image.has-right-content .wp-block-cover-image-text, .wp-block-cover.has-right-content .wp-block-cover-text, section.wp-block-cover-image.has-right-content > h2 {
    margin-right: 0;
    text-align:right
}

.wp-block-cover-image .wp-block-cover-image-text, .wp-block-cover .wp-block-cover-text, section.wp-block-cover-image > h2 {
    font-size: 2em;
    line-height: 1.25;
    z-index: 1;
    margin-bottom: 0;
    max-width: 840px;
    padding: .44em;
    text-align: center
}

.wp-block-embed.alignleft, .wp-block-embed.alignright, .wp-block[data-align=left] > [data-type="core/embed"], .wp-block[data-align=right] > [data-type="core/embed"] {
    max-width: 360px;
    width: 100%
}

.wp-block-embed.alignleft .wp-block-embed__wrapper, .wp-block-embed.alignright .wp-block-embed__wrapper, .wp-block[data-align=left] > [data-type="core/embed"] .wp-block-embed__wrapper, .wp-block[data-align=right] > [data-type="core/embed"] .wp-block-embed__wrapper {
    min-width:280px
}

.wp-block-cover .wp-block-embed {
    min-width: 320px;
    min-height:240px
}

.wp-block-embed {
    margin-bottom:1em
}

.wp-block-embed figcaption {
    margin-top: .5em;
    margin-bottom:1em
}

.wp-block-embed iframe {
    max-width:100%
}

.wp-block-embed__wrapper {
    position:relative
}

.wp-embed-responsive .wp-has-aspect-ratio .wp-block-embed__wrapper:before {
    content: "";
    display: block;
    padding-top:50%
}

.wp-embed-responsive .wp-has-aspect-ratio iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width:100%
}

.wp-embed-responsive .wp-embed-aspect-21-9 .wp-block-embed__wrapper:before {
    padding-top:42.85%
}

.wp-embed-responsive .wp-embed-aspect-18-9 .wp-block-embed__wrapper:before {
    padding-top:50%
}

.wp-embed-responsive .wp-embed-aspect-16-9 .wp-block-embed__wrapper:before {
    padding-top:56.25%
}

.wp-embed-responsive .wp-embed-aspect-4-3 .wp-block-embed__wrapper:before {
    padding-top:75%
}

.wp-embed-responsive .wp-embed-aspect-1-1 .wp-block-embed__wrapper:before {
    padding-top:100%
}

.wp-embed-responsive .wp-embed-aspect-9-16 .wp-block-embed__wrapper:before {
    padding-top:177.77%
}

.wp-embed-responsive .wp-embed-aspect-1-2 .wp-block-embed__wrapper:before {
    padding-top:200%
}

.wp-block-file {
    margin-bottom:1.5em
}

.wp-block-file.aligncenter {
    text-align:center
}

.wp-block-file.alignright {
    text-align:right
}

.wp-block-file .wp-block-file__button {
    background: #32373c;
    border-radius: 2em;
    color: #fff;
    font-size: .8em;
    padding:.5em 1em
}

.wp-block-file a.wp-block-file__button {
    text-decoration:none
}

.wp-block-file a.wp-block-file__button:active, .wp-block-file a.wp-block-file__button:focus, .wp-block-file a.wp-block-file__button:hover, .wp-block-file a.wp-block-file__button:visited {
    box-shadow: none;
    color: #fff;
    opacity: .85;
    text-decoration:none
}

.wp-block-file * + .wp-block-file__button {
    margin-left:.75em
}

.blocks-gallery-grid, .wp-block-gallery {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin:0
}

.blocks-gallery-grid .blocks-gallery-image, .blocks-gallery-grid .blocks-gallery-item, .wp-block-gallery .blocks-gallery-image, .wp-block-gallery .blocks-gallery-item {
    margin: 0 1em 1em 0;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width:calc(50% - 1em)
}

.blocks-gallery-grid .blocks-gallery-image:nth-of-type(2n), .blocks-gallery-grid .blocks-gallery-item:nth-of-type(2n), .wp-block-gallery .blocks-gallery-image:nth-of-type(2n), .wp-block-gallery .blocks-gallery-item:nth-of-type(2n) {
    margin-right:0
}

.blocks-gallery-grid .blocks-gallery-image figure, .blocks-gallery-grid .blocks-gallery-item figure, .wp-block-gallery .blocks-gallery-image figure, .wp-block-gallery .blocks-gallery-item figure {
    margin: 0;
    height:100%
}

@supports ((position: -webkit-sticky) or(position: sticky)) {
    .blocks-gallery-grid .blocks-gallery-image figure, .blocks-gallery-grid .blocks-gallery-item figure, .wp-block-gallery .blocks-gallery-image figure, .wp-block-gallery .blocks-gallery-item figure {
        display: flex;
        align-items: flex-end;
        justify-content:flex-start
    }
}

.blocks-gallery-grid .blocks-gallery-image img, .blocks-gallery-grid .blocks-gallery-item img, .wp-block-gallery .blocks-gallery-image img, .wp-block-gallery .blocks-gallery-item img {
    display: block;
    max-width: 100%;
    height: auto;
    width:100%
}

@supports ((position: -webkit-sticky) or(position: sticky)) {
    .blocks-gallery-grid .blocks-gallery-image img, .blocks-gallery-grid .blocks-gallery-item img, .wp-block-gallery .blocks-gallery-image img, .wp-block-gallery .blocks-gallery-item img {
        width:auto
    }
}

.blocks-gallery-grid .blocks-gallery-image figcaption, .blocks-gallery-grid .blocks-gallery-item figcaption, .wp-block-gallery .blocks-gallery-image figcaption, .wp-block-gallery .blocks-gallery-item figcaption {
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    overflow: auto;
    padding: 3em .77em .7em;
    color: #fff;
    text-align: center;
    font-size: .8em;
    background: linear-gradient(0deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .3) 70%, transparent);
    box-sizing: border-box;
    margin:0
}

.blocks-gallery-grid .blocks-gallery-image figcaption img, .blocks-gallery-grid .blocks-gallery-item figcaption img, .wp-block-gallery .blocks-gallery-image figcaption img, .wp-block-gallery .blocks-gallery-item figcaption img {
    display:inline
}

.blocks-gallery-grid figcaption, .wp-block-gallery figcaption {
    flex-grow:1
}

.blocks-gallery-grid.is-cropped .blocks-gallery-image a, .blocks-gallery-grid.is-cropped .blocks-gallery-image img, .blocks-gallery-grid.is-cropped .blocks-gallery-item a, .blocks-gallery-grid.is-cropped .blocks-gallery-item img, .wp-block-gallery.is-cropped .blocks-gallery-image a, .wp-block-gallery.is-cropped .blocks-gallery-image img, .wp-block-gallery.is-cropped .blocks-gallery-item a, .wp-block-gallery.is-cropped .blocks-gallery-item img {
    width:100%
}

@supports ((position: -webkit-sticky) or(position: sticky)) {
    .blocks-gallery-grid.is-cropped .blocks-gallery-image a, .blocks-gallery-grid.is-cropped .blocks-gallery-image img, .blocks-gallery-grid.is-cropped .blocks-gallery-item a, .blocks-gallery-grid.is-cropped .blocks-gallery-item img, .wp-block-gallery.is-cropped .blocks-gallery-image a, .wp-block-gallery.is-cropped .blocks-gallery-image img, .wp-block-gallery.is-cropped .blocks-gallery-item a, .wp-block-gallery.is-cropped .blocks-gallery-item img {
        height: 100%;
        flex: 1;
        -o-object-fit: cover;
        object-fit:cover
    }
}

.blocks-gallery-grid.columns-1 .blocks-gallery-image, .blocks-gallery-grid.columns-1 .blocks-gallery-item, .wp-block-gallery.columns-1 .blocks-gallery-image, .wp-block-gallery.columns-1 .blocks-gallery-item {
    width: 100%;
    margin-right:0
}

@media (min-width: 600px) {
    .blocks-gallery-grid.columns-3 .blocks-gallery-image, .blocks-gallery-grid.columns-3 .blocks-gallery-item, .wp-block-gallery.columns-3 .blocks-gallery-image, .wp-block-gallery.columns-3 .blocks-gallery-item {
        width: calc(33.33333% - .66667em);
        margin-right:1em
    }

    .blocks-gallery-grid.columns-4 .blocks-gallery-image, .blocks-gallery-grid.columns-4 .blocks-gallery-item, .wp-block-gallery.columns-4 .blocks-gallery-image, .wp-block-gallery.columns-4 .blocks-gallery-item {
        width: calc(25% - .75em);
        margin-right:1em
    }

    .blocks-gallery-grid.columns-5 .blocks-gallery-image, .blocks-gallery-grid.columns-5 .blocks-gallery-item, .wp-block-gallery.columns-5 .blocks-gallery-image, .wp-block-gallery.columns-5 .blocks-gallery-item {
        width: calc(20% - .8em);
        margin-right:1em
    }

    .blocks-gallery-grid.columns-6 .blocks-gallery-image, .blocks-gallery-grid.columns-6 .blocks-gallery-item, .wp-block-gallery.columns-6 .blocks-gallery-image, .wp-block-gallery.columns-6 .blocks-gallery-item {
        width: calc(16.66667% - .83333em);
        margin-right:1em
    }

    .blocks-gallery-grid.columns-7 .blocks-gallery-image, .blocks-gallery-grid.columns-7 .blocks-gallery-item, .wp-block-gallery.columns-7 .blocks-gallery-image, .wp-block-gallery.columns-7 .blocks-gallery-item {
        width: calc(14.28571% - .85714em);
        margin-right:1em
    }

    .blocks-gallery-grid.columns-8 .blocks-gallery-image, .blocks-gallery-grid.columns-8 .blocks-gallery-item, .wp-block-gallery.columns-8 .blocks-gallery-image, .wp-block-gallery.columns-8 .blocks-gallery-item {
        width: calc(12.5% - .875em);
        margin-right:1em
    }

    .blocks-gallery-grid.columns-1 .blocks-gallery-image:nth-of-type(1n), .blocks-gallery-grid.columns-1 .blocks-gallery-item:nth-of-type(1n), .blocks-gallery-grid.columns-2 .blocks-gallery-image:nth-of-type(2n), .blocks-gallery-grid.columns-2 .blocks-gallery-item:nth-of-type(2n), .blocks-gallery-grid.columns-3 .blocks-gallery-image:nth-of-type(3n), .blocks-gallery-grid.columns-3 .blocks-gallery-item:nth-of-type(3n), .blocks-gallery-grid.columns-4 .blocks-gallery-image:nth-of-type(4n), .blocks-gallery-grid.columns-4 .blocks-gallery-item:nth-of-type(4n), .blocks-gallery-grid.columns-5 .blocks-gallery-image:nth-of-type(5n), .blocks-gallery-grid.columns-5 .blocks-gallery-item:nth-of-type(5n), .blocks-gallery-grid.columns-6 .blocks-gallery-image:nth-of-type(6n), .blocks-gallery-grid.columns-6 .blocks-gallery-item:nth-of-type(6n), .blocks-gallery-grid.columns-7 .blocks-gallery-image:nth-of-type(7n), .blocks-gallery-grid.columns-7 .blocks-gallery-item:nth-of-type(7n), .blocks-gallery-grid.columns-8 .blocks-gallery-image:nth-of-type(8n), .blocks-gallery-grid.columns-8 .blocks-gallery-item:nth-of-type(8n), .wp-block-gallery.columns-1 .blocks-gallery-image:nth-of-type(1n), .wp-block-gallery.columns-1 .blocks-gallery-item:nth-of-type(1n), .wp-block-gallery.columns-2 .blocks-gallery-image:nth-of-type(2n), .wp-block-gallery.columns-2 .blocks-gallery-item:nth-of-type(2n), .wp-block-gallery.columns-3 .blocks-gallery-image:nth-of-type(3n), .wp-block-gallery.columns-3 .blocks-gallery-item:nth-of-type(3n), .wp-block-gallery.columns-4 .blocks-gallery-image:nth-of-type(4n), .wp-block-gallery.columns-4 .blocks-gallery-item:nth-of-type(4n), .wp-block-gallery.columns-5 .blocks-gallery-image:nth-of-type(5n), .wp-block-gallery.columns-5 .blocks-gallery-item:nth-of-type(5n), .wp-block-gallery.columns-6 .blocks-gallery-image:nth-of-type(6n), .wp-block-gallery.columns-6 .blocks-gallery-item:nth-of-type(6n), .wp-block-gallery.columns-7 .blocks-gallery-image:nth-of-type(7n), .wp-block-gallery.columns-7 .blocks-gallery-item:nth-of-type(7n), .wp-block-gallery.columns-8 .blocks-gallery-image:nth-of-type(8n), .wp-block-gallery.columns-8 .blocks-gallery-item:nth-of-type(8n) {
        margin-right:0
    }
}

.blocks-gallery-grid .blocks-gallery-image:last-child, .blocks-gallery-grid .blocks-gallery-item:last-child, .wp-block-gallery .blocks-gallery-image:last-child, .wp-block-gallery .blocks-gallery-item:last-child {
    margin-right:0
}

.blocks-gallery-grid.alignleft, .blocks-gallery-grid.alignright, .wp-block-gallery.alignleft, .wp-block-gallery.alignright {
    max-width: 420px;
    width:100%
}

.blocks-gallery-grid.aligncenter .blocks-gallery-item figure, .wp-block-gallery.aligncenter .blocks-gallery-item figure {
    justify-content:center
}

.wp-block-group {
    box-sizing:border-box
}

h1.has-background, h2.has-background, h3.has-background, h4.has-background, h5.has-background, h6.has-background {
    padding:1.25em 2.375em
}

.wp-block-image {
    margin-bottom:1em
}

.wp-block-image img {
    max-width:100%
}

.wp-block-image:not(.is-style-rounded) img {
    border-radius:inherit
}

.wp-block-image.aligncenter {
    text-align:center
}

.wp-block-image.alignfull img, .wp-block-image.alignwide img {
    width:100%
}

.wp-block-image .aligncenter, .wp-block-image .alignleft, .wp-block-image .alignright {
    display:table
}

.wp-block-image .aligncenter > figcaption, .wp-block-image .alignleft > figcaption, .wp-block-image .alignright > figcaption {
    display: table-caption;
    caption-side:bottom
}

.wp-block-image .alignleft {
    float: left;
    margin:.5em 1em .5em 0
}

.wp-block-image .alignright {
    float: right;
    margin:.5em 0 .5em 1em
}

.wp-block-image .aligncenter {
    margin-left: auto;
    margin-right:auto
}

.wp-block-image figcaption {
    margin-top: .5em;
    margin-bottom:1em
}

.wp-block-image.is-style-circle-mask img, .wp-block-image.is-style-rounded img {
    border-radius:9999px
}

@supports ((-webkit-mask-image: none) or(mask-image: none)) or(-webkit-mask-image: none) {
    .wp-block-image.is-style-circle-mask img {
        -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');
        mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');
        mask-mode: alpha;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        mask-size: contain;
        -webkit-mask-position: center;
        mask-position: center;
        border-radius:0
    }
}

.wp-block-latest-comments__comment {
    line-height: 1.1;
    list-style: none;
    margin-bottom:1em
}

.has-avatars .wp-block-latest-comments__comment {
    min-height: 2.25em;
    list-style:none
}

.has-avatars .wp-block-latest-comments__comment .wp-block-latest-comments__comment-excerpt, .has-avatars .wp-block-latest-comments__comment .wp-block-latest-comments__comment-meta {
    margin-left:3.25em
}

.has-dates .wp-block-latest-comments__comment, .has-excerpts .wp-block-latest-comments__comment {
    line-height:1.5
}

.wp-block-latest-comments__comment-excerpt p {
    font-size: .875em;
    line-height: 1.8;
    margin:.36em 0 1.4em
}

.wp-block-latest-comments__comment-date {
    display: block;
    font-size:.75em
}

.wp-block-latest-comments .avatar, .wp-block-latest-comments__comment-avatar {
    border-radius: 1.5em;
    display: block;
    float: left;
    height: 2.5em;
    margin-right: .75em;
    width:2.5em
}

.wp-block-latest-posts.alignleft {
    margin-right:2em
}

.wp-block-latest-posts.alignright {
    margin-left:2em
}

.wp-block-latest-posts.wp-block-latest-posts__list {
    list-style:none
}

.wp-block-latest-posts.wp-block-latest-posts__list li {
    clear:both
}

.wp-block-latest-posts.is-grid {
    display: flex;
    flex-wrap: wrap;
    padding:0
}

.wp-block-latest-posts.is-grid li {
    margin: 0 1.25em 1.25em 0;
    width:100%
}

@media (min-width: 600px) {
    .wp-block-latest-posts.columns-2 li {
        width:calc(50% - .625em)
    }

    .wp-block-latest-posts.columns-2 li:nth-child(2n) {
        margin-right:0
    }

    .wp-block-latest-posts.columns-3 li {
        width:calc(33.33333% - .83333em)
    }

    .wp-block-latest-posts.columns-3 li:nth-child(3n) {
        margin-right:0
    }

    .wp-block-latest-posts.columns-4 li {
        width:calc(25% - .9375em)
    }

    .wp-block-latest-posts.columns-4 li:nth-child(4n) {
        margin-right:0
    }

    .wp-block-latest-posts.columns-5 li {
        width:calc(20% - 1em)
    }

    .wp-block-latest-posts.columns-5 li:nth-child(5n) {
        margin-right:0
    }

    .wp-block-latest-posts.columns-6 li {
        width:calc(16.66667% - 1.04167em)
    }

    .wp-block-latest-posts.columns-6 li:nth-child(6n) {
        margin-right:0
    }
}

.wp-block-latest-posts__post-author, .wp-block-latest-posts__post-date {
    display: block;
    color: #555;
    font-size:.8125em
}

.wp-block-latest-posts__post-excerpt {
    margin-top: .5em;
    margin-bottom:1em
}

.wp-block-latest-posts__featured-image a {
    display:inline-block
}

.wp-block-latest-posts__featured-image img {
    height: auto;
    width:auto
}

.wp-block-latest-posts__featured-image.alignleft {
    margin-right:1em
}

.wp-block-latest-posts__featured-image.alignright {
    margin-left:1em
}

.wp-block-latest-posts__featured-image.aligncenter {
    margin-bottom: 1em;
    text-align:center
}

.block-editor-image-alignment-control__row .components-base-control__field {
    display: flex;
    justify-content: space-between;
    align-items:center
}

.block-editor-image-alignment-control__row .components-base-control__field .components-base-control__label {
    margin-bottom:0
}

ol.has-background, ul.has-background {
    padding:1.25em 2.375em
}

.wp-block-media-text {
    /*!rtl:begin:ignore*/
    direction: ltr;
    /*!rtl:end:ignore*/
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 50% 1fr;
    grid-template-columns: 50% 1fr;
    -ms-grid-rows: auto;
    grid-template-rows:auto
}

.wp-block-media-text.has-media-on-the-right {
    -ms-grid-columns: 1fr 50%;
    grid-template-columns:1fr 50%
}

.wp-block-media-text.is-vertically-aligned-top .wp-block-media-text__content, .wp-block-media-text.is-vertically-aligned-top .wp-block-media-text__media {
    -ms-grid-row-align: start;
    align-self:start
}

.wp-block-media-text.is-vertically-aligned-center .wp-block-media-text__content, .wp-block-media-text.is-vertically-aligned-center .wp-block-media-text__media, .wp-block-media-text .wp-block-media-text__content, .wp-block-media-text .wp-block-media-text__media {
    -ms-grid-row-align: center;
    align-self:center
}

.wp-block-media-text.is-vertically-aligned-bottom .wp-block-media-text__content, .wp-block-media-text.is-vertically-aligned-bottom .wp-block-media-text__media {
    -ms-grid-row-align: end;
    align-self:end
}

.wp-block-media-text .wp-block-media-text__media {
    /*!rtl:begin:ignore*/
    -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 1;
    grid-row: 1;
    /*!rtl:end:ignore*/
    margin:0
}

.wp-block-media-text .wp-block-media-text__content {
    direction: ltr;
    /*!rtl:begin:ignore*/
    -ms-grid-column: 2;
    grid-column: 2;
    -ms-grid-row: 1;
    grid-row: 1;
    /*!rtl:end:ignore*/
    padding: 0 8%;
    word-break:break-word
}

.wp-block-media-text.has-media-on-the-right .wp-block-media-text__media {
    /*!rtl:begin:ignore*/
    -ms-grid-column: 2;
    grid-column: 2;
    -ms-grid-row: 1;
    grid-row: 1
    /*!rtl:end:ignore*/
}

.wp-block-media-text.has-media-on-the-right .wp-block-media-text__content {
    /*!rtl:begin:ignore*/
    -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 1;
    grid-row: 1
    /*!rtl:end:ignore*/
}

.wp-block-media-text__media img, .wp-block-media-text__media video {
    max-width: unset;
    width: 100%;
    vertical-align:middle
}

.wp-block-media-text.is-image-fill .wp-block-media-text__media {
    height: 100%;
    min-height: 250px;
    background-size:cover
}

.wp-block-media-text.is-image-fill .wp-block-media-text__media > a {
    display: block;
    height:100%
}

.wp-block-media-text.is-image-fill .wp-block-media-text__media img {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border:0
}

@media (max-width: 600px) {
    .wp-block-media-text.is-stacked-on-mobile {
        -ms-grid-columns: 100% !important;
        grid-template-columns:100% !important
    }

    .wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__media {
        -ms-grid-column: 1;
        grid-column: 1;
        -ms-grid-row: 1;
        grid-row:1
    }

    .wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__content {
        -ms-grid-column: 1;
        grid-column: 1;
        -ms-grid-row: 2;
        grid-row:2
    }
}

.wp-block-navigation:not(.has-background) .wp-block-navigation__container .wp-block-navigation__container {
    color: #1e1e1e;
    background-color: #fff;
    min-width:200px
}

.items-justified-left > ul {
    justify-content:flex-start
}

.items-justified-center > ul {
    justify-content:center
}

.items-justified-right > ul {
    justify-content:flex-end
}

.items-justified-space-between > ul {
    justify-content:space-between
}

.wp-block-navigation-link {
    display: flex;
    align-items: center;
    position: relative;
    margin:0
}

.wp-block-navigation-link .wp-block-navigation__container:empty {
    display:none
}

.wp-block-navigation__container {
    list-style: none;
    margin: 0;
    padding-left: 0;
    display: flex;
    flex-wrap:wrap
}

.is-vertical .wp-block-navigation__container {
    display:block
}

.has-child > .wp-block-navigation-link__content {
    padding-right:.5em
}

.has-child .wp-block-navigation__container {
    border: 1px solid rgba(0, 0, 0, .15);
    background-color: inherit;
    color: inherit;
    position: absolute;
    left: 0;
    top: 100%;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    z-index: 2;
    opacity: 0;
    transition: opacity .1s linear;
    visibility:hidden
}

.has-child .wp-block-navigation__container > .wp-block-navigation-link > .wp-block-navigation-link__content {
    flex-grow:1
}

.has-child .wp-block-navigation__container > .wp-block-navigation-link > .wp-block-navigation-link__submenu-icon {
    padding-right:.5em
}

@media (min-width: 782px) {
    .has-child .wp-block-navigation__container {
        left:1.5em
    }

    .has-child .wp-block-navigation__container .wp-block-navigation__container {
        left: 100%;
        top:-1px
    }

    .has-child .wp-block-navigation__container .wp-block-navigation__container:before {
        content: "";
        position: absolute;
        right: 100%;
        height: 100%;
        display: block;
        width: .5em;
        background:transparent
    }

    .has-child .wp-block-navigation__container .wp-block-navigation-link__submenu-icon svg {
        transform:rotate(0)
    }
}

.has-child:hover {
    cursor:pointer
}

.has-child:hover > .wp-block-navigation__container {
    visibility: visible;
    opacity: 1;
    display: flex;
    flex-direction:column
}

.has-child:focus-within {
    cursor:pointer
}

.has-child:focus-within > .wp-block-navigation__container {
    visibility: visible;
    opacity: 1;
    display: flex;
    flex-direction:column
}

.wp-block-navigation[style * =text-decoration] .wp-block-navigation-link, .wp-block-navigation[style * =text-decoration] .wp-block-navigation-link__content, .wp-block-navigation[style * =text-decoration] .wp-block-navigation-link__content:active, .wp-block-navigation[style * =text-decoration] .wp-block-navigation-link__content:focus, .wp-block-navigation[style * =text-decoration] .wp-block-navigation__container {
    text-decoration:inherit
}

.wp-block-navigation:not([style * =text-decoration]) .wp-block-navigation-link__content, .wp-block-navigation:not([style * =text-decoration]) .wp-block-navigation-link__content:active, .wp-block-navigation:not([style * =text-decoration]) .wp-block-navigation-link__content:focus {
    text-decoration:none
}

.wp-block-navigation-link__content {
    color: inherit;
    padding:.5em 1em
}

.wp-block-navigation-link__content + .wp-block-navigation-link__content {
    padding-top:0
}

.has-text-color .wp-block-navigation-link__content {
    color:inherit
}

.wp-block-navigation-link__label {
    word-break: normal;
    overflow-wrap:break-word
}

.wp-block-navigation-link__submenu-icon {
    height: inherit;
    padding:.375em 1em .375em 0
}

.wp-block-navigation-link__submenu-icon svg {
    fill:currentColor
}

@media (min-width: 782px) {
    .wp-block-navigation-link__submenu-icon svg {
        transform:rotate(90deg)
    }
}

.is-small-text {
    font-size:.875em
}

.is-regular-text {
    font-size:1em
}

.is-large-text {
    font-size:2.25em
}

.is-larger-text {
    font-size:3em
}

.has-drop-cap:not(:focus):first-letter {
    float: left;
    font-size: 8.4em;
    line-height: .68;
    font-weight: 100;
    margin: .05em .1em 0 0;
    text-transform: uppercase;
    font-style:normal
}

p.has-background {
    padding:1.25em 2.375em
}

p.has-text-color a {
    color:inherit
}

.wp-block-post-author {
    display: flex;
    flex-wrap:wrap
}

.wp-block-post-author__byline {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    font-size:.5em
}

.wp-block-post-author__avatar {
    margin-right:1em
}

.wp-block-post-author__bio {
    margin-bottom: .7em;
    font-size:.7em
}

.wp-block-post-author__content {
    flex-grow: 1;
    flex-basis:0
}

.wp-block-post-author__name {
    font-weight: 700;
    margin:0
}

.wp-block-post-comments-form input[type=submit] {
    color: #fff;
    background-color: #32373c;
    border: none;
    border-radius: 1.55em;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
    font-size: 1.125em;
    padding: .667em 1.333em;
    text-align: center;
    text-decoration: none;
    overflow-wrap:break-word
}

.wp-block-post-comments-form input[type=submit]:active, .wp-block-post-comments-form input[type=submit]:focus, .wp-block-post-comments-form input[type=submit]:hover, .wp-block-post-comments-form input[type=submit]:visited {
    color:#fff
}

.wp-block-preformatted {
    white-space:pre-wrap
}

.wp-block-pullquote {
    padding: 3em 0;
    margin-left: 0;
    margin-right: 0;
    text-align:center
}

.wp-block-pullquote.alignleft, .wp-block-pullquote.alignright {
    max-width:420px
}

.wp-block-pullquote.alignleft p, .wp-block-pullquote.alignright p {
    font-size:1.25em
}

.wp-block-pullquote p {
    font-size: 1.75em;
    line-height:1.6
}

.wp-block-pullquote cite, .wp-block-pullquote footer {
    position:relative
}

.wp-block-pullquote .has-text-color a {
    color:inherit
}

.wp-block-pullquote:not(.is-style-solid-color) {
    background:none
}

.wp-block-pullquote.is-style-solid-color {
    border:none
}

.wp-block-pullquote.is-style-solid-color blockquote {
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    max-width:60%
}

.wp-block-pullquote.is-style-solid-color blockquote p {
    margin-top: 0;
    margin-bottom: 0;
    font-size:2em
}

.wp-block-pullquote.is-style-solid-color blockquote cite {
    text-transform: none;
    font-style:normal
}

.wp-block-pullquote cite {
    color:inherit
}

.wp-block-query-loop {
    max-width: 100%;
    list-style: none;
    padding:0
}

.wp-block-query-loop li {
    clear:both
}

.wp-block-query-loop.is-flex-container {
    flex-direction: row;
    display: flex;
    flex-wrap:wrap
}

.wp-block-query-loop.is-flex-container li {
    margin: 0 0 1.25em;
    width:100%
}

@media (min-width: 600px) {
    .wp-block-query-loop.is-flex-container li {
        margin-right:1.25em
    }

    .wp-block-query-loop.is-flex-container.is-flex-container.columns-2 > li {
        width:calc(50% - .625em)
    }

    .wp-block-query-loop.is-flex-container.is-flex-container.columns-2 > li:nth-child(2n) {
        margin-right:0
    }

    .wp-block-query-loop.is-flex-container.is-flex-container.columns-3 > li {
        width:calc(33.33333% - .83333em)
    }

    .wp-block-query-loop.is-flex-container.is-flex-container.columns-3 > li:nth-child(3n) {
        margin-right:0
    }

    .wp-block-query-loop.is-flex-container.is-flex-container.columns-4 > li {
        width:calc(25% - .9375em)
    }

    .wp-block-query-loop.is-flex-container.is-flex-container.columns-4 > li:nth-child(4n) {
        margin-right:0
    }

    .wp-block-query-loop.is-flex-container.is-flex-container.columns-5 > li {
        width:calc(20% - 1em)
    }

    .wp-block-query-loop.is-flex-container.is-flex-container.columns-5 > li:nth-child(5n) {
        margin-right:0
    }

    .wp-block-query-loop.is-flex-container.is-flex-container.columns-6 > li {
        width:calc(16.66667% - 1.04167em)
    }

    .wp-block-query-loop.is-flex-container.is-flex-container.columns-6 > li:nth-child(6n) {
        margin-right:0
    }
}

.wp-block-query-pagination {
    display: flex;
    flex-direction: row;
    flex-wrap:wrap
}

.wp-block-query-pagination > .wp-block-query-pagination-next, .wp-block-query-pagination > .wp-block-query-pagination-numbers, .wp-block-query-pagination > .wp-block-query-pagination-previous {
    display: inline-block;
    margin-right: .5em;
    margin-bottom:.5em
}

.wp-block-query-pagination > .wp-block-query-pagination-next:last-child, .wp-block-query-pagination > .wp-block-query-pagination-numbers:last-child, .wp-block-query-pagination > .wp-block-query-pagination-previous:last-child {
    margin-right:0
}

.wp-block-quote.is-large, .wp-block-quote.is-style-large {
    margin-bottom: 1em;
    padding:0 1em
}

.wp-block-quote.is-large p, .wp-block-quote.is-style-large p {
    font-size: 1.5em;
    font-style: italic;
    line-height:1.6
}

.wp-block-quote.is-large cite, .wp-block-quote.is-large footer, .wp-block-quote.is-style-large cite, .wp-block-quote.is-style-large footer {
    font-size: 1.125em;
    text-align:right
}

.wp-block-rss.wp-block-rss {
    box-sizing:border-box
}

.wp-block-rss.alignleft {
    margin-right:2em
}

.wp-block-rss.alignright {
    margin-left:2em
}

.wp-block-rss.is-grid {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style:none
}

.wp-block-rss.is-grid li {
    margin: 0 1em 1em 0;
    width:100%
}

@media (min-width: 600px) {
    .wp-block-rss.columns-2 li {
        width:calc(50% - 1em)
    }

    .wp-block-rss.columns-3 li {
        width:calc(33.33333% - 1em)
    }

    .wp-block-rss.columns-4 li {
        width:calc(25% - 1em)
    }

    .wp-block-rss.columns-5 li {
        width:calc(20% - 1em)
    }

    .wp-block-rss.columns-6 li {
        width:calc(16.66667% - 1em)
    }
}

.wp-block-rss__item-author, .wp-block-rss__item-publish-date {
    display: block;
    color: #555;
    font-size:.8125em
}

.wp-block-search .wp-block-search__button {
    background: #f7f7f7;
    border: 1px solid #ccc;
    padding: .375em .625em;
    color: #32373c;
    margin-left: .625em;
    word-break:normal
}

.wp-block-search .wp-block-search__button.has-icon {
    line-height:0
}

.wp-block-search .wp-block-search__button svg {
    min-width: 1.5em;
    min-height:1.5em
}

.wp-block-search .wp-block-search__inside-wrapper {
    display: flex;
    flex: auto;
    flex-wrap: nowrap;
    max-width:100%
}

.wp-block-search .wp-block-search__label {
    width:100%
}

.wp-block-search .wp-block-search__input {
    flex-grow: 1;
    min-width: 3em;
    border:1px solid #949494
}

.wp-block-search.wp-block-search__button-only .wp-block-search__button {
    margin-left:0
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper {
    padding: 4px;
    border:1px solid #949494
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__input {
    border-radius: 0;
    border: none;
    padding:0 0 0 .25em
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__input:focus {
    outline:none
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__button {
    padding:.125em .5em
}

.wp-block-separator.is-style-wide {
    border-bottom-width:1px
}

.wp-block-separator.is-style-dots {
    background: none !important;
    border: none;
    text-align: center;
    max-width: none;
    line-height: 1;
    height:auto
}

.wp-block-separator.is-style-dots:before {
    content: "···";
    color: currentColor;
    font-size: 1.5em;
    letter-spacing: 2em;
    padding-left: 2em;
    font-family:serif
}

.wp-block-custom-logo {
    line-height:0
}

.wp-block-custom-logo .aligncenter {
    display:table
}

.wp-block-custom-logo.is-style-rounded img {
    border-radius:9999px
}

.wp-block-social-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left: 0;
    padding-right: 0;
    text-indent: 0;
    margin-left:0
}

.wp-block-social-links .wp-social-link a, .wp-block-social-links .wp-social-link a:hover {
    text-decoration: none;
    border-bottom: 0;
    box-shadow:none
}

.wp-block-social-links .wp-social-link.wp-social-link.wp-social-link {
    margin:4px 8px 4px 0
}

.wp-block-social-links .wp-social-link a {
    padding:.25em
}

.wp-block-social-links .wp-social-link svg {
    width: 1em;
    height:1em
}

.wp-block-social-links.has-small-icon-size {
    font-size:16px
}

.wp-block-social-links, .wp-block-social-links.has-normal-icon-size {
    font-size:24px
}

.wp-block-social-links.has-large-icon-size {
    font-size:36px
}

.wp-block-social-links.has-huge-icon-size {
    font-size:48px
}

.wp-block-social-links.aligncenter {
    justify-content: center;
    display:flex
}

.wp-block-social-links.alignright {
    justify-content:flex-end
}

.wp-social-link {
    display: block;
    border-radius: 9999px;
    transition: transform .1s ease;
    height:auto
}

@media (prefers-reduced-motion: reduce) {
    .wp-social-link {
        transition-duration:0s
    }
}

.wp-social-link a {
    display: block;
    line-height: 0;
    transition:transform .1s ease
}

.wp-social-link a, .wp-social-link a:active, .wp-social-link a:hover, .wp-social-link a:visited, .wp-social-link svg {
    color: currentColor;
    fill:currentColor
}

.wp-social-link:hover {
    transform:scale(1.1)
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link {
    background-color: #f0f0f0;
    color:#444
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-amazon {
    background-color: #f90;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-bandcamp {
    background-color: #1ea0c3;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-behance {
    background-color: #0757fe;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-codepen {
    background-color: #1e1f26;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-deviantart {
    background-color: #02e49b;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-dribbble {
    background-color: #e94c89;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-dropbox {
    background-color: #4280ff;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-etsy {
    background-color: #f45800;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-facebook {
    background-color: #1778f2;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-fivehundredpx {
    background-color: #000;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-flickr {
    background-color: #0461dd;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-foursquare {
    background-color: #e65678;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-github {
    background-color: #24292d;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-goodreads {
    background-color: #eceadd;
    color:#382110
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-google {
    background-color: #ea4434;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-instagram {
    background-color: #f00075;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-lastfm {
    background-color: #e21b24;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-linkedin {
    background-color: #0d66c2;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-mastodon {
    background-color: #3288d4;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-medium {
    background-color: #02ab6c;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-meetup {
    background-color: #f6405f;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-patreon {
    background-color: #ff424d;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-pinterest {
    background-color: #e60122;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-pocket {
    background-color: #ef4155;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-reddit {
    background-color: #fe4500;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-skype {
    background-color: #0478d7;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-snapchat {
    background-color: #fefc00;
    color: #fff;
    stroke:#000
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-soundcloud {
    background-color: #ff5600;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-spotify {
    background-color: #1bd760;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-telegram {
    background-color: #2aabee;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-tiktok {
    background-color: #000;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-tumblr {
    background-color: #011835;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-twitch {
    background-color: #6440a4;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-twitter {
    background-color: #1da1f2;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-vimeo {
    background-color: #1eb7ea;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-vk {
    background-color: #4680c2;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-wordpress {
    background-color: #3499cd;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-yelp {
    background-color: #d32422;
    color:#fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-youtube {
    background-color: red;
    color:#fff
}

.wp-block-social-links.is-style-logos-only .wp-social-link {
    background: none;
    padding:4px
}

.wp-block-social-links.is-style-logos-only .wp-social-link-amazon {
    color:#f90
}

.wp-block-social-links.is-style-logos-only .wp-social-link-bandcamp {
    color:#1ea0c3
}

.wp-block-social-links.is-style-logos-only .wp-social-link-behance {
    color:#0757fe
}

.wp-block-social-links.is-style-logos-only .wp-social-link-codepen {
    color:#1e1f26
}

.wp-block-social-links.is-style-logos-only .wp-social-link-deviantart {
    color:#02e49b
}

.wp-block-social-links.is-style-logos-only .wp-social-link-dribbble {
    color:#e94c89
}

.wp-block-social-links.is-style-logos-only .wp-social-link-dropbox {
    color:#4280ff
}

.wp-block-social-links.is-style-logos-only .wp-social-link-etsy {
    color:#f45800
}

.wp-block-social-links.is-style-logos-only .wp-social-link-facebook {
    color:#1778f2
}

.wp-block-social-links.is-style-logos-only .wp-social-link-fivehundredpx {
    color:#000
}

.wp-block-social-links.is-style-logos-only .wp-social-link-flickr {
    color:#0461dd
}

.wp-block-social-links.is-style-logos-only .wp-social-link-foursquare {
    color:#e65678
}

.wp-block-social-links.is-style-logos-only .wp-social-link-github {
    color:#24292d
}

.wp-block-social-links.is-style-logos-only .wp-social-link-goodreads {
    color:#382110
}

.wp-block-social-links.is-style-logos-only .wp-social-link-google {
    color:#ea4434
}

.wp-block-social-links.is-style-logos-only .wp-social-link-instagram {
    color:#f00075
}

.wp-block-social-links.is-style-logos-only .wp-social-link-lastfm {
    color:#e21b24
}

.wp-block-social-links.is-style-logos-only .wp-social-link-linkedin {
    color:#0d66c2
}

.wp-block-social-links.is-style-logos-only .wp-social-link-mastodon {
    color:#3288d4
}

.wp-block-social-links.is-style-logos-only .wp-social-link-medium {
    color:#02ab6c
}

.wp-block-social-links.is-style-logos-only .wp-social-link-meetup {
    color:#f6405f
}

.wp-block-social-links.is-style-logos-only .wp-social-link-patreon {
    color:#ff424d
}

.wp-block-social-links.is-style-logos-only .wp-social-link-pinterest {
    color:#e60122
}

.wp-block-social-links.is-style-logos-only .wp-social-link-pocket {
    color:#ef4155
}

.wp-block-social-links.is-style-logos-only .wp-social-link-reddit {
    color:#fe4500
}

.wp-block-social-links.is-style-logos-only .wp-social-link-skype {
    color:#0478d7
}

.wp-block-social-links.is-style-logos-only .wp-social-link-snapchat {
    color: #fff;
    stroke:#000
}

.wp-block-social-links.is-style-logos-only .wp-social-link-soundcloud {
    color:#ff5600
}

.wp-block-social-links.is-style-logos-only .wp-social-link-spotify {
    color:#1bd760
}

.wp-block-social-links.is-style-logos-only .wp-social-link-telegram {
    color:#2aabee
}

.wp-block-social-links.is-style-logos-only .wp-social-link-tiktok {
    color:#000
}

.wp-block-social-links.is-style-logos-only .wp-social-link-tumblr {
    color:#011835
}

.wp-block-social-links.is-style-logos-only .wp-social-link-twitch {
    color:#6440a4
}

.wp-block-social-links.is-style-logos-only .wp-social-link-twitter {
    color:#1da1f2
}

.wp-block-social-links.is-style-logos-only .wp-social-link-vimeo {
    color:#1eb7ea
}

.wp-block-social-links.is-style-logos-only .wp-social-link-vk {
    color:#4680c2
}

.wp-block-social-links.is-style-logos-only .wp-social-link-wordpress {
    color:#3499cd
}

.wp-block-social-links.is-style-logos-only .wp-social-link-yelp {
    background-color: #d32422;
    color:#fff
}

.wp-block-social-links.is-style-logos-only .wp-social-link-youtube {
    color:red
}

.wp-block-social-links.is-style-pill-shape .wp-social-link {
    width:auto
}

.wp-block-social-links.is-style-pill-shape .wp-social-link a {
    padding-left: .66667em;
    padding-right:.66667em
}

.wp-block-spacer {
    clear:both
}

p.wp-block-subhead {
    font-size: 1.1em;
    font-style: italic;
    opacity:.75
}

.wp-block-tag-cloud.aligncenter {
    text-align:center
}

.wp-block-tag-cloud.alignfull {
    padding-left: 1em;
    padding-right:1em
}

.wp-block-table {
    overflow-x:auto
}

.wp-block-table table {
    width:100%
}

.wp-block-table .has-fixed-layout {
    table-layout: fixed;
    width:100%
}

.wp-block-table .has-fixed-layout td, .wp-block-table .has-fixed-layout th {
    word-break:break-word
}

.wp-block-table.aligncenter, .wp-block-table.alignleft, .wp-block-table.alignright {
    display: table;
    width:auto
}

.wp-block-table.aligncenter td, .wp-block-table.aligncenter th, .wp-block-table.alignleft td, .wp-block-table.alignleft th, .wp-block-table.alignright td, .wp-block-table.alignright th {
    word-break:break-word
}

.wp-block-table .has-subtle-light-gray-background-color {
    background-color:#f3f4f5
}

.wp-block-table .has-subtle-pale-green-background-color {
    background-color:#e9fbe5
}

.wp-block-table .has-subtle-pale-blue-background-color {
    background-color:#e7f5fe
}

.wp-block-table .has-subtle-pale-pink-background-color {
    background-color:#fcf0ef
}

.wp-block-table.is-style-stripes {
    border-spacing: 0;
    border-collapse: inherit;
    background-color: transparent;
    border-bottom:1px solid #f0f0f0
}

.wp-block-table.is-style-stripes tbody tr:nth-child(odd) {
    background-color:#f0f0f0
}

.wp-block-table.is-style-stripes.has-subtle-light-gray-background-color tbody tr:nth-child(odd) {
    background-color:#f3f4f5
}

.wp-block-table.is-style-stripes.has-subtle-pale-green-background-color tbody tr:nth-child(odd) {
    background-color:#e9fbe5
}

.wp-block-table.is-style-stripes.has-subtle-pale-blue-background-color tbody tr:nth-child(odd) {
    background-color:#e7f5fe
}

.wp-block-table.is-style-stripes.has-subtle-pale-pink-background-color tbody tr:nth-child(odd) {
    background-color:#fcf0ef
}

.wp-block-table.is-style-stripes td, .wp-block-table.is-style-stripes th {
    border-color:transparent
}

.wp-block-text-columns, .wp-block-text-columns.aligncenter {
    display:flex
}

.wp-block-text-columns .wp-block-column {
    margin: 0 1em;
    padding:0
}

.wp-block-text-columns .wp-block-column:first-child {
    margin-left:0
}

.wp-block-text-columns .wp-block-column:last-child {
    margin-right:0
}

.wp-block-text-columns.columns-2 .wp-block-column {
    width:50%
}

.wp-block-text-columns.columns-3 .wp-block-column {
    width:33.33333%
}

.wp-block-text-columns.columns-4 .wp-block-column {
    width:25%
}

pre.wp-block-verse {
    font-family: inherit;
    overflow: auto;
    white-space:pre-wrap
}

.wp-block-video {
    margin-left: 0;
    margin-right:0
}

.wp-block-video video {
    width:100%
}

@supports ((position: -webkit-sticky) or(position: sticky)) {
    .wp-block-video [poster] {
        -o-object-fit: cover;
        object-fit:cover
    }
}

.wp-block-video.aligncenter {
    text-align:center
}

.wp-block-video figcaption {
    margin-top: .5em;
    margin-bottom:1em
}

.wp-block-post-featured-image a {
    display:inline-block
}

.wp-block-post-featured-image img {
    max-width: 100%;
    height:auto
}

:root .has-pale-pink-background-color {
    background-color:#f78da7
}

:root .has-vivid-red-background-color {
    background-color:#cf2e2e
}

:root .has-luminous-vivid-orange-background-color {
    background-color:#ff6900
}

:root .has-luminous-vivid-amber-background-color {
    background-color:#fcb900
}

:root .has-light-green-cyan-background-color {
    background-color:#7bdcb5
}

:root .has-vivid-green-cyan-background-color {
    background-color:#00d084
}

:root .has-pale-cyan-blue-background-color {
    background-color:#8ed1fc
}

:root .has-vivid-cyan-blue-background-color {
    background-color:#0693e3
}

:root .has-vivid-purple-background-color {
    background-color:#9b51e0
}

:root .has-white-background-color {
    background-color:#fff
}

:root .has-very-light-gray-background-color {
    background-color:#eee
}

:root .has-cyan-bluish-gray-background-color {
    background-color:#abb8c3
}

:root .has-very-dark-gray-background-color {
    background-color:#313131
}

:root .has-black-background-color {
    background-color:#000
}

:root .has-pale-pink-color {
    color:#f78da7
}

:root .has-vivid-red-color {
    color:#cf2e2e
}

:root .has-luminous-vivid-orange-color {
    color:#ff6900
}

:root .has-luminous-vivid-amber-color {
    color:#fcb900
}

:root .has-light-green-cyan-color {
    color:#7bdcb5
}

:root .has-vivid-green-cyan-color {
    color:#00d084
}

:root .has-pale-cyan-blue-color {
    color:#8ed1fc
}

:root .has-vivid-cyan-blue-color {
    color:#0693e3
}

:root .has-vivid-purple-color {
    color:#9b51e0
}

:root .has-white-color {
    color:#fff
}

:root .has-very-light-gray-color {
    color:#eee
}

:root .has-cyan-bluish-gray-color {
    color:#abb8c3
}

:root .has-very-dark-gray-color {
    color:#313131
}

:root .has-black-color {
    color:#000
}

:root .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
    background:linear-gradient(135deg, #0693e3, #9b51e0)
}

:root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background {
    background:linear-gradient(135deg, #00d084, #0693e3)
}

:root .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
    background:linear-gradient(135deg, #7adcb4, #00d082)
}

:root .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
    background:linear-gradient(135deg, #fcb900, #ff6900)
}

:root .has-luminous-vivid-orange-to-vivid-red-gradient-background {
    background:linear-gradient(135deg, #ff6900, #cf2e2e)
}

:root .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
    background:linear-gradient(135deg, #eee, #a9b8c3)
}

:root .has-cool-to-warm-spectrum-gradient-background {
    background:linear-gradient(135deg, #4aeadc, #9778d1 20%, #cf2aba 40%, #ee2c82 60%, #fb6962 80%, #fef84c)
}

:root .has-blush-light-purple-gradient-background {
    background:linear-gradient(135deg, #ffceec, #9896f0)
}

:root .has-blush-bordeaux-gradient-background {
    background:linear-gradient(135deg, #fecda5, #fe2d2d 50%, #6b003e)
}

:root .has-purple-crush-gradient-background {
    background:linear-gradient(135deg, #34e2e4, #4721fb 50%, #ab1dfe)
}

:root .has-luminous-dusk-gradient-background {
    background:linear-gradient(135deg, #ffcb70, #c751c0 50%, #4158d0)
}

:root .has-hazy-dawn-gradient-background {
    background:linear-gradient(135deg, #faaca8, #dad0ec)
}

:root .has-pale-ocean-gradient-background {
    background:linear-gradient(135deg, #fff5cb, #b6e3d4 50%, #33a7b5)
}

:root .has-electric-grass-gradient-background {
    background:linear-gradient(135deg, #caf880, #71ce7e)
}

:root .has-subdued-olive-gradient-background {
    background:linear-gradient(135deg, #fafae1, #67a671)
}

:root .has-atomic-cream-gradient-background {
    background:linear-gradient(135deg, #fdd79a, #004a59)
}

:root .has-nightshade-gradient-background {
    background:linear-gradient(135deg, #330968, #31cdcf)
}

:root .has-midnight-gradient-background {
    background:linear-gradient(135deg, #020381, #2874fc)
}

:root .has-link-color a {
    color: #00e;
    color:var(--wp--style--color--link, #00e)
}

.has-small-font-size {
    font-size:.8125em
}

.has-normal-font-size, .has-regular-font-size {
    font-size:1em
}

.has-medium-font-size {
    font-size:1.25em
}

.has-large-font-size {
    font-size:2.25em
}

.has-huge-font-size, .has-larger-font-size {
    font-size:2.625em
}

.has-text-align-center {
    text-align:center
}

.has-text-align-left {
    text-align:left
}

.has-text-align-right {
    text-align:right
}

#end-resizable-editor-section {
    display:none
}

.aligncenter {
    clear: both
}

#start-resizable-editor-section {
  display:none
}

.wp-block-audio figcaption {
  color: #555;
  font-size: 13px;
  text-align:center
}

.is-dark-theme .wp-block-audio figcaption {
  color:hsla(0, 0%, 100%, .65)
}

.wp-block-code {
  font-family: Menlo, Consolas, monaco, monospace;
  color: #1e1e1e;
  padding: .8em 1em;
  border: 1px solid #ddd;
  border-radius:4px
}

.wp-block-embed figcaption {
  color: #555;
  font-size: 13px;
  text-align:center
}

.is-dark-theme .wp-block-embed figcaption {
  color:hsla(0, 0%, 100%, .65)
}

.blocks-gallery-caption {
  color: #555;
  font-size: 13px;
  text-align:center
}

.is-dark-theme .blocks-gallery-caption {
  color:hsla(0, 0%, 100%, .65)
}

.wp-block-image figcaption {
  color: #555;
  font-size: 13px;
  text-align:center
}

.is-dark-theme .wp-block-image figcaption {
  color:hsla(0, 0%, 100%, .65)
}

.wp-block-pullquote {
  border-top: 4px solid;
  border-bottom: 4px solid;
  margin-bottom: 1.75em;
  color:currentColor
}

.wp-block-pullquote__citation, .wp-block-pullquote cite, .wp-block-pullquote footer {
  color: currentColor;
  text-transform: uppercase;
  font-size: .8125em;
  font-style:normal
}

.wp-block-navigation ul, .wp-block-navigation ul li {
  list-style:none
}

.wp-block-navigation-link.wp-block-navigation-link {
  margin:0
}

.wp-block-quote {
  border-left: .25em solid;
  margin: 0 0 1.75em;
  padding-left:1em
}

.wp-block-quote__citation, .wp-block-quote cite, .wp-block-quote footer {
  color: currentColor;
  font-size: .8125em;
  margin-top: 1em;
  position: relative;
  font-style:normal
}

.wp-block-quote.has-text-align-right {
  border-left: none;
  border-right: .25em solid;
  padding-left: 0;
  padding-right:1em
}

.wp-block-quote.has-text-align-center {
  border: none;
  padding-left:0
}

.wp-block-quote.is-large, .wp-block-quote.is-style-large {
  border:none
}

.wp-block-search .wp-block-search__label {
  font-weight:700
}

.wp-block-group.has-background {
  padding: 1.25em 2.375em;
  margin-top: 0;
  margin-bottom:0
}

.wp-block-separator {
  border: none;
  border-bottom: 2px solid;
  margin-left: auto;
  margin-right: auto;
  opacity:.4
}

.wp-block-separator:not(.is-style-wide):not(.is-style-dots) {
  max-width:100px
}

.wp-block-separator.has-background:not(.is-style-dots) {
  border-bottom: none;
  height:1px
}

.wp-block-separator.has-background:not(.is-style-wide):not(.is-style-dots) {
  height:2px
}

.wp-block-table {
  border-collapse:collapse
}

.wp-block-table thead {
  border-bottom:3px solid
}

.wp-block-table tfoot {
  border-top:3px solid
}

.wp-block-table td, .wp-block-table th {
  padding: .5em;
  border: 1px solid;
  word-break:normal
}

.wp-block-table figcaption {
  color: #555;
  font-size: 13px;
  text-align:center
}

.is-dark-theme .wp-block-table figcaption {
  color:hsla(0, 0%, 100%, .65)
}

.wp-block-video figcaption {
  color: #555;
  font-size: 13px;
  text-align:center
}

.is-dark-theme .wp-block-video figcaption {
  color:hsla(0, 0%, 100%, .65)
}

.wp-block-template-part.has-background {
  padding: 1.25em 2.375em;
  margin-top: 0;
  margin-bottom:0
}

#end-resizable-editor-section {
  display: none
}


`
const PostFrame = styled.div({
  backgroundColor: "white",
  height: "100%",
  width: "100%",
  overflowY: "auto",
});

const ContentLayout = styled.div({
  margin: "2rem 4rem",
  flex: 1,
  overflowY: "auto",
});

const Content = styled.div({
  minHeight: "calc(100% - 4rem)",
  padding: "2rem",
  position: "relative",
  backgroundColor: "rgba(255,255,255, 0.6)",
});

const Post = connect(PostUnconnect);

const components = {
  Title,
  UnderLine,
  Main,
  MainBg1,
  MainBg2,
  Post,
  ContentLayout,
  Content,
};

const pages = {
  Detail,
  Guide,
  Organization,
  Review,
  Intro,
  Routine,
  Guest,
  Sponsor,
  Broadcast,
};

export { components, pages, fetch };
