(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,s,c){},function(e,s,c){},function(e,s,c){},,function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){"use strict";c.r(s);var a=c(2),t=c.n(a),r=c(6),i=c.n(r),l=(c(15),c(16),c(17),c.p+"static/media/linkedin.f4041044.svg"),n=c.p+"static/media/github.b0fe08fa.svg",o=c.p+"static/media/codepen.2b714d5e.svg",j=c.p+"static/media/arrowDown.78965d40.svg",d=c(7),b=c.n(d),m=c(3),u=c(0);function x(){return Object(a.useEffect)((function(){var e=document.querySelector(".nav-gauche"),s=document.querySelector("h1"),c=document.querySelectorAll(".btn-acc"),a=document.querySelectorAll(".media"),t=document.querySelector(".btn-rond"),r=m.a.timeline({paused:!0});r.to(e,{left:"0px",ease:"power3.easeOut",duration:.6}).from(s,{y:-50,opacity:0,ease:"power3.easeOut",duration:.4}).staggerFrom(c,1,{opacity:0},.2,"-=0.30").staggerFrom(a,1,{opacity:0},.2,"-=0.75").from(t,{y:-50,opacity:0,ease:"power3.easeOut",duration:.4},"-=1"),window.addEventListener("load",(function(){r.play()}))}),[]),Object(u.jsxs)("section",{className:"accueil",id:"accueil",children:[Object(u.jsx)("h1",{children:"Bienvenue sur mon portfolio"}),Object(u.jsx)(b.a,{options:{wrapperClassName:"txt-animation",cursorClassName:"cursor-animation"},onInit:function(e){e.pauseFor(1500).changeDelay(20).typeString("Moi c'est Stefan Llobera").pauseFor(300).typeString("<strong>, D\xe9veloppeur Full-Stack</strong> !").pauseFor(1e3).deleteChars(13).typeString('<span style="color: #27ae60;"> CSS</span> !').pauseFor(1e3).deleteChars(5).typeString('<span style="color: #EA39ff;"> Spring Boot</span> !').pauseFor(1e3).deleteChars(14).typeString('<span style="color: midnightblue;"> React</span> !').pauseFor(1e3).deleteChars(8).typeString('<span style="color: red;"> Angular</span> !').pauseFor(1e3).deleteChars(10).typeString('<span style="color: #ff6910;"> JavaScript</span> !').start()}}),Object(u.jsx)("a",{href:"#range",className:"btn-acc btn-acc1",children:"Exp\xe9riences"}),Object(u.jsxs)("div",{className:"medias",children:[Object(u.jsx)("a",{href:"https://www.linkedin.com/in/stefan-llobera-2192ab178/",target:"blank",children:Object(u.jsx)("div",{className:"media media2",children:Object(u.jsx)("img",{src:l,alt:"linkedin icone",className:"icone-medias"})})}),Object(u.jsx)("a",{href:"https://github.com/bcgetpause",target:"blank",children:Object(u.jsx)("div",{className:"media media1",children:Object(u.jsx)("img",{src:n,alt:"github icone",className:"icone-medias"})})}),Object(u.jsx)("a",{href:"https://codepen.io/bcgetpause",target:"blank",children:Object(u.jsx)("div",{className:"media media2",children:Object(u.jsx)("img",{src:o,alt:"codepen icone",className:"icone-medias"})})})]}),Object(u.jsx)("a",{href:"#pres",children:Object(u.jsx)("div",{className:"btn-rond",children:Object(u.jsx)("img",{src:j,alt:"logo fleche bas",className:"logo-btn-rond-acc"})})})]})}c(19);function g(){Object(a.useEffect)((function(){for(var e=document.querySelectorAll("input"),s=0;s<e.length;s++){e[s].addEventListener("input",(function(e){""!==e.target.value?e.target.parentNode.classList.add("animation"):""===e.target.value&&e.target.parentNode.classList.remove("animation")}))}m.a.timeline({scrollTrigger:{trigger:".section-contact",start:"top center",toggleActions:"play none none reverse"}}).from(".section-contact",{opacity:0})}),[]);return Object(u.jsxs)("section",{className:"section-contact",id:"contact",children:[Object(u.jsxs)("h2",{children:[Object(u.jsx)("strong",{children:"Rentrons"})," en Contact"]}),Object(u.jsx)("div",{className:"container-form",children:Object(u.jsxs)("form",{className:"form-bloc",onSubmit:function(e){e.preventDefault()},children:[Object(u.jsxs)("div",{className:"form-groupe",children:[Object(u.jsx)("label",{htmlFor:"prenom",children:"Pr\xe9nom"}),Object(u.jsx)("input",{type:"text",required:!0,maxLength:"16",id:"prenom"})]}),Object(u.jsxs)("div",{className:"form-groupe",children:[Object(u.jsx)("label",{htmlFor:"nom",children:"Nom"}),Object(u.jsx)("input",{type:"text",required:!0,maxLength:"16",id:"nom"})]}),Object(u.jsx)("div",{className:"form-groupe",children:Object(u.jsx)("textarea",{id:"txt",placeholder:"Votre message",required:!0})}),Object(u.jsx)("div",{className:"form-groupe",children:Object(u.jsx)("button",{onClick:function(){var e=document.querySelector("input#prenom"),s=document.querySelector("input#nom"),c=document.querySelector("textarea#txt");if(e&&s&&c&&""!==e.value&&""!==s.value&&""!==c.value){var a=encodeURI("mailto:stefan.llobera@gmail.com?subject=Contact de "+e.value+" "+s.value+"&body="+c.value);window.location.href=a}},className:"button-sub",children:"ENVOYER"})})]})})]})}c(20);var h=c.p+"static/media/google.77a59cd8.svg",O=c.p+"static/media/instagram.90a80cd5.svg",p=c.p+"static/media/amazon.7bcd9f37.svg",N=c.p+"static/media/apple.3e208bda.svg",v=c.p+"static/media/plane.a70df133.svg";function f(){return Object(a.useEffect)((function(){m.a.timeline({scrollTrigger:{trigger:".travail-exp",start:"top center"}}).from(".travail-exp",{opacity:0})}),[]),Object(u.jsxs)("section",{className:"travail-exp",id:"exp",children:[Object(u.jsx)("h2",{className:"titre-travail-exp",children:"Mes exp\xe9riences"}),Object(u.jsxs)("div",{className:"cont-exp-travail",children:[Object(u.jsxs)("div",{className:"barre-verticale",children:[Object(u.jsx)("div",{className:"boule-ico",children:Object(u.jsx)("img",{src:h,alt:"icone gauche"})}),Object(u.jsx)("div",{className:"boule-ico",children:Object(u.jsx)("img",{src:O,alt:"icone gauche"})}),Object(u.jsx)("div",{className:"boule-ico",children:Object(u.jsx)("img",{src:p,alt:"icone gauche"})}),Object(u.jsx)("div",{className:"boule-ico",children:Object(u.jsx)("img",{src:N,alt:"icone gauche"})}),Object(u.jsx)("div",{className:"boule-ico",children:Object(u.jsx)("img",{src:v,className:"avion",alt:"icone gauche"})})]}),Object(u.jsxs)("div",{className:"flex-cont-bloc-exp",children:[Object(u.jsx)("div",{className:"bloc bloc1",children:Object(u.jsxs)("div",{className:"contenu-bloc",children:[Object(u.jsx)("p",{className:"titre-section-bloc",children:"Google, 2019"}),Object(u.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In perferendis dignissimos doloribus quaerat corrupti facere ratione modi vel. Voluptatem minima facilis eaque eum quia voluptatibus dolorem minus incidunt repellendus culpa?"})]})}),Object(u.jsx)("div",{className:"bloc bloc2",children:Object(u.jsxs)("div",{className:"contenu-bloc",children:[Object(u.jsx)("p",{className:"titre-section-bloc",children:"Instagram, 2017-2018"}),Object(u.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?"})]})}),Object(u.jsx)("div",{className:"bloc bloc3",children:Object(u.jsxs)("div",{className:"contenu-bloc",children:[Object(u.jsx)("p",{className:"titre-section-bloc",children:"Amazon, 2015-2016"}),Object(u.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?"})]})}),Object(u.jsx)("div",{className:"bloc bloc4",children:Object(u.jsxs)("div",{className:"contenu-bloc",children:[Object(u.jsx)("p",{className:"titre-section-bloc",children:"Apple, 2012-2014"}),Object(u.jsx)("p",{className:"txt-section",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?"})]})})]})]})]})}c(21);var y=c.p+"static/media/reborn-sawada.cce247e2.jpg",w=c.p+"static/media/contact.2c18ff74.svg";function S(){return Object(a.useEffect)((function(){var e=document.querySelector(".btn-rond-menu"),s=document.querySelector(".nav-gauche"),c=document.querySelectorAll(".nav-menu-item"),a=document.querySelector(".cont-ligne");e.addEventListener("click",(function(){a.classList.toggle("active"),s.classList.toggle("menu-visible")})),window.matchMedia("(max-width: 1300px)")&&c.forEach((function(e){e.addEventListener("click",(function(){s.classList.toggle("menu-visible"),a.classList.toggle("active")}))}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"btn-rond-menu",children:Object(u.jsx)("div",{className:"cont-ligne",children:Object(u.jsx)("div",{className:"ligne-unique"})})}),Object(u.jsxs)("nav",{className:"nav-gauche",children:[Object(u.jsx)("div",{className:"blocs-menu",children:Object(u.jsx)("div",{className:"cercle-portrait",children:Object(u.jsx)("img",{src:y,alt:"portrait img"})})}),Object(u.jsx)("div",{className:"blocs-menu",children:Object(u.jsx)("span",{className:"nav-menu-item",children:Object(u.jsx)("a",{href:"#accueil",children:"Accueil"})})}),Object(u.jsx)("div",{className:"blocs-menu",children:Object(u.jsx)("span",{className:"nav-menu-item",children:Object(u.jsx)("a",{href:"#pres",children:"Pr\xe9sentation"})})}),Object(u.jsx)("div",{className:"blocs-menu",children:Object(u.jsx)("span",{className:"nav-menu-item",children:Object(u.jsx)("a",{href:"#range",children:"Comp\xe9tences"})})}),Object(u.jsx)("div",{className:"blocs-menu",children:Object(u.jsx)("span",{className:"nav-menu-item",children:Object(u.jsx)("a",{href:"#exp",children:"Exp\xe9riences"})})}),Object(u.jsx)("div",{className:"blocs-menu",children:Object(u.jsx)("div",{className:"logo-cercle",children:Object(u.jsx)("a",{href:"#contact",children:Object(u.jsx)("img",{src:w,alt:"logo contact"})})})})]})]})}c(22);function k(){return Object(u.jsxs)("div",{className:"section-parallax",children:[Object(u.jsx)("p",{className:"txt-par",children:"752 tasses de caf\xe9"}),Object(u.jsx)("p",{className:"txt-par",children:"86 projets"}),Object(u.jsx)("p",{className:"txt-par",children:"38 clients"})]})}c(23);var q=c.p+"static/media/bootstrap.579b17cb.jpg",L=c.p+"static/media/console.54e39c99.jpg",F=c.p+"static/media/animcss.fe4c1354.jpg",C=c.p+"static/media/bootstrapsite.325c1199.jpg",E=c.p+"static/media/flex.db23b654.jpg",A=c(1);function T(){return Object(a.useEffect)((function(){var e=document.querySelector(".portfolio"),s=document.querySelector(".titre-port"),c=document.querySelectorAll(".vague1");new A.c({scrollTrigger:{trigger:e,start:"top center",toggleActions:"play none none reverse"}}).from(s,{y:-50,opacity:0,duration:.5}).staggerFrom(c,1,{opacity:0},.2,"-=0.5");var a=document.querySelectorAll(".vague2");new A.c({scrollTrigger:{markers:!1,trigger:c,start:"top center"}}).staggerFrom(a,1,{opacity:0},.2,"-=0.5")}),[]),Object(u.jsxs)("section",{className:"portfolio",id:"port",children:[Object(u.jsx)("h2",{className:"titre-port",children:"Mon Portfolio"}),Object(u.jsxs)("div",{className:"cont-portfolio",children:[Object(u.jsxs)("div",{className:"item vague1",children:[Object(u.jsx)("div",{className:"cont-img-port",children:Object(u.jsx)("img",{src:q,alt:"img portfolio"})}),Object(u.jsx)("h3",{children:"Mon fabuleux projet"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(u.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(u.jsxs)("div",{className:"item vague1",children:[Object(u.jsx)("div",{className:"cont-img-port",children:Object(u.jsx)("img",{src:L,alt:"img portfolio"})}),Object(u.jsx)("h3",{children:"Mon fabuleux projet"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(u.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(u.jsxs)("div",{className:"item vague1",children:[Object(u.jsx)("div",{className:"cont-img-port",children:Object(u.jsx)("img",{src:F,alt:"img portfolio"})}),Object(u.jsx)("h3",{children:"Mon fabuleux projet"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(u.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(u.jsxs)("div",{className:"item vague2",children:[Object(u.jsx)("div",{className:"cont-img-port",children:Object(u.jsx)("img",{src:C,alt:"img portfolio"})}),Object(u.jsx)("h3",{children:"Mon fabuleux projet"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(u.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]}),Object(u.jsxs)("div",{className:"item vague2",children:[Object(u.jsx)("div",{className:"cont-img-port",children:Object(u.jsx)("img",{src:E,alt:"img portfolio"})}),Object(u.jsx)("h3",{children:"Mon fabuleux projet"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?"}),Object(u.jsx)("a",{href:"https://codepen.io/your-work",className:"btn-projets",children:"D\xe9couvrez le projet"})]})]})]})}c(24);function D(){return Object(a.useEffect)((function(){var e=document.querySelector(".presentation"),s=document.querySelector(".titre-pres"),c=document.querySelector(".pres-gauche"),a=document.querySelectorAll(".item-liste");new A.c({scrollTrigger:{trigger:e,start:"top center"}}).from(s,{y:-200,opacity:0,duration:.6}).from(c,{y:-20,opacity:0,duration:.6},"-=0.5").staggerFrom(a,1,{opacity:0},.2,"-=0.5")}),[]),Object(u.jsxs)("section",{className:"presentation",id:"pres",children:[Object(u.jsx)("h2",{className:"titre-pres",children:"Parcours personnel"}),Object(u.jsxs)("div",{className:"container-presentation",children:[Object(u.jsx)("div",{className:"fond-forme"}),Object(u.jsxs)("div",{className:"pres-gauche",children:[Object(u.jsx)("h3",{children:"Cursus scolaire"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("ul",{className:"liste-presentation",children:[Object(u.jsxs)("li",{className:"item-liste i1",children:[Object(u.jsx)("span",{className:"chiffre-style",children:"1. "}),Object(u.jsx)("p",{className:"txt-liste",children:"Licence et Master"}),Object(u.jsxs)("div",{className:"ntie-hover",children:[Object(u.jsx)("p",{className:"txt-liste",children:"\xa0NTIE\xa0"}),Object(u.jsx)("span",{className:"ntie-tooltip",children:"Nouvelles Technologies Informatiques pour l'Entreprise"})]}),Object(u.jsx)("p",{className:"txt-liste",children:"en alternance (2007-2010)"})]}),Object(u.jsxs)("li",{className:"item-liste i2",children:[Object(u.jsx)("span",{className:"chiffre-style",children:"2. "}),Object(u.jsx)("p",{className:"txt-liste",children:"DUT Informatique (2005-2007)"})]}),Object(u.jsxs)("li",{className:"item-liste i3",children:[Object(u.jsx)("span",{className:"chiffre-style",children:"3. "}),Object(u.jsx)("p",{className:"txt-liste",children:"Baccalaur\xe9at scientifique (2004-2005)"})]})]})]}),Object(u.jsxs)("div",{className:"pres-droite",children:[Object(u.jsx)("h3",{children:"Formations"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("ul",{className:"liste-presentation",children:[Object(u.jsxs)("li",{className:"item-liste i1",children:[Object(u.jsx)("span",{className:"chiffre-style",children:"1. "}),Object(u.jsx)("p",{className:"txt-liste",children:"D\xe9veloppement Front-End via la plateforme l'Ecole du Web (2020)"})]}),Object(u.jsxs)("li",{className:"item-liste i2",children:[Object(u.jsx)("span",{className:"chiffre-style",children:"2. "}),Object(u.jsx)("p",{className:"txt-liste",children:"ReactJS via l'organisme Ib-formation (2020)"})]}),Object(u.jsxs)("li",{className:"item-liste i3",children:[Object(u.jsx)("span",{className:"chiffre-style",children:"3. "}),Object(u.jsx)("p",{className:"txt-liste",children:"Docker/Kubernetes via l'organisme Themanis (2020)"})]}),Object(u.jsxs)("li",{className:"item-liste i4",children:[Object(u.jsx)("span",{className:"chiffre-style",children:"4. "}),Object(u.jsx)("p",{className:"txt-liste",children:"Angular sur la plateforme Pluralsight (2019)"})]})]})]})]})]})}c(25);var I=c(5),M=c(10),P=(c(26),c(8)),z=c.p+"static/media/chevron-left.310de47d.svg",B=c.p+"static/media/chevron-right.c3ee4024.svg",J=function(e){var s=e.children,c=e.width,a=e.id;return Object(u.jsx)("div",{id:a,className:"carousel-item",style:{width:c},children:s})};function R(e){var s=e.children,c=e.titre,r=Object(a.useState)(0),i=Object(M.a)(r,2),l=i[0],n=i[1];Object(a.useEffect)((function(){var e=s[0];document.querySelector(".inner").style.height=document.querySelector("#"+e.props.id).offsetHeight+"px"}),[]);var o=Object(P.useSwipeable)({onSwipedLeft:function(){return j(l+1)},onSwipedRight:function(){return j(l-1)},preventDefaultTouchmoveEvent:!0,trackMouse:!0}),j=function(e){e<0?e=t.a.Children.count(s)-1:e>=t.a.Children.count(s)&&(e=0);var c=s[e];document.querySelector(".inner").style.height=document.querySelector("#"+c.props.id).offsetHeight+"px",n(e)};return Object(u.jsxs)("div",Object(I.a)(Object(I.a)({},o),{},{className:"carousel",children:[Object(u.jsx)("h2",{className:"titre-exp",children:c}),Object(u.jsx)("div",{className:"inner",style:{transform:"translateX(-".concat(100*l,"%)")},children:t.a.Children.map(s,(function(e,s){return t.a.cloneElement(e,{width:"100%"})}))}),Object(u.jsx)("div",{onClick:function(){j(l-1)},className:"indicators-prev",children:Object(u.jsx)("img",{src:z,alt:"logo fleche gauche",className:"logo-btn-rond-prev"})}),Object(u.jsx)("div",{className:"indicators",children:t.a.Children.map(s,(function(e,s){return Object(u.jsx)("button",{className:"nav-carousel ".concat(s===l?"active":""),onClick:function(){j(s)}})}))}),Object(u.jsx)("div",{onClick:function(){j(l+1)},className:"indicators-next",children:Object(u.jsx)("img",{src:B,alt:"logo fleche droite",className:"logo-btn-rond-next"})})]}))}c(27);function V(){return Object(a.useEffect)((function(){var e=document.querySelector(".section-langage"),s=document.querySelector(".titre-langage"),c=document.querySelectorAll(".label-langage"),a=document.querySelectorAll(".number-langage"),t=document.querySelectorAll(".barre-langage"),r=document.querySelectorAll(".barre-grises-langage");new A.c({scrollTrigger:{trigger:e,start:"top center",toggleActions:"play none none reverse"}}).from(s,{opacity:0,duration:.6}).staggerFrom(c,.5,{y:-50,opacity:0},.1,"-=0.5").staggerFrom(a,.5,{y:-10,opacity:0},.1,"-=1").staggerFrom(r,.5,{width:0},.1,"-=1").staggerFrom(t,.5,{width:0},.1,"-=0.5")}),[]),Object(u.jsxs)("section",{className:"section-langage",children:[Object(u.jsx)("h3",{className:"titre-langage",children:"Langages"}),Object(u.jsxs)("div",{className:"grille-langages",children:[Object(u.jsxs)("div",{className:"range-langages",children:[Object(u.jsx)("p",{className:"label-langage",children:"Java"}),Object(u.jsx)("p",{className:"number-langage",children:"90%"}),Object(u.jsx)("div",{className:"barre-langage b1"}),Object(u.jsx)("div",{className:"barre-grises-langage"})]}),Object(u.jsxs)("div",{className:"range-langages",children:[Object(u.jsx)("p",{className:"label-langage",children:"TypeScript"}),Object(u.jsx)("p",{className:"number-langage",children:"75%"}),Object(u.jsx)("div",{className:"barre-langage b2"}),Object(u.jsx)("div",{className:"barre-grises-langage"})]}),Object(u.jsxs)("div",{className:"range-langages",children:[Object(u.jsx)("p",{className:"label-langage",children:"HTML"}),Object(u.jsx)("p",{className:"number-langage",children:"70%"}),Object(u.jsx)("div",{className:"barre-langage b3"}),Object(u.jsx)("div",{className:"barre-grises-langage"})]}),Object(u.jsxs)("div",{className:"range-langages",children:[Object(u.jsx)("p",{className:"label-langage",children:"CSS"}),Object(u.jsx)("p",{className:"number-langage",children:"80%"}),Object(u.jsx)("div",{className:"barre-langage b4"}),Object(u.jsx)("div",{className:"barre-grises-langage"})]}),Object(u.jsxs)("div",{className:"range-langages",children:[Object(u.jsx)("p",{className:"label-langage",children:"Javascript"}),Object(u.jsx)("p",{className:"number-langage",children:"70%"}),Object(u.jsx)("div",{className:"barre-langage b5"}),Object(u.jsx)("div",{className:"barre-grises-langage"})]}),Object(u.jsxs)("div",{className:"range-langages",children:[Object(u.jsx)("p",{className:"label-langage",children:"PhP"}),Object(u.jsx)("p",{className:"number-langage",children:"80%"}),Object(u.jsx)("div",{className:"barre-langage b6"}),Object(u.jsx)("div",{className:"barre-grises-langage"})]})]})]})}c(28);function H(){return Object(u.jsxs)("section",{className:"section-frameworks",children:[Object(u.jsx)("h3",{className:"titre-frameworks",children:"Frameworks / Librairies"}),Object(u.jsxs)("div",{className:"grille-frameworks",children:[Object(u.jsxs)("div",{className:"range-frameworks",children:[Object(u.jsx)("p",{className:"label-frameworks",children:"Angular"}),Object(u.jsx)("p",{className:"number-frameworks",children:"90%"}),Object(u.jsx)("div",{className:"barre-frameworks b1"}),Object(u.jsx)("div",{className:"barre-grises-frameworks"})]}),Object(u.jsxs)("div",{className:"range-frameworks",children:[Object(u.jsx)("p",{className:"label-frameworks",children:"ReactJS"}),Object(u.jsx)("p",{className:"number-frameworks",children:"75%"}),Object(u.jsx)("div",{className:"barre-frameworks b2"}),Object(u.jsx)("div",{className:"barre-grises-frameworks"})]}),Object(u.jsxs)("div",{className:"range-frameworks",children:[Object(u.jsx)("p",{className:"label-frameworks",children:"Bootstrap"}),Object(u.jsx)("p",{className:"number-frameworks",children:"70%"}),Object(u.jsx)("div",{className:"barre-frameworks b3"}),Object(u.jsx)("div",{className:"barre-grises-frameworks"})]}),Object(u.jsxs)("div",{className:"range-frameworks",children:[Object(u.jsx)("p",{className:"label-frameworks",children:"PrimeNG"}),Object(u.jsx)("p",{className:"number-frameworks",children:"80%"}),Object(u.jsx)("div",{className:"barre-frameworks b4"}),Object(u.jsx)("div",{className:"barre-grises-frameworks"})]}),Object(u.jsxs)("div",{className:"range-frameworks",children:[Object(u.jsx)("p",{className:"label-frameworks",children:"Spring BOOT"}),Object(u.jsx)("p",{className:"number-frameworks",children:"70%"}),Object(u.jsx)("div",{className:"barre-frameworks b5"}),Object(u.jsx)("div",{className:"barre-grises-frameworks"})]}),Object(u.jsxs)("div",{className:"range-frameworks",children:[Object(u.jsx)("p",{className:"label-frameworks",children:"Laravel 5"}),Object(u.jsx)("p",{className:"number-frameworks",children:"80%"}),Object(u.jsx)("div",{className:"barre-frameworks b6"}),Object(u.jsx)("div",{className:"barre-grises-frameworks"})]})]})]})}c(29);function G(){return Object(u.jsxs)("section",{className:"section-logiciels",children:[Object(u.jsx)("h3",{className:"titre-logiciels",children:"Logiciels / IDEs"}),Object(u.jsxs)("div",{className:"grille-logiciels",children:[Object(u.jsxs)("div",{className:"range-logiciels",children:[Object(u.jsx)("p",{className:"label-logiciels",children:"Eclipse / STS"}),Object(u.jsx)("p",{className:"number-logiciels",children:"80%"}),Object(u.jsx)("div",{className:"barre-logiciels b1"}),Object(u.jsx)("div",{className:"barre-grises-logiciels"})]}),Object(u.jsxs)("div",{className:"range-logiciels",children:[Object(u.jsx)("p",{className:"label-logiciels",children:"Webstorm"}),Object(u.jsx)("p",{className:"number-logiciels",children:"75%"}),Object(u.jsx)("div",{className:"barre-logiciels b2"}),Object(u.jsx)("div",{className:"barre-grises-logiciels"})]}),Object(u.jsxs)("div",{className:"range-logiciels",children:[Object(u.jsx)("p",{className:"label-logiciels",children:"Visual Code Studio"}),Object(u.jsx)("p",{className:"number-logiciels",children:"80%"}),Object(u.jsx)("div",{className:"barre-logiciels b3"}),Object(u.jsx)("div",{className:"barre-grises-logiciels"})]}),Object(u.jsxs)("div",{className:"range-logiciels",children:[Object(u.jsx)("p",{className:"label-logiciels",children:"HeidiSQL"}),Object(u.jsx)("p",{className:"number-logiciels",children:"80%"}),Object(u.jsx)("div",{className:"barre-logiciels b4"}),Object(u.jsx)("div",{className:"barre-grises-logiciels"})]}),Object(u.jsxs)("div",{className:"range-logiciels",children:[Object(u.jsx)("p",{className:"label-logiciels",children:"Docker"}),Object(u.jsx)("p",{className:"number-logiciels",children:"60%"}),Object(u.jsx)("div",{className:"barre-logiciels b5"}),Object(u.jsx)("div",{className:"barre-grises-logiciels"})]}),Object(u.jsxs)("div",{className:"range-logiciels",children:[Object(u.jsx)("p",{className:"label-logiciels",children:"Kubernetes"}),Object(u.jsx)("p",{className:"number-logiciels",children:"10%"}),Object(u.jsx)("div",{className:"barre-logiciels b6"}),Object(u.jsx)("div",{className:"barre-grises-logiciels"})]})]})]})}c(30);function Q(){return Object(u.jsxs)("section",{className:"section-range",children:[Object(u.jsx)("h3",{className:"titre-autres",children:"Autres"}),Object(u.jsxs)("div",{className:"grille-autres",children:[Object(u.jsxs)("div",{className:"range-autres",children:[Object(u.jsx)("p",{className:"label-autres",children:"GIT"}),Object(u.jsx)("p",{className:"number-autres",children:"90%"}),Object(u.jsx)("div",{className:"barre-autres b1"}),Object(u.jsx)("div",{className:"barre-grises-autres"})]}),Object(u.jsxs)("div",{className:"range-autres",children:[Object(u.jsx)("p",{className:"label-autres",children:"SVN"}),Object(u.jsx)("p",{className:"number-autres",children:"75%"}),Object(u.jsx)("div",{className:"barre-autres b2"}),Object(u.jsx)("div",{className:"barre-grises-autres"})]}),Object(u.jsxs)("div",{className:"range-autres",children:[Object(u.jsx)("p",{className:"label-autres",children:"MySQL"}),Object(u.jsx)("p",{className:"number-autres",children:"70%"}),Object(u.jsx)("div",{className:"barre-autres b3"}),Object(u.jsx)("div",{className:"barre-grises-autres"})]}),Object(u.jsxs)("div",{className:"range-autres",children:[Object(u.jsx)("p",{className:"label-autres",children:"PostgreSQL"}),Object(u.jsx)("p",{className:"number-autres",children:"80%"}),Object(u.jsx)("div",{className:"barre-autres b4"}),Object(u.jsx)("div",{className:"barre-grises-autres"})]}),Object(u.jsxs)("div",{className:"range-autres",children:[Object(u.jsx)("p",{className:"label-autres",children:"Agile"}),Object(u.jsx)("p",{className:"number-autres",children:"80%"}),Object(u.jsx)("div",{className:"barre-autres b6"}),Object(u.jsx)("div",{className:"barre-grises-autres"})]}),Object(u.jsxs)("div",{className:"range-autres",children:[Object(u.jsx)("p",{className:"label-autres",children:"Cycle en V"}),Object(u.jsx)("p",{className:"number-autres",children:"80%"}),Object(u.jsx)("div",{className:"barre-autres b6"}),Object(u.jsx)("div",{className:"barre-grises-autres"})]}),Object(u.jsxs)("div",{className:"range-autres",children:[Object(u.jsx)("p",{className:"label-autres",children:"Windows"}),Object(u.jsx)("p",{className:"number-autres",children:"70%"}),Object(u.jsx)("div",{className:"barre-autres b5"}),Object(u.jsx)("div",{className:"barre-grises-autres"})]}),Object(u.jsxs)("div",{className:"range-autres",children:[Object(u.jsx)("p",{className:"label-autres",children:"Linux"}),Object(u.jsx)("p",{className:"number-autres",children:"80%"}),Object(u.jsx)("div",{className:"barre-autres b6"}),Object(u.jsx)("div",{className:"barre-grises-autres"})]})]})]})}function W(){return Object(u.jsx)("section",{id:"range",children:Object(u.jsxs)(R,{titre:"Comp\xe9tences",children:[Object(u.jsx)(J,{id:"lang",children:Object(u.jsx)(V,{})}),Object(u.jsx)(J,{id:"frm",children:Object(u.jsx)(H,{})}),Object(u.jsx)(J,{id:"log",children:Object(u.jsx)(G,{})}),Object(u.jsx)(J,{id:"oth",children:Object(u.jsx)(Q,{})})]})})}var K=c(9);var U=function(){return m.a.registerPlugin(K.a),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(S,{}),Object(u.jsx)(x,{}),Object(u.jsx)(D,{}),Object(u.jsx)(T,{}),Object(u.jsx)(W,{}),Object(u.jsx)(f,{}),Object(u.jsx)(k,{}),Object(u.jsx)(g,{})]}),Object(u.jsx)("footer",{children:"Tout Droits r\xe9serv\xe9s \xa9"})]})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(s){var c=s.getCLS,a=s.getFID,t=s.getFCP,r=s.getLCP,i=s.getTTFB;c(e),a(e),t(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(t.a.StrictMode,{children:Object(u.jsx)(U,{})}),document.getElementById("root")),X()}],[[31,1,2]]]);
//# sourceMappingURL=main.7d0170be.chunk.js.map