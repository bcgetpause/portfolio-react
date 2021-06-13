(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var s=c(2),r=c.n(s),i=c(11),a=c.n(i),l=(c(23),c(24),c(25),c(12)),n=c.n(l),o=c(3),j=c(0);function d(){return Object(s.useEffect)((function(){var e=document.querySelector(".nav-gauche"),t=document.querySelector("h1"),c=document.querySelectorAll(".btn-acc"),s=document.querySelectorAll(".media"),r=document.querySelector(".btn-rond"),i=o.a.timeline({paused:!0});i.to(e,{left:"0px",ease:"power3.easeOut",duration:.6}).from(t,{y:-50,opacity:0,ease:"power3.easeOut",duration:.4}).staggerFrom(c,1,{opacity:0},.2,"-=0.30").staggerFrom(s,1,{opacity:0},.2,"-=0.75").from(r,{y:-50,opacity:0,ease:"power3.easeOut",duration:.4},"-=1"),window.addEventListener("load",(function(){i.play()}))}),[]),Object(j.jsxs)("section",{className:"accueil",id:"accueil",children:[Object(j.jsx)("h1",{children:"Bienvenue sur mon portfolio"}),Object(j.jsx)(n.a,{options:{wrapperClassName:"txt-animation",cursorClassName:"cursor-animation"},onInit:function(e){e.pauseFor(1500).changeDelay(20).typeString("Moi c'est Stefan Llobera").pauseFor(300).typeString("<strong>, D\xe9veloppeur Full-Stack</strong> !").pauseFor(1e3).deleteChars(13).typeString('<span style="color: #27ae60;"> CSS</span> !').pauseFor(1e3).deleteChars(5).typeString('<span style="color: #EA39ff;"> Spring Boot</span> !').pauseFor(1e3).deleteChars(14).typeString('<span style="color: midnightblue;"> React</span> !').pauseFor(1e3).deleteChars(8).typeString('<span style="color: red;"> Angular</span> !').pauseFor(1e3).deleteChars(10).typeString('<span style="color: #ff6910;"> JavaScript</span> !').start()}}),Object(j.jsx)("a",{href:"#range",className:"btn-acc btn-acc1",children:"Exp\xe9riences"}),Object(j.jsxs)("div",{className:"medias",children:[Object(j.jsx)("a",{href:"https://www.linkedin.com/in/stefan-llobera-2192ab178/",target:"blank",children:Object(j.jsx)("div",{className:"media media2",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/linkedin.svg",alt:"linkedin icone",className:"icone-medias"})})}),Object(j.jsx)("a",{href:"https://github.com/bcgetpause",target:"blank",children:Object(j.jsx)("div",{className:"media media1",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/github.svg",alt:"github icone",className:"icone-medias"})})}),Object(j.jsx)("a",{href:"https://codepen.io/bcgetpause",target:"blank",children:Object(j.jsx)("div",{className:"media media2",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/codepen.svg",alt:"codepen icone",className:"icone-medias"})})})]}),Object(j.jsx)("a",{href:"#pres",children:Object(j.jsx)("div",{className:"btn-rond",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/arrowDown.svg",alt:"logo fleche bas",className:"logo-btn-rond-acc"})})})]})}c(27);function m(){Object(s.useEffect)((function(){for(var e=document.querySelectorAll("input"),t=0;t<e.length;t++){e[t].addEventListener("input",(function(e){""!==e.target.value?e.target.parentNode.classList.add("animation"):""===e.target.value&&e.target.parentNode.classList.remove("animation")}))}o.a.timeline({scrollTrigger:{trigger:".section-contact",start:"top center",toggleActions:"play none none reverse"}}).from(".section-contact",{opacity:0})}),[]);return Object(j.jsxs)("section",{className:"section-contact",id:"contact",children:[Object(j.jsxs)("h2",{children:[Object(j.jsx)("strong",{children:"Rentrons"})," en Contact"]}),Object(j.jsx)("div",{className:"container-form",children:Object(j.jsxs)("form",{className:"form-bloc",onSubmit:function(e){e.preventDefault()},children:[Object(j.jsxs)("div",{className:"form-groupe",children:[Object(j.jsx)("label",{htmlFor:"prenom",children:"Pr\xe9nom"}),Object(j.jsx)("input",{type:"text",required:!0,maxLength:"16",id:"prenom"})]}),Object(j.jsxs)("div",{className:"form-groupe",children:[Object(j.jsx)("label",{htmlFor:"nom",children:"Nom"}),Object(j.jsx)("input",{type:"text",required:!0,maxLength:"16",id:"nom"})]}),Object(j.jsx)("div",{className:"form-groupe",children:Object(j.jsx)("textarea",{id:"txt",placeholder:"Votre message",required:!0})}),Object(j.jsx)("div",{className:"form-groupe",children:Object(j.jsx)("button",{onClick:function(){var e=document.querySelector("input#prenom"),t=document.querySelector("input#nom"),c=document.querySelector("textarea#txt");if(e&&t&&c&&""!==e.value&&""!==t.value&&""!==c.value){var s=encodeURI("mailto:stefan.llobera@gmail.com?subject=Contact de "+e.value+" "+t.value+"&body="+c.value);window.location.href=s}},className:"button-sub",children:"ENVOYER"})})]})})]})}c(28);function b(){return Object(s.useEffect)((function(){o.a.timeline({scrollTrigger:{trigger:".travail-exp",start:"top center"}}).from(".travail-exp",{opacity:0})}),[]),Object(j.jsxs)("section",{className:"travail-exp",id:"exp",children:[Object(j.jsx)("h2",{className:"titre-travail-exp",children:"Mes exp\xe9riences"}),Object(j.jsxs)("div",{className:"cont-exp-travail",children:[Object(j.jsxs)("div",{className:"barre-verticale",children:[Object(j.jsx)("div",{className:"boule-ico",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/google.svg",alt:"icone gauche"})}),Object(j.jsx)("div",{className:"boule-ico",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/instagram.svg",alt:"icone gauche"})}),Object(j.jsx)("div",{className:"boule-ico",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/amazon.svg",alt:"icone gauche"})}),Object(j.jsx)("div",{className:"boule-ico",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/apple.svg",alt:"icone gauche"})}),Object(j.jsx)("div",{className:"boule-ico",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/plane.svg",className:"avion",alt:"icone gauche"})})]}),Object(j.jsxs)("div",{className:"flex-cont-bloc-exp",children:[Object(j.jsx)("div",{className:"bloc bloc1",children:Object(j.jsxs)("div",{className:"contenu-bloc",children:[Object(j.jsx)("p",{className:"titre-section-bloc",children:"Google, 2019"}),Object(j.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In perferendis dignissimos doloribus quaerat corrupti facere ratione modi vel. Voluptatem minima facilis eaque eum quia voluptatibus dolorem minus incidunt repellendus culpa?"})]})}),Object(j.jsx)("div",{className:"bloc bloc2",children:Object(j.jsxs)("div",{className:"contenu-bloc",children:[Object(j.jsx)("p",{className:"titre-section-bloc",children:"Instagram, 2017-2018"}),Object(j.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?"})]})}),Object(j.jsx)("div",{className:"bloc bloc3",children:Object(j.jsxs)("div",{className:"contenu-bloc",children:[Object(j.jsx)("p",{className:"titre-section-bloc",children:"Amazon, 2015-2016"}),Object(j.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?"})]})}),Object(j.jsx)("div",{className:"bloc bloc4",children:Object(j.jsxs)("div",{className:"contenu-bloc",children:[Object(j.jsx)("p",{className:"titre-section-bloc",children:"Apple, 2012-2014"}),Object(j.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?"})]})})]})]})]})}c(29);function u(){return Object(s.useEffect)((function(){var e=document.querySelector(".btn-rond-menu"),t=document.querySelector(".nav-gauche"),c=document.querySelectorAll(".nav-menu-item"),s=document.querySelector(".cont-ligne");e.addEventListener("click",(function(){s.classList.toggle("active"),t.classList.toggle("menu-visible")})),window.matchMedia("(max-width: 1300px)")&&c.forEach((function(e){e.addEventListener("click",(function(){t.classList.toggle("menu-visible"),s.classList.toggle("active")}))}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"btn-rond-menu",children:Object(j.jsx)("div",{className:"cont-ligne",children:Object(j.jsx)("div",{className:"ligne-unique"})})}),Object(j.jsxs)("nav",{className:"nav-gauche",children:[Object(j.jsx)("div",{className:"blocs-menu",children:Object(j.jsx)("div",{className:"cercle-portrait",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/reborn-sawada.jpg",alt:"portrait img"})})}),Object(j.jsx)("div",{className:"blocs-menu",children:Object(j.jsx)("span",{className:"nav-menu-item",children:Object(j.jsx)("a",{href:"#accueil",children:"Accueil"})})}),Object(j.jsx)("div",{className:"blocs-menu",children:Object(j.jsx)("span",{className:"nav-menu-item",children:Object(j.jsx)("a",{href:"#pres",children:"Pr\xe9sentation"})})}),Object(j.jsx)("div",{className:"blocs-menu",children:Object(j.jsx)("span",{className:"nav-menu-item",children:Object(j.jsx)("a",{href:"#range",children:"Comp\xe9tences"})})}),Object(j.jsx)("div",{className:"blocs-menu",children:Object(j.jsx)("span",{className:"nav-menu-item",children:Object(j.jsx)("a",{href:"#exp",children:"Exp\xe9riences"})})}),Object(j.jsx)("div",{className:"blocs-menu",children:Object(j.jsx)("div",{className:"logo-cercle",children:Object(j.jsx)("a",{href:"#contact",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/contact.svg",alt:"logo contact"})})})})]})]})}c(30);function p(){return Object(j.jsxs)("div",{className:"section-parallax",children:[Object(j.jsx)("p",{className:"txt-par",children:"752 tasses de caf\xe9"}),Object(j.jsx)("p",{className:"txt-par",children:"86 projets"}),Object(j.jsx)("p",{className:"txt-par",children:"38 clients"})]})}c(31);var h=c(1);function x(){return Object(s.useEffect)((function(){var e=document.querySelector(".portfolio"),t=document.querySelector(".titre-port"),c=document.querySelectorAll(".vague1");new h.c({scrollTrigger:{trigger:e,start:"top center",toggleActions:"play none none reverse"}}).from(t,{y:-50,opacity:0,duration:.5}).staggerFrom(c,1,{opacity:0},.2,"-=0.5");var s=document.querySelectorAll(".vague2");new h.c({scrollTrigger:{markers:!1,trigger:c,start:"top center"}}).staggerFrom(s,1,{opacity:0},.2,"-=0.5");var r=document.querySelectorAll(".vague3");new h.c({scrollTrigger:{markers:!1,trigger:s,start:"top center"}}).staggerFrom(r,1,{opacity:0},.2,"-=0.5")}),[]),Object(j.jsxs)("section",{className:"portfolio",id:"port",children:[Object(j.jsx)("h2",{className:"titre-port",children:"Mon Portfolio"}),Object(j.jsxs)("div",{className:"cont-portfolio",children:[Object(j.jsxs)("div",{className:"item vague1",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/bootstrap.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague1",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/console.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague1",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/animcss.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague2",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/bootstrapsite.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague2",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/flex.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague2",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/d3.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague3",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/Menus.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague3",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/projetsCars.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(j.jsxs)("div",{className:"item vague3",children:[Object(j.jsx)("div",{className:"cont-img-port",children:Object(j.jsx)("img",{src:"portfolio-react/ressources/form.jpg",alt:"img portfolio"})}),Object(j.jsx)("h3",{children:"Mon fabuleux projet"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(j.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]})]})]})}c(32);function O(){return Object(s.useEffect)((function(){var e=document.querySelector(".presentation"),t=document.querySelector(".titre-pres"),c=document.querySelector(".pres-gauche"),s=document.querySelectorAll(".item-liste");new h.c({scrollTrigger:{trigger:e,start:"top center"}}).from(t,{y:-200,opacity:0,duration:.6}).from(c,{y:-20,opacity:0,duration:.6},"-=0.5").staggerFrom(s,1,{opacity:0},.2,"-=0.5")}),[]),Object(j.jsxs)("section",{className:"presentation",id:"pres",children:[Object(j.jsx)("h2",{className:"titre-pres",children:"Parcours personnel"}),Object(j.jsxs)("div",{className:"container-presentation",children:[Object(j.jsx)("div",{className:"fond-forme"}),Object(j.jsxs)("div",{className:"pres-gauche",children:[Object(j.jsx)("h3",{children:"Cursus scolaire"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("ul",{className:"liste-presentation",children:[Object(j.jsxs)("li",{className:"item-liste i1",children:[Object(j.jsx)("span",{className:"chiffre-style",children:"1. "}),Object(j.jsx)("p",{className:"txt-liste",children:"Licence et Master"}),Object(j.jsxs)("div",{className:"ntie-hover",children:[Object(j.jsx)("p",{className:"txt-liste",children:"\xa0NTIE\xa0"}),Object(j.jsx)("span",{className:"ntie-tooltip",children:"Nouvelles Technologies Informatiques pour l'Entreprise"})]}),Object(j.jsx)("p",{className:"txt-liste",children:"en alternance (2007-2010)"})]}),Object(j.jsxs)("li",{className:"item-liste i2",children:[Object(j.jsx)("span",{className:"chiffre-style",children:"2. "}),Object(j.jsx)("p",{className:"txt-liste",children:"DUT Informatique (2005-2007)"})]}),Object(j.jsxs)("li",{className:"item-liste i3",children:[Object(j.jsx)("span",{className:"chiffre-style",children:"3. "}),Object(j.jsx)("p",{className:"txt-liste",children:"Baccalaur\xe9at scientifique (2004-2005)"})]})]})]}),Object(j.jsxs)("div",{className:"pres-droite",children:[Object(j.jsx)("h3",{children:"Formations"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("ul",{className:"liste-presentation",children:[Object(j.jsxs)("li",{className:"item-liste i1",children:[Object(j.jsx)("span",{className:"chiffre-style",children:"1. "}),Object(j.jsx)("p",{className:"txt-liste",children:"D\xe9veloppement Front-End via la plateforme l'Ecole du Web (2020)"})]}),Object(j.jsxs)("li",{className:"item-liste i2",children:[Object(j.jsx)("span",{className:"chiffre-style",children:"2. "}),Object(j.jsx)("p",{className:"txt-liste",children:"ReactJS via l'organisme Ib-formation (2020)"})]}),Object(j.jsxs)("li",{className:"item-liste i3",children:[Object(j.jsx)("span",{className:"chiffre-style",children:"3. "}),Object(j.jsx)("p",{className:"txt-liste",children:"Docker/Kubernetes via l'organisme Themanis (2020)"})]}),Object(j.jsxs)("li",{className:"item-liste i4",children:[Object(j.jsx)("span",{className:"chiffre-style",children:"4. "}),Object(j.jsx)("p",{className:"txt-liste",children:"Angular sur la plateforme Pluralsight (2019)"})]})]})]})]})]})}var g,v,f,N=c(5),y=(c(33),c(6)),S=c(9),k=c(18),w=(c(34),c(13)),q=function(e){var t=e.children,c=e.width;return Object(j.jsx)("div",{className:"carousel-item",style:{width:c},children:t})};function L(e){var t=e.children,c=Object(s.useState)(0),i=Object(k.a)(c,2),a=i[0],l=i[1],n=Object(w.useSwipeable)({onSwipedLeft:function(){return o(a+1)},onSwipedRight:function(){return o(a-1)},preventDefaultTouchmoveEvent:!0,trackMouse:!0}),o=function(e){e<0?e=0:e>=r.a.Children.count(t)&&(e=r.a.Children.count(t)-1),l(e)};return Object(j.jsxs)("div",Object(S.a)(Object(S.a)({},n),{},{className:"carousel",children:[Object(j.jsx)("h2",{className:"titre-exp",children:"Mes comp\xe9tences"}),Object(j.jsx)("div",{className:"inner",style:{transform:"translateX(-".concat(100*a,"%)")},children:r.a.Children.map(t,(function(e,t){return r.a.cloneElement(e,{width:"100%"})}))}),Object(j.jsxs)("div",{className:"indicators",children:[Object(j.jsx)("button",{onClick:function(){o(a-1)},children:"Prev"}),r.a.Children.map(t,(function(e,t){return Object(j.jsx)("button",{className:"".concat(t===a?"active":""),onClick:function(){o(t)},children:t+1})})),Object(j.jsx)("button",{onClick:function(){o(a+1)},children:"Next"})]})]}))}y.a.div(g||(g=Object(N.a)(["\n  display: flex;\n  flex: row;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  width: 375px;\n  overflow-x: scroll;\n"]))),y.a.div(v||(v=Object(N.a)(["\n  overflow-x: hidden;\n  max-width: 100%;\n"]))),y.a.div(f||(f=Object(N.a)(["\n  overflow-x: hidden;\n  max-width: 100%;\n"])));function F(){Object(s.useEffect)((function(){var e=document.querySelector(".section-range"),t=document.querySelector(".titre-exp"),c=document.querySelectorAll(".label-skill"),s=document.querySelectorAll(".number-skill"),r=document.querySelectorAll(".barre-skill"),i=document.querySelectorAll(".barre-grises");new h.c({scrollTrigger:{trigger:e,start:"top center",toggleActions:"play none none reverse"}}).from(t,{opacity:0,duration:.6}).staggerFrom(c,.5,{y:-50,opacity:0},.1,"-=0.5").staggerFrom(s,.5,{y:-10,opacity:0},.1,"-=1").staggerFrom(i,.5,{width:0},.1,"-=1").staggerFrom(r,.5,{width:0},.1,"-=0.5")}),[]);var e=Object(j.jsxs)("section",{className:"section-range",id:"range",children:[Object(j.jsx)("h3",{className:"titre-section",children:"Langages"}),Object(j.jsxs)("div",{className:"grille-skill",children:[Object(j.jsxs)("div",{className:"range-cont",children:[Object(j.jsx)("p",{className:"label-skill",children:"JavaScript"}),Object(j.jsx)("p",{className:"number-skill",children:"90%"}),Object(j.jsx)("div",{className:"barre-skill b1"}),Object(j.jsx)("div",{className:"barre-grises"})]}),Object(j.jsxs)("div",{className:"range-cont",children:[Object(j.jsx)("p",{className:"label-skill",children:"SEO"}),Object(j.jsx)("p",{className:"number-skill",children:"75%"}),Object(j.jsx)("div",{className:"barre-skill b2"}),Object(j.jsx)("div",{className:"barre-grises"})]}),Object(j.jsxs)("div",{className:"range-cont",children:[Object(j.jsx)("p",{className:"label-skill",children:"UI / UX"}),Object(j.jsx)("p",{className:"number-skill",children:"70%"}),Object(j.jsx)("div",{className:"barre-skill b3"}),Object(j.jsx)("div",{className:"barre-grises"})]}),Object(j.jsxs)("div",{className:"range-cont",children:[Object(j.jsx)("p",{className:"label-skill",children:"Node JS"}),Object(j.jsx)("p",{className:"number-skill",children:"80%"}),Object(j.jsx)("div",{className:"barre-skill b4"}),Object(j.jsx)("div",{className:"barre-grises"})]}),Object(j.jsxs)("div",{className:"range-cont",children:[Object(j.jsx)("p",{className:"label-skill",children:"Wordpress"}),Object(j.jsx)("p",{className:"number-skill",children:"70%"}),Object(j.jsx)("div",{className:"barre-skill b5"}),Object(j.jsx)("div",{className:"barre-grises"})]}),Object(j.jsxs)("div",{className:"range-cont",children:[Object(j.jsx)("p",{className:"label-skill",children:"React JS"}),Object(j.jsx)("p",{className:"number-skill",children:"80%"}),Object(j.jsx)("div",{className:"barre-skill b6"}),Object(j.jsx)("div",{className:"barre-grises"})]})]})]});return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(L,{children:[Object(j.jsx)(q,{children:e}),Object(j.jsx)(q,{children:"Frameworks / Librairies"}),Object(j.jsx)(q,{children:"Logiciels / IDEs"}),Object(j.jsx)(q,{children:"Autres"})]})})}var E=c(17);var C=function(){return o.a.registerPlugin(E.a),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{}),Object(j.jsx)(d,{}),Object(j.jsx)(O,{}),Object(j.jsx)(x,{}),Object(j.jsx)(F,{}),Object(j.jsx)(b,{}),Object(j.jsx)(p,{}),Object(j.jsx)(m,{})]}),Object(j.jsx)("footer",{children:"Tout Droits r\xe9serv\xe9s \xa9"})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),r(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),A()}},[[37,1,2]]]);
//# sourceMappingURL=main.768cadc6.chunk.js.map