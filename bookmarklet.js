Add this as a bookmark in your browser:

```javascript
javascript:(function(){const articles=[...document.querySelectorAll("article.post-card")];if(!articles.length)return;const filtered=articles.filter(a=>new Date(a.querySelector("time").getAttribute("datetime")).getFullYear()===2025);filtered.sort((a,b)=>new Date(b.querySelector("time").getAttribute("datetime"))-new Date(a.querySelector("time").getAttribute("datetime")));const container=articles[0].parentNode;container.innerHTML="";filtered.forEach(a=>container.appendChild(a));})();
