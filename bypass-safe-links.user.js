// ==UserScript==
// @name         Bybass Safe Links
// @namespace    https://qoomon.github.io
// @version      1.0
// @description  try to take over the world!
// @author       qoomon
// @match        https://statics.teams.cdn.office.net/evergreen-assets/safelinks/1/atp-safelinks.html
// @match        https://urlisolation.com/browser
// @match        https://urldefense.com/v3/*
// @icon         https://cdn-icons-png.flaticon.com/512/388/388484.png
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';
  console.log("Bybass Safe Link");

  const locationUrl = new URL(location);

  if(locationUrl.href.startsWith('https://statics.teams.cdn.office.net/evergreen-assets/safelinks/1/atp-safelinks.html?')){
    location.href = locationUrl.searchParams.get('url');
  }

  if(locationUrl.href.startsWith('https://urlisolation.com/browser?')){
    location.href = locationUrl.searchParams.get('url');
  }

  if(locationUrl.href.startsWith('https://urldefense.com/v3/')){
    location.href = locationUrl.pathname.match(/\/v3\/__(?<url>.*)__;/).groups.url;
  }

})();
