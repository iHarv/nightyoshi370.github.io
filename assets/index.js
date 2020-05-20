import "./js/sidebar/index.js";
import "./js/scrollup.js";
import { replaceCardNoShare } from "./js/sharelinks.js";
import { tableOfContents } from "./js/table-of-contents.js";
import { addAnchor } from "./js/anchorlinks.js";
import { autoTargetBlank } from "./js/autotargetblank.js";

replaceCardNoShare(document.getElementsByClassName('noShare'));
addAnchor(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
tableOfContents('[data-content]', '[data-toc]');
autoTargetBlank(document.querySelectorAll('a'))
tippy('[data-tippy-content]');

//document.designMode = 'on';