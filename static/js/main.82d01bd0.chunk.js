(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,s,c){},function(e,s,c){},function(e,s,c){},,function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){"use strict";c.r(s);var a=c(2),t=c.n(a),l=c(6),i=c.n(l),r=(c(15),c(16),c(17),c.p+"static/media/linkedin.f4041044.svg"),n=c.p+"static/media/github.b0fe08fa.svg",j=c.p+"static/media/codepen.2b714d5e.svg",o=c.p+"static/media/arrowDown.78965d40.svg",b=c(7),d=c.n(b),m=c(3),x=c(0);function u(){return Object(a.useEffect)((function(){var e=document.querySelector(".nav-gauche"),s=document.querySelector("h1"),c=document.querySelectorAll(".btn-acc"),a=document.querySelectorAll(".media"),t=document.querySelector(".btn-rond"),l=m.a.timeline({paused:!0});l.to(e,{left:"0px",ease:"power3.easeOut",duration:.6}).from(s,{y:-50,opacity:0,ease:"power3.easeOut",duration:.4}).staggerFrom(c,1,{opacity:0},.2,"-=0.30").staggerFrom(a,1,{opacity:0},.2,"-=0.75").from(t,{y:-50,opacity:0,ease:"power3.easeOut",duration:.4},"-=1"),window.addEventListener("load",(function(){l.play()}))}),[]),Object(x.jsxs)("section",{className:"accueil",id:"accueil",children:[Object(x.jsx)("h1",{children:"Bienvenue sur mon portfolio"}),Object(x.jsx)(d.a,{options:{wrapperClassName:"txt-animation",cursorClassName:"cursor-animation"},onInit:function(e){e.pauseFor(1500).changeDelay(20).typeString("Moi c'est Stefan Llobera").pauseFor(300).typeString("<strong>, D\xe9veloppeur Full-Stack</strong> !").pauseFor(1e3).deleteChars(13).typeString('<span style="color: #27ae60;"> CSS</span> !').pauseFor(1e3).deleteChars(5).typeString('<span style="color: #EA39ff;"> Spring Boot</span> !').pauseFor(1e3).deleteChars(14).typeString('<span style="color: midnightblue;"> React</span> !').pauseFor(1e3).deleteChars(8).typeString('<span style="color: red;"> Angular</span> !').pauseFor(1e3).deleteChars(10).typeString('<span style="color: #ff6910;"> JavaScript</span> !').start()}}),Object(x.jsx)("a",{href:"#range",className:"btn-acc btn-acc1",children:"Exp\xe9riences"}),Object(x.jsxs)("div",{className:"medias",children:[Object(x.jsx)("a",{href:"https://www.linkedin.com/in/stefan-llobera-2192ab178/",target:"blank",children:Object(x.jsx)("div",{className:"media media2",children:Object(x.jsx)("img",{src:r,alt:"linkedin icone",className:"icone-medias"})})}),Object(x.jsx)("a",{href:"https://github.com/bcgetpause",target:"blank",children:Object(x.jsx)("div",{className:"media media1",children:Object(x.jsx)("img",{src:n,alt:"github icone",className:"icone-medias"})})}),Object(x.jsx)("a",{href:"https://codepen.io/bcgetpause",target:"blank",children:Object(x.jsx)("div",{className:"media media2",children:Object(x.jsx)("img",{src:j,alt:"codepen icone",className:"icone-medias"})})})]}),Object(x.jsx)("a",{href:"#pres",children:Object(x.jsx)("div",{className:"btn-rond",children:Object(x.jsx)("img",{src:o,alt:"logo fleche bas",className:"logo-btn-rond-acc"})})})]})}c(19);function h(){Object(a.useEffect)((function(){for(var e=document.querySelectorAll("input"),s=0;s<e.length;s++){e[s].addEventListener("input",(function(e){""!==e.target.value?e.target.parentNode.classList.add("animation"):""===e.target.value&&e.target.parentNode.classList.remove("animation")}))}m.a.timeline({scrollTrigger:{trigger:".section-contact",start:"top center",toggleActions:"play none none reverse"}}).from(".section-contact",{opacity:0})}),[]);return Object(x.jsxs)("section",{className:"section-contact",id:"contact",children:[Object(x.jsxs)("h2",{children:[Object(x.jsx)("strong",{children:"Rentrons"})," en Contact"]}),Object(x.jsx)("div",{className:"container-form",children:Object(x.jsxs)("form",{className:"form-bloc",onSubmit:function(e){e.preventDefault()},children:[Object(x.jsxs)("div",{className:"form-groupe",children:[Object(x.jsx)("label",{htmlFor:"prenom",children:"Pr\xe9nom"}),Object(x.jsx)("input",{type:"text",required:!0,maxLength:"16",id:"prenom"})]}),Object(x.jsxs)("div",{className:"form-groupe",children:[Object(x.jsx)("label",{htmlFor:"nom",children:"Nom"}),Object(x.jsx)("input",{type:"text",required:!0,maxLength:"16",id:"nom"})]}),Object(x.jsx)("div",{className:"form-groupe",children:Object(x.jsx)("textarea",{id:"txt",placeholder:"Votre message",required:!0})}),Object(x.jsx)("div",{className:"form-groupe",children:Object(x.jsx)("button",{onClick:function(){var e=document.querySelector("input#prenom"),s=document.querySelector("input#nom"),c=document.querySelector("textarea#txt");if(e&&s&&c&&""!==e.value&&""!==s.value&&""!==c.value){var a=encodeURI("mailto:stefan.llobera@gmail.com?subject=Contact de "+e.value+" "+s.value+"&body="+c.value);window.location.href=a}},className:"button-sub",children:"ENVOYER"})})]})})]})}c(20);var O=c.p+"static/media/google.77a59cd8.svg",p=c.p+"static/media/instagram.90a80cd5.svg",g=c.p+"static/media/amazon.7bcd9f37.svg",N=c.p+"static/media/apple.3e208bda.svg",v=c.p+"static/media/plane.a70df133.svg";function f(){return Object(a.useEffect)((function(){m.a.timeline({scrollTrigger:{trigger:".travail-exp",start:"top center"}}).from(".travail-exp",{opacity:0})}),[]),Object(x.jsxs)("section",{className:"travail-exp",id:"exp",children:[Object(x.jsx)("h2",{className:"titre-travail-exp",children:"Mes exp\xe9riences"}),Object(x.jsxs)("div",{className:"cont-exp-travail",children:[Object(x.jsxs)("div",{className:"barre-verticale",children:[Object(x.jsx)("div",{className:"boule-ico",children:Object(x.jsx)("img",{src:O,alt:"icone gauche"})}),Object(x.jsx)("div",{className:"boule-ico",children:Object(x.jsx)("img",{src:p,alt:"icone gauche"})}),Object(x.jsx)("div",{className:"boule-ico",children:Object(x.jsx)("img",{src:g,alt:"icone gauche"})}),Object(x.jsx)("div",{className:"boule-ico",children:Object(x.jsx)("img",{src:N,alt:"icone gauche"})}),Object(x.jsx)("div",{className:"boule-ico",children:Object(x.jsx)("img",{src:v,className:"avion",alt:"icone gauche"})})]}),Object(x.jsxs)("div",{className:"flex-cont-bloc-exp",children:[Object(x.jsx)("div",{className:"bloc bloc1",children:Object(x.jsxs)("div",{className:"contenu-bloc",children:[Object(x.jsx)("p",{className:"titre-section-bloc",children:"Google, 2019"}),Object(x.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In perferendis dignissimos doloribus quaerat corrupti facere ratione modi vel. Voluptatem minima facilis eaque eum quia voluptatibus dolorem minus incidunt repellendus culpa?"})]})}),Object(x.jsx)("div",{className:"bloc bloc2",children:Object(x.jsxs)("div",{className:"contenu-bloc",children:[Object(x.jsx)("p",{className:"titre-section-bloc",children:"Instagram, 2017-2018"}),Object(x.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?"})]})}),Object(x.jsx)("div",{className:"bloc bloc3",children:Object(x.jsxs)("div",{className:"contenu-bloc",children:[Object(x.jsx)("p",{className:"titre-section-bloc",children:"Amazon, 2015-2016"}),Object(x.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?"})]})}),Object(x.jsx)("div",{className:"bloc bloc4",children:Object(x.jsxs)("div",{className:"contenu-bloc",children:[Object(x.jsx)("p",{className:"titre-section-bloc",children:"Apple, 2012-2014"}),Object(x.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?"})]})})]})]})]})}c(21);var k=c.p+"static/media/reborn-sawada.cce247e2.jpg",y=c.p+"static/media/contact.2c18ff74.svg";function S(){return Object(a.useEffect)((function(){var e=document.querySelector(".btn-rond-menu"),s=document.querySelector(".nav-gauche"),c=document.querySelectorAll(".nav-menu-item"),a=document.querySelector(".cont-ligne");e.addEventListener("click",(function(){a.classList.toggle("active"),s.classList.toggle("menu-visible")})),window.matchMedia("(max-width: 1300px)")&&c.forEach((function(e){e.addEventListener("click",(function(){s.classList.toggle("menu-visible"),a.classList.toggle("active")}))}))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"btn-rond-menu",children:Object(x.jsx)("div",{className:"cont-ligne",children:Object(x.jsx)("div",{className:"ligne-unique"})})}),Object(x.jsxs)("nav",{className:"nav-gauche",children:[Object(x.jsx)("div",{className:"blocs-menu",children:Object(x.jsx)("div",{className:"cercle-portrait",children:Object(x.jsx)("img",{src:k,alt:"portrait img"})})}),Object(x.jsx)("div",{className:"blocs-menu",children:Object(x.jsx)("span",{className:"nav-menu-item",children:Object(x.jsx)("a",{href:"#accueil",children:"Accueil"})})}),Object(x.jsx)("div",{className:"blocs-menu",children:Object(x.jsx)("span",{className:"nav-menu-item",children:Object(x.jsx)("a",{href:"#pres",children:"Pr\xe9sentation"})})}),Object(x.jsx)("div",{className:"blocs-menu",children:Object(x.jsx)("span",{className:"nav-menu-item",children:Object(x.jsx)("a",{href:"#range",children:"Comp\xe9tences"})})}),Object(x.jsx)("div",{className:"blocs-menu",children:Object(x.jsx)("span",{className:"nav-menu-item",children:Object(x.jsx)("a",{href:"#exp",children:"Exp\xe9riences"})})}),Object(x.jsx)("div",{className:"blocs-menu",children:Object(x.jsx)("div",{className:"logo-cercle",children:Object(x.jsx)("a",{href:"#contact",children:Object(x.jsx)("img",{src:y,alt:"logo contact"})})})})]})]})}c(22);function q(){return Object(x.jsxs)("div",{className:"section-parallax",children:[Object(x.jsx)("p",{className:"txt-par",children:"752 tasses de caf\xe9"}),Object(x.jsx)("p",{className:"txt-par",children:"86 projets"}),Object(x.jsx)("p",{className:"txt-par",children:"38 clients"})]})}c(23);var w=c.p+"static/media/bootstrap.579b17cb.jpg",L=c.p+"static/media/console.54e39c99.jpg",F=c.p+"static/media/animcss.fe4c1354.jpg",C=c.p+"static/media/bootstrapsite.325c1199.jpg",E=c.p+"static/media/flex.db23b654.jpg",A=c(1);function T(){return Object(a.useEffect)((function(){var e=document.querySelector(".portfolio"),s=document.querySelector(".titre-port"),c=document.querySelectorAll(".vague1");new A.c({scrollTrigger:{trigger:e,start:"top center",toggleActions:"play none none reverse"}}).from(s,{y:-50,opacity:0,duration:.5}).staggerFrom(c,1,{opacity:0},.2,"-=0.5");var a=document.querySelectorAll(".vague2");new A.c({scrollTrigger:{markers:!1,trigger:c,start:"top center"}}).staggerFrom(a,1,{opacity:0},.2,"-=0.5")}),[]),Object(x.jsxs)("section",{className:"portfolio",id:"port",children:[Object(x.jsx)("h2",{className:"titre-port",children:"Mon Portfolio"}),Object(x.jsxs)("div",{className:"cont-portfolio",children:[Object(x.jsxs)("div",{className:"item vague1",children:[Object(x.jsx)("div",{className:"cont-img-port",children:Object(x.jsx)("img",{src:w,alt:"img portfolio"})}),Object(x.jsx)("h3",{children:"Mon fabuleux projet"}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(x.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(x.jsxs)("div",{className:"item vague1",children:[Object(x.jsx)("div",{className:"cont-img-port",children:Object(x.jsx)("img",{src:L,alt:"img portfolio"})}),Object(x.jsx)("h3",{children:"Mon fabuleux projet"}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(x.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(x.jsxs)("div",{className:"item vague1",children:[Object(x.jsx)("div",{className:"cont-img-port",children:Object(x.jsx)("img",{src:F,alt:"img portfolio"})}),Object(x.jsx)("h3",{children:"Mon fabuleux projet"}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(x.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(x.jsxs)("div",{className:"item vague2",children:[Object(x.jsx)("div",{className:"cont-img-port",children:Object(x.jsx)("img",{src:C,alt:"img portfolio"})}),Object(x.jsx)("h3",{children:"Mon fabuleux projet"}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(x.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(x.jsxs)("div",{className:"item vague2",children:[Object(x.jsx)("div",{className:"cont-img-port",children:Object(x.jsx)("img",{src:E,alt:"img portfolio"})}),Object(x.jsx)("h3",{children:"Mon fabuleux projet"}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(x.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]})]})]})}c(24);function D(){return Object(a.useEffect)((function(){var e=document.querySelector(".presentation"),s=document.querySelector(".titre-pres"),c=document.querySelector(".pres-gauche"),a=document.querySelectorAll(".item-liste");new A.c({scrollTrigger:{trigger:e,start:"top center"}}).from(s,{y:-200,opacity:0,duration:.6}).from(c,{y:-20,opacity:0,duration:.6},"-=0.5").staggerFrom(a,1,{opacity:0},.2,"-=0.5")}),[]),Object(x.jsxs)("section",{className:"presentation",id:"pres",children:[Object(x.jsx)("h2",{className:"titre-pres",children:"Parcours personnel"}),Object(x.jsxs)("div",{className:"container-presentation",children:[Object(x.jsx)("div",{className:"fond-forme"}),Object(x.jsxs)("div",{className:"pres-gauche",children:[Object(x.jsx)("h3",{children:"Cursus scolaire"}),Object(x.jsx)("hr",{}),Object(x.jsxs)("ul",{className:"liste-presentation",children:[Object(x.jsxs)("li",{className:"item-liste i1",children:[Object(x.jsx)("span",{className:"chiffre-style",children:"1. "}),Object(x.jsx)("p",{className:"txt-liste",children:"Licence et Master"}),Object(x.jsxs)("div",{className:"ntie-hover",children:[Object(x.jsx)("p",{className:"txt-liste",children:"\xa0NTIE\xa0"}),Object(x.jsx)("span",{className:"ntie-tooltip",children:"Nouvelles Technologies Informatiques pour l'Entreprise"})]}),Object(x.jsx)("p",{className:"txt-liste",children:"en alternance (2007-2010)"})]}),Object(x.jsxs)("li",{className:"item-liste i2",children:[Object(x.jsx)("span",{className:"chiffre-style",children:"2. "}),Object(x.jsx)("p",{className:"txt-liste",children:"DUT Informatique (2005-2007)"})]}),Object(x.jsxs)("li",{className:"item-liste i3",children:[Object(x.jsx)("span",{className:"chiffre-style",children:"3. "}),Object(x.jsx)("p",{className:"txt-liste",children:"Baccalaur\xe9at scientifique (2004-2005)"})]})]})]}),Object(x.jsxs)("div",{className:"pres-droite",children:[Object(x.jsx)("h3",{children:"Formations"}),Object(x.jsx)("hr",{}),Object(x.jsxs)("ul",{className:"liste-presentation",children:[Object(x.jsxs)("li",{className:"item-liste i1",children:[Object(x.jsx)("span",{className:"chiffre-style",children:"1. "}),Object(x.jsx)("p",{className:"txt-liste",children:"D\xe9veloppement Front-End via la plateforme l'Ecole du Web (2020)"})]}),Object(x.jsxs)("li",{className:"item-liste i2",children:[Object(x.jsx)("span",{className:"chiffre-style",children:"2. "}),Object(x.jsx)("p",{className:"txt-liste",children:"ReactJS via l'organisme Ib-formation (2020)"})]}),Object(x.jsxs)("li",{className:"item-liste i3",children:[Object(x.jsx)("span",{className:"chiffre-style",children:"3. "}),Object(x.jsx)("p",{className:"txt-liste",children:"Docker/Kubernetes via l'organisme Themanis (2020)"})]}),Object(x.jsxs)("li",{className:"item-liste i4",children:[Object(x.jsx)("span",{className:"chiffre-style",children:"4. "}),Object(x.jsx)("p",{className:"txt-liste",children:"Angular sur la plateforme Pluralsight (2019)"})]})]})]})]})]})}c(25);var I=c(5),M=c(10),P=(c(26),c(8)),z=function(e){var s=e.children,c=e.width;return Object(x.jsx)("div",{className:"carousel-item",style:{width:c},children:s})};function B(e){var s=e.children,c=e.titre,l=Object(a.useState)(0),i=Object(M.a)(l,2),r=i[0],n=i[1],j=Object(P.useSwipeable)({onSwipedLeft:function(){return o(r+1)},onSwipedRight:function(){return o(r-1)},preventDefaultTouchmoveEvent:!0,trackMouse:!0}),o=function(e){e<0?e=0:e>=t.a.Children.count(s)&&(e=t.a.Children.count(s)-1),n(e)};return Object(x.jsxs)("div",Object(I.a)(Object(I.a)({},j),{},{className:"carousel",children:[Object(x.jsx)("h2",{className:"titre-exp",children:c}),Object(x.jsx)("div",{className:"inner",style:{transform:"translateX(-".concat(100*r,"%)")},children:t.a.Children.map(s,(function(e,s){return t.a.cloneElement(e,{width:"100%"})}))}),Object(x.jsxs)("div",{className:"indicators",children:[Object(x.jsx)("button",{onClick:function(){o(r-1)},children:"Prev"}),t.a.Children.map(s,(function(e,s){return Object(x.jsx)("button",{className:"".concat(s===r?"active":""),onClick:function(){o(s)},children:s+1})})),Object(x.jsx)("button",{onClick:function(){o(r+1)},children:"Next"})]})]}))}c(27);function J(){return Object(a.useEffect)((function(){var e=document.querySelector(".section-langage"),s=document.querySelector(".titre-langage"),c=document.querySelectorAll(".label-langage"),a=document.querySelectorAll(".number-langage"),t=document.querySelectorAll(".barre-langage"),l=document.querySelectorAll(".barre-grises-langage");new A.c({scrollTrigger:{markers:!0,trigger:e,start:"top center",toggleActions:"play none none reverse"}}).from(s,{opacity:0,duration:.6}).staggerFrom(c,.5,{y:-50,opacity:0},.1,"-=0.5").staggerFrom(a,.5,{y:-10,opacity:0},.1,"-=1").staggerFrom(l,.5,{width:0},.1,"-=1").staggerFrom(t,.5,{width:0},.1,"-=0.5")}),[]),Object(x.jsxs)("section",{className:"section-langage",children:[Object(x.jsx)("h3",{className:"titre-langage",children:"Langages"}),Object(x.jsxs)("div",{className:"grille-skill",children:[Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-langage",children:"Java"}),Object(x.jsx)("p",{className:"number-langage",children:"90%"}),Object(x.jsx)("div",{className:"barre-langage b1"}),Object(x.jsx)("div",{className:"barre-grises-langage"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-langage",children:"TypeScript"}),Object(x.jsx)("p",{className:"number-langage",children:"75%"}),Object(x.jsx)("div",{className:"barre-langage b2"}),Object(x.jsx)("div",{className:"barre-grises-langage"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-langage",children:"HTML"}),Object(x.jsx)("p",{className:"number-langage",children:"70%"}),Object(x.jsx)("div",{className:"barre-langage b3"}),Object(x.jsx)("div",{className:"barre-grises-langage"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-langage",children:"CSS"}),Object(x.jsx)("p",{className:"number-langage",children:"80%"}),Object(x.jsx)("div",{className:"barre-langage b4"}),Object(x.jsx)("div",{className:"barre-grises-langage"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-langage",children:"Javascript"}),Object(x.jsx)("p",{className:"number-langage",children:"70%"}),Object(x.jsx)("div",{className:"barre-langage b5"}),Object(x.jsx)("div",{className:"barre-grises-langage"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-langage",children:"PhP"}),Object(x.jsx)("p",{className:"number-langage",children:"80%"}),Object(x.jsx)("div",{className:"barre-langage b6"}),Object(x.jsx)("div",{className:"barre-grises-langage"})]})]})]})}c(28);function R(){return Object(x.jsxs)("section",{className:"section-range",children:[Object(x.jsx)("h3",{className:"titre-section",children:"Frameworks / Librairies"}),Object(x.jsxs)("div",{className:"grille-skill",children:[Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"Angular"}),Object(x.jsx)("p",{className:"number-skill",children:"90%"}),Object(x.jsx)("div",{className:"barre-skill b1"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"ReactJS"}),Object(x.jsx)("p",{className:"number-skill",children:"75%"}),Object(x.jsx)("div",{className:"barre-skill b2"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"Bootstrap"}),Object(x.jsx)("p",{className:"number-skill",children:"70%"}),Object(x.jsx)("div",{className:"barre-skill b3"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"PrimeNG"}),Object(x.jsx)("p",{className:"number-skill",children:"80%"}),Object(x.jsx)("div",{className:"barre-skill b4"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"Spring BOOT"}),Object(x.jsx)("p",{className:"number-skill",children:"70%"}),Object(x.jsx)("div",{className:"barre-skill b5"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"Laravel 5"}),Object(x.jsx)("p",{className:"number-skill",children:"80%"}),Object(x.jsx)("div",{className:"barre-skill b6"}),Object(x.jsx)("div",{className:"barre-grises"})]})]})]})}c(29);function V(){return Object(x.jsxs)("section",{className:"section-range",children:[Object(x.jsx)("h3",{className:"titre-section",children:"Logiciels / IDEs"}),Object(x.jsxs)("div",{className:"grille-skill",children:[Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"Eclipse / STS"}),Object(x.jsx)("p",{className:"number-skill",children:"80%"}),Object(x.jsx)("div",{className:"barre-skill b1"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"Webstorm"}),Object(x.jsx)("p",{className:"number-skill",children:"75%"}),Object(x.jsx)("div",{className:"barre-skill b2"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"Visual Code Studio"}),Object(x.jsx)("p",{className:"number-skill",children:"80%"}),Object(x.jsx)("div",{className:"barre-skill b3"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"HeidiSQL"}),Object(x.jsx)("p",{className:"number-skill",children:"80%"}),Object(x.jsx)("div",{className:"barre-skill b4"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"Docker"}),Object(x.jsx)("p",{className:"number-skill",children:"60%"}),Object(x.jsx)("div",{className:"barre-skill b5"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"Kubernetes"}),Object(x.jsx)("p",{className:"number-skill",children:"10%"}),Object(x.jsx)("div",{className:"barre-skill b6"}),Object(x.jsx)("div",{className:"barre-grises"})]})]})]})}c(30);function G(){return Object(x.jsxs)("section",{className:"section-range",children:[Object(x.jsx)("h3",{className:"titre-section",children:"Autres"}),Object(x.jsxs)("div",{className:"grille-skill",children:[Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"GIT"}),Object(x.jsx)("p",{className:"number-skill",children:"90%"}),Object(x.jsx)("div",{className:"barre-skill b1"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"SVN"}),Object(x.jsx)("p",{className:"number-skill",children:"75%"}),Object(x.jsx)("div",{className:"barre-skill b2"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"MySQL"}),Object(x.jsx)("p",{className:"number-skill",children:"70%"}),Object(x.jsx)("div",{className:"barre-skill b3"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"PostgreSQL"}),Object(x.jsx)("p",{className:"number-skill",children:"80%"}),Object(x.jsx)("div",{className:"barre-skill b4"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"Agile"}),Object(x.jsx)("p",{className:"number-skill",children:"80%"}),Object(x.jsx)("div",{className:"barre-skill b6"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"Cycle en V"}),Object(x.jsx)("p",{className:"number-skill",children:"80%"}),Object(x.jsx)("div",{className:"barre-skill b6"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"Windows"}),Object(x.jsx)("p",{className:"number-skill",children:"70%"}),Object(x.jsx)("div",{className:"barre-skill b5"}),Object(x.jsx)("div",{className:"barre-grises"})]}),Object(x.jsxs)("div",{className:"range-cont",children:[Object(x.jsx)("p",{className:"label-skill",children:"Linux"}),Object(x.jsx)("p",{className:"number-skill",children:"80%"}),Object(x.jsx)("div",{className:"barre-skill b6"}),Object(x.jsx)("div",{className:"barre-grises"})]})]})]})}function Q(){return Object(x.jsx)("section",{id:"range",children:Object(x.jsxs)(B,{titre:"Comp\xe9tences",children:[Object(x.jsx)(z,{children:Object(x.jsx)(J,{})}),Object(x.jsx)(z,{children:Object(x.jsx)(R,{})}),Object(x.jsx)(z,{children:Object(x.jsx)(V,{})}),Object(x.jsx)(z,{children:Object(x.jsx)(G,{})})]})})}var W=c(9);var H=function(){return m.a.registerPlugin(W.a),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(S,{}),Object(x.jsx)(u,{}),Object(x.jsx)(D,{}),Object(x.jsx)(T,{}),Object(x.jsx)(Q,{}),Object(x.jsx)(f,{}),Object(x.jsx)(q,{}),Object(x.jsx)(h,{})]}),Object(x.jsx)("footer",{children:"Tout Droits r\xe9serv\xe9s \xa9"})]})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(s){var c=s.getCLS,a=s.getFID,t=s.getFCP,l=s.getLCP,i=s.getTTFB;c(e),a(e),t(e),l(e),i(e)}))};i.a.render(Object(x.jsx)(t.a.StrictMode,{children:Object(x.jsx)(H,{})}),document.getElementById("root")),K()}],[[31,1,2]]]);
//# sourceMappingURL=main.82d01bd0.chunk.js.map