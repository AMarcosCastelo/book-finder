(this["webpackJsonpbook-finder"]=this["webpackJsonpbook-finder"]||[]).push([[0],{26:function(n,e,t){n.exports=t.p+"static/media/blackLupa.1421341d.svg"},27:function(n,e,t){n.exports=t.p+"static/media/whiteLupa.5cdf7043.svg"},29:function(n,e,t){n.exports=t(53)},53:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(19),i=t.n(o),c=t(6),u=t.n(c),l=t(20),s=t(4),p=t(21),d=t.n(p),m=t(1),f=t(28),h=t(2);function b(){var n=Object(h.a)(["\n  height: 60px;\n  background: ",";\n  color: ",";\n  font-size: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 30px;\n"]);return b=function(){return n},n}var g=m.d.div(b(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.textLight})),x=function(n){var e=n.toggleTheme,t=Object(r.useContext)(m.a),o=t.colors,i=t.title;return a.a.createElement(g,null,"Book Finder",a.a.createElement(d.a,{onChange:e,checked:"dark"===i,checkedIcon:!1,uncheckedIcon:!1,height:10,width:40,handleDiameter:20,offColor:Object(f.a)(.15,o.primary),onColor:o.secundary}))};function v(){var n=Object(h.a)(["\n  padding: 10px;\n\n  h4 {\n    font-size: 18px;\n    margin-bottom: 8px;\n  }\n\n  span {\n    margin: 10px 0 10px 0;\n  }\n\n  p {\n    margin-top: 10px;\n  }\n"]);return v=function(){return n},n}function k(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 400px;\n  padding: 10px;\n  margin: 10px;\n  text-decoration: none;\n  color: ",";\n  background-color: ",";\n  border-radius: 10px;\n  box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.55);\n  &:hover {\n    transform: translateX(1%);\n    /* box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2); */\n  }\n  img {\n    max-height: 120px;\n    max-width: 100px;\n  }\n"]);return k=function(){return n},n}var E=m.d.a(k(),(function(n){return n.theme.colors.textLight}),(function(n){return n.theme.colors.primary})),y=m.d.div(v()),j=function(n){var e=n.book;return a.a.createElement(E,{href:e.previewLink,target:"_blanck"},a.a.createElement("img",{src:"-"!==e.imageLinks.thumbnail?e.imageLinks.thumbnail:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/2000px-Placeholder_book.svg.png",alt:"".concat(e.title)}),a.a.createElement(y,null,a.a.createElement("h4",null,e.title),a.a.createElement("span",{className:"author"},a.a.createElement("strong",null,"Author: "),e.authors.join(", ")),a.a.createElement("p",null,a.a.createElement("strong",null,"Published: "),void 0!==e.publishedDate?e.publishedDate.split("-").reverse().join("/"):"-"),a.a.createElement("p",null,a.a.createElement("strong",null,"Pubisher: "),void 0!==e.publisher?e.publisher:"-")))};function w(){var n=Object(h.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap; \n  padding: 20px\n"]);return w=function(){return n},n}var O=m.d.div(w()),L=function(n){var e=n.booksData;return a.a.createElement(O,null,e.map((function(n,e){return a.a.createElement(j,{book:n,key:e})})))},I=t(25),D=t.n(I).a.create({baseURL:"https://www.googleapis.com/books/v1"});var S=function(n,e){var t=Object(r.useState)((function(){var t=localStorage.getItem(n);return t?JSON.parse(t):e})),a=Object(s.a)(t,2),o=a[0],i=a[1];return Object(r.useEffect)((function(){localStorage.setItem(n,JSON.stringify(o))}),[n,o]),[o,i]};function C(){var n=Object(h.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: none;\n  }\n\n  body {\n    background: ",";\n    font-size: 14px;\n    color: #",';\n    font-family: "Roboto", sans-serif;\n  }\n']);return C=function(){return n},n}var z=Object(m.c)(C(),(function(n){return n.theme.colors.backgroud}),(function(n){return n.theme.colors.text})),F={title:"light",colors:{primary:"#7C7C7C",secundary:"#d8d4d5",inputBorder:"#384d48",backgroud:"#F5F5F5",text:"#333",textLight:"#F5f5f5"}},B={title:"dark",colors:{primary:"#333",secundary:"#acad94",inputBorder:"#d8d4d5",backgroud:"#222",text:"#fff",textLight:"#F5f5f5"}},J=t(26),N=t.n(J),P=t(27),_=t.n(P);function A(){var n=Object(h.a)(["\n  width: 100%;\n  padding: 12px 24px;\n  margin-top: 20px;\n  background-color: transparent;\n  transition: transform 250ms ease-in-out;\n  font-size: 14px;\n  line-height: 18px;\n  color: ",";\n  background-color: transparent;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: 18px 18px;\n  background-position: 95% center;\n  border-radius: 50px;\n  border: 1px solid ",";\n  transition: all 250ms ease-in-out;\n  backface-visibility: hidden;\n  transform-style: preserve-3d;\n  \n  &::placeholder {\n    color: color("," a(0.8));\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n  }\n  \n  &:hover,\n  &:focus {\n    padding: 12px 0;\n    outline: 0;\n    border: 1px solid transparent;\n    border-bottom: 1px solid ",";\n    border-radius: 0;\n    background-position: 100% center;\n  }\n"]);return A=function(){return n},n}function R(){var n=Object(h.a)(["\n  font-size: 22px;\n  font-weight: 900;\n  text-align: center;\n  color: ",";\n"]);return R=function(){return n},n}function T(){var n=Object(h.a)(["\n  padding-top: 54px;\n"]);return T=function(){return n},n}function q(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom:20px;\n"]);return q=function(){return n},n}var G=m.d.div(q()),K=m.d.div(T()),M=m.d.p(R(),(function(n){return n.theme.colors.text})),U=m.d.input(A(),(function(n){return n.theme.colors.text}),(function(n){return"light"===n.theme.title?N.a:_.a}),(function(n){return n.theme.colors.inputBorder}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.text})),X=function(n){var e=n.getData,t=Object(r.useState)(""),o=Object(s.a)(t,2),i=o[0],c=o[1];return a.a.createElement(G,null,a.a.createElement(K,null,a.a.createElement(M,null,"Go ahead, look for a book or author."),a.a.createElement(U,{type:"text",placeholder:"Search",onKeyDown:function(n){"Enter"===n.key&&e(i)},onChange:function(n){return c(n.target.value)},value:i})))};var H=function(){var n=S("theme",F),e=Object(s.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)([]),c=Object(s.a)(i,2),p=c[0],d=c[1];function f(){return(f=Object(l.a)(u.a.mark((function n(e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,D.get("/volumes",{params:{q:e}});case 3:h(n.sent.data.items),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){var e=[];n.forEach((function(n){var t=n.volumeInfo.imageLinks;e.push({title:n.volumeInfo.title,authors:n.volumeInfo.authors,previewLink:n.volumeInfo.previewLink,publishedDate:n.volumeInfo.publishedDate,imageLinks:{thumbnail:void 0!==t?t.thumbnail:"-"},publisher:n.volumeInfo.publisher})})),d(e)}return a.a.createElement(m.b,{theme:t},a.a.createElement("div",{className:"App"},a.a.createElement(z,null),a.a.createElement(x,{toggleTheme:function(){o("light"===t.title?B:F)}}),a.a.createElement(X,{getData:function(n){return f.apply(this,arguments)}}),a.a.createElement(L,{booksData:p})))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(H,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.6603521b.chunk.js.map