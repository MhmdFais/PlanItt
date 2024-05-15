(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>d});var a=e(601),o=e.n(a),r=e(314),i=e.n(r)()(o());i.push([n.id,'*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\n:root{\n    --main-font: "Comfortaa", sans-serif;\n    --primary-bg-color: #99f6e4;\n    --nav-bar-bg: aliceblue;\n    --add-task-btn-clr: #b2f0e2;\n    --btn-shadow-color: #4ea28e;\n    --border-clr: #caf0e7;\n    --add-project-bg:rgb(203, 218, 231);\n    --add-project-shadow: rgb(173, 186, 198);\n    --nav-hover-color:rgb(218, 226, 233);\n    --popup-save: #5fe2d1;\n    --popup-save-shadow: #a6f4e9;\n    --popup-cancel: #f77d8f;\n    --popup-cancel-shadow: #f5a7b3;\n}\n\n/* list styles */\n\nul{\n    list-style-type: none;\n}\n\n\nbody{\n    font-family: var(--main-font);\n    /* background-color: var(--primary-bg-color); */\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 6fr;\n}\n\n.header-container{\n    display: flex;\n    align-items: center;\n    padding-left: 2%;\n    background-color: var(--primary-bg-color);\n    font-size: clamp(1rem, 2vw, 2rem);\n}\n\n.content-container{\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n\n.first-set-container{\n    padding-bottom: 1%;\n}\n\n/* Navbar Style */\n\n.navbar-container{\n    padding-top: 2.5vh;\n    padding-left: 2vw;\n    background-color:var(--nav-bar-bg);\n}\n\n.navbar-container ul li{\n    padding-bottom: 2vh;\n    font-size: clamp(1rem, 1.3vw, 2rem);\n    cursor: pointer;\n    display: flex;\n}\n\n.nav-item:hover,\n.nav-item-list:hover,\n.nav-item:active{\n    background-color: var(--nav-hover-color);\n    border-radius: 5px;\n    margin-right: 0.5vw;\n    padding: 1vh 0;\n    padding-left: 0.5vw;\n}\n\n\n.navbar-container h2{\n    padding-bottom: 2vh;\n}\n\n.navbar-container .first-set-container{\n    padding-bottom: 2.3vh;\n}\n\n.navbar-container button{\n    background-color: var(--add-project-bg);\n    padding: 1vh 2vw;\n    margin-top: 0.5vh;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: clamp(1rem, 1.3vw, 2rem);\n    font-family: var(--main-font);\n    box-shadow: 4px 4px 5px 0px var(--add-project-shadow);\n}\n\n/* Main content body */\n\n.main-list-container{\n    padding-top: 2.5vh;\n    padding-left: 2vw;\n    padding-right: 2vw;\n    display: grid;\n    grid-template-rows: 1fr 9fr;\n}\n\n.main-list-container .list-heading-and-button{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-bottom: 1vh;\n    border-bottom: 1px solid var(--border-clr);\n}\n\n.main-list-container .list-heading-and-button button{\n    background-color: var(--add-task-btn-clr);\n    padding: 1.5vh 2.5vw;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: clamp(1rem, 1.3vw, 2rem);\n    font-family: var(--main-font);\n    box-shadow: 4px 4px 5px 0px var(--btn-shadow-color);\n}\n\n/* Add Project Pop Up */\n\n#add-project-pop-up {\n    border: none !important;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 1.2rem;\n    height: fit-content;\n    border-radius: 1rem;\n    border: none;\n    font-family: var(--main-font);\n    width: 20vw;\n}\n\n#project-name{\n    height: 5vh;\n    padding: 0.2rem;\n}\n\n.add-project-form input[type="text"]{\n    font-size: clamp(0.5rem, 1vw, 1.5rem);\n    font-family: var(--main-font);\n    margin-bottom: 1vh;\n}\n\n.add-project-form{\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 0.5vh;\n}\n\n.add-project-form label{\n    font-family: var(--main-font);\n    font-size: clamp(1rem, 1.5vw, 2rem);\n    display: flex;\n    /* justify-content: center;\n    align-items: center; */\n    padding-bottom: 1vh;\n} \n\n.add-proj-pop-btns{\n    display: flex;\n    gap: 1vw;\n}\n\n.add-proj-pop-btns .pop-add-btn,\n.add-proj-pop-btns .pop-cancel-btn {\n    flex: 1;\n    font-family: var(--font);\n}\n\n.add-proj-pop-btns .pop-add-btn input[type="submit"],\n.add-proj-pop-btns .pop-cancel-btn input[type="submit"] {\n    width: 100%;\n    padding: 0.5vw;\n}\n\n#add-project-pop-up::backdrop {\n    background-color: hsla(0, 0%, 0%, 0.4);\n}\n\n.pop-add-btn button{\n    background-color: var(--popup-save);\n    padding: 1vh 2vw;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: clamp(1rem, 1.3vw, 2rem);\n    font-family: var(--main-font);\n    box-shadow: 4px 4px 5px 0px var(--popup-save-shadow);\n}\n\n.pop-cancel-btn button{\n    background-color: var(--popup-cancel);\n    padding: 1vh 2vw;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: clamp(1rem, 1.3vw, 2rem);\n    font-family: var(--main-font);\n    box-shadow: 4px 4px 5px 0px var(--popup-cancel-shadow);\n}\n\n/* Page Heading Text */\n\n.list-heading{\n    font-size: clamp(1rem, 2vw, 2rem);\n    /* padding-bottom: 1vh; */\n    font-family: var(--main-font);\n}\n\n\n/* Add Task Pop Up */\n\n#add-task-pop-up {\n    border: none !important;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 2.5vw;\n    height: fit-content;\n    border-radius: 1rem;\n    border: none;\n    font-family: var(--main-font);\n    width: 40vw;\n}\n\n.add-task-pop-up-form input[type="text"]{\n    font-size: clamp(0.5rem, 1.5vw, 1.5rem);\n    font-family: var(--main-font);\n    margin-bottom: 2.3vh;\n    padding: 0.5vh;\n}\n\n.add-task-pop-up-form{\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 0.5vh;\n}\n\n.add-task-pop-up-form label{\n    font-family: var(--main-font);\n    font-size: clamp(1rem, 1.5vw, 2rem);\n    display: flex;\n    /* justify-content: center;\n    align-items: center; */\n    padding-bottom: 1vh;\n}\n\n.add-task-pop-up-form input[type="date"]{\n    font-size: clamp(0.5rem, 1.55vw, 1.5rem);\n    font-family: var(--main-font);\n    margin-bottom: 2.3vh;\n}\n\n.add-task-pop-up-form select{\n    font-size: clamp(0.5rem, 1.5vw, 1.5rem);\n    font-family: var(--main-font);\n    margin-bottom: 2.8vh;\n    padding: 0.5vh;\n}\n\n.add-task-pop-up-form textarea{\n    font-size: clamp(0.5rem, 1.5vw, 1.5rem);\n    font-family: var(--main-font);\n    margin-bottom: 2.3vh;\n    padding: 0.5vh;\n    min-height: 10vh;\n}\n\n.add-task-pop-up-btns-task{\n    display: flex;\n    gap: 1vw;\n    justify-content: space-around;\n}\n\n.add-task-pop-up-btns .pop-add-btn-task input[type="submit"],\n.add-task-pop-up-btns .pop-cancel-btn-task input[type="submit"] {\n    width: 100%;\n    padding: 0.5vw;\n}\n\n.pop-add-btn-task button{\n    background-color: var(--popup-save);\n    padding: 1vh 2vw;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: clamp(1rem, 1.3vw, 2rem);\n    font-family: var(--main-font);\n    box-shadow: 4px 4px 5px 0px var(--popup-save-shadow);\n}\n\n.pop-cancel-btn-task button{\n    background-color: var(--popup-cancel);\n    padding: 1vh 2vw;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: clamp(1rem, 1.3vw, 2rem);\n    font-family: var(--main-font);\n    box-shadow: 4px 4px 5px 0px var(--popup-cancel-shadow);\n}\n\n#add-task-pop-up::backdrop {\n    background-color: hsla(0, 0%, 0%, 0.4);\n}\n\n\n\n\n',""]);const d=i},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",a=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),a&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),a&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,a,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);a&&i[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,a=0;a<t.length;a++)if(t[a].identifier===n){e=a;break}return e}function a(n,a){for(var r={},i=[],d=0;d<n.length;d++){var s=n[d],c=a.base?s[0]+a.base:s[0],p=r[c]||0,l="".concat(c," ").concat(p);r[c]=p+1;var u=e(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var v=o(m,a);a.byIndex=d,t.splice(d,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var r=a(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var d=e(r[i]);t[d].references--}for(var s=a(n,o),c=0;c<r.length;c++){var p=e(r[c]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}r=s}}},659:n=>{var t={};n.exports=function(n,e){var a=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var a="";e.supports&&(a+="@supports (".concat(e.supports,") {")),e.media&&(a+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(a+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),a+=e.css,o&&(a+="}"),e.media&&(a+="}"),e.supports&&(a+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return n[a](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var a in t)e.o(t,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:t[a]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{class n{constructor(n){this.pageName=n,this.popUpTaskDialog=document.querySelector("#add-task-pop-up"),this.taskName=document.querySelector("#task-name"),this.taskDescription=document.querySelector("#task-desc"),this.taskDate=document.querySelector("#task-date"),this.saveTaskBtn=document.querySelector("#pop-up-save-task-btn"),this.cancelTaskBtn=document.querySelector("#pop-up-delete-task-btn"),this.taskPriority=document.querySelector("#task-priority"),this.saveTaskBtn.addEventListener("click",(n=>this.saveTask(n))),this.cancelTaskBtn.addEventListener("click",(n=>this.closeTaskDialog(n))),this.render()}render(){this.popUpTaskDialog.showModal()}saveTask(n){n.preventDefault(),""===this.taskName.value.trim()||this.createTaskCard()}createTaskCard(){document.querySelector(".tasks-display"),document.createElement("div").classList.add("task-card-container"),this.rightSideCard(),document.createElement("div").classList.add("task-card-left-side")}rightSideCard(){document.createElement("div").classList.add("task-card-right-side");const n=document.createElement("div");n.classList.add("task-priority-color-container");const t=this.taskPriority.value;n.style.backgroundColor="high"===t?"#f43f5e":"medium"===t?"#f59e0b":"#10b981"}}class t{constructor(n){this.pageTitleText=n,this.render()}createPageTitle(){const n=document.createElement("div");return n.classList.add("list-heading"),n.textContent=this.pageTitleText,n}createAddButton(){const n=document.createElement("button");return n.classList.add("add-task-btn"),n.textContent="Add Task",n.addEventListener("click",this.handleAddTaskClick.bind(this)),n}createButtonContainers(){const n=document.createElement("div");n.classList.add("add-task-button");const t=this.createAddButton();return n.appendChild(t),n}createHeader(){const n=document.createElement("div");n.classList.add("list-heading-and-button");const t=this.createPageTitle(),e=this.createButtonContainers();return n.appendChild(t),n.appendChild(e),n}render(){const n=document.querySelector(".main-list-container");n.innerHTML="";const t=this.createHeader();n.appendChild(t)}handleAddTaskClick(t){t.target.style.boxShadow="none",setTimeout((()=>{t.target.style.boxShadow=" 4px 4px 5px 0px rgb(173, 186, 198)"}),200),new n(this.pageTitleText)}}var a=e(72),o=e.n(a),r=e(825),i=e.n(r),d=e(659),s=e.n(d),c=e(56),p=e.n(c),l=e(540),u=e.n(l),m=e(113),v=e.n(m),f=e(208),h={};h.styleTagTransform=v(),h.setAttributes=p(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),o()(f.A,h),f.A&&f.A.locals&&f.A.locals;class b{constructor(n){this.pageTitle=n,this.render()}createPageTitle(){const n=document.createElement("div");return n.classList.add("list-heading"),n.textContent=this.pageTitle,n}createHeader(){const n=document.createElement("div");n.classList.add("list-heading-and-button");const t=this.createPageTitle();return n.appendChild(t),n}render(){const n=document.querySelector(".main-list-container");n.innerHTML="";const t=this.createHeader();n.appendChild(t)}}class g{constructor(){this.popUpDialog=document.querySelector("#add-project-pop-up"),this.projectName=document.querySelector("#project-name"),this.saveBtn=document.querySelector("#pop-up-save"),this.cancelBtn=document.querySelector("#pop-up-delete"),this.saveBtn.addEventListener("click",(n=>this.saveProject(n))),this.cancelBtn.addEventListener("click",(n=>this.closeDialog(n))),this.render()}render(){this.popUpDialog.showModal()}closeDialog(n){n.preventDefault(),this.projectName.value="",this.popUpDialog.close()}saveProject(n){n.preventDefault(),""===this.projectName.value.trim()?this.alertLog("Please enter a project name"):this.addToProjects()}alertLog(n){console.log(n)}addToProjects(){this.projectUnorderedList=document.querySelector(".second-set-container-ul"),this.listElement=document.createElement("li"),this.listElement.appendChild(document.createTextNode(this.projectName.value)),this.listElement.classList.add("nav-item"),this.projectUnorderedList.appendChild(this.listElement),this.getProjectUI(),this.projectName.value="",this.popUpDialog.close()}getProjectUI(){this.projectItems=document.querySelectorAll(".nav-item"),this.projectItems.forEach((n=>{n.addEventListener("click",(function(){const e=n.textContent;new t(e)}))}))}}let y=document.querySelector(".add-project-btn"),x=document.querySelectorAll(".nav-item"),k=document.querySelectorAll(".nav-item-list");y.addEventListener("click",(()=>{console.log("Button clicked"),y.style.boxShadow="none",setTimeout((()=>{y.style.boxShadow=" 4px 4px 5px 0px rgb(173, 186, 198)"}),200),new g})),x.forEach((n=>{n.addEventListener("click",(function(){const e=n.textContent;console.log(e),new t(e)}))})),k.forEach((n=>{n.addEventListener("click",(function(){const t=n.textContent;console.log(t),new b(t)}))}))})()})();