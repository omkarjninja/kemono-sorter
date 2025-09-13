// ==UserScript==
// @name         Kemono Sorter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Sort and filter Kemono posts by datetime
// @author       You
// @match        https://kemono.cr/*
// @match        https://kemono.su/*
// @match        https://kemono.party/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function sortAndFilter(year = 2025) {
        const articles = Array.from(document.querySelectorAll("article.post-card"));
        if (!articles.length) return;

        const filtered = articles.filter(a => {
            const d = new Date(a.querySelector("time").getAttribute("datetime"));
            return d.getFullYear() === year;
        });

        filtered.sort((a, b) => {
            const da = new Date(a.querySelector("time").getAttribute("datetime"));
            const db = new Date(b.querySelector("time").getAttribute("datetime"));
            return db - da;
        });

        const container = articles[0].parentNode;
        container.innerHTML = "";
        filtered.forEach(article => container.appendChild(article));
    }

    // Run once on page load
    sortAndFilter(2025);

    // Run again whenever new posts are loaded dynamically
    const observer = new MutationObserver(() => sortAndFilter(2025));
    observer.observe(document.body, { childList: true, subtree: true });
})();
