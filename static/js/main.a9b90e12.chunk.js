(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(2),r=s.n(c),i=s(5),a=s.n(i),l=(s(12),s(13),s(14),s(6)),o=s.n(l),n=s(3),j=s(0);function d(){return Object(c.useEffect)((function(){var e=document.querySelector(".nav-gauche"),t=document.querySelector("h1"),s=document.querySelectorAll(".btn-acc"),c=document.querySelectorAll(".media"),r=document.querySelector(".btn-rond"),i=n.a.timeline({paused:!0});i.to(e,{left:"0px",ease:"power3.easeOut",duration:.6}).from(t,{y:-50,opacity:0,ease:"power3.easeOut",duration:.4}).staggerFrom(s,1,{opacity:0},.2,"-=0.30").staggerFrom(c,1,{opacity:0},.2,"-=0.75").from(r,{y:-50,opacity:0,ease:"power3.easeOut",duration:.4},"-=1"),window.addEventListener("load",(function(){i.play()}))}),[]),Object(j.jsxs)("section",{className:"accueil",id:"accueil",children:[Object(j.jsx)("h1",{children:"Bienvenue sur mon portfolio"}),Object(j.jsx)(o.a,{options:{wrapperClassName:"txt-animation",cursorClassName:"cursor-animation"},onInit:function(e){e.pauseFor(1500).changeDelay(20).typeString("Moi c'est Stefan Llobera").pauseFor(300).typeString("<strong>, D\xe9veloppeur Full-Stack</strong> !").pauseFor(1e3).deleteChars(13).typeString('<span style="color: #27ae60;"> CSS</span> !').pauseFor(1e3).deleteChars(5).typeString('<span style="color: #EA39ff;"> Spring Boot</span> !').pauseFor(1e3).deleteChars(14).typeString('<span style="color: midnightblue;"> React</span> !').pauseFor(1e3).deleteChars(8).typeString('<span style="color: red;"> Angular</span> !').pauseFor(1e3).deleteChars(10).typeString('<span style="color: #ff6910;"> JavaScript</span> !').start()}}),Object(j.jsx)("a",{href:"#port",className:"btn-acc btn-acc1",children:"Portfolio"}),Object(j.jsx)("a",{href:"#range",className:"btn-acc btn-acc2",children:"Exp\xe9riences"}),Object(j.jsxs)("div",{className:"medias",children:[Object(j.jsx)("a",{href:"https://www.linkedin.com/in/stefan-llobera-2192ab178/",target:"blank",children:Object(j.jsx)("div",{className:"media media2",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/linkedin.svg",alt:"linkedin icone",className:"icone-medias"})})}),Object(j.jsx)("a",{href:"https://github.com/bcgetpause",target:"blank",children:Object(j.jsx)("div",{className:"media media1",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/github.svg",alt:"github icone",className:"icone-medias"})})}),Object(j.jsx)("a",{href:"https://codepen.io/bcgetpause",target:"blank",children:Object(j.jsx)("div",{className:"media media2",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/codepen.svg",alt:"codepen icone",className:"icone-medias"})})})]}),Object(j.jsx)("a",{href:"#pres",children:Object(j.jsx)("div",{className:"btn-rond",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/arrowDown.svg",alt:"logo fleche bas",className:"logo-btn-rond-acc"})})})]})}s(16);function m(){Object(c.useEffect)((function(){for(var e=document.querySelectorAll("input"),t=0;t<e.length;t++){e[t].addEventListener("input",(function(e){""!==e.target.value?e.target.parentNode.classList.add("animation"):""===e.target.value&&e.target.parentNode.classList.remove("animation")}))}n.a.timeline({scrollTrigger:{trigger:".section-contact",start:"top center",toggleActions:"play none none reverse"}}).from(".section-contact",{opacity:0})}),[]);return Object(j.jsxs)("section",{className:"section-contact",id:"contact",children:[Object(j.jsxs)("h2",{children:[Object(j.jsx)("strong",{children:"Rentrons"})," en Contact"]}),Object(j.jsx)("div",{className:"container-form",children:Object(j.jsxs)("form",{className:"form-bloc",onSubmit:function(e){e.preventDefault()},children:[Object(j.jsxs)("div",{className:"form-groupe",children:[Object(j.jsx)("label",{htmlFor:"prenom",children:"Pr\xe9nom"}),Object(j.jsx)("input",{type:"text",required:!0,maxLength:"16",id:"prenom"})]}),Object(j.jsxs)("div",{className:"form-groupe",children:[Object(j.jsx)("label",{htmlFor:"nom",children:"Nom"}),Object(j.jsx)("input",{type:"text",required:!0,maxLength:"16",id:"nom"})]}),Object(j.jsx)("div",{className:"form-groupe",children:Object(j.jsx)("textarea",{id:"txt",placeholder:"Votre message",required:!0})}),Object(j.jsx)("div",{className:"form-groupe",children:Object(j.jsx)("button",{onClick:function(){var e=document.querySelector("input#prenom"),t=document.querySelector("input#nom"),s=document.querySelector("textarea#txt");if(e&&t&&s&&""!==e.value&&""!==t.value&&""!==s.value){var c=encodeURI("mailto:stefan.llobera@gmail.com?subject=Contact de "+e.value+" "+t.value+"&body="+s.value);window.location.href=c}},className:"button-sub",children:"ENVOYER"})})]})})]})}s(17);function u(){return Object(c.useEffect)((function(){n.a.timeline({scrollTrigger:{trigger:".travail-exp",start:"top center"}}).from(".travail-exp",{opacity:0})}),[]),Object(j.jsxs)("section",{className:"travail-exp",id:"exp",children:[Object(j.jsx)("h2",{className:"titre-travail-exp",children:"Mes exp\xe9riences"}),Object(j.jsxs)("div",{className:"cont-exp-travail",children:[Object(j.jsxs)("div",{className:"barre-verticale",children:[Object(j.jsx)("div",{className:"boule-ico",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/google.svg",alt:"icone gauche"})}),Object(j.jsx)("div",{className:"boule-ico",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/instagram.svg",alt:"icone gauche"})}),Object(j.jsx)("div",{className:"boule-ico",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/amazon.svg",alt:"icone gauche"})}),Object(j.jsx)("div",{className:"boule-ico",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/apple.svg",alt:"icone gauche"})}),Object(j.jsx)("div",{className:"boule-ico",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/plane.svg",className:"avion",alt:"icone gauche"})})]}),Object(j.jsxs)("div",{className:"flex-cont-bloc-exp",children:[Object(j.jsx)("div",{className:"bloc bloc1",children:Object(j.jsxs)("div",{className:"contenu-bloc",children:[Object(j.jsx)("p",{className:"titre-section-bloc",children:"Google, 2019"}),Object(j.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In perferendis dignissimos doloribus quaerat corrupti facere ratione modi vel. Voluptatem minima facilis eaque eum quia voluptatibus dolorem minus incidunt repellendus culpa?"})]})}),Object(j.jsx)("div",{className:"bloc bloc2",children:Object(j.jsxs)("div",{className:"contenu-bloc",children:[Object(j.jsx)("p",{className:"titre-section-bloc",children:"Instagram, 2017-2018"}),Object(j.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?"})]})}),Object(j.jsx)("div",{className:"bloc bloc3",children:Object(j.jsxs)("div",{className:"contenu-bloc",children:[Object(j.jsx)("p",{className:"titre-section-bloc",children:"Amazon, 2015-2016"}),Object(j.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?"})]})}),Object(j.jsx)("div",{className:"bloc bloc4",children:Object(j.jsxs)("div",{className:"contenu-bloc",children:[Object(j.jsx)("p",{className:"titre-section-bloc",children:"Apple, 2012-2014"}),Object(j.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?"})]})})]})]})]})}s(18);function b(){return Object(c.useEffect)((function(){var e=document.querySelector(".btn-rond-menu"),t=document.querySelector(".nav-gauche"),s=document.querySelectorAll(".nav-menu-item"),c=document.querySelector(".cont-ligne");e.addEventListener("click",(function(){c.classList.toggle("active"),t.classList.toggle("menu-visible")})),window.matchMedia("(max-width: 1300px)")&&s.forEach((function(e){e.addEventListener("click",(function(){t.classList.toggle("menu-visible"),c.classList.toggle("active")}))}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"btn-rond-menu",children:Object(j.jsx)("div",{className:"cont-ligne",children:Object(j.jsx)("div",{className:"ligne-unique"})})}),Object(j.jsxs)("nav",{className:"nav-gauche",children:[Object(j.jsx)("div",{className:"blocs-menu",children:Object(j.jsx)("div",{className:"cercle-portrait",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/reborn-sawada.jpg",alt:"portrait img"})})}),Object(j.jsx)("div",{className:"blocs-menu",children:Object(j.jsx)("span",{className:"nav-menu-item",children:Object(j.jsx)("a",{href:"#accueil",children:"Accueil"})})}),Object(j.jsx)("div",{className:"blocs-menu",children:Object(j.jsx)("span",{className:"nav-menu-item",children:Object(j.jsx)("a",{href:"#pres",children:"Pr\xe9sentation"})})}),Object(j.jsx)("div",{className:"blocs-menu",children:Object(j.jsx)("span",{className:"nav-menu-item",children:Object(j.jsx)("a",{href:"#port",children:"Portfolio"})})}),Object(j.jsx)("div",{className:"blocs-menu",children:Object(j.jsx)("span",{className:"nav-menu-item",children:Object(j.jsx)("a",{href:"#range",children:"Comp\xe9tences"})})}),Object(j.jsx)("div",{className:"blocs-menu",children:Object(j.jsx)("span",{className:"nav-menu-item",children:Object(j.jsx)("a",{href:"#contact",children:"Contact"})})}),Object(j.jsx)("div",{className:"blocs-menu",children:Object(j.jsx)("div",{className:"logo-cercle",children:Object(j.jsx)("a",{href:"#contact",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/contact.svg",alt:"logo contact"})})})})]})]})}s(19);function p(){return Object(j.jsxs)("div",{className:"section-parallax",children:[Object(j.jsx)("p",{className:"txt-par",children:"752 tasses de caf\xe9"}),Object(j.jsx)("p",{className:"txt-par",children:"86 projets"}),Object(j.jsx)("p",{className:"txt-par",children:"38 clients"})]})}s(20);var h=s(1);function x(){return Object(c.useEffect)((function(){document.querySelector(".portfolio");var e=document.querySelector(".titre-port"),t=document.querySelectorAll(".vague1");new h.c({scrollTrigger:{trigger:".portfolio",start:"top center",toggleActions:"play none none reverse"}}).from(e,{y:-50,opacity:0,duration:.5}).staggerFrom(t,1,{opacity:0},.2,"-=0.5");var s=document.querySelectorAll(".vague2");new h.c({scrollTrigger:{markers:!1,trigger:t,start:"top center"}}).staggerFrom(s,1,{opacity:0},.2,"-=0.5");var c=document.querySelectorAll(".vague3");new h.c({scrollTrigger:{markers:!1,trigger:s,start:"top center"}}).staggerFrom(c,1,{opacity:0},.2,"-=0.5")}),[]),Object(j.jsxs)("section",{className:"portfolio",id:"port",children:[Object(j.jsx)("h2",{className:"titre-port",children:"Mon Portfolio"}),Object(j.jsxs)("div",{className:"cont-portfolio",children:[Object(j.jsxs)("div",{className:"item vague1",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/bootstrap.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague1",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/console.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague1",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/animcss.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague2",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/bootstrapsite.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague2",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/flex.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague2",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/d3.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague3",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/Menus.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague3",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/projetsCars.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague3",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/form.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]})]})]})}s(21);function g(){return Object(c.useEffect)((function(){var e=document.querySelector(".presentation"),t=document.querySelector(".titre-pres"),s=document.querySelector(".pres-gauche"),c=document.querySelectorAll(".item-liste");new h.c({scrollTrigger:{trigger:e,start:"top center"}}).from(t,{y:-200,opacity:0,duration:.6}).from(s,{y:-20,opacity:0,duration:.6},"-=0.5").staggerFrom(c,1,{opacity:0},.2,"-=0.5")}),[]),Object(j.jsxs)("section",{className:"presentation",id:"pres",children:[Object(j.jsx)("h2",{className:"titre-pres",children:"Lorem ipsum dolor sit amet."}),Object(j.jsxs)("div",{className:"container-presentation",children:[Object(j.jsx)("div",{className:"fond-forme"}),Object(j.jsxs)("div",{className:"pres-gauche",children:[Object(j.jsx)("h3",{children:"Laborum cumque aliquid ut pariatur, natus maxime."}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos quisquam rerum aliquam quasi vitae nisi expedita debitis cupiditate asperiores optio eveniet labore, vel beatae!"}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere illum ullam exercitationem praesentium veniam?"})]}),Object(j.jsx)("div",{className:"pres-droite",children:Object(j.jsxs)("ul",{className:"liste-presentation",children:[Object(j.jsxs)("li",{className:"item-liste i1",children:[Object(j.jsx)("span",{className:"chiffre-style",children:"1."}),Object(j.jsx)("p",{className:"txt-liste",children:"UX Design expert"})]}),Object(j.jsxs)("li",{className:"item-liste i2",children:[Object(j.jsx)("span",{className:"chiffre-style",children:"2."}),Object(j.jsx)("p",{className:"txt-liste",children:"Sp\xe9cialiste UI"})]}),Object(j.jsxs)("li",{className:"item-liste i3",children:[Object(j.jsx)("span",{className:"chiffre-style",children:"3."}),Object(j.jsx)("p",{className:"txt-liste",children:"D\xe9veloppeur Back-end"})]}),Object(j.jsxs)("li",{className:"item-liste i4",children:[Object(j.jsx)("span",{className:"chiffre-style",children:"4."}),Object(j.jsx)("p",{className:"txt-liste",children:"D\xe9veloppeur Front-End"})]}),Object(j.jsxs)("li",{className:"item-liste i5",children:[Object(j.jsx)("span",{className:"chiffre-style",children:"5."}),Object(j.jsx)("p",{className:"txt-liste",children:"D\xe9veloppeur Full-Stack"})]})]})})]})]})}s(22);function O(){return Object(c.useEffect)((function(){var e=document.querySelector(".section-range"),t=document.querySelector(".titre-exp"),s=document.querySelectorAll(".label-skill"),c=document.querySelectorAll(".number-skill"),r=document.querySelectorAll(".barre-skill"),i=document.querySelectorAll(".barre-grises");new h.c({scrollTrigger:{trigger:e,start:"top center",toggleActions:"play none none reverse"}}).from(t,{opacity:0,duration:.6}).staggerFrom(s,.5,{y:-50,opacity:0},.1,"-=0.5").staggerFrom(c,.5,{y:-10,opacity:0},.1,"-=1").staggerFrom(i,.5,{width:0},.1,"-=1").staggerFrom(r,.5,{width:0},.1,"-=0.5")}),[]),Object(j.jsxs)("section",{className:"section-range",id:"range",children:[Object(j.jsx)("h2",{className:"titre-exp",children:"Mes comp\xe9tences"}),Object(j.jsxs)("div",{className:"grille-skill",children:[Object(j.jsxs)("div",{className:"range-cont",children:[Object(j.jsx)("p",{className:"label-skill",children:"JavaScript"}),Object(j.jsx)("p",{className:"number-skill",children:"90%"}),Object(j.jsx)("div",{className:"barre-skill b1"}),Object(j.jsx)("div",{className:"barre-grises"})]}),Object(j.jsxs)("div",{className:"range-cont",children:[Object(j.jsx)("p",{className:"label-skill",children:"SEO"}),Object(j.jsx)("p",{className:"number-skill",children:"75%"}),Object(j.jsx)("div",{className:"barre-skill b2"}),Object(j.jsx)("div",{className:"barre-grises"})]}),Object(j.jsxs)("div",{className:"range-cont",children:[Object(j.jsx)("p",{className:"label-skill",children:"UI / UX"}),Object(j.jsx)("p",{className:"number-skill",children:"70%"}),Object(j.jsx)("div",{className:"barre-skill b3"}),Object(j.jsx)("div",{className:"barre-grises"})]}),Object(j.jsxs)("div",{className:"range-cont",children:[Object(j.jsx)("p",{className:"label-skill",children:"Node JS"}),Object(j.jsx)("p",{className:"number-skill",children:"80%"}),Object(j.jsx)("div",{className:"barre-skill b4"}),Object(j.jsx)("div",{className:"barre-grises"})]}),Object(j.jsxs)("div",{className:"range-cont",children:[Object(j.jsx)("p",{className:"label-skill",children:"Wordpress"}),Object(j.jsx)("p",{className:"number-skill",children:"70%"}),Object(j.jsx)("div",{className:"barre-skill b5"}),Object(j.jsx)("div",{className:"barre-grises"})]}),Object(j.jsxs)("div",{className:"range-cont",children:[Object(j.jsx)("p",{className:"label-skill",children:"React JS"}),Object(j.jsx)("p",{className:"number-skill",children:"80%"}),Object(j.jsx)("div",{className:"barre-skill b6"}),Object(j.jsx)("div",{className:"barre-grises"})]})]})]})}var v=s(7);var f=function(){return n.a.registerPlugin(v.a),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)(d,{}),Object(j.jsx)(g,{}),Object(j.jsx)(x,{}),Object(j.jsx)(O,{}),Object(j.jsx)(u,{}),Object(j.jsx)(p,{}),Object(j.jsx)(m,{})]}),Object(j.jsx)("footer",{children:"Tout Droits r\xe9serv\xe9s \xa9"})]})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),N()}],[[23,1,2]]]);
//# sourceMappingURL=main.a9b90e12.chunk.js.map