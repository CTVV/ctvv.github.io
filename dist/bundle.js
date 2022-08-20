(()=>{"use strict";var n={766:(n,r,e)=>{e.d(r,{Z:()=>m});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),s=e(667),c=e.n(s),l=new URL(e(483),e.b),u=a()(o());u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);"]);var d=c()(l);u.push([n.id,"\r\n:root {\r\n    --first-color: #ABC9FF;\r\n    --second-color: #FFDEDE;\r\n    --third-color: #FF8B8B;\r\n    --fourth-color: #EB4747;\r\n    --font-color: rgba(0,0,0,0.8);\r\n    --border-radius: 50px;\r\n    font-size: 20px;\r\n}\r\n\r\nhtml {\r\n    box-sizing: border-box;\r\n    font-size: 20px;\r\n}\r\n\r\nbody {\r\n    background-color: #ffdede;\r\n    background-image: url("+d+");\r\n    margin: 0;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family:'Bebas Neue', cursive;\r\n}\r\n\r\n\r\n/* Menu */\r\n.menu {\r\n    width: 600px;\r\n    height: 600px;\r\n    background: var(--first-color);\r\n    border-radius: var(--border-radius);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    font-size: 2rem;\r\n    border: 3px solid rgba(30,30,30,0.3);\r\n    position: absolute;\r\n}\r\n\r\n.game-menu {\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/* Options */\r\nbutton {\r\n    font-size: 2rem;\r\n    font-family:'Bebas Neue', cursive;\r\n    background: #72a2fc;\r\n}\r\n\r\n.options {\r\n    width: 90%;\r\n    height: 75px;\r\n    margin-top: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: var(--border-radius);\r\n    border: solid rgba(30,30,30,0.3);\r\n    overflow: auto;\r\n    letter-spacing: normal;\r\n    line-height: 1;\r\n}\r\n\r\n\r\n.options:hover {\r\n    transform: scale(1.05);\r\n    box-shadow: 0 5px 5px rgba(30,30,30,0.3);\r\n    font-size: 2.2rem;\r\n    cursor: pointer;\r\n    color: var(--fourth-color);\r\n}\r\n\r\n.header {\r\n    font-size: 2.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/* Quiz selection */\r\n.quiz-selection {\r\n    width:90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/* Actual game */\r\n\r\n.game {\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.question {\r\n    width: 90%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 150px;\r\n    line-height: 1;\r\n    border-bottom: solid rgba(30,30,30,0.3);\r\n    overflow: auto;\r\n    letter-spacing: normal;\r\n}\r\n\r\n.question-number {\r\n    font-size: 1.3rem;\r\n    position: absolute;\r\n    right: 5%;\r\n    bottom: 1.5%;\r\n}\r\n\r\n/* End game */\r\n.end-game {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.winner {\r\n    font-size: 4rem;\r\n    animation: color-change 3s infinite;\r\n}\r\n\r\n@keyframes color-change {\r\n    0% { color: red; }\r\n    50% { color: blue; }\r\n    100% { color: red; }\r\n  }\r\n\r\n#tryAgain {\r\n    margin-top: 50px;\r\n    width: 300px;\r\n    height: 100px;\r\n    border-radius: var(--border-radius);\r\n    border: none;\r\n    background: var(--second-color);\r\n    color: #EB4747;\r\n    font-size: 1.5rem;\r\n    font-weight: bolder;\r\n}\r\n\r\n#tryAgain:hover {\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n    font-size: 2rem;\r\n    box-shadow: 0 10px 10px rgba(30,30,30,0.3);\r\n}\r\n\r\n/* Scoreboard */\r\n.scoreboard {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.scores {\r\n    border-bottom: 1px solid rgba(30,30,30,0.3);\r\n    color: green;\r\n}\r\n\r\n\r\n.not-visible {\r\n    display: none;\r\n}\r\n\r\n.contact-info {\r\n    color: var(--font-color);\r\n    position: fixed;\r\n    bottom: 0%;\r\n    right: 2%;\r\n    height: 100px;\r\n    width: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    font-size: 1.3rem;\r\n}\r\n.icons {\r\n    height: 50px;\r\n    width:100px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.icons i:hover {\r\n    color:#72a2fc;\r\n    cursor: pointer;\r\n}\r\n\r\na {\r\n    outline: none;\r\n}\r\n\r\na:visited {\r\n    color: var(--font-color);\r\n}\r\n/* MediaQuery */\r\n@media screen and (max-width: 640px) {\r\n    .menu {\r\n        width: 300px;\r\n        height: 300px;\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .question-number {\r\n        right: 6%;\r\n        bottom: 3%;\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .options {\r\n        height: 35px;\r\n        margin-top: 5px;\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .options:hover {\r\n        font-size: 1.1rem;\r\n    }\r\n\r\n    .header {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .question {\r\n        height: 70px;\r\n    }\r\n\r\n    .winner {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    #tryAgain {\r\n        width: 150px;\r\n        height: 60px;\r\n        font-size: 1rem;\r\n    }\r\n\r\n    #tryAgain:hover {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .contact-info{\r\n        font-size: 1rem;\r\n        height: 80px;\r\n        width: 80px;\r\n    }\r\n\r\n    .icons {\r\n        height: 40px;\r\n        width: 80px;\r\n        font-size: 1.3rem;\r\n    }\r\n}",""]);const m=u},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);t&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var m=e(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)r[m].references++,r[m].updater(f);else{var p=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:d,updater:p,references:1})}a.push(d)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);r[s].references--}for(var c=t(n,o),l=0;l<i.length;l++){var u=e(i[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}i=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},483:n=>{n.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27126%27 height=%2784%27 viewBox=%270 0 126 84%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg fill=%27%23abc9ff%27 fill-opacity=%270.41%27%3E%3Cpath d=%27M126 83v1H0v-2h40V42H0v-2h40V0h2v40h40V0h2v40h40V0h2v83zm-2-1V42H84v40h40zM82 42H42v40h40V42zm-50-6a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm96 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-42 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm30-12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM20 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm12 24a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM8 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM8 78a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm12 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm54 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM50 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM50 78a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm54-12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM92 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM92 78a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24-42a4 4 0 1 1 0-8 4 4 0 0 1 0 8z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{class n{categoryId=0;numberOfQuestions=0;questionArray=[];chosenCategory="";constructor(n,r,e,t){this.categoryId=n,this.numberOfQuestions=r,this.questionArray=e,this.chosenCategory=t}static getDeafault(){return new n(0,0,[],"")}}function r(n){try{return(new DOMParser).parseFromString(n,"text/html").querySelector("body").textContent}catch{}return null}var t=e(379),o=e.n(t),i=e(795),a=e.n(i),s=e(569),c=e.n(s),l=e(565),u=e.n(l),d=e(216),m=e.n(d),f=e(589),p=e.n(f),g=e(766),h={};h.styleTagTransform=p(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=m(),o()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;const y={mainPage:document.querySelector(".game-menu"),loading:document.querySelector(".loading"),questionChoice:Array.from(document.querySelectorAll(".query-question"))},b={selectPage:document.querySelector(".quiz-selection"),categoryChoice:Array.from(document.querySelectorAll(".query-category"))},v={question:document.getElementById("question"),answers:Array.from(document.querySelectorAll(".answer")),questionNumber:document.querySelector(".question-number"),finalScore:document.getElementById("score"),gamePage:document.querySelector(".game"),endGamePage:document.querySelector(".end-game")},x={scoreboardPage:document.querySelector(".scoreboard"),scoreboard:document.querySelector(".box")},z={tryAgain:document.getElementById("tryAgain"),goToMenu:document.getElementById("goToMenu"),goToScorepage:document.getElementById("checkScoreboard")};function w(n){for(const r of Object.keys(n))if(null==n[r])return!1;return!0}let q=n.getDeafault(),E=0,C=0,S="",A=!1,L=[],M=[];function P(n){A||v.gamePage.classList.remove("not-visible"),function(n){v.question.textContent=r(q.questionArray[n].question)}(n),function(n){M=q.questionArray[n].incorrect_answers.slice(0,3),S=q.questionArray[n].correct_answer,M.push(q.questionArray[n].correct_answer)}(n),function(n){let r,e=n.length;for(;0!=e;)r=Math.floor(Math.random()*e),e--,[n[e],n[r]]=[n[r],n[e]]}(M),v.answers.forEach(((n,e)=>{n.textContent=r(M[e])})),E++,v.questionNumber.textContent=`${E}/${q.questionArray.length}`}!function(){const n=[y,b,v,x,z];for(let r=0;r<n.length;r++)if(!w(n[r]))return void console.error("failed to verify elements")}(),localStorage.bestScore&&(L=JSON.parse(localStorage.bestScore)),y.questionChoice.forEach((n=>{n.addEventListener("click",(n=>function(n){q.numberOfQuestions=Number(n.srcElement.value),y.mainPage.classList.add("not-visible"),b.selectPage.classList.remove("not-visible")}(n)))})),b.categoryChoice.forEach((n=>{n.addEventListener("click",(n=>function(n){q.categoryId=Number(n.srcElement.value),q.chosenCategory=n.srcElement.textContent,function(){b.selectPage.classList.add("not-visible"),y.loading.classList.remove("not-visible"),async function(){try{q.questionArray=null;let n=`https://opentdb.com/api.php?amount=${q.numberOfQuestions}&category=${q.categoryId}&type=multiple`,r=await fetch(n),e=await r.json();q.questionArray=e.results}catch(n){console.log(n)}}();let n=setInterval((function(){q.questionArray&&(y.loading.classList.add("not-visible"),P(0),v.questionNumber.classList.remove("not-visible"),A=!0,clearInterval(n))}),1e3)}()}(n)))})),v.answers.forEach((n=>{n.addEventListener("click",(n=>function(n){n.target.textContent===S&&C++,E<q.questionArray.length?P(E):(v.questionNumber.classList.add("not-visible"),v.gamePage.classList.add("not-visible"),v.endGamePage.classList.remove("not-visible"),v.finalScore.textContent=`${C}/${q.questionArray.length}`,L.length<=6?(L.push({number:q.numberOfQuestions,category:q.chosenCategory,points:C}),L.sort(((n,r)=>r.points/r.number-n.points/n.number))):L[6].points/L[6].number<C/q.numberOfQuestions&&(L.pop(),L.push({number:q.numberOfQuestions,category:q.chosenCategory,points:C}),L.sort(((n,r)=>r.points/r.number-n.points/n.number))),localStorage.setItem("bestScore",JSON.stringify(L)))}(n)))})),z.tryAgain.addEventListener("click",(function(){v.endGamePage.classList.add("not-visible"),q=n.getDeafault(),E=0,C=0,M=[],A=!1,y.mainPage.classList.remove("not-visible")})),z.goToMenu.addEventListener("click",(function(){x.scoreboardPage.classList.add("not-visible"),y.mainPage.classList.remove("not-visible")})),z.goToScorepage.addEventListener("click",(function(){y.mainPage.classList.add("not-visible"),x.scoreboardPage.classList.remove("not-visible"),x.scoreboard.textContent="",L.forEach(((n,r)=>{const e=document.createElement("div");e.classList.add("scores"),e.textContent=`${L[r].category} - ${L[r].points}/${L[r].number}`,x.scoreboard.appendChild(e)}))}))})()})();