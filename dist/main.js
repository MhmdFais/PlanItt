(()=>{let e=document.querySelector(".add-project-btn"),t=document.querySelectorAll(".nav-item");e.addEventListener("click",(()=>{console.log("Button clicked"),e.style.boxShadow="none",setTimeout((()=>{e.style.boxShadow=" 4px 4px 5px 0px rgb(173, 186, 198)"}),200)})),t.forEach((e=>{e.addEventListener("click",(function(){const t=e.textContent;console.log(t)}))}))})();