let burgerMenu=document.querySelector(".header-nav-burger");burgerMenu.addEventListener("click",(function(){burgerMenu.classList.toggle("active"),document.querySelector(".header-nav-list").classList.toggle("active"),document.querySelector(".header").classList.toggle("active"),document.querySelector("body").classList.toggle("lock")}));let header=document.querySelector(".header"),headerOffset=header.getBoundingClientRect().top;function ibg(){let e=document.querySelectorAll(".ibg");if(e.length>0)for(let t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}window.onscroll=function(){window.pageYOffset>=5?header.classList.add("scroll"):header.classList.remove("scroll")},document.addEventListener("DOMContentLoaded",ibg());let animItems=document.querySelectorAll(".anim-item");if(animItems.length>0){function animOnScroll(){for(let e=0;e<animItems.length;e++){const t=animItems[e],n=t.offsetHeight,o=offset(t).top,r=4;let l=window.innerHeight-n/r;n>window.innerHeight&&(l=window.innerHeight-window.innerHeight/r),pageYOffset>o-l&&pageYOffset<o+n?t.classList.add("active"):t.classList.contains("anim-no-hide")||t.classList.remove("active")}}function offset(e){const t=e.getBoundingClientRect(),n=window.pageXoffSet||document.documentElement.scrollLetf,o=window.pageYoffSet||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+n}}window.addEventListener("scroll",animOnScroll),setTimeout(()=>{animOnScroll()},300)}let anchors=document.querySelectorAll(".anchor");if(anchors.length>=0)for(anchor of anchors)anchor.addEventListener("click",(function(){event.preventDefault();let e=anchor.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}));