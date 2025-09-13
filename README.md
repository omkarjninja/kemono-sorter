# Kemono Sorter

A simple script to sort and filter posts on [Kemono](https://kemono.cr/) by their `datetime`.

## ✨ Features
- Sorts all posts by date (newest first).
- Optionally filter posts by year (e.g. only show posts from 2025).
- Works as a **bookmarklet** or **Tampermonkey userscript**.

---

## 🔗 Bookmarklet

Add this as a bookmark in your browser:

```javascript
javascript:(function(){const articles=[...document.querySelectorAll("article.post-card")];if(!articles.length)return;const filtered=articles.filter(a=>new Date(a.querySelector("time").getAttribute("datetime")).getFullYear()===2025);filtered.sort((a,b)=>new Date(b.querySelector("time").getAttribute("datetime"))-new Date(a.querySelector("time").getAttribute("datetime")));const container=articles[0].parentNode;container.innerHTML="";filtered.forEach(a=>container.appendChild(a));})();
