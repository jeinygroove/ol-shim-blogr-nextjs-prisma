_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{RNiq:function(e,t,i){"use strict";i.r(t),i.d(t,"__N_SSP",(function(){return u}));var n=i("nKUr"),s=i("1OyB"),o=i("vuIU"),r=i("Ji7U"),a=i("md7G"),c=i("foSv"),l=i("MX0m"),x=i.n(l),d=i("g4pe"),b=i.n(d),f=i("8cHP"),j=i("q1tI");function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=Object(c.a)(e);if(t){var s=Object(c.a)(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return Object(a.a)(this,i)}}var p=function(e){Object(r.a)(i,e);var t=m(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={books:e.books},n}return Object(o.a)(i,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"jsx-652847737 container",children:[Object(n.jsxs)(b.a,{children:[Object(n.jsx)("meta",{charSet:"UTF-8",className:"jsx-652847737"}),Object(n.jsx)("title",{className:"jsx-652847737",children:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430"}),Object(n.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-652847737"})]}),Object(n.jsx)(f.Link,{href:{pathname:"/admin"},children:Object(n.jsx)("button",{style:{position:"fixed",top:"10px",left:"10px",display:"block"},className:"jsx-652847737",children:"\u0420\u0435\u0436\u0438\u043c \u0430\u0434\u043c\u0438\u043d\u0430"})}),Object(n.jsx)("main",{className:"jsx-652847737",children:void 0===this.props.books?Object(n.jsx)("h1",{className:"jsx-652847737",children:"Loading..."}):Object(n.jsx)("ol",{id:"books-list",className:"jsx-652847737",children:this.state.books.map((function(e){return Object(n.jsxs)("li",{className:"jsx-652847737",children:[Object(n.jsx)("h2",{className:"jsx-652847737",children:e.title}),Object(n.jsxs)("div",{className:"jsx-652847737 book-info",children:[Object(n.jsx)("img",{src:0!==e.cover.length?"/upload/"+e.id+"_"+e.cover:"/upload/default.jpeg",alt:"book1 cover",className:"jsx-652847737 book-cover"}),Object(n.jsxs)("div",{className:"jsx-652847737 book-info-text",children:[Object(n.jsxs)("p",{className:"jsx-652847737",children:[e.averageRating.toPrecision(2)," \u0438\u0437 5 (5 \u043e\u0442\u0437\u044b\u0432\u043e\u0432)"]}),Object(n.jsx)("p",{className:"jsx-652847737",children:e.description}),Object(n.jsx)(f.Link,{href:{pathname:"/book/".concat(e.id),query:{tab:"1"}},children:Object(n.jsx)("a",{className:"jsx-652847737 Link",children:"\u041e\u0442\u0437\u044b\u0432\u044b"})})]})]})]})}))})}),Object(n.jsx)(x.a,{id:"2729759913",children:[".container.jsx-652847737{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","main.jsx-652847737{width:800px;padding:0;height:100vh;display:inline;}",".Link.jsx-652847737:hover{-webkit-text-decoration:underline;text-decoration:underline;}","#books-list.jsx-652847737{list-style:none;}",".book-info.jsx-652847737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}",".book-info-text.jsx-652847737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".book-cover.jsx-652847737{width:150px;height:auto;margin-right:30px;}","footer.jsx-652847737{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-652847737 img.jsx-652847737{margin-left:0.5rem;}","footer.jsx-652847737 a.jsx-652847737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","a.jsx-652847737{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-652847737 a.jsx-652847737{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-652847737 a.jsx-652847737:hover,.title.jsx-652847737 a.jsx-652847737:focus,.title.jsx-652847737 a.jsx-652847737:active{-webkit-text-decoration:underline;text-decoration:underline;}",".title.jsx-652847737{margin:0;line-height:1.15;font-size:4rem;}",".title.jsx-652847737,.description.jsx-652847737{text-align:center;}",".description.jsx-652847737{line-height:1.5;font-size:1.5rem;}","code.jsx-652847737{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}",".grid.jsx-652847737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}",".card.jsx-652847737{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}",".card.jsx-652847737:hover,.card.jsx-652847737:focus,.card.jsx-652847737:active{color:#0070f3;border-color:#0070f3;}",".card.jsx-652847737 h3.jsx-652847737{margin:0 0 1rem 0;font-size:1.5rem;}",".card.jsx-652847737 p.jsx-652847737{margin:0;font-size:1.25rem;line-height:1.5;}",".logo.jsx-652847737{height:1em;}","@media (max-width:600px){.grid.jsx-652847737{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]}),Object(n.jsx)(x.a,{id:"102334425",children:["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}","*{box-sizing:border-box;}"]})]})}}]),i}(j.Component),u=!0;t.default=p},vlRD:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("RNiq")}])}},[["vlRD",0,2,1,3]]]);